import React from 'react';

interface ConfirmDeleteProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDelete: React.FC <ConfirmDeleteProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-transparent ">
      <div className="bg-white p-11 h-1/3 w-1/3 rounded shadow-md">
        <p className=" text-xl text-red-900 mb-4 mt-10">Are you sure you want to delete?</p>
        <button className="bg-white hover:bg-red-500 text-black px-4 py-2 mr-2 rounded" onClick={onConfirm}>
          Confirm
        </button>
        <button className="bg-gray-300 px-4 py-2 rounded hover:bg-red-500" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;