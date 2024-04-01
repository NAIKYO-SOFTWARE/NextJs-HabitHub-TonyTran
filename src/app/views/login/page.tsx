"use client";
import React, { useState } from "react";
import "./login.css";
import Input from "../../component/form/input/page";
import Button from "../../component/button/page";
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

interface LoginStateProps {
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

const Login: React.FC<LoginStateProps> = (props) => {
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
      router.push("/views/todo");
      dispatch(loginUser({ email, password }));
    } else {
      dispatch(setError("Email hoặc mật khẩu không hợp lệ"));
    }
    dispatch(setIsLoading(false));
  };

  return (
    <div>
      <div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            color: "#C67ED2",
            fontSize: "18px",
          }}
        >
          Log in to HabitHub
        </div>
        <div
          style={{
            width: "auto",
            height: "40px",
            fontSize: "18px",
          }}
        >
          Welcome back! Sign in using your social account or email to continue
          us
        </div>
      </div>
      <div className="container-icon">
        <div className="icon">
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#4285F4" }} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faGoogle} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faApple} />
        </div>
      </div>

      <span>Or</span>

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
      <Button label="Login" onClick={handleLogin} />

      <Menu />
    </div>
  );
};
export default Login;
