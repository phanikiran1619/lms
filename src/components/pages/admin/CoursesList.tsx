import { BookOpen, Search, Filter, Download, Plus, Edit2, Trash2, Users, Eye } from 'lucide-react';

const CoursesList = () => {
  const courses = [
    { id: 1, title: 'Full Stack Development', instructor: 'Dr. Sarah Wilson', students: 245, batches: 4, status: 'Active', duration: '12 weeks' },
    { id: 2, title: 'React Mastery', instructor: 'Prof. Mike Chen', students: 189, batches: 3, status: 'Active', duration: '8 weeks' },
    { id: 3, title: 'Node.js Backend', instructor: 'James Kumar', students: 156, batches: 2, status: 'Active', duration: '10 weeks' },
    { id: 4, title: 'JavaScript Pro', instructor: 'Emma Davis', students: 312, batches: 5, status: 'Active', duration: '6 weeks' },
    { id: 5, title: 'Python for AI', instructor: 'Dr. Alex Brown', students: 98, batches: 1, status: 'Coming Soon', duration: '14 weeks' },
    { id: 6, title: 'Web Design Basics', instructor: 'Lisa Taylor', students: 267, batches: 3, status: 'Active', duration: '8 weeks' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Course Management</h1>
        <p className="text-green-100">Create, edit, and manage all courses on the platform</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">All Courses</h2>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2">
            <Plus size={20} />
            Create Course
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Course Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Instructor</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Students</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Batches</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Duration</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {course.title[0]}
                      </div>
                      <span className="font-medium text-gray-900">{course.title}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700">{course.instructor}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Users size={16} />
                      {course.students}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700">{course.batches}</td>
                  <td className="py-4 px-4 text-sm text-gray-700">{course.duration}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.status === 'Active' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors" title="View">
                        <Eye size={18} className="text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-green-100 rounded-lg transition-colors" title="Edit">
                        <Edit2 size={18} className="text-green-600" />
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Courses</p>
          <h3 className="text-2xl font-bold text-gray-900">45</h3>
          <p className="text-xs text-green-600 mt-2">↑ 5 new courses</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Active Now</p>
          <h3 className="text-2xl font-bold text-gray-900">38</h3>
          <p className="text-xs text-gray-600 mt-2">7 upcoming</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Enrollments</p>
          <h3 className="text-2xl font-bold text-gray-900">2,543</h3>
          <p className="text-xs text-green-600 mt-2">↑ 18.4% growth</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Avg Completion</p>
          <h3 className="text-2xl font-bold text-gray-900">76%</h3>
          <p className="text-xs text-orange-600 mt-2">↑ 3.2% improvement</p>
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
