/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import Image from "../../component/image/page";
import { useRouter } from "next/navigation";

export const Calendar: React.FC = () => {
  const router = useRouter();
  const handleCalendar = () => {
    router.push("/views/week");
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center ",
        alignItems: "center",
        background: "#F5F5F5",
        cursor: "pointer",
      }}
      onClick={handleCalendar}
    >
      <Image
        img="https://s3-alpha-sig.figma.com/img/7fa7/7078/216883dc5f4e52de9d4be565d51c5085?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qYbPrKSvG5kqdF5CV3ehrURxDIcgspAcw-SmOuNLjOTUNfA24XtwlqWt454SGTTm60RYq-gqltTWVsLOLFXil8NlfTh2SD4RWWyu76ajLslFPavfSUen0n8Fv9Ysdvl5XXtMru4k4YgvbwWe5pAXXZilpmvVuY7XTWYgIqN1EDgFdOJPVsV2wCPXO8eSzis4mU7hxS~YnqwwgMFSYU12buutAK8O1WLUV9DB54W7I1-HIejqMsYXz5~--94w89awm-Vcni~oRatS5CvRY1TVd0FKIxPgwUgW6ElWsOdEKfagtrxUYYjeQtIXijCCJdhqut3csO~xDn8UTflvwBbBzA__"
        id={0}
      />
    </div>
  );
};
export default Calendar;
