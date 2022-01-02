import React from 'react'
import './Auth.css'
import TwitterIcon from "@material-ui/icons/Twitter";

function Auth() {
    return (
        <div className='auth'>
            <div style={{flex: 1, backgroundColor: 'red'}}><img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" alt="twitter" style={{height: '100vh'}}/></div>
            <div style={{flex: 1, backgroundColor: 'white', marginLeft: '30px'}}>
                <div>
                    <TwitterIcon className="auth__twitterIcon"/>
                    <h1 style={{fontSize: '50px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', marginTop: '20px'}}>Happening now</h1>
                    <h2 style={{marginTop: '40px', }}>Join Twitter Today.</h2>
                </div>
            </div>
        </div>
    )
}

export default Auth;
