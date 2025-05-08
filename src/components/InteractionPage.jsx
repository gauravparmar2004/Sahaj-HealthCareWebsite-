import { useState } from "react";
import { Home as HomeIcon, Bot, Menu } from "lucide-react";

// Import your existing components
import Home from "../pages/AiHome";
import AIAssistant from "../pages/AiAssistant";
import IoT from "../pages/IoT";
import Telemedicine from "../pages/Telemedicine";
import MedicalHistory from "../pages/MedicalHistory";

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState("welcome"); // default is welcome

  const pages = {
    home: <Home />,
    ai: <AIAssistant />,
    iot: <IoT />,
    telemedicine: <Telemedicine />,
    medical: <MedicalHistory />,
    welcome: (
      <div className="p-4 h-screen w-screen bg-[#0F1117] text-2xl text-gray-200 font-semibold flex justify-center pt-40">
        👋 Hello, Gaurav Welcome to the App
      </div>
    ),
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white p-4 transition-all duration-300 ${
          expanded ? "w-48" : "w-16"
        }`}
      >
        <button onClick={() => setExpanded(!expanded)} className="mb-6">
          <Menu />
        </button>

        {/* Home */}
        <div
          className="flex items-center gap-2 mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded"
          onClick={() => setPage("home")}
        >
          <HomeIcon />
          {expanded && <span>Home</span>}
        </div>

        {/* AI Assistant */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-700 p-2 rounded"
          onClick={() => setPage("ai")}
        >
          <Bot />
          {expanded && <span>AI Assistant</span>}
        </div>
        {/* Telemedicine */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-700 p-2 rounded"
          onClick={() => setPage("telemedicine")}
        >
          <span className="text-lg">🩺</span>
          {expanded && <span>Telemedicine</span>}
        </div>
        {/* IoT */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-700 p-2 rounded"
          onClick={() => setPage("iot")}
        >
          <span className="text-lg">📡</span>
          {expanded && <span>IoT</span>}
        </div>

        {/* Medical History */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:bg-gray-700 p-2 rounded"
          onClick={() => setPage("medical")}
        >
          <span className="text-lg">📝</span>
          {expanded && <span>Medical History</span>}
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 bg-gray-100 overflow-auto">{pages[page]}</div>
    </div>
  );
}
