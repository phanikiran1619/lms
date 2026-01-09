import { ReactNode } from 'react';
import {
  LayoutDashboard, Users, BookOpen, Calendar, Award,
  DollarSign, Settings, Bell, Search, User, Menu, X,
  GraduationCap, MessageSquare, FileText, BarChart3,
  UserCog, Briefcase, LogOut
} from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
  activeRole: 'admin' | 'instructor' | 'student';
  onLogout: () => void;
}

const Layout = ({ children, activeRole, onLogout }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const adminMenuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'students', icon: Users, label: 'Students' },
    { id: 'instructors', icon: UserCog, label: 'Instructors' },
    { id: 'courses', icon: BookOpen, label: 'Courses' },
    { id: 'batches', icon: Calendar, label: 'Batches' },
    { id: 'payments', icon: DollarSign, label: 'Payments' },
    { id: 'certificates', icon: Award, label: 'Certificates' },
    { id: 'placements', icon: Briefcase, label: 'Placements' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const instructorMenuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'courses', icon: BookOpen, label: 'My Courses' },
    { id: 'batches', icon: Calendar, label: 'My Batches' },
    { id: 'students', icon: Users, label: 'Students' },
    { id: 'schedule', icon: Calendar, label: 'Schedule' },
    { id: 'doubts', icon: MessageSquare, label: 'Doubts' },
    { id: 'assignments', icon: FileText, label: 'Assignments' },
    { id: 'chat', icon: MessageSquare, label: 'Chat' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const studentMenuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'courses', icon: BookOpen, label: 'My Courses' },
    { id: 'live-classes', icon: Calendar, label: 'Live Classes' },
    { id: 'assignments', icon: FileText, label: 'Assignments' },
    { id: 'doubts', icon: MessageSquare, label: 'Doubts' },
    { id: 'certificates', icon: Award, label: 'Certificates' },
    { id: 'placement', icon: Briefcase, label: 'Placement' },
    { id: 'chat', icon: MessageSquare, label: 'Chat' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const getMenuItems = () => {
    switch (activeRole) {
      case 'admin':
        return adminMenuItems;
      case 'instructor':
        return instructorMenuItems;
      case 'student':
        return studentMenuItems;
    }
  };

  const getRoleColor = () => {
    switch (activeRole) {
      case 'admin':
        return 'bg-blue-600';
      case 'instructor':
        return 'bg-green-600';
      case 'student':
        return 'bg-orange-500';
    }
  };

  const getRoleName = () => {
    switch (activeRole) {
      case 'admin':
        return 'Super Admin';
      case 'instructor':
        return 'Instructor';
      case 'student':
        return 'Student';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <aside
        className={`${sidebarOpen ? 'w-64' : 'w-20'} ${getRoleColor()} text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-white/10">
          {sidebarOpen ? (
            <div className="flex items-center gap-2">
              <GraduationCap size={32} />
              <span className="font-bold text-xl">EduAdmin</span>
            </div>
          ) : (
            <GraduationCap size={28} />
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-white/10 rounded"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>


        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {getMenuItems().map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-white/10`}
                    title={item.label}
                  >
                    <Icon size={20} />
                    {sidebarOpen && <span>{item.label}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={onLogout}
            className={`w-full flex items-center gap-3 ${sidebarOpen ? 'px-3 py-2.5' : 'p-2'} rounded-lg hover:bg-white/10 transition-colors text-red-200 hover:text-red-100`}
            title="Logout"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={22} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">{getRoleName()}</div>
                <div className="text-xs text-gray-500">admin@eduadmin.com</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <User size={20} className="text-white" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
