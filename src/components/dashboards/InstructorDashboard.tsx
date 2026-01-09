import StatCard from '../common/StatCard';
import ModuleCard from '../common/ModuleCard';
import PageRouter from '../PageRouter';
import {
  BookOpen, Calendar, Users, MessageSquare, Video,
  FileText, Clock, PlayCircle, Upload, CheckCircle,
  AlertCircle, TrendingUp, ArrowLeft
} from 'lucide-react';

interface InstructorDashboardProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const InstructorDashboard = ({ onNavigate, currentPage }: InstructorDashboardProps) => {
  if (currentPage !== 'dashboard') {
    return (
      <div>
        <button
          onClick={() => onNavigate('dashboard')}
          className="mb-6 px-4 py-2 flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
        <PageRouter role="instructor" page={currentPage} />
      </div>
    );
  }
  const upcomingSessions = [
    { id: 1, title: 'React Advanced Patterns', time: '10:00 AM', batch: 'Elite Batch A', students: 24, color: 'bg-blue-500' },
    { id: 2, title: 'JavaScript ES6+', time: '02:00 PM', batch: 'Pro Batch B', students: 18, color: 'bg-green-500' },
    { id: 3, title: 'Doubt Session', time: '04:30 PM', batch: 'Weekend Batch', students: 32, color: 'bg-orange-500' },
  ];

  const recentStudents = [
    { id: 1, name: 'Sarah Johnson', course: 'Full Stack Development', progress: 78, status: 'On Track' },
    { id: 2, name: 'Mike Chen', course: 'React Mastery', progress: 92, status: 'Excellent' },
    { id: 3, name: 'Emma Davis', course: 'JavaScript Pro', progress: 65, status: 'Needs Help' },
    { id: 4, name: 'James Wilson', course: 'Full Stack Development', progress: 88, status: 'On Track' },
  ];

  const pendingTasks = [
    { id: 1, task: 'Review Assignment Submissions', count: 12, urgent: true },
    { id: 2, task: 'Answer Student Doubts', count: 8, urgent: true },
    { id: 3, task: 'Upload Recorded Session', count: 3, urgent: false },
    { id: 4, task: 'Grade Tests', count: 5, urgent: false },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Welcome Back, Instructor! 👨‍🏫</h1>
          <p className="text-green-50 mb-6">
            Your batches, students, and sessions at a glance
          </p>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 bg-white text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors">
              ▶ Start Live Class
            </button>
            <button className="px-6 py-2.5 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition-colors border border-green-400">
              ⬆ Upload Content
            </button>
          </div>
        </div>
        <div className="absolute right-8 bottom-0 text-8xl opacity-20">👨‍🏫</div>
        <div className="absolute right-32 top-8 text-5xl opacity-30">📚</div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Assigned Courses"
            value="8"
            icon={BookOpen}
            color="bg-blue-500"
          />
          <StatCard
            title="My Batches"
            value="5"
            icon={Calendar}
            color="bg-green-500"
          />
          <StatCard
            title="Live Sessions Today"
            value="3"
            icon={Video}
            color="bg-orange-500"
          />
          <StatCard
            title="Pending Doubts"
            value="8"
            icon={MessageSquare}
            trend={{ value: "-3", isPositive: true }}
            color="bg-red-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Today's Schedule</h3>
            <button className="text-sm text-green-600 font-medium hover:text-green-700">View All</button>
          </div>
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <div className={`w-12 h-12 ${session.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                  {session.time.split(':')[0]}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{session.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span>🎯 {session.batch}</span>
                    <span>👥 {session.students} students</span>
                    <span>🕐 {session.time}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Start
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Pending Tasks</h3>
          <div className="space-y-3">
            {pendingTasks.map((item) => (
              <div key={item.id} className={`p-3 rounded-lg ${item.urgent ? 'bg-red-50 border border-red-200' : 'bg-gray-50'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.task}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.count} items</p>
                  </div>
                  {item.urgent && (
                    <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Teaching Tools</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div onClick={() => onNavigate('courses')} className="cursor-pointer">
            <ModuleCard
              title="My Courses"
              description="Manage course content and materials"
              icon={BookOpen}
              color="bg-blue-500"
              badge="8 courses"
            />
          </div>
          <ModuleCard
            title="My Batches"
            description="View and manage assigned batches"
            icon={Calendar}
            color="bg-green-500"
            badge="5 batches"
          />
          <div onClick={() => onNavigate('students')} className="cursor-pointer">
            <ModuleCard
              title="Student Progress"
              description="Track student performance and engagement"
              icon={TrendingUp}
              color="bg-orange-500"
            />
          </div>
          <ModuleCard
            title="Assignments & Tests"
            description="Create and grade assessments"
            icon={FileText}
            color="bg-cyan-500"
            badge="12 pending"
          />
          <ModuleCard
            title="Doubt Management"
            description="Answer student questions"
            icon={MessageSquare}
            color="bg-red-500"
            badge="8 new"
          />
          <ModuleCard
            title="Recorded Content"
            description="Upload and manage recordings"
            icon={Upload}
            color="bg-violet-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Recent Student Activity</h3>
          <button className="text-sm text-green-600 font-medium hover:text-green-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Student</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Course</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Progress</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentStudents.map((student) => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-medium text-gray-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700">{student.course}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-32">
                        <div
                          className={`h-full rounded-full ${
                            student.progress >= 80 ? 'bg-green-500' :
                            student.progress >= 60 ? 'bg-orange-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      student.status === 'Excellent' ? 'bg-green-100 text-green-700' :
                      student.status === 'On Track' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
