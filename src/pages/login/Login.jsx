import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)

    const {login} = useContext(AuthContext)

    
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
    

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password);

        login(email, password)
        .then(result =>{
          const user = result.user
          console.log(user);
        })
       
        
    }

  const  handleValidateCaptcha = ()=>{
        const user_captcha_value = captchaRef.current.value
       if(validateCaptcha(user_captcha_value)){
        setDisabled(false)
       }
       else{
        setDisabled(true)
       }
    }
    return (
        <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="flex-shrink-0 max-w-sm shadow-2xl card bg-base-100 md:w-1/2">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input ref={captchaRef} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                <button onClick={handleValidateCaptcha} className="mt-2 btn btn-active btn-xs">validate</button>
            
              </div>
              
              <div className="mt-6 form-control">
               
                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='text-center'><small>New Here?<Link to="/signup">signup here</Link> </small></p>
          </div>
        </div>
      </div>
    );
};

export default Login;