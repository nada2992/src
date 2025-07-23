import { IoMdArrowDropup } from "react-icons/io";
import { HiOutlineSelector } from "react-icons/hi";
import { FaFolder, FaFileExcel, FaUserFriends } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const FileList = ({ files, onFileClick }) => (
  <>
    <div className="grid grid-cols-12 items-center py-2 border-b font-medium text-gray-600">
      <div className="col-span-5">Name</div>
      <div className="col-span-2">Owner</div>
      <div className="col-span-3">Date modified</div>
      <div className="col-span-1">File size</div>
      <div className="col-span-1 text-right">
        <HiOutlineSelector />
      </div>
    </div>
    {files.map((file, index) => (
      <div
        key={index}
        onClick={() => onFileClick(file)}
        className="grid grid-cols-12 items-center py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-b"
      >
        <div className="col-span-5 flex items-center gap-2">
          {file.type === "folder" && <FaFolder className="text-yellow-500" />}
          {file.type === "excel" && <FaFileExcel className="text-green-600" />}
          {file.type === "excel-shared" && (
            <>
              <FaFileExcel className="text-green-600" />
              <FaUserFriends className="text-gray-500" />
            </>
          )}
          <span>{file.name}</span>
        </div>
        <div className="col-span-2 flex items-center gap-2">
          <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            n
          </div>
          <span>{file.owner}</span>
        </div>
        <div className="col-span-3">{file.modified}</div>
        <div className="col-span-1">{file.size || "—"}</div>
        <div className="col-span-1 text-right">
          <BsThreeDotsVertical />
        </div>
      </div>
    ))}
  </>
);

export default FileList;
