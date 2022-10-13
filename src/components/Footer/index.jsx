import { Container } from '@mui/system';
import React from 'react';
import './style.sass';

function Footer() {
    return (
        <Container>
            <div className='footer-main'>
                <div className="copyright"><p>© 2022 <a href="https://huynhtanmao.com">Learn Reactjs</a></p></div>
            </div>
        </Container>
    );
}

export default Footer;