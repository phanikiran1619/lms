import { useState } from 'react';
import { GraduationCap, Mail, Lock, ArrowRight } from 'lucide-react';

interface LoginPageProps {
  onLogin: (role: 'admin' | 'instructor' | 'student') => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'admin' | 'instructor' | 'student' | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const roles = [
    {
      id: 'admin',
      title: 'Super Admin',
      description: 'Platform management & analytics',
      icon: '👨‍💼',
      color: 'from-blue-500 to-blue-600',
      email: 'admin@eduadmin.com'
    },
    {
      id: 'instructor',
      title: 'Instructor',
      description: 'Teaching & mentorship',
      icon: '👨‍🏫',
      color: 'from-green-500 to-green-600',
      email: 'instructor@eduadmin.com'
    },
    {
      id: 'student',
      title: 'Student',
      description: 'Learning & skill building',
      icon: '🎓',
      color: 'from-orange-500 to-orange-600',
      email: 'student@eduadmin.com'
    }
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!selectedRole) {
      setError('Please select a role');
      return;
    }

    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin(selectedRole);
    }, 800);
  };

  const quickLoginRole = (role: 'admin' | 'instructor' | 'student') => {
    const roleData = roles.find(r => r.id === role);
    if (roleData) {
      setEmail(roleData.email);
      setPassword('demo123');
      setSelectedRole(role);
      setError('');
      setTimeout(() => {
        onLogin(role);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                <GraduationCap size={32} className="text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">EduAdmin</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Your Learning Ecosystem
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Manage courses, mentor students, or continue your learning journey. Choose your role and get started.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Interactive Dashboards</h3>
                  <p className="text-gray-600 text-sm">Real-time analytics and insights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Seamless Management</h3>
                  <p className="text-gray-600 text-sm">Manage users, courses, and payments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Career Growth</h3>
                  <p className="text-gray-600 text-sm">Build skills and achieve your goals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign In to Your Account</h2>
            <p className="text-gray-600 mb-6">Select your role to continue</p>

            <div className="grid grid-cols-3 gap-2 mb-8">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id as any)}
                  className={`p-3 rounded-xl border-2 transition-all text-center ${
                    selectedRole === role.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-3xl mb-1">{role.icon}</div>
                  <div className="text-xs font-medium text-gray-700">{role.title}</div>
                </button>
              ))}
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? 'Signing in...' : 'Sign In'}
                {!loading && <ArrowRight size={20} />}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Quick Demo Login</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {roles.map((role) => (
                <button
                  key={`quick-${role.id}`}
                  onClick={() => quickLoginRole(role.id as any)}
                  className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all text-center"
                  title={`Demo: ${role.email}`}
                >
                  <div className="text-xl mb-1">{role.icon}</div>
                  <div className="text-xs text-gray-600">Demo</div>
                </button>
              ))}
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Demo credentials: Use any email/password (e.g., demo123)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
