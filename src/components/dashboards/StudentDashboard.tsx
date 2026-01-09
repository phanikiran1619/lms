import StatCard from '../common/StatCard';
import ModuleCard from '../common/ModuleCard';
import PageRouter from '../PageRouter';
import {
  BookOpen, Calendar, Video, FileText, MessageSquare,
  Award, Briefcase, Lock, CheckCircle, Clock, PlayCircle,
  Download, TrendingUp, ArrowLeft
} from 'lucide-react';

interface StudentDashboardProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const StudentDashboard = ({ onNavigate, currentPage }: StudentDashboardProps) => {
  if (currentPage !== 'dashboard') {
    return (
      <div>
        <button
          onClick={() => onNavigate('dashboard')}
          className="mb-6 px-4 py-2 flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
        <PageRouter role="student" page={currentPage} />
      </div>
    );
  }
  const enrolledCourses = [
    {
      id: 1,
      title: 'Full Stack Development',
      progress: 65,
      color: 'from-blue-500 to-blue-600',
      lessons: '24/40',
      nextLesson: 'React Hooks Advanced'
    },
    {
      id: 2,
      title: 'JavaScript Mastery',
      progress: 85,
      color: 'from-orange-500 to-orange-600',
      lessons: '34/40',
      nextLesson: 'Async/Await Patterns'
    },
    {
      id: 3,
      title: 'Node.js Backend',
      progress: 45,
      color: 'from-green-500 to-green-600',
      lessons: '18/40',
      nextLesson: 'Express Middleware'
    },
  ];

  const upcomingClasses = [
    { id: 1, title: 'React Advanced Patterns', instructor: 'Dr. Sarah Wilson', time: 'Today, 2:00 PM', live: true },
    { id: 2, title: 'Database Design', instructor: 'Prof. Mike Chen', time: 'Tomorrow, 10:00 AM', live: false },
    { id: 3, title: 'Doubt Session', instructor: 'James Kumar', time: 'Tomorrow, 4:00 PM', live: false },
  ];

  const assignments = [
    { id: 1, title: 'Build Todo App with React', due: '2 days left', status: 'pending', color: 'red' },
    { id: 2, title: 'JavaScript Algorithm Challenge', due: '5 days left', status: 'pending', color: 'orange' },
    { id: 3, title: 'REST API Project', due: 'Completed', status: 'completed', color: 'green' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Your Learning Journey Starts Here 🎓</h1>
          <p className="text-orange-50 mb-6">
            Track progress, attend classes, and build your career
          </p>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 bg-white text-orange-600 rounded-lg font-medium hover:bg-orange-50 transition-colors">
              ▶ Join Live Class
            </button>
            <button className="px-6 py-2.5 bg-orange-700 text-white rounded-lg font-medium hover:bg-orange-800 transition-colors border border-orange-300">
              📚 Continue Learning
            </button>
          </div>
        </div>
        <div className="absolute right-8 bottom-0 text-8xl opacity-20">🎓</div>
        <div className="absolute right-32 top-8 text-5xl opacity-30">📖</div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">My Learning Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Enrolled Courses"
            value="3"
            icon={BookOpen}
            color="bg-blue-500"
          />
          <StatCard
            title="Current Batch"
            value="Elite A"
            icon={Calendar}
            color="bg-green-500"
          />
          <StatCard
            title="Overall Progress"
            value="65%"
            icon={TrendingUp}
            trend={{ value: "+12%", isPositive: true }}
            color="bg-orange-500"
          />
          <StatCard
            title="Upcoming Classes"
            value="3"
            icon={Video}
            color="bg-red-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">My Courses</h3>
              <button className="text-sm text-orange-600 font-medium hover:text-orange-700">View All</button>
            </div>
            <div className="space-y-4">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{course.title}</h4>
                      <p className="text-sm text-gray-600">📚 Lessons: {course.lessons}</p>
                    </div>
                    <span className="text-sm font-semibold text-orange-600">{course.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
                    <div
                      className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Next: {course.nextLesson}</span>
                    <button className="px-4 py-1.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium">
                      Continue
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900">Upcoming Live Classes</h3>
              <button className="text-sm text-orange-600 font-medium hover:text-orange-700">View All</button>
            </div>
            <div className="space-y-3">
              {upcomingClasses.map((cls) => (
                <div key={cls.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer">
                  <div className={`w-12 h-12 ${cls.live ? 'bg-red-500' : 'bg-blue-500'} rounded-lg flex items-center justify-center`}>
                    {cls.live ? (
                      <Video className="text-white" size={24} />
                    ) : (
                      <Calendar className="text-white" size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-900">{cls.title}</h4>
                      {cls.live && (
                        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded-full animate-pulse">
                          LIVE
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">👨‍🏫 {cls.instructor}</p>
                    <p className="text-xs text-gray-500 mt-1">🕐 {cls.time}</p>
                  </div>
                  <button className={`px-4 py-2 ${cls.live ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-600 hover:bg-gray-700'} text-white rounded-lg transition-colors font-medium text-sm`}>
                    {cls.live ? 'Join Now' : 'Set Reminder'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Assignments</h3>
            <div className="space-y-3">
              {assignments.map((assignment) => (
                <div key={assignment.id} className={`p-3 rounded-lg border ${
                  assignment.status === 'completed' ? 'bg-green-50 border-green-200' :
                  assignment.color === 'red' ? 'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200'
                }`}>
                  <div className="flex items-start gap-2">
                    {assignment.status === 'completed' ? (
                      <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Clock size={18} className={`text-${assignment.color}-600 flex-shrink-0 mt-0.5`} />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{assignment.title}</p>
                      <p className={`text-xs mt-1 ${
                        assignment.status === 'completed' ? 'text-green-600' : `text-${assignment.color}-600`
                      }`}>
                        {assignment.due}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-lg font-bold mb-2">Upgrade to Elite</h3>
            <p className="text-sm text-blue-100 mb-4">
              Get placement support, mock interviews & career guidance
            </p>
            <button className="w-full px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Learning Resources</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div onClick={() => onNavigate('courses')} className="cursor-pointer">
            <ModuleCard
              title="Recorded Classes"
              description="Access all recorded sessions"
              icon={PlayCircle}
              color="bg-blue-500"
              badge="48 videos"
            />
          </div>
          <ModuleCard
            title="Live Classes"
            description="Join interactive sessions"
            icon={Video}
            color="bg-red-500"
            badge="3 upcoming"
          />
          <ModuleCard
            title="Assignments & Tests"
            description="Practice and improve skills"
            icon={FileText}
            color="bg-orange-500"
            badge="2 pending"
          />
          <ModuleCard
            title="Doubt Sessions"
            description="Get your questions answered"
            icon={MessageSquare}
            color="bg-green-500"
          />
          <ModuleCard
            title="Batch Chat"
            description="Connect with classmates"
            icon={MessageSquare}
            color="bg-cyan-500"
          />
          <div className="relative">
            <div className="absolute inset-0 bg-gray-900/5 backdrop-blur-sm rounded-xl z-10 flex items-center justify-center">
              <div className="bg-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
                <Lock size={18} className="text-orange-600" />
                <span className="font-semibold text-gray-900">Upgrade to Unlock</span>
              </div>
            </div>
            <ModuleCard
              title="Career Placement"
              description="Resume, interviews & job support"
              icon={Briefcase}
              color="bg-violet-500"
              badge="Elite Only"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center text-3xl">
              🎓
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">Certification Progress</h3>
              <p className="text-sm text-gray-600">Complete courses to earn certificates</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Completion</span>
              <span className="text-sm font-bold text-gray-900">65%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" style={{ width: '65%' }} />
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle size={16} className="text-green-600" />
            <span>1 certificate earned</span>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium flex items-center justify-center gap-2">
            <Download size={18} />
            Download Certificate
          </button>
        </div>

        <div className="bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 text-6xl opacity-20">💼</div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <Lock className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Placement Support</h3>
            <p className="text-violet-100 text-sm mb-4">
              Elite members get exclusive access to:
            </p>
            <ul className="space-y-2 text-sm text-violet-100 mb-4">
              <li>✓ Resume building & reviews</li>
              <li>✓ Mock interview sessions</li>
              <li>✓ Job placement assistance</li>
              <li>✓ Career guidance</li>
            </ul>
            <button className="w-full px-4 py-2 bg-white text-violet-600 rounded-lg font-medium hover:bg-violet-50 transition-colors">
              Upgrade to Elite Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
