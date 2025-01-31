import React from 'react'

function Agent() {
  return (
  
    <div className='container log'>
  <form className='login-form'>
      
      <div class="container login" >
            <div class="top">
                <h2>Agent Login</h2>
                <br></br>
            </div>
            
            <div class="input-box1">
                <input type="text" class="input-field" placeholder="   Username or Email" required/>
                <br></br>
                <br></br>
                </div>
                <div class="input-box2">
                <input type="password" class="input-field" placeholder="   Password" required/><br></br>
                </div>
                <br></br>
                <div class="input-box3">
                <input type="submit" class="submit" value="Login"/>
            </div>
   
                <div class="one">
                    <input type="checkbox" class="inputb" /><label > Remember Me</label>
                    
                </div>
                <div class="two">
                    <label><a href="#">Forgot password?</a></label>
                </div>

                <span class="three">Don't have an account? <a href="register">Sign Up</a></span>
            </div>
        </form>
        </div>
  );
}
export default Agent;
