import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Dummy data
  const reportData = [
    { day: 'Mon', reports: 12 },
    { day: 'Tue', reports: 19 },
    { day: 'Wed', reports: 8 },
    { day: 'Thu', reports: 15 },
    { day: 'Fri', reports: 12 },
    { day: 'Sat', reports: 5 },
  ];

  const recentReports = [
    { id: 1, patient: "John Doe", test: "CBC", date: "2024-03-01", status: "Completed" },
    { id: 2, patient: "Jane Smith", test: "Lipid Profile", date: "2024-03-02", status: "Pending" },
    { id: 3, patient: "Bob Johnson", test: "Liver Function", date: "2024-03-02", status: "In Progress" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Lab Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Total Patients</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Today's Reports</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">45</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Completed Reports</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">1,189</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">Pending Reports</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">45</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Report Trends</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={reportData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="reports" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Reports Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Reports</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="pb-3">Patient</th>
                <th className="pb-3">Test Type</th>
                <th className="pb-3">Date</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report) => (
                <tr key={report.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-4">{report.patient}</td>
                  <td className="py-4">{report.test}</td>
                  <td className="py-4">{report.date}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      report.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      report.status === 'Pending' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.status}
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

export default Dashboard;