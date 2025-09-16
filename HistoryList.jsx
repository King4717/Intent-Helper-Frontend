import React from 'react'

export default function HistoryList({ history }) {
  return (
    <div className="w-full max-w-xl">
      <h2 className="text-lg font-semibold mb-2">🕑 History</h2>
      {history.length === 0 && <p className="text-gray-500">No intents yet.</p>}
      <ul>
        {history.map((item, idx) => (
          <li key={idx} className="bg-white rounded-xl shadow-sm p-3 mb-2">
            {item.action} {item.amount} {item.token} → {item.receiver || item.chain} ({item.status})
          </li>
        ))}
      </ul>
    </div>
  )
}