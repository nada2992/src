import { useState } from "react";
import TopBar from "./Topbar.jsx";
import Filters from "./Filters.jsx";
import FileList from "./FileList.tsx";
import FileGrid from "./FileGrid";

const MainContent = ({ search, onFileClick }) => {
  const files = [
    {
      name: "Colab Notebooks",
      type: "folder",
      owner: "me",
      modified: "26 Feb 2024",
      size: "",
    },
    {
      name: "Cv",
      type: "folder",
      owner: "me",
      modified: "17 Feb 2024",
      size: "",
    },
    {
      name: "Meeting",
      type: "folder",
      owner: "me",
      modified: "14 Oct 2024",
      size: "",
    },
    {
      name: "Mini group",
      type: "folder",
      owner: "me",
      modified: "9 Oct 2024",
      size: "",
    },
    {
      name: "Quality 5",
      type: "excel",
      owner: "me",
      modified: "11 Feb",
      size: "3.4 MB",
    },
    {
      name: "Assistant 2023",
      type: "excel-shared",
      owner: "me",
      modified: "4 Jul 2023",
      size: "5 KB",
    },
    {
      name: "Copy of New Quality1 - 9 February, 22:08",
      type: "excel",
      owner: "me",
      modified: "11 Feb",
      size: "3.5 MB",
    },
  ];

  const fileTypeOptions = ["all", "folder", "excel", "excel-shared"];
  const [view, setView] = useState("list");
  const [selectedType, setSelectedType] = useState("all");
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  const filteredFiles = files.filter((file) => {
    const matchesType = selectedType === "all" || file.type === selectedType;
    const matchesSearch =
      !search || file.name.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="px-6 py-3 text-sm text-gray-800 dark:text-white bg-white dark:bg-gray-800 rounded-2xl relative">
      <TopBar view={view} setView={setView} />
      <Filters
        fileTypeOptions={fileTypeOptions}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        showTypeDropdown={showTypeDropdown}
        setShowTypeDropdown={setShowTypeDropdown}
      />
      {view === "list" ? (
        <FileList files={filteredFiles} onFileClick={onFileClick} />
      ) : (
        <FileGrid files={filteredFiles} onFileClick={onFileClick} />
      )}
    </div>
  );
};

export default MainContent;
