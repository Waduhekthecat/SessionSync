import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import MainView from './views/MainView';
// import AuthPage from './views/AuthView';
// import AuthLayout from './layouts/AuthLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with AuthLayout */}
        {/* <Route element={<AuthLayout />}>
          <Route path="/login" element={<AuthPage />} />
        </Route> */}

        {/* Protected routes with AppLayout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<MainView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
