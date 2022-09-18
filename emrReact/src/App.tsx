import SettingsProvider from "@core/contexts/SettingsProvider";
import SnackbarProvider from "@core/contexts/SnackbarProvider";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Loading from "@core/components/loading/Loading";
import AppRoutes from "./AppRoutes";
import AuthProvider from "@core/contexts/AuthProvider";
import SplashScreen from "@core/components/SplashScreen";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { HotKeys } from "react-hotkeys";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new BrowserTracing()],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <React.Suspense fallback={<SplashScreen />}>
            <Sentry.ErrorBoundary>
              <HotKeys>
                <SettingsProvider>
                  <SnackbarProvider>
                    <Loading />
                    <AppRoutes />
                  </SnackbarProvider>
                </SettingsProvider>
              </HotKeys>
            </Sentry.ErrorBoundary>
          </React.Suspense>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
