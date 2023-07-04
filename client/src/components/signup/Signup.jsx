import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <section className="text-center">
      {/* Background image */}
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
          height: '300px',
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
              <h2 className="fw-bold mb-5">Sign up now</h2>
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    
                      <input
                        type="text"
                        className="form-control"
                        placeholder='Name'
                      />
                     
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    {/* <label
                        className="form-label"
                        htmlFor="form3Example2"
                      >
                        Last name
                      </label> */}
                      <input
                        type="text"
                        className="form-control"
                        placeholder='Last Name'
                      />
                      
                    </div>
                  </div>
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder='User Name'
                  />
                 
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder='Email Adress'
                  />
                 
                </div>

                

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder='Password'
                  />
                
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder='Country'
                  />
                 
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="file"
                    className="form-control"
                    placeholder='Cover'
                  />
                 
                </div>

                

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign up
                </button>

                {/* Register buttons */}
                <div className="text-center">
                <Link to="/login">Login</Link> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
