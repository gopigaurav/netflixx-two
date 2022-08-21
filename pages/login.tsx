import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import useAuth from "../customHooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

function Login() {
  const { signIn, signUp } = useAuth();
  const {loading} = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmitForm = async (method: Boolean) => {
    if (method) {
      await signIn(formData.email, formData.password);
    } else {
      await signUp(formData.email, formData.password);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  if (loading){
    return <p>Loading ...</p>
  }
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix - auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <div className="extrasm-textsm flex flex-col h-full w-full justify-end px-8 py-2.5 font-extrabold leading-tight lg:text-6xl xl:text-6xl 2xl:text-7xl text-5xl">
        <p>
          WATCH <br />
          TV SHOWS & <br />
          MOVIES <br />
          ANYWHERE.
          <br /> ANYTIME.
        </p>
      </div>
      <div
        className="relative mt-18 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className={`input border-b-2`}
              name="email"
              onChange={handleChange}
            />
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className={`input border-b-2`}
              name="password"
              onChange={handleChange}
            />
          </label>
        </div>
        <button
          className="w-full rounded bg-[#E50914] py-3 font-semibold"
          onClick={() => handleSubmitForm(true)}
          type="submit"
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?{" "}
          <button
            className="cursor-pointer text-white hover:underline"
            onClick={() => handleSubmitForm(false)}
            type="submit"
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
