import React from "react";
import { Footer } from 'flowbite-react';

function Footer_Comp() {
    const date = new Date().getFullYear();
    return (
        <Footer className="footer-container">
            <Footer.Copyright className="footer-copyright" href="#" by="Flowbite™" year={date} />
            <Footer.LinkGroup className="footer-link-group">
                <Footer.Link className="footer-link" href="#">About</Footer.Link>
                <Footer.Link className="footer-link" href="#">Privacy Policy</Footer.Link>
                <Footer.Link className="footer-link" href="#">Licensing</Footer.Link>
                <Footer.Link className="footer-link" href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
}

export default Footer_Comp;
