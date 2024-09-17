

import { useEffect } from "react";
import { useAuth } from '../Contexts/AuthContext';

const GoogleAuth = () => {
    const { login } = useAuth(); // context de auth do usuario!
  useEffect(() => {

    window.google.accounts.id.initialize({
      client_id: "600180823204-3kd12p8iv7rcotdjcfqqfpuqfe7m2f2k.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);

  const handleCredentialResponse = async (response) => {
    const date = Date.now()
    const user = {
      username:'admin',
      date,
    }
    await login(user)
  };

  return <div id="googleSignInDiv" style={{padding:'0.5em'}}></div>;
};

export default GoogleAuth;