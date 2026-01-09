import { BookOpen, Users, Video, FileText, Plus, Edit2, Trash2, Eye } from 'lucide-react';

const CourseDetail = () => {
  const courseContent = [
    { id: 1, title: 'Module 1: React Basics', type: 'Video', duration: '45 min', students: 245, status: 'Published' },
    { id: 2, title: 'Module 2: Components & Props', type: 'Video', duration: '60 min', students: 238, status: 'Published' },
    { id: 3, title: 'Module 3: State Management', type: 'Video', duration: '75 min', students: 215, status: 'Published' },
    { id: 4, title: 'Module 4: Hooks', type: 'Video', duration: '90 min', students: 189, status: 'Published' },
    { id: 5, title: 'Assignment 1: Build Todo App', type: 'Assignment', duration: '2 weeks', students: 156, status: 'Published' },
    { id: 6, title: 'Quiz 1: React Fundamentals', type: 'Quiz', duration: '30 min', students: 143, status: 'Published' },
  ];

  const stats = [
    { label: 'Total Lessons', value: '24', color: 'bg-blue-500' },
    { label: 'Avg Rating', value: '4.8/5', color: 'bg-orange-500' },
    { label: 'Completion', value: '78%', color: 'bg-green-500' },
    { label: 'Students', value: '245', color: 'bg-purple-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">React Mastery Course</h1>
        <p className="text-green-100">Manage course content, lessons, and student progress</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg`}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Course Content</h2>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2">
            <Plus size={20} />
            Add Lesson
          </button>
        </div>

        <div className="space-y-3">
          {courseContent.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold ${
                  item.type === 'Video' ? 'bg-red-500' :
                  item.type === 'Assignment' ? 'bg-orange-500' :
                  'bg-blue-500'
                }`}>
                  {item.type === 'Video' ? <Video size={20} /> :
                   item.type === 'Assignment' ? <FileText size={20} /> :
                   <span>Q</span>}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <div className="flex items-center gap-4 text-xs text-gray-600 mt-1">
                    <span>{item.type}</span>
                    <span>•</span>
                    <span>{item.duration}</span>
                    <span>•</span>
                    <span>{item.students} students</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">{item.status}</span>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                  <Edit2 size={18} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                  <Trash2 size={18} className="text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Course Details</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Course Status</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Published</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Duration</span>
              <span className="font-semibold text-gray-900">8 weeks</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Level</span>
              <span className="font-semibold text-gray-900">Intermediate</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Price</span>
              <span className="font-semibold text-gray-900">$199</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <span className="text-gray-600">Batch Allocation</span>
              <span className="font-semibold text-gray-900">3 batches</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Student Performance</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Average Score</span>
                <span className="text-sm font-semibold text-gray-900">78%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Completion Rate</span>
                <span className="text-sm font-semibold text-gray-900">85%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Engagement</span>
                <span className="text-sm font-semibold text-gray-900">92%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
