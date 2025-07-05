import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface DashboardNavbarProps {
  title: string;
}

const DashboardNavbar = ({ title }: DashboardNavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/');
  };

  return (
    <div className="ml-64 border-b border-white/10">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </div>
        
        {/* Logout Button */}
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardNavbar; 