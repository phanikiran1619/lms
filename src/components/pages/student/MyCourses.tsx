import { BookOpen, Clock, Users, Play, Download, Award } from 'lucide-react';

const MyCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Full Stack Development',
      instructor: 'Dr. Sarah Wilson',
      progress: 65,
      lessons: '24/40',
      rating: 4.8,
      color: 'from-blue-500 to-blue-600',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'JavaScript Mastery',
      instructor: 'Prof. Mike Chen',
      progress: 92,
      lessons: '34/40',
      rating: 4.9,
      color: 'from-orange-500 to-orange-600',
      status: 'Almost Done'
    },
    {
      id: 3,
      title: 'Node.js Backend',
      instructor: 'James Kumar',
      progress: 45,
      lessons: '18/40',
      rating: 4.7,
      color: 'from-green-500 to-green-600',
      status: 'Just Started'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">My Courses</h1>
        <p className="text-orange-100">Track your learning progress across all enrolled courses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Active Courses</p>
          <h3 className="text-2xl font-bold text-gray-900">3</h3>
          <p className="text-xs text-orange-600 mt-2">1 course to complete soon</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Avg Progress</p>
          <h3 className="text-2xl font-bold text-gray-900">67%</h3>
          <p className="text-xs text-green-600 mt-2">↑ 12% from last month</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Certificates</p>
          <h3 className="text-2xl font-bold text-gray-900">1</h3>
          <p className="text-xs text-gray-600 mt-2">1 more to earn</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Your Enrolled Courses</h2>
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row">
              <div className={`w-full md:w-48 h-48 md:h-auto bg-gradient-to-br ${course.color}`}></div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-600">by {course.instructor}</p>
                    </div>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                      {course.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <BookOpen size={16} />
                      {course.lessons}
                    </div>
                    <div className="flex items-center gap-1">
                      ⭐ {course.rating}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm font-bold text-gray-900">{course.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${course.color} rounded-full`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium flex items-center justify-center gap-2">
                      <Play size={18} />
                      Continue Learning
                    </button>
                    {course.progress === 100 ? (
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2">
                        <Download size={18} />
                        Certificate
                      </button>
                    ) : (
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                        Share
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Next Live Classes</h2>
          <div className="space-y-3">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-gray-900">React Advanced Patterns</h4>
                <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded animate-pulse">LIVE SOON</span>
              </div>
              <p className="text-sm text-gray-600">Today at 2:00 PM</p>
              <button className="w-full mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                Join Class
              </button>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Database Design Masterclass</h4>
              <p className="text-sm text-gray-600">Tomorrow at 10:00 AM</p>
              <button className="w-full mt-3 px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-medium">
                Set Reminder
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold mb-2">Ready to Advance?</h2>
              <p className="text-green-100 text-sm">Upgrade to Elite and unlock exclusive placement support</p>
            </div>
            <Award size={32} className="opacity-50" />
          </div>
          <ul className="space-y-2 text-sm text-green-50 mb-4">
            <li>✓ Resume reviews & optimization</li>
            <li>✓ Mock interview sessions</li>
            <li>✓ Job placement assistance</li>
            <li>✓ Career mentoring</li>
          </ul>
          <button className="w-full px-4 py-2 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors font-medium">
            Upgrade to Elite
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
