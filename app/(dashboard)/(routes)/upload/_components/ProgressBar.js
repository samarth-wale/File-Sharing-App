import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full mt-5 relative">
      <div className="bg-gray-200 w-full h-6 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-sm font-medium">{progress.toFixed(0)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
