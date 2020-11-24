import React, { Component } from 'react';
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import ConfirmDeposit from '../../Components/ConfirmDeposit/confirmDeposit'

class Deposit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            planNow: '',
            depositAmount: '',
            walletAddress: '',
            user_Name: ''
         }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange = input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }
    componentDidMount(){
        document.querySelector('.planBtn1').addEventListener('click',()=>{
            {toast.success("INVESTMENT PLAN 1")}
        })
        document.querySelector('.planBtn2').addEventListener('click',()=>{
            {toast.success("INVESTMENT PLAN 2")}
        })
        document.querySelector('.planBtn3').addEventListener('click',()=>{
            {toast.success("INVESTMENT PLAN 3")}
        })
        document.querySelector('.planBtn4').addEventListener('click',()=>{
            {toast.success("INVESTMENT PLAN 4")}
        })
    }
    
    onSubmit = (event)=>{
        event.preventDefault()
        const DepositForm = {
            planNow: this.state.planNow,
            depositAmount: this.state.depositAmount,
            walletAddress: this.state.walletAddress

        }
        if(!DepositForm.planNow){
            toast.warn('Please Select Plan')
            return false
        }
        if(!DepositForm.depositAmount){
            toast.warn('Amount to Deposit')
            return false
        }
        if(!DepositForm.walletAddress){
            toast.warn('Spend funds from')
            return false
        }

        

        localStorage.setItem('PlanSelect', this.state.planNow)
        localStorage.setItem('DepositAmount', this.state.depositAmount)
        localStorage.setItem('WalletAddress', this.state.walletAddress)
        
        toast.warning('Confirm Payment')
        setTimeout(()=>{
            window.location='/confirmDeposit'
        },700)
    }
    render() { 
        return ( 
            <div className='mainDeposit'>
                <div className='hideComponent'>
                    <ConfirmDeposit Plan={this.state.planNow} depositAmount={this.state.depositAmount} walletAddress={this.state.walletAddress}/>
                </div>
                <div className='deposit'>
                    <div className='supportHeaderDeposite '>
                        <h1 className='supH1 animate__animated animate__zoomInUp animate__slower'>DEPOSIT</h1>
                    </div>
                    
                </div>
                <ToastContainer/>
                <div className='dashLinks'>
                    <div className='dashMainLinks'>
                        <ul className='dashlinkNow animate__animated animate__bounce '>
                            <li><a href='/dashboard'>DASHBOARD</a></li>
                            <li><a href='/deposit'>DEPOSIT</a></li>
                            <li><a href=''>YOUR  DEPOSIT</a></li>
                            <li><a href=''>TRANSACTIONS</a></li>
                            <li><a href=''>WITHDRAW</a></li>
                            <li><a href=''>REFERRAL</a></li>
                        </ul>
                    </div>
                </div>
                <div className='selectPlan'>
                    <div className='plain'>
                        <div className='planNow'>
                            <h1 className='animate__animated animate__fadeInLeftBig animate__slower'>SELECT INVESTMENT PLAN</h1>
                        </div>
                        <div className='planDeposit animate__animated animate__fadeInRightBig animate__slower'>
                            <div className=''>
                                <div className='plan1'>
                                    <div className='planPlan'>
                                        <h4><input  type='radio' name='planNow' value='24HRS' onChange={this.handleChange('planNow')} className='planBtn1'/> PLAN 1 </h4>
                                    </div>
                                    <p>24HRS</p>
                                </div>
                                <div className='plan1'>
                                    <div className='planPlan'>           
                                        <h4><input type='radio' name='planNow' value='3 DAYS' onChange={this.handleChange('planNow')}  className='planBtn2'/> PLAN 2 </h4>
                                    </div>
                                    <p>3 DAYS</p>
                                </div>
                                <div className='plan1'>
                                    <div className='planPlan'>
                                        <h4><input type='radio' name='planNow' value='5 DAYS' onChange={this.handleChange('planNow')}  className='planBtn3'/>  PLAN 3 </h4>
                                    </div>
                                    <p>5 DAYS</p>
                                </div>
                                <div className='plan1'>
                                    <div className='planPlan'>
                                        <h4> <input type='radio' name='planNow' value='ONE WEEK' onChange={this.handleChange('planNow')}  className='planBtn4'/> PLAN 4 </h4>
                                    </div>
                                    <p>ONE WEEK</p>
                                </div>
                            </div>
                            <div className='amountSpent'>
                                <div className='amounLimt'>
                                    <div className='amountMain'>
                                        <h4>SPENT AMOUNT ($)</h4>
                                    </div>
                                    <p>$20.00 - $50.00</p>
                                </div>
                                <div className='amounLimt'>
                                    <div className='amountMain'>
                                        <h4>SPENT AMOUNT ($)</h4>
                                    </div>
                                    <p>$50.00 - $100.00</p> 
                                </div>
                                <div className='amounLimt'>
                                    <div className='amountMain'>
                                        <h4>SPENT AMOUNT ($)</h4>
                                    </div>
                                    <p>$120.00 - $300.00</p>
                                </div>
                                <div className='amounLimt'>
                                    <div className='amountMain'>
                                        <h4>SPENT AMOUNT ($)</h4>
                                    </div>
                                    <p>VIP MEMBER</p>
                                </div>
                                
                            </div>
                            <div className='dailyProfit'>
                               <div className='countProfit'>
                                    <div className='profitCount'>
                                        <h4>DAILY PROFIT (%)</h4>
                                    </div>
                                    <p>10%</p>
                                </div>
                                <div className='countProfit'>
                                    <div className='profitCount'>
                                        <h4>DAILY PROFIT (%)</h4>
                                    </div>
                                    <p>25%</p>
                                </div>
                                <div className='countProfit'>
                                    <div className='profitCount'>
                                        <h4>DAILY PROFIT (%)</h4>
                                    </div>
                                    <p>35%</p>
                                </div>
                                <div className='countProfit'>
                                    <div className='profitCount'>
                                        <h4>DAILY PROFIT (%)</h4>
                                    </div>
                                    <p>%</p>
                                </div>
                            </div>
                        </div>
                        <a href='/calculateProfit' target='_blank'><h4 className='calculateProfit btn btn-success btn-lg calculateLink'>CALCULATE PROFIT</h4></a>
                    </div>
                </div>
                <div className='depositMethod'>
                    <div className='methodDeposit'>
                        <div className='deMethod'>
                            <p>Your account balance ($):</p>
                            <p>$0.00</p>
                        </div>
                        <div className='amountSpend'>
                            <p>Amount to Spend ($):</p>
                            <p><input placeholder='Amount Deposit' name='depositAmount' onChange={this.handleChange('depositAmount')}/></p>
                        </div>
                        <br/>
                    </div>
                    <div className='matchMethod'>
                    <div className='matchDeposit'>
                        <p><input type='radio' name='spendMehtod' value='Bitcoin' onChange={this.handleChange('walletAddress')}/> Spend funds from Bitcoin</p>
                        <p><input type='radio' name='spendMehtod' value='BitcoinCash' onChange={this.handleChange('walletAddress')}/> Spend funds from Bitcoin Cash</p>
                        <p><input type='radio' name='spendMehtod' value='Ethereum' onChange={this.handleChange('walletAddress')}/> Spend funds from Ethereum</p>
                    </div>
                    
                </div>
                <a href='/confirmDeposit' className='btn btn-warning depositBtn' onClick={this.onSubmit}>SEND</a>
                </div>
                
            </div>
         );
    }
}
 
export default Deposit;