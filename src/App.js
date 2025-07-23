import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import FileDetailsSidebar from "./components/MainContent/FileDetailsSidebar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="min-h-screen flex gap-2 bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <div className="flex w-full justify-between pr-4">
        <div className={`flex-1 pl-4 h-screen overflow-y-auto`}>
          <Header onSearch={setSearchTerm} />
          <MainContent search={searchTerm} onFileClick={setSelectedFile} />
        </div>

        {selectedFile && (
          <div className="w-1/4 pl-4 h-screen">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mt-6 min-h-[90vh] overflow-y-auto">
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
