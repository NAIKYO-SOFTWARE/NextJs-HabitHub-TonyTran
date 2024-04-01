"use client";

import {
  faCalendar,
  faList,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="container-icon" style={{ marginTop: "50px" }}>
        <div className="icon">
          <FontAwesomeIcon icon={faCalendar} onClick={handleCalendar} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faList} onClick={handleAddTask} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPerson} onClick={handleProfile} />
        </div>
      </div>
    </div>
  );
};
