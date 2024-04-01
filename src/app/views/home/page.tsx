/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import Button from "../../component/button/buttoncomponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "@/app/views/home/home.css";
import { useNavigate } from "react-router-dom";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "@/app/component/image/imagecomponent";

const Home: React.FC = () => {
  const handleButton = () => {
    toast("Login", {});
  };
  const handleCreate = () => {};
  return (
    <div>
      <div>
        <div
          className="container-homepage"
          style={{
            fontSize: "64px",
            lineHeight: "96px",
            fontWeight: "400px",
            fontStyle: "normal",
            fontFamily: "Poppins",
            marginBottom: "20px",
            marginLeft: "40px",
            marginTop: "100px",
          }}
        >
          {<div>Do Your</div>}
          {<div>Tasks</div>}
          {<div>Quickly</div>}
          {<div>And Easy</div>}
        </div>
        <div
          style={{
            fontSize: "18px",
            marginBottom: "50px",
            marginLeft: "40px",
            lineHeight: "27px",
            fontWeight: "275px",
            fontStyle: "normal",
            fontFamily: "Poppins",
          }}
        >
          Your tasks, your rules, our support.
        </div>
      </div>
      <div>
        <div
          style={{
            marginBottom: "10px",
            justifyContent: "center",
            display: "flex",
            marginTop: "80px",
            color: "#000000",
            filter: "drop-shadow(0px 6px 20px rgba(0, 0, 0, 0.3))",
          }}
        >
          <Link href={"/views/login"}>
            <Button label="Login" onClick={handleButton} />
          </Link>
        </div>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            fontSize: "12px",
            lineHeight: "18px",
            fontWeight: "300px",
            fontStyle: "normal",
            fontFamily: "Poppins",
            textDecorationLine: "underline",
            color: "white",
          }}
          onClick={handleCreate}
        >
          Create An Account
        </div>
        <div className="underline-container">
          <hr className="underline left" /> <div className="or-text">Or</div>{" "}
          <hr className="underline right" />{" "}
        </div>

        <div
          className="container-icon"
          style={{ marginRight: "20px", marginTop: "40px" }}
        >
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
      </div>
    </div>
  );
};
export default Home;
