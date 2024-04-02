/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
"use client";
import React, { useDebugValue, useEffect, useState } from "react";

import "./week.css";

import Image from "../../component/image/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { Menu } from "../menu/menu";
import { faList, faPerson, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeTask } from "../../store/reducer/taskStore";
import { RootState, useAppSelector } from "../../store/store";
import { useRouter } from "next/navigation";

interface WeekProps {
  day: string;
  number: number;
}
const dataWeek: WeekProps[] = [
  {
    day: "Sun",
    number: 10,
  },
  {
    day: "Mon",
    number: 11,
  },
  {
    day: "Tue",
    number: 12,
  },
  {
    day: "Wed",
    number: 13,
  },
  {
    day: "Thu",
    number: 14,
  },
  {
    day: "Fri",
    number: 15,
  },
  {
    day: "Sat",
    number: 16,
  },
];

const Week: React.FC<WeekProps> = () => {
  const listTask = useAppSelector((state) => state.task);

  const [selectedDaily, setSelectedDaily] = useState("All");

  const handleDailyClick = (daily: string) => {
    setSelectedDaily(daily);
  };
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const item = localStorage.getItem("key");
  }
  const router = useRouter();
  const handleAddSuggest = () => {
    router.push("/views/suggestions");
  };

  const dispatch = useDispatch();

  const [hasTasks, setHasTasks] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setHasTasks(true);
      }
    }
  }, [hasTasks]);

  console.log(listTask);

  return (
    <div style={{ backgroundColor: "#F5F5F5", height: "101vh", width: "100%" }}>
      <div style={{ background: "#F3C4FB" }}>
        <div
          style={{
            color: "black",
            display: "flex ",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ marginTop: "20px" }}>Today</span>
        </div>

        <div className="container-day-of-week">
          {dataWeek.map((week) => (
            <div key={week.day} className="day-of-week">
              <div
                style={{
                  display: " flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {week.day}
              </div>
              <div className="week">{week.number}</div>
            </div>
          ))}
        </div>
        <div className="container-daily">
          <div
            className={`daily ${
              selectedDaily === "All" ? "selected-all" : "selected-daily"
            }`}
            style={{ width: "68px" }}
            onClick={() => handleDailyClick("All")}
          >
            All
          </div>
          <div
            className={`daily ${
              selectedDaily === "Daily Routine"
                ? "selected-all"
                : "selected-daily"
            }`}
            style={{ width: "auto" }}
            onClick={() => handleDailyClick("Daily Routine")}
          >
            Daily Routine
          </div>
          <div
            className={`daily ${
              selectedDaily === "Study Routine"
                ? "selected-all"
                : "selected-daily"
            }`}
            style={{ width: "auto " }}
            onClick={() => handleDailyClick("Study Routine")}
          >
            Study Routine
          </div>
        </div>
      </div>
      {hasTasks ? (
        <div>
          {listTask.tasks.map((data: any) => {
            return (
              <div>
                <div className="suggestion-actions">
                  <div
                    className="suggestion-action"
                    style={{
                      backgroundColor: `${data.color}`,
                      justifyContent: "space-between",
                      width: "393px",

                      marginTop: "5px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginLeft: "5px" }}> {data.icon}</div>

                      <div style={{ marginLeft: "5px" }}>{data.label}</div>
                    </div>

                    <FontAwesomeIcon
                      className="week-icon"
                      icon={faTrash}
                      onClick={() =>
                        dispatch(
                          removeTask({
                            id: data.id,
                          })
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div className="container-img">
            <Image
              img="https://cdn.builder.io/api/v1/image/assets/TEMP/3fa3fa766e8e64e90ca123139667e40d05bfccbaeceed277de6b75c99a63f788?apiKey=6e7174f322d04fd2ad45ce75a73be6c0&"
              id={0}
            />
          </div>
        </>
      )}
      <div className="container-btn" onClick={handleAddSuggest}>
        <Image
          img="https://cdn.builder.io/api/v1/image/assets/TEMP/704211d0e2028a995a29ac601f06916f2929aab11fbdd654b752a0258e3916c5?apiKey=6e7174f322d04fd2ad45ce75a73be6c0&"
          id={0}
        />
      </div>
      <div style={{ marginTop: " 200px" }}>
        <Menu />
      </div>
    </div>
  );
};

export default Week;