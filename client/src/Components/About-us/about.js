import React, { Component } from 'react';
import './style.css'
class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='aboutMain'>
                <div className='aboutH1'>
                    <h1><span>ABOUT</span> PAYITFORWARD </h1>
                </div>
                <section className='aboutNow'>
                    <div className='aboutUsAll'>
                        <div className='aboutPayIt'>
                            <h1>PAYITFORWARD <span>INVESTMENT</span> </h1>
                            <p>Looking for highest returns on your investments? PayItForward is an automatic online investment platform, part of PayItForward, team of professional traders focusing mainly on Bitcoin and other crypto currencies trading over multiple Exchanges and markets. Thanks to the extraordinary diversification of our investments, we are able to deliver steady income for our investors. Thanks to our company, you can become an investor in the network without any specialist knowledge. You can become a partial shareholder of PayItForward, which we buy with a minimum investment of 0.0025 BTC and start earning from Every Hour. Just choose one of the four investment plans depending on the amount you want to invest.</p>
                        </div>
                        <div className='aboutUsImg'>
                            <img src={require('../../pic/miningFarm.jpg')} alt='pic'/>
                        </div>
                    </div>
                    <div className='aboutOtherText'>
                        <p>We are here for a long run and we present the true realtime statistics of our platform to all those who are interested in investing with us.</p>
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
                <section className='refferCommNow'>
                    <div className='refferMeNow'>
                        <h1>OUR MISSION & VISION</h1>
                    </div>
                    <div className='refferText'>
                        <p>Welcome to the website of PayItForward! If you find yourself here, you are definitely in search of reliable and profitable investment. Yes, you are just at the right place! Our company offers trust assets management of the highest quality on the basis of foreign exchange and profitable trade through Funds exchanges. There is no other worldwide financial market that can guarantee a daily ability to generate constant profit with the large price swings of BitCoin and other crypto currencies. Proposed modalities for strengthening cooperation will be accepted by anyone who uses cryptocurrency and knows about its fantastic prospects.</p>
                        <p>PayItForward investment project is a product of careful preparation and fruitful work of experts in the field of mining, highly profitable trade in cryptocurrencies and online marketing. Using modern methods of doing business and a personal approach to each client, we offer a unique investment model to people who want to use cryptocurrencies not only as a method of payment, but also as a reliable source of stable income. Your deposit is working on an ongoing basis for 100 days, and makes profit every day with the ability to withdraw profit. This proposal would be interesting not only for beginners of cryptocurrency operation, but also for experienced online investors. PayItForward Business uses only modern mining equipment and trades at the most stable markets, which minimizes the risk of financial loss to customers and guarantees them a stable income accrued every day. Join our company today and start making high profits!</p>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default AboutUs;