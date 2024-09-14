import { createClient } from '@supabase/supabase-js';
import uniqid from 'uniqid'; 

const supabaseUrl = 'https://nluiotrfbuyetjfcagss.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req, res) {
    try {
        const data = await req.formData();
        if (!data.get('file')) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const file = data.get('file');
        const ext = file.name.split('.').slice(-1)[0];
        const newFileName = uniqid() + '.' + ext; // Use uniqid to generate a unique file name

        const chunks = [];
        for await (const chunk of file.stream()) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);

        // Upload the file to Supabase storage
        const { data: uploadedFile, error } = await supabase.storage
            .from('nelen-food-ordering') 
            .upload(`images/${newFileName}`, buffer, {
                contentType: file.type,
            });

        if (error) {
            console.error('Error uploading file:', error.message);
            return res.status(500).json({ error: 'Failed to upload file' });
        }

        // Construct the public URL for the uploaded file
        const link = `${supabaseUrl}/storage/v1/object/public/nelen-food-ordering/images/${newFileName}`;

        return Response.json(link);
    } catch (error) {
        console.error('Error processing request:', error.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
 