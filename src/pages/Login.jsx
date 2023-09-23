import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputClass =
    "border-b outline-0 border-gray-400 focus:border-gray-800 pl-4 pr-20 py-2";

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="my-24">
      <div className="text-center mb-12">
        <p className="font-inter text-4xl font-medium tracking-widest mb-6">
          Log in to Exclusive
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
        <div>
          <button
            type="submit"
            className="px-10 py-2 bg-red-600 text-base font-poppins text-white"
          >
            Log In
          </button>
          <Link
            to="/signup"
            className="font-poppins text-sm font-normal text-red-600 ml-8"
          >
            Forget Password?
          </Link>
        </div>
      </form>
      <div className="text-center"></div>
    </div>
  );
};

export default Login;
