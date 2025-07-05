import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Sidebar />
      
      <DashboardNavbar title="Profile Settings" />
      
      <div className="ml-64 p-6">
        <div className="max-w-2xl">
          {/* Profile Info */}
          <div className="glass-card p-6 mb-6 border border-white/10">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                JD
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">John Doe</h2>
                <p className="text-white/60">john.doe@example.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-white/60 mb-2 block">Full Name</label>
                <Input 
                  type="text" 
                  value="John Doe"
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              
              <div>
                <label className="text-sm text-white/60 mb-2 block">Email</label>
                <Input 
                  type="email" 
                  value="john.doe@example.com"
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              
              <div>
                <label className="text-sm text-white/60 mb-2 block">Company</label>
                <Input 
                  type="text" 
                  value="Acme Inc."
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
            </div>
          </div>

          {/* Credits Info */}
          <div className="glass-card p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Credits</h3>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white/60">Available Credits</p>
                <p className="text-2xl font-bold text-neon">42</p>
              </div>
              <Button className="bg-neon hover:bg-neon-bright text-black font-semibold">
                Buy More Credits
              </Button>
            </div>
            <div className="text-sm text-white/60">
              1 credit = 1 comprehensive app analysis report
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 