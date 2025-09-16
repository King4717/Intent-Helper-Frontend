import React, { useState } from 'react'
import IntentInput from './components/IntentInput'
import PreviewCard from './components/PreviewCard'
import HistoryList from './components/HistoryList'

export default function App() {
  const [history, setHistory] = useState([])
  const [parsed, setParsed] = useState(null)

  const handleIntent = (intent) => {
    // Mock parsing logic
    let parsedData = { action: '', token: '', amount: '', chain: '', receiver: '' }
    if (intent.toLowerCase().includes('swap')) {
      parsedData.action = 'Swap'
      parsedData.amount = intent.match(/\d+/)?.[0] || 'Unknown'
      parsedData.token = intent.match(/usdc|eth|btc/i)?.[0].toUpperCase() || 'Unknown'
      parsedData.chain = 'Polygon (cheapest chain)'
    } else if (intent.toLowerCase().includes('send')) {
      parsedData.action = 'Send'
      parsedData.amount = intent.match(/\d+/)?.[0] || 'Unknown'
      parsedData.token = intent.match(/eth|usdc|btc/i)?.[0].toUpperCase() || 'Unknown'
      parsedData.receiver = intent.match(/to (\w+)/i)?.[1] || 'Unknown'
      parsedData.chain = 'Fastest chain (Polygon)'
    } else {
      parsedData.action = 'Unknown'
    }
    setParsed(parsedData)
  }

  const confirmIntent = () => {
    if (parsed) {
      setHistory([{ ...parsed, status: 'Executed ✅' }, ...history])
      setParsed(null)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-b from-purple-100 to-indigo-200">
      <h1 className="text-3xl font-bold mb-6">⚡ Intent Helper</h1>
      <IntentInput onSubmit={handleIntent} />
      {parsed && <PreviewCard parsed={parsed} onConfirm={confirmIntent} />}
      <HistoryList history={history} />
    </div>
  )
}