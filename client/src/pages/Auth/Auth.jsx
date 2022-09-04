import React from 'react'
import "./Auth.css";
import Logo from "../../img/logo.png"

const Auth = () => {
  return (
    <div className='auth'>
        <div className="authLeft">
            <img src={Logo} alt="logo"/>
            <div className="webname">
                <h1>MERN Social Media App</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>

        <Login/>
    </div>
  )
}

function Login(){
    return (
    <div className="authRight">
            <form action="" className='infoForm authForm'>
                <h3>Login</h3>

                <div>
                    <input type="text" placeholder='username' className='infoInput' name="username"/>
                </div>
                <div>
                    <input type="password" className='infoInput' name='password' placeholder='password'/>
                </div>

                
                    <span style={{fontSize: "12px"}}>Don't have an account? Signup!</span>
                
                <button className='button infoButton'>Login</button>
            </form>
        </div>
    )
}


function Signup(){
    return (
        <div className="authRight">
            <form action="" className='infoForm'>
                <h3>Signup</h3>

                <div>
                    <input type="text" placeholder='First name' className='infoInput' name="firstName" />
                    <input type="text" placeholder='Last name' className='infoInput' name="lastName" />
                </div>
                <div>
                    <input type="text" placeholder='username' className='infoInput' name="username"/>
                </div>
                <div>
                    <input type="password" className='infoInput' name='password' placeholder='password'/>
                    <input type="password" className='infoInput' name='conformPassword' placeholder='conform password'/>
                </div>

                <div>
                    <span style={{fontSize: "12px"}}>Already have an account. Login!</span>
                </div>
                <button className='button infoButton'>Signup</button>
            </form>
        </div>
    )
}

export default Auth