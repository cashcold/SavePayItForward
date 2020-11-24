import React, { Component } from 'react';
import './style.css'
class GetStart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='getStartMain'>
                <section className='startNow'>
                    <div className='getH1'>
                        <h1>GET STARTED</h1>
                    </div>
                    <div className='getTExt'>
                        <p>
                        Instant Trade Ltd crypto-trading and investment platform is designed for people without any experiense in trading and investment, so that everyone can ride the cryptocurrency revolution and achieve financial freedom and success. We have made everything – right from signup to growth and performance tracking – simple and effortless for our investors.</p>
                    </div>
                </section>
                <section className='howWorkMain aboutItFOrward'>
                    <div className='howWork'>
                        <div className='howItWork'>
                            <h1>HOW IT WORKS</h1>
                        </div>
                        <div className='overWork'>
                            <div className='workInfo'>
                                <i class="fas fa-user-alt fa-3x showIcon"></i>
                                <h3>OPEN AN ACCOUNT</h3>
                                <p>Click the signup button, fill in the register form. Once you've done that, you'll receive an email from us, and you're done. You are now an official member of our site!</p>
                            </div>
                            <div className='workInfo'>
                             <i class="fas fa-universal-access fa-3x showIcon"></i>
                                <h3>ACCESS MEMBER AREA</h3>
                                <p>The next thing would be to familiarize yourself with your account. Explore your account and get a feel of how everything works, such as making deposits, requesting withdrawals, etc.</p>
                            </div>
                            <div className='workInfo'>
                            <i class="fas fa-money-bill-alt fa-3x showIcon"></i>
                                <h3>MAKE A DEPOSIT</h3>
                                <p>Your can do this from the deposit section of your account. There are 2 investment plans ranging from 10% Daily profit  (Lifetime) .You Can Withdrawal Anytime Any Where any Amount.All Withdrawal Will be Instant.</p>
                            </div>
                            <div className='workInfo'>
                                <i class="fas fa-american-sign-language-interpreting fa-3x showIcon"></i>
                                <h3>WATCH YOUR CAPITAL GROW</h3>
                                <p>Once you made a deposit you can watch your earnings grow. It means you can be anywhere you want to be in the world, and your funds will still be growing in your account</p>
                            </div>
                            <div className='workInfo'>
                                <i class="fas fa-hand-holding-usd fa-3x showIcon"></i>
                                <h3>REQUEST PAYMENT</h3>
                                <p>It only takes a few seconds to request payment. All of our withdrawals are instant, and your withdrawal will be sent to the Wallet address you provided during registration.</p>
                            </div>
                            <div className='workInfo'>
                                <i class="fas fa-users fa-3x showIcon"></i>
                                <h3>REFER YOUR FRIENDS</h3>
                                <p>You don't need an active deposit to take advantage of our referral program. You only need to use your personal affiliate link from your member's area and share it with friends..</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='startLast'>
                    <h4>JOIN INSTANT TRADE LTD AND DISCOVER THE TRUE POWER OF CRYPTOPTRADING<br/>
                    <a href='' className='btn btn-warning btnStartLast'>SIGN-UP</a></h4>
                </section>
            </div>
         );
    }
}
 
export default GetStart;