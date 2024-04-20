
import React, { FormEvent, useEffect, useState } from "react";
import LOGO from "@/assets/StoreLogo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
// import { FaDiscord } from "react-icons/fa";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   AuthError,
//   AuthLoading,
//   AuthMessage,
//   AuthclearError,
//   AuthclearMessage,
// } from "@/redux/reducer/authReducer";
// import { GoogleSignInAction, SignInAction } from "@/redux/actions/auth";
// import toast from "react-hot-toast";
// import { authValue } from "@/redux/global/globalSlice";
// import { useRouter } from "next/navigation";
// import { GoogleLogin } from '@react-oauth/google';



interface SignInData {
  email: string;
  password: string;
}

function SignIn() {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const isLoading = useSelector(AuthLoading);
//   const message = useSelector(AuthMessage);
//   const error = useSelector(AuthError);



  const [signinData, setSigninData] = useState<SignInData>({
    email: "",
    password: "",
  });

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    // dispatch(SignInAction(signinData) as any);
  };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setSigninData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   useEffect(() => {
//     if (message) {
//       router.push("/store");
//       toast.success(message);
//       dispatch(authValue(true));
//       dispatch(AuthclearMessage());
//     }

//     if (error) {
//       toast.error(error);
//       dispatch(AuthclearError());
//     }
//   }, [message, error]);

  return (
<div className="flex items-center justify-center h-[100vh]">
<div className="flex justify-center items-center fit-height select-none">
      <div className="bg-secondary p-10 w-[380px] h-[600px] ">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5 items-center"
        >
          <div>
            <img src={LOGO} alt="logo" className="h-14 w-14" />
          </div>
          <h4 className="text-xl">Sign In</h4>
          <Input
            placeholder="Email Address"
            type="email"
            name="email"
            required
            value={signinData.email}
            // onChange={handleChange}
            className="p-6"
          />
          <Input
            placeholder="Password"
            required
            type="password"
            name="password"
            value={signinData.password}
            // onChange={handleChange}
            className="p-6"
          />

          <Button type="submit" className="w-full">
            SIGN IN
          </Button>
        </form>

        <h5 className="text-center my-5 text-white/60">or continue with</h5>

        {/* <div  className="flex items-center text-white/80 justify-between p-3 bg-white/10 font-medium text-lg rounded-md hover:cursor-pointer hover:bg-white/20 duration-100 hover:text-white">
          <FcGoogle className="text-2xl" />
          <h2>Continue with Google</h2>
          <div></div>
        </div> */}
        {/* <GoogleLogin
        
      width={300}
      onSuccess={async (credentialResponse) => {
        console.log(credentialResponse);
        dispatch(GoogleSignInAction(credentialResponse) as any);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    /> */}
        <h5 className="text-center my-5 text-white text-sm">
        Don&apos;t&nbsp;have an account ?
          <Link to={"/signup"} className="text-primary ml-1 cursor-pointer">
            Sign Up
          </Link>
        </h5>
        <div className="my-5"></div>

        {/* <div className="flex items-center text-white/80 justify-between p-3 bg-white/10 font-semibold text-lg rounded-md hover:cursor-pointer hover:bg-white/20 duration-100 hover:text-white">
          <FaDiscord className="text-2xl" />
          <h2>Continue with Discord</h2>
          <div></div>
        </div> */}
      </div>
    </div>
</div>
  );
}

export default SignIn;
