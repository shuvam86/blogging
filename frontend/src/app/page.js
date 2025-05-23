'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
//     const [data, setData] = useState();
//      const fetchFunction = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/home", {
//         credentials: "include",
//       });
//       const text = await response.text(); 
//       console.log("Response123:", text);
//       setData(text);
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

    // useEffect(() => {
    //     fetchFunction();
    // },[])

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <h1 className="text-2xl font-semibold">Welcome to the Blog Site</h1>
    //   <h1>{data}1</h1>
    // </div>
    <div>
        <h1> Welcome </h1>
        <Link href="/about"> About </Link>
    </div>
  );
}
