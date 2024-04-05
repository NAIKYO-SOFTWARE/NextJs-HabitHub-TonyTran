"use client";
import React, { useState } from "react";
import "./addtask.css";
import Input from "../../component/form/input/inputcomponent";
import Button from "../../component/button/buttoncomponent";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/reducer/taskStore";

interface RepeatOption {
  label: string;
  selected?: boolean; // Optional property for selected option
}

const repeatOptions: RepeatOption[] = [
  { label: "Daily", selected: false },
  { label: "Weekly", selected: true },
  { label: "Monthly", selected: false },
];

const AddTask: React.FC = () => {
  const [newTask, setNewTask] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [selectedRepeat, setSelectedRepeat] = useState(repeatOptions[1]); // Set initial selected repeat
  const dispatch = useDispatch();

  const handleRepeatChange = (option: RepeatOption) => {
    setSelectedRepeat(option);
  };

  const handleDaySelection = (day: string) => {
    // Implement logic to handle day selection (toggle selection etc.)
  };

  return (
    <div className="bg-[#BDE0FE] h-screen">
      <div className="add-task-container">
        <div className="flex flex-col font-medium text-black">
          <div className="self-center text-6xl">⭐</div>
          <div className="mt-2 text-2xl flex justify-center">New Task</div>
          <div className="mt-2 text-xs text-stone-900 text-opacity-80 justify-center flex">
            Click to change the emoji
          </div>
        </div>
        <div className="add-task-body">
          <div className="flex justify-center text-center ">
            <Input
              placeholder="Name your new task"
              value={newTask}
              onChange={(e: any) => setNewTask(e.target.value)}
              type="text"
            />
          </div>
          <div className="flex justify-center text-center ">
            <Input
              placeholder="Describe it"
              value={newDesc}
              onChange={(e: any) => setNewDesc(e.target.value)}
              type="text"
            />
          </div>
          <div className="flex flex-col px-5 max-w-[368px]">
            <p className="w-full text-sm font-bold text-stone-900 text-opacity-80 mt-10  ">
              Card Color
            </p>
            <div className="flex gap-4 pr-7 mt-5">
              <div className="shrink-0 w-8 h-8 rounded-full border-solid bg-emerald-200 bg-opacity-60 border-[3px] border-neutral-100 stroke-[3px]" />
              <div className="shrink-0 w-8 h-8 rounded-full border-white border-solid bg-fuchsia-700 bg-opacity-60 border-[3px] stroke-[3px]" />
              <div className="shrink-0 w-8 h-8 bg-orange-200 rounded-full border-white border-solid border-[3px] stroke-[3px]" />
              <div className="shrink-0 w-8 h-8 bg-teal-200 rounded-full border-white border-solid border-[3px] stroke-[3px]" />
              <div className="shrink-0 w-8 h-8 bg-red-600 rounded-full border-white border-solid border-[3px] stroke-[3px]" />
              <div className="shrink-0 w-8 h-8 bg-yellow-100 rounded-full border-white border-solid border-[3px] stroke-[3px]" />
              <div className="shrink-0 w-8 h-8 bg-indigo-500 rounded-full border-white border-solid border-[3px] stroke-[3px]" />
              <div className="shrink-0 w-8 h-8 bg-fuchsia-500 rounded-full border-white border-solid border-[3px] stroke-[3px]" />
            </div>
          </div>
          <div className="mt-12 text-sm font-bold text-stone-900 text-opacity-80 ">
            Repeat
          </div>
          <div className="flex flex-col px-5 py-6 mt-2.5 w-full text-sm bg-white rounded-xl text-stone-900 text-opacity-80">
            <div>Set a cycle for your task</div>
            <div className="flex gap-5 justify-between items-center px-11 mt-3.5 whitespace-nowrap bg-gray-200 rounded-2xl">
              <div className="self-stretch my-auto">Daily</div>
              <div className="justify-center items-start self-stretch px-10 py-2.5 font-medium bg-orange-200 rounded-2xl">
                Weekly
              </div>
              <div className="self-stretch my-auto">Monthly</div>
            </div>
            <div className="flex gap-4 mt-4 mr-5 ml-4 text-xs font-light text-black whitespace-nowrap">
              <div className="flex justify-center items-center w-8 h-8 bg-orange-200 rounded-full">
                Mon
              </div>
              <div className="flex justify-center items-center px-2 w-8 h-8 bg-orange-200 rounded-full">
                Tue
              </div>
              <div className="flex justify-center items-center w-8 h-8 bg-orange-200 rounded-full">
                Wed
              </div>
              <div className="flex justify-center items-center px-2 w-8 h-8 bg-orange-200 rounded-full">
                Thu
              </div>
              <div className="flex justify-center items-center px-2.5 w-8 h-8 bg-orange-200 rounded-full">
                Fri
              </div>
              <div className="flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full ">
                Sat
              </div>
              <div className="flex z-10 justify-center items-center w-8 h-8 bg-gray-200 rounded-full ">
                Sun
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-4 w-full">
              <div>Repeat</div>
              <div className="flex gap-1.5">
                <div className="grow">Every week</div>
                <div>&gt;</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-0 items-start pt-5 pr-20 pl-5 mt-4 bg-white rounded-xl text-stone-900 text-opacity-80">
          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <div className="text-sm">Set a tag for your task</div>
            <div className="flex gap-0 mt-2 text-xs font-medium">
              <div className="justify-center self-end px-2 py-2.5 mb-5 bg-sky-200 rounded-xl">
                Daily Routine
              </div>
              <div className="flex flex-col items-start px-6 pt-2 pb-5 rounded-xl">
                <div className="justify-center px-2 py-2.5 bg-sky-200 rounded-xl">
                  Study Routine
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center px-2 py-2.5 mt-[34px] text-xs font-medium bg-sky-200 rounded-xl">
            Add More +
          </div>
        </div>
      </div>
      <div className="add-task-footer">
        <Button
          label="Add Task"
          onClick={() =>
            dispatch(
              addTask({
                icon: "",
                label: newTask,
                color: "",
              })
            )
          }
        />
      </div>
    </div>
  );
};

export default AddTask;
