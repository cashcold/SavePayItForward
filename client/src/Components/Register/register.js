import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

class RegisterUser extends Component {  
    constructor(props) {
        super(props);
        this.state = { 
            full_Name: '',
            user_Name: '',
            password: '',
            password2: '',
            email: '',
            bitcoin: '',
            bitcoinCash: '',
            ethereum: '',
            ip_address: '',
            accountBalance: '',
            activetDeposit: '',
            reffer: '',
            restartLinkPassword: '',
            checkBox: '',
            date: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    handleChange = input => (event)=>{
        this.setState({[input]: event.target.value})
    }

    componentDidMount(){

        const DateTime = new Date().toString()
        this.setState({
            date: DateTime
        })
        console.log(this.state.date)

        fetch('http://api.ipify.org/?format=json').then(res => res.json()).then(data => this.setState({
            ip_address: data.ip
        }))

        const reffer = localStorage.getItem('reffer')

        this.setState({reffer: reffer})
       
        
    }
    onSubmit = (event)=>{
        event.preventDefault() 
        const SaveNewUser = {
            full_Name: this.state.full_Name,
            user_Name: this.state.user_Name,
            password: this.state.password,
            email: this.state.email,
            bitcoin: this.state.bitcoin,
            bitcoinCash: this.state.bitcoinCash,
            ethereum: this.state.ethereum,
            ip_address: this.state.ip_address,
            accountBalance: this.state.accountBalance,
             activetDeposit: this.state.activetDeposit,
            reffer: this.state.reffer,
            restartLinkPassword: this.state.restartLinkPassword,
            checkBox: this.state.checkBox,
            date: this.state.date
            
        }

        
        if(SaveNewUser.full_Name.length < 6){
            toast.warn('Full Name  must be at lest 6')
            return false
        }
        if(SaveNewUser.user_Name.length < 5){
            toast.warn('User Name is must be at lest 5')
            return false
        }
        if(SaveNewUser.password.length < 6){
            toast.warn('password is must be at lest 6')
            return false
        }

        if(!SaveNewUser.full_Name || !SaveNewUser.user_Name || !SaveNewUser.password || !SaveNewUser.email){
        toast.error('Please Fill All Field')
        return false;
        }
        if(!SaveNewUser.bitcoin && !SaveNewUser.bitcoinCash && !SaveNewUser.ethereum){
            toast.warn('Provide Bitcoin Address Wallet')
            return false;
        }
        
        if(!SaveNewUser.checkBox){ 
            toast.warn('Please agree with Terms and conditions')
            return false
        }

        
        event.preventDefault()
        axios.post("http://localhost:3000/users/register/",SaveNewUser).then(res => {toast.success("Register Successful")}).then(res => setTimeout(()=>{
            window.location="/login"
        }),8000).catch(err => {toast.error(err.response.data)})
        
    
    }
    render() { 
        return ( 
            <div className='register'>
                <div className='registerNow'> 
                    <div className='registerLogo'>
                        {/* <img src={require('../../pic/facebook_cover_photo_1.png')}/> */}
                        <h1>PAYITFORWARD <span style={{color: 'white'}}>WELCOMES</span> YOU</h1> 
                        <ToastContainer/>
                    </div>
                    <div className='formMain'>
                        <form>
                            <table>
                                <tr>
                                    <td><input type='text' name='full_Name' placeholder='full name' onChange={this.handleChange('full_Name')}/></td>
                                </tr>
                                <tr>
                                    <td><input type='text' name='user_Name'  placeholder='username' onChange={this.handleChange('user_Name')}/></td>
                                </tr>
                                <tr>
                                    <td><input type='password' name='password'  placeholder='confirm password' onChange={this.handleChange('password')}/></td>
                                </tr>
                                <tr>
                                    <td><input type='email' name='email'  placeholder='email' onChange={this.handleChange('email')}/></td>
                                </tr>
                                <tr>
                                    <td><input name='bitcoin'  placeholder='Bitcoin' onChange={this.handleChange('bitcoin')}/></td>
                                </tr>
                                <tr>
                                    <td><input name='bitcoinCash'  placeholder='Bitcoin Cash' onChange={this.handleChange('bitcoinCash')}/></td>
                                </tr>
                                <tr>
                                    <td><input name='ethereum'  placeholder='Ethereum' onChange={this.handleChange('ethereum')}/></td>
                                </tr>
                               
                            </table>
                        </form>
                    </div>
                    <div className='upfontLine'>
                        <p>Your Upline:</p>
                        <p>{this.state.reffer}</p>
                    </div>
                    <div className='upfontLine2'>
                        <div className='upfont'>
                            <p><input type='radio' name='checkbox' onChange={this.handleChange('checkBox')}/> I agree with Terms and conditions</p>
                            <a href='' className='btn btn-warning' onClick={this.onSubmit}>REGISTER</a>
                        </div>
                    </div>
                    <div className='lastUpFont'>
                        <div className='lastUp'>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default RegisterUser;