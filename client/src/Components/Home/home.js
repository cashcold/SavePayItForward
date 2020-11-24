import React, { Component } from 'react';
import './style.css'

import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        const reffer = window.location.search;
        
        localStorage.setItem('reffer', reffer) 


        const boxMe = document.querySelectorAll('.boxMe')
        const SlideDivTl = new TimelineLite()
        SlideDivTl.from(boxMe,{ duration: 1,x:'-400'})


        let SlideIndex = 0;
        const SlideDiv = ()=>{
            var i ;
            var slideDiv = document.querySelectorAll('.boxMe')
            
            var dot = document.querySelectorAll('.dot')
            for(i = 0; i < slideDiv.length; i++){
                slideDiv[i].style.display='none'
            }
            SlideIndex++;
            if(SlideIndex > slideDiv.length){SlideIndex = 1}
            for(i = 0; i < dot.length; i++){
                dot[i].className = dot[i].className.replace(" active", "");
            }
            slideDiv[SlideIndex-1].style.display= "block";

            setTimeout(SlideDiv,8000)

        }
        SlideDiv()
    }
    render() { 
        return ( 
            <main id='mainHome'>
                <section className='mainHome'>
                   <div className='boxMe'>
                        <div className='box box-1'>

                        </div>
                        <div className='boxText'>
                            <h1>success comes from participating</h1>
                            <p>Join our moderm way to reduce human race</p>
                            <a href='' className='btn btn-success btn-lg btnNow'>GET START</a>
                        </div>
                    </div>
                   <div className='boxMe'>
                        <div className='box box-2'>

                        </div>
                        <div className='boxText'>
                            <h1>financial expert</h1>
                            <p>Having experience accounting for estimates, accruals, and reserves, understand internal accounting controls, and  understand the functions of an audit committee.</p>
                        </div>
                    </div>
                   <div className='boxMe'>
                        <div className='box box-3'>

                        </div>
                        <div className='boxText'>
                            <h1>Aim High, But Start Low, Celebrate and Keep Going.</h1>
                            <p>Taking these small steps and then just increasing by comparatively to Achieve Your Goals</p>
                        </div>
                    </div>
                   <div className='boxMe'>
                        <div className='box box-4'>

                        </div>
                        <div className='boxText'>
                            <h1>Financial Trust Secure.</h1>
                            <p>One of the roles of the Treasury committee is to look under the bonnet of the financial services sector to shine a light on any of its shortcomings.</p>
                        </div>
                    </div>
                </section>
                <section className='planMain'>
                    <div className='planNow'>
                        <h1>OUR INVESTMENT PLAN</h1>
                            <div className='planAll'>
                                <div className='plan'>
                                    <div className='box-1'>
                                        <h1>10%</h1>
                                        <p> PLAN: 24 HOURS DAILY</p>
                                        <div className='boxPlan'>
                                            <p>MINIMUM - 10.00 USD</p>
                                            <hr/>
                                            <p>MAXIMUM - 50.00 USD</p>
                                        </div>
                                        <a href='' className='btn btn-warning planBtn'>Calculate Profit</a>
                                    </div>
                                </div>
                                <div className='plan'>
                                    <div className='box-1'>
                                        <h1>25%</h1>
                                        <p> PLAN: 3 DAYS</p>
                                        <div className='boxPlan'>
                                            <p>MINIMUM - 60.00 USD</p>
                                            <hr/>
                                            <p>MAXIMUM - 100.00 USD</p>
                                        </div>
                                        <a href='' className='btn btn-warning planBtn'>Calculate Profit</a>
                                    </div>
                                </div>
                                <div className='plan'>
                                    <div className='box-1'>
                                        <h1>35%</h1>
                                        <p> PLAN: 5 DAYS</p>
                                        <div className='boxPlan'>
                                            <p>MINIMUM - 110.00 USD</p>
                                            <hr/>
                                            <p>MAXIMUM - 210.00 USD</p>
                                        </div>
                                        <a href='' className='btn btn-warning planBtn'>Calculate Profit</a>
                                    </div>
                                </div>
                                <div className='plan'>
                                    <div className='box-1'>
                                        <h1>45%</h1>
                                        <p> PLAN: ONE WEEK</p>
                                        <div className='boxPlan'>
                                            <p>MINIMUM - 220.00 USD</p>
                                            <hr/>
                                            <p>MAXIMUM - 350.00 USD</p>
                                        </div>
                                        <a href='' className='btn btn-warning planBtn'>Calculate Profit</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
                <section className='aboutUsMain'>
                    <div className='usAbout'>
                        <div className='aboutText'>
                            <h1>ABOUT PAYITFORWARD <span>INVESTMENT</span></h1>
                            <p>Looking for highest returns on your investments? PayItForward Ltd is an automatic online investment platform, part of PayItForward Ltd, team of professional traders focusing mainly on Perfectmoney, Payeer, Bitcoin and other crypto currencies trading over multiple Exchanges and markets. Thanks to the extraordinary diversification of our investments, we are able to deliver steady income for our investors. Thanks to our company, you can become an investor in the network without any specialist knowledge. You can become a partial shareholder of PayItForward Ltd, which we buy with a minimum investment of 10.00 USD and start earning Every Day. Just choose one of the four investment plans depending on the amount you want to invest.</p>
                        </div>
                        <div className='aboutImg'>
                            <img src={require('../../pic/miningFarm.jpg')}/>
                        </div>
                    </div>
                </section>
                <section className='howWorkMain'>
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
            </main>
         );
    }
}
 
export default Home;