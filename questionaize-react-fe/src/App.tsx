import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
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
