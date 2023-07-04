import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {


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
              <h2 className="fw-bold mb-5">Sign up now</h2>
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  {/* name input */}

                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  {/* lastname input */}

                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>

                {/* username input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                  />
                </div>
                {/* email input */}

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Adress"
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                {/* country input */}

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
                {/* cover input */}

                <div className="form-outline mb-4">
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Cover"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign up
                </button>

                {/* login buttons */}
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
