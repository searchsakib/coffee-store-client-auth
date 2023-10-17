import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { Result } from 'postcss';
import axios from 'axios';

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInUser(email, password)
      .then(async (res) => {
        console.log(res.user);
        const user = {
          email,
          lastLoggedAt: res.user?.metadata?.lastSignInTime,
        };
        // update last logged in at the database

        const myPatch = await axios.patch('http://localhost:5000/user', user, {
          headers: {
            'content-type': 'application/json',
          },
        });
        console.log(myPatch.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div>
        <div className="overflow-x-hidden">
          <div className="pt-[60px] pb-[76px] bg-gray-100">
            <div className="mx-auto w-5/12 min-w-fit ">
              <h2 className="text-3xl font-medium my-5 text-center">
                Sign In Here
              </h2>

              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium text-base">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label font-medium text-base">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-700 text-white hover:text-blue-700 hover:bg-blue-50 hover:border-2 hover:border-blue-700">
                    Sign In
                  </button>
                </div>
              </form>

              <p className="font-medium text-center text-2xl">
                Already have an account{' '}
                <Link to="/signup" className="font-semibold text-blue-500">
                  SignUp
                </Link>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
