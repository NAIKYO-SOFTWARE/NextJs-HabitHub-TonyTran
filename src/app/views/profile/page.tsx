/* eslint-disable react/jsx-key */
"use client";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./profile.css";

interface ProfileProps {
  label: string;
}
const dataProfie: ProfileProps[] = [
  {
    label: "Account",
  },
  {
    label: "Notifications",
  },
  {
    label: "Help",
  },
  {
    label: "Storage and Data",
  },
  {
    label: "Invite a friend",
  },
  {
    label: "Log out",
  },
];
const Profile: React.FC = () => {
  return (
    <div style={{ height: " 100vh", background: "#F4D8F9" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Profile
      </div>

      <div>
        {dataProfie.map((data) => {
          return (
            <div style={{ justifyContent: "center", display: "flex" }}>
              <div
                className="suggestion-action"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ marginLeft: "10px" }}>{data.label}</div>
                <FontAwesomeIcon
                  icon={faRightLong}
                  style={{ marginRight: "10px" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Profile;
