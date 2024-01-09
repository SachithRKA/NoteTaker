import React from "react";
import { Footer } from 'flowbite-react';

function Footer_Comp() {
    const date = new Date().getFullYear();
    return (
        <Footer container>
            <Footer.Copyright href="#" by="Flowbite™" year={date} />
            <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
    
}

export default Footer_Comp;
