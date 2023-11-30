import React from 'react'

const LoadingBars = () => {
	return (
    <span className="absolute w-20 h-20 bars">
      <div className="inline-block absolute left-2 w-4 bg-[#fff] animate-[loading-bars_1.2s_cubic-bezier(0,0.5,0.5,1)_infinite_-240ms]"></div>
      <div className="inline-block absolute left-8 w-4 bg-[#fff] animate-[loading-bars_1.2s_cubic-bezier(0,0.5,0.5,1)_infinite_-120ms]"></div>
      <div className="inline-block absolute left-14 w-4 bg-[#fff] animate-[loading-bars_1.2s_cubic-bezier(0,0.5,0.5,1)_infinite]"></div>
    </span>
  );
}

export default LoadingBars