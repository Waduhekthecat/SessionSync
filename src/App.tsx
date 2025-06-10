import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SessionLayout from './layouts/SessionLayout';
import SessionView from './views/app/SessionView';
import LoungeView from './views/app/LoungeView';
import AuthView from './views/auth/AuthView';
import AuthLayout from './layouts/AuthLayout';
import ProtectedRoute from './routes/ProtectedRoute'; // 👈 Make sure you created this
import { AuthProvider } from './contexts/AuthContext'; // 👈 Wrap app with this

function App() {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'r') {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes with AuthLayout */}
          <Route element={<AuthLayout />}>
            <Route path="/" element={<AuthView />} />
          </Route>

          <Route path="/lounge" element={<LoungeView />} />

          {/* Protected routes with MainLayout */}
          <Route element={<ProtectedRoute><SessionLayout /></ProtectedRoute>}>
            <Route path="/session/:sessionId" element={<SessionView />} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
