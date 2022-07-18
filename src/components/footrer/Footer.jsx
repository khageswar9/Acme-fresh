import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { AiFillTwitterCircle } from 'react-icons/ai';

function Footer() {
  return (
    <div className='footer'>
        <div className='footercontent'>
            <div>
                <span>Have questions?</span>
                <span>Please feel free to write to us at</span>
                <span><a data-auto-recognition="true" href="mailto:acmefresh@gmail.com">acmefresh@gmail.com</a></span>
                <span>We love to hear from you.</span>
                <span>Stay connected.</span>
            </div>
            <div>
                <h4>COMPANY</h4>
                <p></p>
                <span>About us</span>
                <span>Services</span>
                <span>Project</span>
                <span>Careers</span>
            </div>
            <div>
                <h4>SERVICES</h4>
                <p></p>
                <span>FAQ</span>
                <span>News</span>
                <span>Media</span>
            </div>
            <div>
                <h4>TERMS & POLICY</h4>
                <p></p>
                <span>Terms & Condition</span>
                <span>Privacy Policy</span>
                <span>Contact us</span>
            </div>
            <div>
                <span>INDIA'S</span>
                <span><b>FASTEST</b></span>
                <span>GROWING</span>
                <span><b>COMMERCIAL</b></span>
                <span>HYDROPONIC</span>
                <span><b>FARM COMPANY</b></span>
            </div>
        </div>
        <div>
            <span><FaFacebook/></span>
            <span><GrInstagram/></span>
            <span><AiFillTwitterCircle/></span>
        </div>
    </div>
  )
}

export default Footer