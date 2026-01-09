import { useState } from 'react';
import Layout from './components/Layout';
import LoginPage from './components/auth/LoginPage';
import SuperAdminDashboard from './components/dashboards/SuperAdminDashboard';
import InstructorDashboard from './components/dashboards/InstructorDashboard';
import StudentDashboard from './components/dashboards/StudentDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'instructor' | 'student' | null>(null);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = (role: 'admin' | 'instructor' | 'student') => {
    setUserRole(role);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setCurrentPage('dashboard');
  };

  if (!isLoggedIn || !userRole) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderDashboard = () => {
    switch (userRole) {
      case 'admin':
        return <SuperAdminDashboard onNavigate={setCurrentPage} currentPage={currentPage} />;
      case 'instructor':
        return <InstructorDashboard onNavigate={setCurrentPage} currentPage={currentPage} />;
      case 'student':
        return <StudentDashboard onNavigate={setCurrentPage} currentPage={currentPage} />;
    }
  };

  return (
    <Layout activeRole={userRole} onLogout={handleLogout}>
      {renderDashboard()}
    </Layout>
  );
}

export default App;
