import RouteLayout from './layout/RouterLayout';
import { routings } from 'Routings';
import SettingsProvider from '@core/contexts/SettingsProvider';
import SnackbarProvider from '@core/contexts/SnackbarProvider';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loading from '@core/utils/loading/Loading';
function App() {
  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback={"Loading"}>
          <SettingsProvider>
            <SnackbarProvider>
              <Loading />
              <RouteLayout routers={routings} />
            </SnackbarProvider>
          </SettingsProvider>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}
export default App;
