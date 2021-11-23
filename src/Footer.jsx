import React from "react";


const Footer=()=>{
    let year=new Date().getFullYear();
    const link="https://github.com/rahulkumardeveloper";
    return(
        <>
        <footer className="w-100 bg-light text-center ">
        <p> © <a href={link} target="newPage">RakugaTechnology</a> {year}. All Right Reserve | Term & Conditions</p>
        </footer>
        </>
    )
}


export default Footer;