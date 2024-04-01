"use client";
/* eslint-disable react/no-unescaped-entities */
import { faCalendarDays, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faDumbbell,
  faList,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./todo.css";
import Button from "../../component/button/page";
import { useRouter } from "next/navigation";
import { Menu } from "../menu/menu";
export interface TodoProps {
  text: string;
  icon: any;
}
const data: TodoProps[] = [
  {
    text: "Plan the day's tasks",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
  {
    text: "Set Goals",
    icon: <FontAwesomeIcon icon={faDumbbell} />,
  },
  {
    text: "Take Breaks",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
  {
    text: "Move and refresh",
    icon: <FontAwesomeIcon icon={faDumbbell} />,
  },
  {
    text: "Prioritize",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
  {
    text: "Break tasks down",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
  {
    text: "No multitasking",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
  {
    text: "Minimize distractions",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
  {
    text: "Limit social media",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
];
const Todo: React.FC = () => {
  const router = useRouter();
  const handleSuggestion = () => {
    router.push("/views/suggestions");
  };
  return (
    <div className="todo-container">
      <div className="header">
        <div className="title">Let's make a contract</div>
      </div>
      <div className="content">
        <span className="label">I will</span>
        <ul>
          {data.map((todo) => (
            <li
              key={todo.text}
              className="todo-item"
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              {todo.icon && <span className="todo-icon">{todo.icon}</span>}
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="agreement">
        <Button label="I Agree" onClick={handleSuggestion} />
      </div>
      <Menu />
      {/* <div className="container-icon" style={{ marginTop: "50px" }}>
        <div className="icon" onClick={handleCalendar}>
          <FontAwesomeIcon icon={faCalendarDays} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faList} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPerson} />
        </div>
      </div> */}
    </div>
  );
};
export default Todo;
