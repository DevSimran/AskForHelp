import React, { useState } from "react";
import { useHelp } from "../context/Helpcontexts";

function HelpItem({ help }) {
  const [isHelpEditable, setIsHelpEditable] = useState(false);
  const [helpMsg, setHelpMsg] = useState(help.help);

  const editHelp = () => {
    updateHelp(help.id, { ...help, help: helpMsg });
    setIsHelpEditable(false);
  };

  const { updateHelp, deleteHelp, toggleComplete } = useHelp();

  const toggleCompleted = () => {
    toggleComplete(help.id);
  };

  return (
    <>
      <div
        className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
          help.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
        }`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={help.completed}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          className={`border outline-none w-full bg-transparent rounded-lg ${
            isHelpEditable ? "border-black/10 px-2" : "border-transparent"
          } ${help.completed ? "line-through" : ""}`}
          value={helpMsg}
          onChange={(e) => setHelpMsg(e.target.value)}
          readOnly={!isHelpEditable}
        />
        {/* Edit, Save Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (help.completed) return;

            if (isHelpEditable) {
              editHelp();
            } else setIsHelpEditable((prev) => !prev);
          }}
          disabled={help.completed}
        >
          {isHelpEditable ? "📁" : "✏️"}
        </button>
        {/* Delete Todo Button */}
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deleteHelp(help.id)}
        >
          ❌
        </button>
      </div>
    </>
  )
}

export default HelpItem;
