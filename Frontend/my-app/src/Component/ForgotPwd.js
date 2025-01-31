import React from 'react'

 function ForgotPwd()
{
  return (
   
    <div class="container">
        <h2>Forgot Password</h2>
        <form id="forgotPasswordForm">
            <input type="email" id="email" placeholder="Enter your email" required />
            <button type="submit" id="submitButton">Send Reset Link</button>
        </form>
      </div>
  );
}
export default ForgotPwd;
