import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './index.css'

function Detail() {
  const [count, setCount] = useState(0)

  return (
    <div className="detail">
      <h1>detail</h1>
    </div>
  )
}

export default withRouter(Detail)
