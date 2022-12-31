export const SkeletonLoader = () => {
  return (
    <div className="space-y-2 border-2 border-black bg-white p-5">
      <div className="flex animate-pulse">
        <div className="flex-1 space-y-3">
          {Array(9)
            .fill('')
            .map((_, index) => (
              <div key={index} className="h-2 bg-slate-200"></div>
            ))}
        </div>
      </div>
    </div>
  );
};
