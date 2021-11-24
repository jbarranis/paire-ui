import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import { AppProviders } from "./components/AppProviders";
import { AuthProvider } from "./components/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute";
// import { NotFound } from "./components/NotFound";
import { Home } from './pages/Home';
import { Login } from './pages/Login';

const queryClient = new QueryClient();

function App() {
  return (
    <AppProviders>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </AppProviders>
  );
}

export default App;
