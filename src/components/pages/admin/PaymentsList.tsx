import { CreditCard, Search, Filter, Download, TrendingUp, CheckCircle, Clock, XCircle } from 'lucide-react';

const PaymentsList = () => {
  const payments = [
    { id: 1, student: 'Sarah Johnson', plan: 'Elite Annual', amount: 12999, status: 'Completed', date: '2024-01-15', method: 'Credit Card' },
    { id: 2, student: 'Mike Chen', plan: 'Pro Monthly', amount: 999, status: 'Completed', date: '2024-01-16', method: 'UPI' },
    { id: 3, student: 'Emma Davis', plan: 'Basic Monthly', amount: 499, status: 'Completed', date: '2024-01-17', method: 'Credit Card' },
    { id: 4, student: 'James Wilson', plan: 'Elite Annual', amount: 12999, status: 'Pending', date: '2024-01-18', method: 'Net Banking' },
    { id: 5, student: 'Lisa Brown', plan: 'Pro Monthly', amount: 999, status: 'Failed', date: '2024-01-19', method: 'Credit Card' },
    { id: 6, student: 'David Lee', plan: 'Elite Annual', amount: 12999, status: 'Completed', date: '2024-01-20', method: 'UPI' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Payments & Billing</h1>
        <p className="text-emerald-100">Track all transactions, refunds, and revenue</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
              <h3 className="text-3xl font-bold text-gray-900">$1,01,245</h3>
              <p className="text-xs text-green-600 mt-2">↑ 18.4% this month</p>
            </div>
            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
              <TrendingUp size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Completed</p>
              <h3 className="text-3xl font-bold text-gray-900">1,248</h3>
              <p className="text-xs text-gray-600 mt-2">94.2% success rate</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <CheckCircle size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pending</p>
              <h3 className="text-3xl font-bold text-gray-900">48</h3>
              <p className="text-xs text-orange-600 mt-2">Need action</p>
            </div>
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <Clock size={24} className="text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Failed</p>
              <h3 className="text-3xl font-bold text-gray-900">35</h3>
              <p className="text-xs text-red-600 mt-2">Follow up required</p>
            </div>
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
              <XCircle size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search payments..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Student</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Plan</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Method</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{payment.student}</td>
                  <td className="py-4 px-4 text-sm text-gray-700">{payment.plan}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-900">${payment.amount}</td>
                  <td className="py-4 px-4 text-sm text-gray-700">{payment.method}</td>
                  <td className="py-4 px-4 text-sm text-gray-700">{payment.date}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      payment.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      payment.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {payment.status}
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

export default PaymentsList;
