import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const inputClass =
    "border-b outline-0 border-gray-400 focus:border-gray-800 pl-4 pr-20 py-2";

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="my-24">
      <div className="text-center mb-12">
        <p className="font-inter text-4xl font-medium tracking-widest mb-6">
          Create an account
        </p>
        <p className="font-poppins text-base font-normal">
          Enter your details below
        </p>
      </div>
      <form
        className="flex flex-col items-center gap-10 w-96 mx-auto mb-8"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          className={inputClass}
          placeholder="Firstname"
        />
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          className={inputClass}
          placeholder="Lastname"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="Email"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={inputClass}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
          placeholder="Password"
        />
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className={inputClass}
          placeholder="Confirm Password"
        />

        <button
          type="submit"
          className="px-20 py-4 bg-red-600 text-base font-poppins text-white"
        >
          Create Account
        </button>
      </form>
      <div className="text-center">
        <span className="font-poppins text-base font-normal opacity-70">
          Already have a account?{" "}
          <Link
            to="/login"
            className="ml-4 font-medium underline underline-offset-8"
          >
            Log In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
