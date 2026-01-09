import { Users, Search, Filter, Download, Plus, Edit2, Trash2, Eye } from 'lucide-react';

const StudentsList = () => {
  const students = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', enrollment: '2024-01-15', status: 'Active', batch: 'Elite A', progress: 78 },
    { id: 2, name: 'Mike Chen', email: 'mike@example.com', enrollment: '2024-02-01', status: 'Active', batch: 'Pro B', progress: 92 },
    { id: 3, name: 'Emma Davis', email: 'emma@example.com', enrollment: '2024-01-20', status: 'Inactive', batch: 'Basic', progress: 45 },
    { id: 4, name: 'James Wilson', email: 'james@example.com', enrollment: '2023-12-10', status: 'Active', batch: 'Elite A', progress: 88 },
    { id: 5, name: 'Lisa Brown', email: 'lisa@example.com', enrollment: '2024-02-15', status: 'Active', batch: 'Weekend', progress: 56 },
    { id: 6, name: 'David Lee', email: 'david@example.com', enrollment: '2023-11-05', status: 'Completed', batch: 'Elite B', progress: 100 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Student Management</h1>
        <p className="text-blue-100">Manage all students, track progress, and handle enrollments</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">All Students</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
            <Plus size={20} />
            Add New Student
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 font-medium text-gray-700">
            <Filter size={20} />
            Filter
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 font-medium text-gray-700">
            <Download size={20} />
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Student Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Email</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Batch</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Progress</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-medium text-gray-900">{student.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700">{student.email}</td>
                  <td className="py-4 px-4 text-sm text-gray-700">{student.batch}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-32">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      student.status === 'Active' ? 'bg-green-100 text-green-700' :
                      student.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors" title="View">
                        <Eye size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors" title="Edit">
                        <Edit2 size={18} className="text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-red-100 rounded-lg transition-colors" title="Delete">
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6 p-4 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">Showing 1-6 of 2,543 students</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm">Previous</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm">Next</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Students</p>
              <h3 className="text-2xl font-bold text-gray-900">2,543</h3>
              <p className="text-xs text-green-600 mt-2">↑ 12.5% from last month</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Students</p>
              <h3 className="text-2xl font-bold text-gray-900">1,845</h3>
              <p className="text-xs text-gray-600 mt-2">72.5% of total</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Avg Progress</p>
              <h3 className="text-2xl font-bold text-gray-900">72%</h3>
              <p className="text-xs text-orange-600 mt-2">↑ 8.3% improvement</p>
            </div>
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsList;
