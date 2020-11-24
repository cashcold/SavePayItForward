import React, { Component } from 'react';
import './style.css'
class RefferNow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='refferMain'>
                <div className='refferH1'>
                    <h1>AFFILIATE PROGRAM</h1>  
                </div>
                <section className='aboutReffer'>
                    <div className='refferMe'>
                        <div className='refferText'>
                             <h1>REFERRAL <span>COMMISSION</span></h1>
                             <p>Our Referral Commission offers something useful and beneficial for everyone. We are confident that the Referral Commission from PayItForward Investment provides the right path to the career progression ladder, confidently leading to financial prosperity.</p>
                        </div>
                        <div className='refferImg'>
                            <img src={require('../../pic/3372240.jpg')}/>
                        </div>
                    </div>
                </section>
                <section className='refferAbout'>
                    <div className='refferText1'>
                        <h1>HOW DOES AFFILIATE PROGRAM WORKS?</h1>
                        <p>You don't need an active deposit to become an affiliate. Start Earning from us in 3 easy steps.</p>
                    </div>
                </section>
                <section className='refferBox'>
                    <div className='workInfo'>
                        <i class="fas fa-user-alt fa-3x showIcon"></i>
                        <h3>OPEN AN ACCOUNT</h3>
                        <p>Click the signup button, fill in the register form. Once you've done that, you'll receive an email from us, and you're done. You are now an official member of our site!</p>
                    </div>
                    <div className='workInfo'>
                        <i class="fas fa-users fa-3x showIcon"></i>
                        <h3>REFER YOUR FRIENDS</h3>
                        <p>You don't need an active deposit to take advantage of our referral program. You only need to use your personal affiliate link from your member's area and share it with friends..</p>
                    </div>
                    <div className='workInfo'>
                        <i class="fas fa-money-bill-alt fa-3x showIcon"></i>
                        <h3>EARN COMMISSIONS</h3>
                        <p>The commission for the first level is pegged at 4.5%, the second level at .5%, and the third at .5%.</p>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default RefferNow;