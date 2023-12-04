import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello World</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet numquam quibusdam voluptatum. Repudiandae reiciendis nihil architecto optio mollitia tempora, dolorum doloribus dolore animi, sint quis aut excepturi necessitatibus veritatis deleniti?
        </p>
      </div>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit pariatur quod tempore soluta consequuntur, necessitatibus, sint architecto nesciunt quam in asperiores dolore minus repudiandae. Repellendus, quia delectus! Sapiente, expedita?
      </p>
    </>
  )
}

export default App
