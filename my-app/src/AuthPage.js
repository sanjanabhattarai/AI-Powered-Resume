import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <Login onSwitch={() => setShowLogin(false)} />
      ) : (
        <Register onSwitch={() => setShowLogin(true)} />
      )}
    </>
  );
}

export default AuthPage;
