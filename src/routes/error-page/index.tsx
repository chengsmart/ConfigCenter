import { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import './index.less'

const ErrorPage = (props) => {
  const {route}=props
  return (
    <div className="error-page">
      <h1>404</h1>
    {route && renderRoutes(route.routes)}
    </div>
  )
}

export default ErrorPage
