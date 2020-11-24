import React, { Component } from 'react';
import axios from 'axios'
import './active.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


class ActivitPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            password: '',
            token: ''
         }

         this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }
    
   
   
    onSubmit = (event)=>{ 
        event.preventDefault()
        const saveLinkPassword = {
            password: this.state.password
        }

        if(saveLinkPassword.password.length < 6){
            toast.warn('Full Name  must be at lest 6')
            return false
        }
        const token  = this.props.match.params.token
        
        console.log(this.state.password)
        event.preventDefault()
        axios.post(`http://localhost:8000/users/activtypassword/${token}`, saveLinkPassword).then(res => {toast.success("Password Update") }).then( setTimeout(()=>{
            window.location ="/login"
        },8000)).catch(err => {toast.error(err.response.data)})
    }
    render() { 
        return ( 
            <div className='activepassword'>
                <ToastContainer />
                <h1 className='animate__animated animate__fadeInDownBig animate__slower'>ENTER NEW  PASSWORD</h1>
                <div className='recoverInput animate__animated animate__bounceInUp animate__slower'>
                    <input name="password"  onChange={this.handleChange("password")} placeholder='New Password'/>
                </div>
                
                <button className='btn btn-success' onClick={this.onSubmit}>Save Password</button>
            </div>
         );
    }
}
 
export default ActivitPassword;