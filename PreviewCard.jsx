import React from 'react'

export default function PreviewCard({ parsed, onConfirm }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4 w-full max-w-xl">
      <h2 className="text-lg font-semibold mb-2">🔍 Parsed Intent</h2>
      <ul className="mb-2">
        {Object.entries(parsed).map(([key, value]) => (
          <li key={key}>
            <strong>{key}: </strong>{value}
          </li>
        ))}
      </ul>
      <button
        onClick={onConfirm}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Confirm & Execute
      </button>
    </div>
  )
}