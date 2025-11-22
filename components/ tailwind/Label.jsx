import React from "react";

export default function Label({ texto }) {
  return (
    <label className="block text-base font-medium text-gray-800 mb-1">
      {texto}
    </label>
  );
}
