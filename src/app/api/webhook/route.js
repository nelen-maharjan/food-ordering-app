const stripe = require('stripe')(process.env.STRIPE_SK);
import Order from '@/models/Order';
import {buffer} from 'micro'

export async function POST(req){
    const sig = req.headers.get('stripe-signature');
    let event;

    try{
        const reqBuffer = await req.text();
        const signInSecret = process.env.STRIPE_SIGNIN_SECRET;
        event = stripe.webhooks.constructEvent(reqBuffer, sig, signInSecret );
    } catch(e){
        console.log('stripe error');
        return Response.json(e, {status:400});
    }

    if(event.type === 'checkout.session.completed'){
        console.log(event);
        const orderId = event?.data?.object?.metadata?.orderId;
        const isPaid = event?.data?.object?.payment_status === 'paid';
        if(isPaid){
           await Order.updateOne({_id:orderId}, {paid:true})
        }
        
    }

    return Response.json('ok', {status:200})
}