/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
"use client";
import React, { useState } from "react";
import "./login.css";
import Input from "../../component/form/input/inputcomponent";
import Button from "../../component/button/buttoncomponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "../menu/menu";

import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  setIsLoading,
  setError,
} from "../../store/reducer/loginUser";

import { RootState } from "../../store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "@/app/component/image/imagecomponent";

export interface LoginStateProps {
  email: string;
  password: string;
  isLoading: boolean;
  error: string | null;
}
const dataUser = [
  {
    email: "admin123",
    password: "123456",
  },
  {
    email: "admin1234",
    password: "1234565",
  },
];

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const checkUser = useSelector<RootState>((state) => state.auth);
  const router = useRouter();
  const handleLogin = () => {
    console.log("Login");

    const user = dataUser.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);

    if (user) {
      toast("Login Successfully");
      router.push("/views/todo");
      dispatch(loginUser({ email, password }));
    } else {
      toast("Please Enter Email & Password");
      dispatch(setError("Email hoặc mật khẩu không hợp lệ"));
    }
    dispatch(setIsLoading(false));
  };

  return (
    <div className="container-login">
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          color: "#C67ED2",
          fontSize: "18px",
          fontStyle: "bold",
          marginBottom: "20px",
        }}
      >
        <div style={{ marginTop: "70px" }}>Log in to HabitHub</div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "290px",
            height: "auto",
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Welcome back! Sign in using your social
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          fontSize: "14px",
        }}
      >
        account or email to continue us{" "}
      </div>
      <div className="container-icon">
        <div className="icon">
          <Image
            img="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a93f6528d975a64a0499165ffbb7699356bcaef1fd8b66709c9bd6ad2861dc?apiKey=6e7174f322d04fd2ad45ce75a73be6c0&"
            id={0}
          />
        </div>
        <div className="icon">
          <Image
            img="https://cdn.builder.io/api/v1/image/assets/TEMP/95d9a12438f29ebd69cbc4acfa2a8e6b2770c451ea68ace77a97ffb4ca667c48?apiKey=6e7174f322d04fd2ad45ce75a73be6c0&"
            id={0}
          />
        </div>
        <div className="icon">
          <Image
            img="https://cdn.builder.io/api/v1/image/assets/TEMP/e513bd4f765bcb9049a63a5ed31f0990ee5e9ce2356b310d545cea6597f3a19e?apiKey=6e7174f322d04fd2ad45ce75a73be6c0&"
            id={0}
          />
        </div>
      </div>

      <div className="underline-container">
        <hr className="underline left" /> <div className="or-text">Or</div>{" "}
        <hr className="underline right" />{" "}
      </div>
      <div style={{ marginTop: "100px" }}>
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          value={password}
          type="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <Button label="Login" onClick={handleLogin} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Menu />
      </div>
    </div>
  );
};
export default Login;
