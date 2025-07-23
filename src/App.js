import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import FileDetailsSidebar from "./components/FileDetailsSidebar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="min-h-screen flex gap-2 bg-gray-50">
      <Sidebar />

      <div className="flex w-full justify-between pr-4">
        <div className={`flex flex-col ${selectedFile ? "w-3/4" : "w-full"}`}>
          <Header onSearch={setSearchTerm} />
          <MainContent search={searchTerm} onFileClick={setSelectedFile} />
        </div>

        {selectedFile && (
          <div className="w-1/4 pl-4 h-screen">
            <div className="bg-white rounded-xl shadow-md p-6 mt-6 min-h-[90vh] overflow-y-auto">
              <FileDetailsSidebar
                file={selectedFile}
                onClose={() => setSelectedFile(null)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
