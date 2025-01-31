import React from 'react'

 

function Register() {
 return (
   <form>
   <div className='signup'>
      <div class="register-container" id="register">
           <div class="top">
               
               <h2 id="h2">Sign Up</h2>
           </div>
           <div class="two-forms">
               <div class="input-box">
                   <input type="text" class="input-field" placeholder="  Firstname"required/>
                   <br>
                   </br>
                   <br>
                   </br>
                   <input type="text" class="input-field" placeholder="  Lastname"required/>
                   <br>
                   </br>
                   <br>
                   </br>
                   <input type="text" class="input-field" placeholder="  Email"required/>
                   <br>
                   </br>
                   <br>
                   </br>
                   <input type="password" class="input-field" placeholder="  Password"required/>
                   <br>
                   </br>
                   <br>
                   </br>
                   <input type="password" class="input-field" placeholder=" Confirm Password"required/>
                   <br>
                   </br>
                   <br></br>
                   <input type="submit" class="submit" value="Register"/>
           </div>
           <div class="two-col">
               <div class="one">
                   <input type="checkbox" id="register-check"/>
                   <label for="register-check"> Remember Me</label>
               </div>
               <span class="three">Have an account? <a href="login" >Login</a></span>
               <div class="two">
                   <label><a href="#">Terms & conditions</a></label><br></br>
                   
               </div>
           </div>
       </div>
   </div>
   </div>
   
   </form>
 )
}
export default Register;

