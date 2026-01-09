import { Users, TrendingUp, Award, MessageSquare } from 'lucide-react';

const StudentProgress = () => {
  const students = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', progress: 92, score: 88, status: 'Excellent', attendance: 96 },
    { id: 2, name: 'Mike Chen', email: 'mike@example.com', progress: 78, score: 75, status: 'Good', attendance: 89 },
    { id: 3, name: 'Emma Davis', email: 'emma@example.com', progress: 65, score: 62, status: 'Average', attendance: 72 },
    { id: 4, name: 'James Wilson', email: 'james@example.com', progress: 88, score: 85, status: 'Excellent', attendance: 94 },
    { id: 5, name: 'Lisa Brown', email: 'lisa@example.com', progress: 45, score: 42, status: 'Below Avg', attendance: 58 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Student Progress Tracking</h1>
        <p className="text-green-100">Monitor individual student performance and engagement</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Students</p>
          <h3 className="text-2xl font-bold text-gray-900">245</h3>
          <p className="text-xs text-green-600 mt-2">↑ 12 new this week</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Avg Progress</p>
          <h3 className="text-2xl font-bold text-gray-900">74%</h3>
          <p className="text-xs text-green-600 mt-2">↑ 3% improvement</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Active This Week</p>
          <h3 className="text-2xl font-bold text-gray-900">189</h3>
          <p className="text-xs text-gray-600 mt-2">77% engagement</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Need Attention</p>
          <h3 className="text-2xl font-bold text-gray-900">12</h3>
          <p className="text-xs text-red-600 mt-2">Below average progress</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Student Performance Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Student</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Progress</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Score</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Attendance</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{student.name}</p>
                        <p className="text-xs text-gray-600">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-24">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-green-600"
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">{student.score}%</span>
                      <TrendingUp size={16} className="text-green-600" />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{student.attendance}%</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      student.status === 'Excellent' ? 'bg-green-100 text-green-700' :
                      student.status === 'Good' ? 'bg-blue-100 text-blue-700' :
                      student.status === 'Average' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium flex items-center gap-1">
                      <MessageSquare size={14} />
                      Message
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Top Performers</h2>
          <div className="space-y-3">
            {students.slice(0, 3).map((student, idx) => (
              <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {idx + 1}
                  </div>
                  <span className="font-medium text-gray-900">{student.name}</span>
                </div>
                <span className="text-sm font-bold text-green-600">{student.progress}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Needs Support</h2>
          <div className="space-y-3">
            {students.slice(3).map((student) => (
              <div key={student.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">!</div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 text-sm">{student.name}</p>
                    <p className="text-xs text-red-600">Progress: {student.progress}%</p>
                  </div>
                </div>
                <button className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                  Help
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProgress;
