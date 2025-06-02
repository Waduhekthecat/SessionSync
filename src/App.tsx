import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainView from './views/app/MainView';
import AuthView from './views/auth/AuthView';
import AuthLayout from './layouts/AuthLayout';
import ProtectedRoute from './routes/ProtectedRoute'; // 👈 Make sure you created this
import { AuthProvider } from './contexts/AuthContext'; // 👈 Wrap app with this

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes with AuthLayout */}
          <Route element={<AuthLayout />}>
            <Route path="/" element={<AuthView />} />
          </Route>

          {/* Protected routes with MainLayout */}
          <Route element={<ProtectedRoute> <MainLayout /></ProtectedRoute>}>
            <Route path="/session" element={<MainView />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
