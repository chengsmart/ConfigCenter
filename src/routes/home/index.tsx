
import { renderRoutes } from 'react-router-config';
import './index.less'

const Home = (props:any) => {
  console.log('props');
  console.log(props);
  const route = props.route;
  return (<div className="home">
    <h1>home</h1>

    {route && renderRoutes(route.routes)}
  </div>
  )
}

export default Home;
