import SettingsProvider from '@core/contexts/SettingsProvider';
import SnackbarProvider from '@core/contexts/SnackbarProvider';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loading from '@core/utils/loading/Loading';
import AppRoutes from './AppRoutes';
import  AuthProvider  from '@core/contexts/AuthProvider';
function App() {
  return (
    <>
      <BrowserRouter>
        <React.Suspense fallback={'Loading'}>
          <SettingsProvider>
            <SnackbarProvider>
              <Loading />
              <AuthProvider>
                <AppRoutes />
              </AuthProvider>
            </SnackbarProvider>
          </SettingsProvider>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}
export default App;
