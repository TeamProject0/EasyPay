import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    country: '',
    cover: null,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(user);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'paypalscard');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dgcdmrj7x/image/upload',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const imageUrl = await response.data.secure_url;
      setUser((prev) => ({ ...prev, cover: imageUrl }));
      console.log(imageUrl);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/users/add', user);
      navigate('/login');
    } catch (err) {
      console.log(err);
      console.log(err.response);
      console.log(err.message);
    }
  };

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
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                      />
                    </div>
                  </div>
                  {/* lastname input */}

                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="lastname"
                      />
                    </div>
                  </div>
                </div>

                {/* username input */}
                <div className="form-outline mb-4">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    name="username"
                  />
                </div>
                {/* email input */}

                <div className="form-outline mb-4">
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    placeholder="Email Adress"
                    name="email"
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    onChange={handleChange}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                {/* country input */}

                <div className="form-outline mb-4">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    name="country"
                  />
                </div>
                {/* cover input */}

                <div className="form-outline mb-4">
                  <input
                    onChange={handleImageUpload}
                    type="file"
                    className="form-control"
                    placeholder="Cover"
                    name="cover"
                  />
                </div>

                {/* Submit button */}
                <button
                  onClick={handleClick}
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
