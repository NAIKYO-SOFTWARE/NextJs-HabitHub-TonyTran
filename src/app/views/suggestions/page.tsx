/* eslint-disable react/jsx-key */
"use client";
import Button from "../../component/button/buttoncomponent";
import React from "react";
import "./suggest.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask, removeTask } from "../../store/reducer/taskStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export interface SuggestProp {
  icon: any;
  category: any;
  description: any;
  subcategories: any;
}
const dataSuggest: SuggestProp[] = [
  {
    icon: "🧠",
    category: "Learn and study more",
    description: "Stay hungry for knowledge",
    subcategories: [
      {
        label: "Read",
        icon: "📖",
        color: "#FFEE93",
      },
      {
        label: "Study",
        icon: "✏️",
        color: "#ADF7B6",
      },
    ],
  },
  {
    icon: "🏋️‍♂️",
    category: "Exercise",
    description: "Become your best version",
    subcategories: [
      {
        label: "Running",
        icon: "🏃‍️",
        color: "#BDE0FE",
      },
      {
        label: "Cycling",
        icon: "🚴‍",
        color: "#FFC09F",
      },
    ],
  },
  {
    icon: "🧹",
    category: "Clean and Organize",
    description: "Get your life together",
    subcategories: [
      {
        label: "Mop the house",
        icon: "🪣",
        color: "#FCF5C7",
      },
      {
        label: "Clean the bathroom",
        icon: "🚽",
        color: "#F3C4FB",
      },
    ],
  },
];

const Suggestion: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSeeAll = () => {
    router.push("/views/week");
  };

  return (
    <div style={{ background: "#F5F5F5", height: "105vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Suggestions
      </div>
      <div>
        {dataSuggest.map((data) => (
          <div className="suggest-container" style={{ marginBottom: "10px" }}>
            <div className="suggestion-item" style={{ height: "250px" }}>
              <div className="suggestion-title text-4xl">{data.category}</div>
              <div className="suggestion-description">{data.description}</div>
              <div>
                {data.subcategories.map((label: any) => (
                  <div className="suggestion-actions">
                    <div
                      className="suggestion-action"
                      style={{ backgroundColor: `${label.color}` }}
                    >
                      <div style={{ marginLeft: "5px" }}> {label.icon}</div>
                      <div style={{ marginLeft: "5px" }}>{label.label}</div>
                    </div>
                    <div
                      className="suggestion-icon"
                      onClick={() =>
                        dispatch(
                          addTask({
                            icon: label.icon,
                            label: label.label,
                            color: label.color,
                          })
                        )
                      }
                    >
                      +
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <Link
          href="/views/addtask"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            label="Add More"
            onClick={() => console.log("change to add more")}
          />
        </Link>
        <div
          onClick={handleSeeAll}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          See all suggestions
        </div>
      </div>
    </div>
  );
};
export default Suggestion;
