import { FaFolder, FaFileExcel, FaUserFriends } from "react-icons/fa";

const FileGrid = ({ files, onFileClick }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {files.map((file, index) => (
      <div
        key={index}
        onClick={() => onFileClick(file)}
        className="border dark:border-gray-500 rounded-lg p-4 hover:shadow-md transition cursor-pointer bg-gray-50 dark:bg-gray-800"
      >
        <div className="flex items-center gap-2 mb-2">
          {file.type === "folder" && <FaFolder className="text-yellow-500" />}
          {file.type === "excel" && <FaFileExcel className="text-green-600" />}
          {file.type === "excel-shared" && (
            <>
              <FaFileExcel className="text-green-600" />
              <FaUserFriends className="text-gray-500" />
            </>
          )}
          <span className="font-medium">{file.name}</span>
        </div>
        <div className="text-xs text-gray-500">Owner: {file.owner}</div>
        <div className="text-xs text-gray-500">Modified: {file.modified}</div>
        <div className="text-xs text-gray-500">Size: {file.size || "—"}</div>
      </div>
    ))}
  </div>
);

export default FileGrid;
