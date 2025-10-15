import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center">
      <title>Module-49 | Register</title>

      {/* Form */}
      <form>
        <fieldset className="fieldset p-6 w-[335px] bg-base-200 border border-blue-600 rounded-box md:w-[450px]">
          <legend className="fieldset-legend text-3xl text-blue-600">
            Register Now!
          </legend>

          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />

          <label className="label mt-4">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Register</button>

          {/* Go to Login page if have account */}
          <div className="mt-3">
            <p className="textarea-md">
            Already have an acount? Please{" "}
            <Link to={"/login"} className="font-medium text-blue-600 hover:text-blue-40">
              Login
            </Link>
          </p>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
