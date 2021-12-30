import { useState } from 'react'
import {  Link, withRouter} from 'react-router-dom';
import logo from '@/assets/logo.svg'
import { DatePicker,Button } from 'antd-mobile';
import './index.less'

function Index() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState();

  return (
    <div className="Index">
    <Button>111</Button>
        <DatePicker
          value={date}
          onChange={date => {console.log(date);setDate(date)}}
        >
          222
        </DatePicker>
    <DatePicker />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {' | '}

        <Link to="detail">page detail</Link>
        </p>
      </header>
    </div>
  )
}

export default withRouter(Index)
