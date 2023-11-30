import React from 'react'

const LoadingGrid = () => {
	return (
		<div className="block relative h-20 w-20">
			<div className="absolute w-4 h-4 rounded-[50%] bg-neutral-500 animate-[loading-grid_1.2s_linear_infinite_0ms] top-2 left-2" />
			<div className="absolute w-4 h-4 rounded-[50%] bg-neutral-500 animate-[loading-grid_1.2s_linear_infinite_-400ms] top-2 left-8" />
			<div className="absolute w-4 h-4 rounded-[50%] bg-neutral-500 animate-[loading-grid_1.2s_linear_infinite_-800ms] top-2 left-14" />
			<div className="absolute w-4 h-4 rounded-[50%] bg-neutral-500 animate-[loading-grid_1.2s_linear_infinite_-400ms] top-8 left-2" />
			<div className="absolute w-4 h-4 rounded-[50%] bg-neutral-500 animate-[loading-grid_1.2s_linear_infinite_-800ms] top-8 left-8" />
			<div className="absolute w-4 h-4 rounded-[50%] bg-neutral-500 animate-[loading-grid_1.2s_linear_infinite_-1200ms] top-8 left-14" />
			<div className="absolute w-4 h-4 rounded-[50%] bg-neutral-500 animate-[loading-grid_1.2s_linear_infinite_-800ms] top-14 left-2" />
			<div className="absolute w-4 h-4 rounded-[50%] bg-neutral-500 animate-[loading-grid_1.2s_linear_infinite_-1200ms] top-14 left-8" />
			<div className="absolute w-4 h-4 rounded-[50%] bg-neutral-500 animate-[loading-grid_1.2s_linear_infinite_-1600ms] top-14 left-14" />
		</div>
  );
}

export default LoadingGrid