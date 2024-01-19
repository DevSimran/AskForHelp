import { useState, useEffect } from "react";
import { HelpProvider } from "./context";
import  HelpForm  from "./components/HelpForm";
import HelpItem from "./components/HelpItem";

function App() {
  const [helps, setHelps] = useState([]);

  const addHelp = (help) => {
    setHelps((prev) => [{ id: Date.now(), ...help }, ...prev]);
  };

  const updateHelp = (id, help) => {
    setHelps((prev) =>
      prev.map((prevHelp) => (prevHelp.id === id ? help : prevHelp))
    );
  };

  const deleteHelp = (id) => {
    setHelps((prev) => prev.filter((help) => help.id !== id));
  };

  const toggleComplete = (id) => {
    setHelps((prev) =>
      prev.map((prevHelp) =>
        prevHelp.id === id
          ? { ...prevHelp, completed: !prevHelp.completed }
          : prevHelp
      )
    );
  };

  useEffect(() => {
    const helps = JSON.parse(localStorage.getItem("helps"));

    if (helps && helps.length > 0) {
      setHelps(helps);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("helps", JSON.stringify(helps));
  }, [helps]);

  return (
    <HelpProvider
      value={{ helps, addHelp, updateHelp, deleteHelp, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Tasks
          </h1>
          <div className="mb-4">
            {/* Help form goes here */}
            <HelpForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {helps.map((help) => (
              <div key={help.id} className="w-full">
                <HelpItem help={help} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </HelpProvider>
  );
}

export default App;
