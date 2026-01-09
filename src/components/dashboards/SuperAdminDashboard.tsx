import { useState } from 'react';
import StatCard from '../common/StatCard';
import ModuleCard from '../common/ModuleCard';
import PageRouter from '../PageRouter';
import {
  Users, UserCog, BookOpen, Calendar, DollarSign, Video,
  TrendingUp, Award, Briefcase, Settings, ShieldCheck,
  FileText, MessageSquare, BarChart3, CreditCard, ArrowLeft
} from 'lucide-react';

interface SuperAdminDashboardProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const SuperAdminDashboard = ({ onNavigate, currentPage }: SuperAdminDashboardProps) => {
  if (currentPage !== 'dashboard') {
    return (
      <div>
        <button
          onClick={() => onNavigate('dashboard')}
          className="mb-6 px-4 py-2 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>
        <PageRouter role="admin" page={currentPage} />
      </div>
    );
  }
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Manage Your Learning Ecosystem Efficiently</h1>
          <p className="text-blue-50 mb-6">
            Monitor users, courses, revenue, and placements from one dashboard
          </p>
          <div className="flex gap-3">
            <button className="px-6 py-2.5 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              ➕ Create Course
            </button>
            <button className="px-6 py-2.5 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors border border-blue-400">
              ➕ Create Batch
            </button>
          </div>
        </div>
        <div className="absolute right-8 bottom-0 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="white" opacity="0.1" />
            <path d="M100 40 L100 100 L140 100" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" />
            <circle cx="100" cy="100" r="8" fill="white" />
          </svg>
        </div>
        <div className="absolute right-24 top-8 text-6xl opacity-30">📊</div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Students"
            value="2,543"
            icon={Users}
            trend={{ value: "+12.5%", isPositive: true }}
            color="bg-blue-500"
          />
          <StatCard
            title="Total Instructors"
            value="128"
            icon={UserCog}
            trend={{ value: "+8.2%", isPositive: true }}
            color="bg-green-500"
          />
          <StatCard
            title="Active Courses"
            value="45"
            icon={BookOpen}
            trend={{ value: "+5", isPositive: true }}
            color="bg-orange-500"
          />
          <StatCard
            title="Active Batches"
            value="32"
            icon={Calendar}
            trend={{ value: "+3", isPositive: true }}
            color="bg-cyan-500"
          />
          <StatCard
            title="Monthly Revenue"
            value="$84,250"
            icon={DollarSign}
            trend={{ value: "+18.4%", isPositive: true }}
            color="bg-emerald-500"
          />
          <StatCard
            title="Live Classes Today"
            value="18"
            icon={Video}
            color="bg-red-500"
          />
          <StatCard
            title="Certificates Issued"
            value="1,289"
            icon={Award}
            trend={{ value: "+24", isPositive: true }}
            color="bg-amber-500"
          />
          <StatCard
            title="Placements"
            value="456"
            icon={Briefcase}
            trend={{ value: "+15.8%", isPositive: true }}
            color="bg-violet-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Student Growth</h3>
            <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[320, 450, 380, 520, 480, 600, 550, 680, 720, 650, 780, 820].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg hover:from-blue-600 hover:to-blue-500 transition-all cursor-pointer"
                     style={{ height: `${(height / 820) * 100}%` }}
                     title={`${height} students`}
                ></div>
                <span className="text-xs text-gray-500">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Plan Distribution</h3>
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="12" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="12"
                        strokeDasharray="75.4 251.2" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="12"
                        strokeDasharray="62.8 251.2" strokeDashoffset="-75.4" strokeLinecap="round" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="12"
                        strokeDasharray="113 251.2" strokeDashoffset="-138.2" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2,543</div>
                  <div className="text-xs text-gray-500">Total</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-700">Basic</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-700">Pro</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-sm text-gray-700">Elite</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">25%</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">System Modules</h2>
          <span className="text-sm text-gray-500">Click to manage each module</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div onClick={() => onNavigate('students')} className="cursor-pointer">
            <ModuleCard
              title="User Management"
              description="Manage students, instructors, roles & permissions"
              icon={Users}
              color="bg-blue-500"
              badge="2,671 users"
            />
          </div>
          <div onClick={() => onNavigate('courses')} className="cursor-pointer">
            <ModuleCard
              title="Course Management"
              description="Live, recorded & hybrid course management"
              icon={BookOpen}
              color="bg-green-500"
              badge="45 courses"
            />
          </div>
          <ModuleCard
            title="Batch Management"
            description="Elite, Pro, Weekday, Weekend batches"
            icon={Calendar}
            color="bg-orange-500"
            badge="32 active"
          />
          <ModuleCard
            title="Plan Management"
            description="Feature locking, upgrades & plan logic"
            icon={ShieldCheck}
            color="bg-cyan-500"
          />
          <div onClick={() => onNavigate('payments')} className="cursor-pointer">
            <ModuleCard
              title="Payments & Billing"
              description="Transactions, invoices, refunds management"
              icon={CreditCard}
              color="bg-emerald-500"
              badge="$84K/mo"
            />
          </div>
          <ModuleCard
            title="Certification System"
            description="Templates, issuance & verification"
            icon={Award}
            color="bg-amber-500"
          />
          <ModuleCard
            title="Placement & Training"
            description="Resume reviews, mock interviews, tracking"
            icon={Briefcase}
            color="bg-violet-500"
            badge="456 placed"
          />
          <ModuleCard
            title="Analytics & Reports"
            description="Comprehensive insights & data analysis"
            icon={BarChart3}
            color="bg-pink-500"
          />
          <ModuleCard
            title="Communication Hub"
            description="Announcements, notifications & messaging"
            icon={MessageSquare}
            color="bg-rose-500"
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 p-8">
        <div className="flex items-center gap-6">
          <div className="text-6xl">🔗</div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">System Flow</h3>
            <div className="flex items-center gap-3 text-sm text-gray-700 flex-wrap">
              <span className="px-3 py-1 bg-white rounded-lg shadow-sm font-medium">Course</span>
              <span>→</span>
              <span className="px-3 py-1 bg-white rounded-lg shadow-sm font-medium">Batch</span>
              <span>→</span>
              <span className="px-3 py-1 bg-white rounded-lg shadow-sm font-medium">Instructor</span>
              <span>→</span>
              <span className="px-3 py-1 bg-white rounded-lg shadow-sm font-medium">Student</span>
              <span>→</span>
              <span className="px-3 py-1 bg-white rounded-lg shadow-sm font-medium">Assessment</span>
              <span>→</span>
              <span className="px-3 py-1 bg-white rounded-lg shadow-sm font-medium">Certificate</span>
              <span>→</span>
              <span className="px-3 py-1 bg-white rounded-lg shadow-sm font-medium">Placement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
