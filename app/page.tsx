"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./hompage.css";

const home = () => {
  const route = useRouter();
  return (
    <>
        <div className="com"><h1 >Finally I completed my 3rd Assignment 🎉</h1></div>
      <div className="mainheading">
        <h1>This is Home page</h1>
      </div>
      <span>Navigate the pages through Link!</span>
      <div className="link">
        
        <Link href="/navbar" style={{ fontSize: '20px',cursor:"pointer" }}>Navbar</Link>

        <Link href="/about" style={{ fontSize: '20px',cursor:"pointer" }}>About</Link>

        <Link href="/contact" style={{ fontSize: '20px',cursor:"pointer" }}>Contact</Link>

        <Link href="/footer" style={{ fontSize: '20px',cursor:"pointer" }}> Footer</Link>
      </div>
      <span>Navigate The Pages through Button!</span>
      <nav>
        <button onClick={() => route.push("/navbar")}>Navbar</button>
        <button onClick={() => route.push("/about")}>About</button>
        <button onClick={() => route.push("/contact")}>Contact</button>
        <button onClick={() => route.push("/footer")}>Footer</button>
      </nav>
    </>
  );
};

export default home;
