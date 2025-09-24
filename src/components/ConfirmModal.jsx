// src/components/ConfirmModal.jsx
import React from "react";

export default function ConfirmModal({ isOpen, onClose, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg p-6 w-80 sm:w-96">
        <h2 className="text-xl font-semibold mb-4">Success!</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          OK
        </button>
      </div>
    </div>
  );
}
