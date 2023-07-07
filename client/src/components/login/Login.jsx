import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const [logged, setLogged] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  //! get one user by username
  const authLogin = () => {
    axios.post("http://localhost:3000/users/authentication", { username, password })
      .then((res) => {
        const token = res.data.token; console.log("Successfully logged-in")
        //!save set data in localStorage
        localStorage.setItem("token", token)
        //! getting the authenticated user by username (username unique)
        axios.post("http://localhost:3000/users/getOneUser", { username })
          .then((res) => { setLogged(res.data); navigate("/signUp") })
      })
      .catch((err) => console.log(err))
  }
  return (
    <section className="text-center">
      {/* Background image */}
      <div
        className="p-5 bg-image signimg "
        style={{
          backgroundImage:
            "url('data:image/jpeg;base64,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')",
          height: '300px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      {/* Background image */}

      <div
        className="card mx-4 mx-md-5 shadow-5-strong"
        style={{
          marginTop: '-100px',
          background: 'hsla(0, 0%, 100%, 0.8)',
          backdropFilter: 'blur(30px)',
        }}
      >
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Login</h2>
              <form>
                {/* email input */}

                <div className="form-outline mb-4 " >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={(e) => {
                      setUsername(e.target.value)
                    }}
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-4 ">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  onClick={(e) => {
                    e.preventDefault()
                    authLogin()
                  }
                  }
                >
                  Login
                </button>

                {/* Register buttons */}
                <div className="text-center">
                  <p>
                    Don't have an account ?{' '}
                    <Link to="/signup">Sign up</Link>{' '}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Login;
