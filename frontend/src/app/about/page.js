"use client"
import React, { useEffect, useState } from 'react'

const page = () => {

    const [data, setData] = useState();
    const fetchData = async () => {
        const response = await fetch('http://localhost:5000/home',{
            credentials: 'include'
        })
        const text = await response.text(); 
        // console.log("Response1234:", text);
        setData(text);
    }

    useEffect(() => {
        fetchData();
    })

  return (
    <div>about page !!!!!
        <h1>{data}</h1>
    </div>
    
  )
}

export default page