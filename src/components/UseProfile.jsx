'use client';
import React, { useEffect, useState } from 'react'

const UseProfile = () => {
    const [data, setData] = useState(false) //isAdmin
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true);
        fetch('/api/profile').then(response =>{
            response.json().then(data =>{
                setData(data)
                setLoading(false);
            });
        });
    }, []);
  return {loading, data}
}

export default UseProfile