import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
// import { auth } from "../../Firebase/Firebase.init";
// import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  //* First handle to get data from this page only
  // const handleRegister = (e) => {
  //   e.preventDefault(); //* Stop default server form submitting
  //   // const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   // console.log(name, email, password);

  //   createUserWithEmailAndPassword  (auth, email, password)
  //   .then(result => {
  //     console.log(result);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // };
``
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
    .then(result => {
      console.log(result.user);
      e.target.reset()
    })
    .catch(error => {
      console.log(error);
    })
  };

  return (
    <div className="translate-y-1/5 flex justify-center">
      <title>Module-49 | Register</title>

      {/* Form */}
      <form onSubmit={handleRegister}>
        <fieldset className="fieldset gap-4 p-6 w-[335px] bg-base-200 border border-blue-600 rounded-box md:w-[450px]">
          <legend className="fieldset-legend text-3xl text-blue-600">
            Register Now!
          </legend>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="label">Name</label>
            <input
              type="name"
              name="name"
              className="input w-full"
              placeholder="Name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
            />
          </div>

          <button className="btn btn-neutral mt-4">Register</button>

          {/* Go to Login page if have account */}
          <div className="mt-3">
            <p className="textarea-md">
              Already have an acount? Please{" "}
              <Link
                to={"/login"}
                className="font-medium text-blue-600 hover:text-blue-400"
              >
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
