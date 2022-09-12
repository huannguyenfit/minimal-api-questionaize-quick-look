import { BrowserRouter } from 'react-router-dom';
import Loading from './@core/utils/loading/loading';
import RouteLayout from './layout/route-layout';
import { routings } from 'routings';

function App() {
  return (
    <div className='App'>
      <Loading />
      <BrowserRouter>
        <RouteLayout routers={routings}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
