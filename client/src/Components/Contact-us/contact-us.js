import React, { Component } from 'react';
import './style.css'
class ContactMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='mainContact'>
                <div className='contH1'>
                    <h1>SUPPORT CENTER</h1>
                </div>
                <section className='contactNow'>
                <div className='bothAll'>
                        <div className='bothSupportA'>
                            <div className='bothMenu bothMenuCount1' >
                                <div className='supportInfo'>
                                    <img src={require('../../pic/email.png')}/>
                                    <h4>OUR E-MAIL</h4>
                                    <p>payitsupport@gmail.com</p>
                                    <p>supportpayitforward@gmail.com</p>
                                </div>
                            </div>
                            <div className='bothMenu bothMenuCount2' >
                                <div className='supportInfo'>
                                    <img src={require('../../pic/telephone.png')}/>
                                    <h4>PHONE NUMBER </h4>
                                    <p>+19547695813</p>
                                    <p>+16456385643</p>
                                </div>
                            </div>
                            <div className='bothMenu bothMenuCount3'>
                                <div className='supportInfo'>
                                    <img src={require('../../pic/location.png')}/>
                                    <h4>ADDRESS LINE</h4>
                                    <p>221 Violet Road, London, United Kingdom, E3 3AE</p>
                                </div>
                            </div>  
                        </div>
                        <div className='bothSupportB'>
                            <div className='supportLine'>
                                <div className='supportNow'>
                                    <div className='lineSupport'>
                                        <h5>SEND US A MESSAGE</h5>
                                        <p>Get in touch with us any time you need an assistance. We are available 24/7 to answer your queries, fix any technical issues you encounter, and guide you with anything you need.</p>
                                    </div>
                                </div>
                                <div className='contactDiv'>
                                   <div className='formA'>
                                        <form className='myFormControl'>
                                            <div className='myForms'>
                                                <input type='text' name='name' placeholder='Name'/>
                                            </div>
                                            <div className='myForms'>
                                                <input type='email' name='name' placeholder='Email'/>
                                            </div>
                                            <div className='myForms'>
                                                <textarea name='message' placeholder='Message Us'></textarea>
                                            </div>
                                            <a href='' className='btn btn-success contactBtn'>Send</a>
                                        </form>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default ContactMain;