 'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import "./footer.css"
const Footer = () => {
  const router = useRouter();
  return (
    <>
      <h1>This is Footer  Page</h1>
      <span>Go To "Homepage" through link!</span>
      <div className="hlink">
        <Link href="/" style={{ fontSize: "20px", cursor: "pointer" }}>
          Homepage
        </Link>
      </div>

      <span>Go To "Homepage" through Button!</span>
      <div className="hbutton">
        <button onClick={() => router.push("/")}>GO to Homepage </button>
      </div>
    </>
  );
};

export default Footer;
