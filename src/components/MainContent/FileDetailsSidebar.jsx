import { FaTimes, FaFolder, FaFileExcel, FaUserFriends } from "react-icons/fa";

const FileDetailsSidebar = ({ file, onClose }) => {
  const renderIcon = () => {
    switch (file.type) {
      case "folder":
        return <FaFolder className="text-yellow-500" />;
      case "excel":
        return <FaFileExcel className="text-green-600" />;
      case "excel-shared":
        return (
          <>
            <FaFileExcel className="text-green-600" />
            <FaUserFriends className="text-gray-500" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-gray-800 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">File Details</h3>
        <button onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      <div className="flex items-center gap-3 mb-4 text-xl">
        {renderIcon()}
        <span className="font-medium">{file.name}</span>
      </div>

      <div className="text-sm space-y-2">
        <p>
          <strong>Type:</strong> {file.type}
        </p>
        <p>
          <strong>Owner:</strong> {file.owner}
        </p>
        <p>
          <strong>Modified:</strong> {file.modified}
        </p>
        <p>
          <strong>Size:</strong> {file.size || "—"}
        </p>
      </div>
    </div>
  );
};

export default FileDetailsSidebar;
