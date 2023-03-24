import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram,FaLinkedin } from 'react-icons/fa';


export default function Footer(){
    return (
        <footer>
      <div className="social-media">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/Ashenafi"><FaLinkedin /></a>
</div>
      <div className="made-by">
        made by Asehnafi Hagos
      </div>
    </footer>
    )
}