"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const Menu: React.FC = () => {
  const router = useRouter();
  const handleCalendar = () => {
    router.push("/views/calendar");
  };
  const handleAddTask = () => {
    router.push("/views/addtask");
  };
  const handleProfile = () => {
    router.push("/views/profile");
  };
  return (
    <div>
      <div className="container-icon" style={{ marginTop: "150px" }}>
        <div className="icon" style={{ height: "56px", width: "56px" }}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleCalendar}
          >
            <circle cx="28" cy="28.0001" r="28" fill="#F5F5F5" />
            <path
              d="M34.9844 19.9845C35.5469 19.9845 36.0156 20.1876 36.3906 20.5939C36.7969 20.9689 37 21.4376 37 22.0001V36.0157C37 36.547 36.7969 37.0157 36.3906 37.422C36.0156 37.797 35.5469 37.9845 34.9844 37.9845H21.0156C20.4531 37.9845 19.9688 37.797 19.5625 37.422C19.1875 37.0157 19 36.547 19 36.0157V22.0001C19 21.4376 19.1875 20.9689 19.5625 20.5939C19.9688 20.1876 20.4531 19.9845 21.0156 19.9845H22V18.0157H24.0156V19.9845H31.9844V18.0157H34V19.9845H34.9844ZM34.9844 36.0157V25.9845H21.0156V36.0157H34.9844ZM25 30.0157V28.0001H22.9844V30.0157H25ZM28.9844 30.0157V28.0001H27.0156V30.0157H28.9844ZM33.0156 30.0157V28.0001H31V30.0157H33.0156ZM25 34.0001V31.9845H22.9844V34.0001H25ZM28.9844 34.0001V31.9845H27.0156V34.0001H28.9844ZM33.0156 34.0001V31.9845H31V34.0001H33.0156Z"
              fill="black"
              fill-opacity="0.8"
            />
          </svg>
        </div>
        <div className="icon" style={{ height: "56px", width: "56px" }}>
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleAddTask}
          >
            <path
              d="M19.9844 3.9845H10.9844V6.00012H19.9844V3.9845ZM19.9844 12.0001H10.9844V14.0157H19.9844V12.0001ZM3.53125 8.01575L0.015625 4.45325L1.42188 3.047L3.53125 5.15637L7.75 0.937622L9.20312 2.34387L3.53125 8.01575ZM3.53125 15.9845L0.015625 12.4689L1.42188 11.0626L3.53125 13.172L7.75 8.95325L9.20312 10.3595L3.53125 15.9845Z"
              fill="black"
              fill-opacity="0.8"
            />
          </svg>
        </div>
        <div className="icon" style={{ height: "56px", width: "56px" }}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleProfile}
          >
            <circle cx="28" cy="28.0001" r="28" fill="#F5F5F5" />
            <path
              d="M22.7031 29.1407C24.5469 28.3907 26.3125 28.0157 28 28.0157C29.6875 28.0157 31.4375 28.3907 33.25 29.1407C35.0938 29.8595 36.0156 30.8126 36.0156 32.0001V34.0157H19.9844V32.0001C19.9844 30.8126 20.8906 29.8595 22.7031 29.1407ZM30.8125 24.8282C30.0312 25.6095 29.0938 26.0001 28 26.0001C26.9062 26.0001 25.9688 25.6095 25.1875 24.8282C24.4062 24.047 24.0156 23.1095 24.0156 22.0157C24.0156 20.922 24.4062 19.9845 25.1875 19.2032C25.9688 18.3907 26.9062 17.9845 28 17.9845C29.0938 17.9845 30.0312 18.3907 30.8125 19.2032C31.5938 19.9845 31.9844 20.922 31.9844 22.0157C31.9844 23.1095 31.5938 24.047 30.8125 24.8282Z"
              fill="black"
              fill-opacity="0.8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
