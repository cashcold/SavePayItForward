import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
class ConfirmDeposit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            plan: '',
            depositAmount: '',
            walletAddress: '',
            user_Name: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
       
    }

    componentDidMount(){
        const PlanSelect = localStorage.getItem('PlanSelect')
        const DepositAmount = localStorage.getItem('DepositAmount')
        const WalletAddress = localStorage.getItem('WalletAddress')
        const user_Name = localStorage.getItem('user_Name')

        this.setState({
            plan: PlanSelect,
            depositAmount: DepositAmount,
            walletAddress: WalletAddress,
            user_Name: user_Name,
        })
    }

    
   onSubmit = ()=>{
       const NewDeposit = {
           plan: this.state.plan,
           depositAmount: this.state.depositAmount,
           walletAddress: this.state.walletAddress,
           user_Name: this.state.user_Name

       }
       axios.post( "http://localhost:8000/users/deposit",NewDeposit).then(res => {toast.success('...Waiting for Blockchain confirmation')}).then(res => setTimeout(()=>{
            window.location='/dashboard'
       },8000))

       console.log(NewDeposit)
   }
    render() { 
        return(
            <div className='confirm'>
                <div className='confirmDepositNow'>
                    <h1 className='animate__animated animate__flash animate__slower'>CONFIRM DEPOSIT</h1>
                    <ToastContainer/>
                </div>
                <div className='confirmLine'>
                    <div className='lastConfirm'>
                        <div className='planInfo'>
                            <p>Plan:</p>
                            <p>Instant Daily Plan: {this.state.plan} Daily Forever</p>
                        </div>
                        <div className='planInfo'>
                            <p>Principal Return:</p>
                            <p>No (included in profit)</p>
                        </div>
                        <div className='planInfo'>
                            <p>Principal Withdraw:</p>
                            <p>Not available</p>
                        </div>
                        <div className='planInfo'>
                            <p>Credit Amount:</p>
                            <p>${this.state.depositAmount}</p>
                        </div>
                        <div className='planInfo'>
                            <p>Debit Amount:</p>
                            <p>${this.state.depositAmount}</p>
                        </div>
                        <div className='planInfo'>
                            <p>BTC Debit Amount:</p>
                            <p>0.00177447</p>
                        </div>

                        <div className='confirmBtnInfo'>
                            <p>Please send exactly 0.00177447 BTC to<br/>
                            <p className='wallertNumber'>14VoBZY3Pap6NUeTxNttspyGHBx92d1wAh</p>
                            <div className='automatic'>
                                <img src={require('../../images/Screenshot (551).png')} alt='pic'/>
                            </div>
                            <h4>Order status: Waiting for payment</h4>
                            </p>
                        </div>
                        <div className='btnConfirm'>
                            <button className='btn btn-success' onClick={this.onSubmit}>I PAID CONFIRM</button>
                        </div>
                    </div>
                </div>
                <div className='blochChanImg'>
                    {/* <img src={require('../../pic/')}/> */}
                </div>
            </div>

        )
    }
}
 
export default ConfirmDeposit;