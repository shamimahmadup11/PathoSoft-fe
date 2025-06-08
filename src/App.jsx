import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import CBCForm from './tests/CBCForm';
import BMPForm from './tests/BMPForm';
import CMPForm from './tests/CMPForm';
import GenrateReport from './pages/GenrateReport';
// import Login from './components/Login';

const TestFormRouter = ({ testId }) => {
  switch (testId) {
    case "CBC": return <CBCForm />;
    case "BMP": return <BMPForm />;
    case "CMP": return <CMPForm />;
    default: return <p>Test form not found</p>;
  }
};

const TestFormRoute = () => {
  const params = useParams();
  return <TestFormRouter testId={params.testId} />;
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with state management */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      {/* Main content area */}
      <div className={`flex-1 p-6 bg-gray-100 transition-all duration-300 ${
        isSidebarOpen ? 'md:ml-64' : 'md:ml-0'
      }`}>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/test/:testId" element={<TestFormRoute />} />
          <Route path="/history" element={<History />} />
          <Route path="/generatereport" element={<GenrateReport />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        
        <footer className="mt-10 text-center text-gray-500 border-t pt-4">
          © 2025 Pathosoft. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;