import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Login: false,
         }
         
    }
   componentDidMount(){

    if(localStorage.getItem('x-access-token') != null)  {
        this.setState({Login: true})
    }
   
    const ToggleBtn = ()=>{
        const btnNow = document.querySelector('.toggleIcon')
        const navLinks = document.querySelector('.nav-links')
        btnNow.addEventListener('click',()=>{
            if(navLinks.style.display === 'none'){
                navLinks.style.display = 'block'
            }else{
                navLinks.style.display = 'none'
            }
        })
    }
    ToggleBtn()
   }
    render() { 
        if(this.state.Login){
            document.querySelector(".mainNavbar").style.display = "none"
            
        }
        return ( 
            <div className='mainNavbar '>
                <div className='main-nav'>
                    <div className='mobileLogo'>
                     <img src={require('../../images/logoMain.png')}/>
                    </div>
                   <header className='header'>
                       <div className='logo'>
                           <img src={require('../../images/logoMain.png')}/>
                           <h2 className='welcomeTextNew'>PAYITFORWARD</h2>
                       </div>
                       <div className='loginInfoWeb'>
                                <a href='/login' className='btn btn-success logInfo logInfo-1'>LOGIN</a>
                                <a href='/register' className='btn btn-warning logInfo logInfo-2'>REGISTER</a>
                            </div>
                        <div className='socailIcons'>
                            <i class="fab fa-facebook fa-3x"></i>
                            <i class="fab fa-twitter fa-3x"></i>
                            <i class="fab fa-skype fa-3x"></i>
                            <i class="fab fa-whatsapp fa-3x"></i>
                        </div>
                        <div className='toggleIcon'>
                            <i class="fas fa-bars fa-5x toggleIconfA"></i>
                        </div>
                   </header>
                    <nav className='nav-links animate__animated animate__bounceInLeft animate__slower'>
                        <ul >
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/about-us'>ABOUT-US</a></li>
                            <li><a href='/getStart'>GET STARTED</a></li>
                            <li><a href='/reffer'>AFFILIATE</a></li>
                            <li><a href='/FAQ'>FAQ</a></li>
                            <li><a href='/support'>SUPPORT</a></li>
                            <div className='loginInfo'>
                                <a href='/login' className='btn btn-success logInfo'>LOGIN</a>
                                <a href='/register' className='btn btn-warning logInfo'>REGISTER</a>
                            </div>
                        </ul>
                       
                    </nav>
                    <div className='showText'>
                        {/* <marquee>
                            <p>This is what am talking about</p>
                            {this.state.showText}
                        </marquee> */}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Navbar;