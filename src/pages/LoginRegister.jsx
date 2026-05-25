import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-page section-padding animate-fade-in flex items-center justify-center min-h-[80vh]">
      <div className="auth-card glass" style={{maxWidth: '450px', width: '100%', padding: '2.5rem', borderRadius: '24px'}}>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="text-secondary">
            {isLogin ? 'Enter your credentials to access your account' : 'Sign up to start learning today'}
          </p>
        </div>

        <form className="auth-form flex-col gap-4 mb-6">
          {!isLogin && (
            <div className="input-group mb-4" style={{position: 'relative'}}>
              <FaUser style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--text-secondary)'}} />
              <input type="text" placeholder="Full Name" className="input-field" style={{paddingLeft: '2.5rem'}} required />
            </div>
          )}
          
          <div className="input-group mb-4" style={{position: 'relative'}}>
            <FaEnvelope style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--text-secondary)'}} />
            <input type="email" placeholder="Email Address" className="input-field" style={{paddingLeft: '2.5rem'}} required />
          </div>
          
          <div className="input-group mb-6" style={{position: 'relative'}}>
            <FaLock style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--text-secondary)'}} />
            <input type="password" placeholder="Password" className="input-field" style={{paddingLeft: '2.5rem'}} required />
          </div>
          
          <button type="submit" className="btn btn-primary w-full text-center mb-4">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="divider flex items-center text-secondary mb-6" style={{gap: '1rem'}}>
          <div style={{flex: 1, height: '1px', background: 'var(--glass-border)'}}></div>
          <span>OR</span>
          <div style={{flex: 1, height: '1px', background: 'var(--glass-border)'}}></div>
        </div>

        <div className="social-login flex-col gap-1 mb-6">
          <button className="btn btn-outline w-full flex items-center justify-center gap-1 mb-2">
            <FaGoogle /> Continue with Google
          </button>
          <button className="btn btn-outline w-full flex items-center justify-center gap-1" style={{background: '#333', color: 'white', borderColor: '#333'}}>
            <FaGithub /> Continue with GitHub
          </button>
        </div>

        <div className="text-center text-sm">
          <p className="text-secondary">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              className="text-primary font-semibold" 
              style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0}}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
