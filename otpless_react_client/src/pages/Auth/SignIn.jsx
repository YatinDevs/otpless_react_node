import React, { useState, useEffect } from "react";
import { signIn } from "../../services/authServices";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    window.otpless = async (otplessUser) => {
      console.log(otplessUser, `window.otpless called`);

      if (otplessUser) {
        const { token, userId, identities } = otplessUser;
        console.log(token, `Token`);
        console.log(userId, `UserId`);
        console.log(identities, `Identities`);
        try {
          const response = await signIn(token);
          console.log(response, `response after SignIn`);

          if (response.success) {
            const userDetails = response.user;

            navigate("/home");
          } else {
            console.error(response.error);
          }
        } catch (error) {
          console.error("Error during sign-in:", error);
        }
      }
    };
  }, []);

  return <div id="otpless-login-page"></div>;
}

export default SignIn;
