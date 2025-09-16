import React, { useState } from 'react'

export default function IntentInput({ onSubmit }) {
  const [intent, setIntent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!intent) return
    onSubmit(intent)
    setIntent('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4 w-full max-w-xl">
      <input
        type="text"
        value={intent}
        onChange={(e) => setIntent(e.target.value)}
        placeholder="Type your intent (e.g., Swap 50 USDC to ETH on cheapest chain)"
        className="flex-1 p-2 rounded-lg border border-gray-300"
      />
      <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
        Parse
      </button>
    </form>
  )
}