import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const complaintData = [
  { category: 'Delivery Issues', count: 142, color: '#ef4444' },
  { category: 'Product Quality', count: 98, color: '#f97316' },
  { category: 'Customer Service', count: 76, color: '#eab308' },
  { category: 'Website Bugs', count: 54, color: '#22c55e' },
  { category: 'Pricing Concerns', count: 32, color: '#3b82f6' }
];

const badReviews = [
  {
    rating: 3,
    user: 'Venkat',
    date: '12 may, 2025',
    title: 'prices',
    text: "prices should not be 20$ for a 5-7 min ride because it's nothing that's scamming/taxing to its finest... unbelievable"
  },
  {
    rating: 1,
    user: 'trump2020699',
    date: '12 may, 2025',
    title: 'off shore employee bots',
    text: 'uber needs to hire us workers . not these offshore and incompetent people. tired wasting my tine communicating with them'
  },
  {
    rating: 1,
    user: 'melyatong',
    date: '12 may, 2025',
    title: 'prices changed',
    text: 'i got one rate/price before i got in the uber...after arriving to my destination i checked when it asked what amount of tip i would leave my driver and saw a $10 increase in my price. how did that happen???'
  },
  {
    rating: 3,
    user: 'help chair',
    date: '12 may, 2025',
    title: 'airport',
    text: 'driver on saturday at the airport came and left and did not give us a ride but charged. me.'
  },
  {
    rating: 2,
    user: 'yoliloves',
    date: '12 may, 2025',
    title: 'trips',
    text: 'i requested a ride from uber, the map had 3 min to get to my destination; uber had 10 min to the same.'
  },
  {
    rating: 1,
    user: 'doode64',
    date: '12 may, 2025',
    title: 'horrible customer services',
    text: "i booked a ride after a scheduled ride didn't show up that i paid for, the new ride i booked cancelled after waiting 20 min. horrible experience."
  }
];

const gaps = [
  'No live chat support.',
  'Lack of international shipping.',
  'No loyalty rewards program.',
  'Limited payment options.',
  'No dark mode in app.'
];

const ComplaintsChart = () => {
  const [showReviewsModal, setShowReviewsModal] = useState(false);
  const [showGapsModal, setShowGapsModal] = useState(false);

  return (
    <div className="bg-[#111111] border border-white/10 p-6 rounded-2xl relative flex flex-col min-h-[500px]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">Active Complaints</h3>
          <p className="text-sm text-white/60">Top complaint categories this month</p>
        </div>
        <div className="text-sm text-red-400 font-medium bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
          402 Total Issues
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={complaintData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="category" 
              tick={{ fontSize: 12, fill: '#ffffff60' }}
              axisLine={false}
              tickLine={false}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#ffffff60' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1f1f1f',
                border: '1px solid #333',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Bar 
              dataKey="count" 
              fill="#ef4444"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Tag Cloud Preview */}
      <div className="mt-4 flex flex-wrap gap-2">
        {['slow shipping', 'damaged items', 'rude staff', 'website crashes', 'overpriced'].map((tag) => (
          <span key={tag} className="px-2 py-1 bg-white/5 text-white/70 text-xs rounded-full border border-white/10">
            {tag}
          </span>
        ))}
      </div>
      {/* Buttons Row - now at the bottom, centered */}
      <div className="flex justify-center gap-4 mt-6 absolute left-0 right-0 bottom-6">
        <button
          className="px-4 py-2 rounded-lg bg-neon text-black font-semibold neon-glow hover:bg-neon-bright transition-all"
          onClick={() => setShowReviewsModal(true)}
        >
          Show All Reviews
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
          onClick={() => setShowGapsModal(true)}
        >
          Show All Gaps
        </button>
      </div>
      {/* Reviews Modal */}
      {showReviewsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-[#181818] rounded-2xl p-8 max-w-5xl w-full shadow-2xl border border-white/10 relative">
            <h2 className="text-2xl font-bold mb-6 text-white">All Bad Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto pr-2">
              {badReviews.map((review, idx) => (
                <div key={idx} className="bg-white/5 text-white/80 p-5 rounded-xl border border-white/10 flex flex-col gap-2 shadow">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-500'}>★</span>
                      ))}
                    </div>
                    <span className="text-xs text-white/60 ml-2">{review.user}</span>
                    <span className="text-xs text-white/40 ml-auto">{review.date}</span>
                  </div>
                  <div className="font-bold text-white text-base mb-1">{review.title}</div>
                  <div className="text-sm text-white/80">{review.text}</div>
                </div>
              ))}
            </div>
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-neon text-2xl"
              onClick={() => setShowReviewsModal(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
      {/* Gaps Modal */}
      {showGapsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-[#181818] rounded-2xl p-8 max-w-2xl w-full shadow-2xl border border-white/10 relative">
            <h2 className="text-2xl font-bold mb-4 text-white">All Gaps</h2>
            <ul className="space-y-3 mb-6 max-h-96 overflow-y-auto pr-2">
              {gaps.map((gap, idx) => (
                <li key={idx} className="bg-white/5 text-white/80 p-4 rounded-lg border border-white/10">
                  {gap}
                </li>
              ))}
            </ul>
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-neon text-2xl"
              onClick={() => setShowGapsModal(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintsChart;
