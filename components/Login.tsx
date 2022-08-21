import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '../customHooks/useAuth'

interface Inputs {
  email: string
  password: string
}

function Login() {
  const [login, setLogin] = useState(false)
  const { signIn, signUp } = useAuth()
  const [formData, setFormData] = useState({email:"", password:""})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <div className="absolute left-2 top-1 h-20 w-44 cursor-pointer md:left-8 md:top-4">
        <Image src="https://rb.gy/ek4j9f" layout="fill" objectFit="contain" />
      </div>

      <div
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        //onSubmit={handleSubmitForm}
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              name="email"
              onChange = {handleChange}
            />
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              name="password"
              onChange = {handleChange}
            />
          </label>
        </div>
        <button
          className="w-full rounded bg-[#E50914] py-3 font-semibold"
          onClick={() => setLogin(true)}
          //type="submit"
        >
          Sign In
        </button>
        {/*<div className="text-[gray]">
          New to Netflix?{' '}
          <button
            className="cursor-pointer text-white hover:underline"
            onClick={() => setLogin(false)}
            //type="submit"
          >
            Sign up now
          </button>
        </div>*/}
      </div>
    </div>
  )
}

export default Login
