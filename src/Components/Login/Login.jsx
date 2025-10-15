import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="translate-y-1/5 flex justify-center">
      <title>Module-49 | Login</title>

      {/* Form */}
      <form>
        <fieldset className="fieldset p-6 w-[335px] bg-base-200 border border-blue-600 rounded-box md:w-[450px]">
          <legend className="fieldset-legend text-3xl text-blue-600">
            Login
          </legend>

          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />

          <label className="label mt-4">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Login</button>

          {/* Go to Login page if have account */}
          <div className="mt-3">
            <p className="textarea-md">Don't have an acount? Please <Link to={"/register"} className="font-medium text-blue-600 hover:text-blue-400">
              Register
            </Link>
          </p>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
