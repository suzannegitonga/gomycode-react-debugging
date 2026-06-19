import { useState } from 'react'
import Counter from './Counter'
import UserProfile from './UserProfile'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>React Debugging Checkpoint</h1>
      
      {/* BUG 1 IS HERE: Look closely at the prop name being passed */}
      <UserProfile userTitle="Senior Developer" userName="Alex" />
      
      <Counter />
    </div>
  )
}

export default App