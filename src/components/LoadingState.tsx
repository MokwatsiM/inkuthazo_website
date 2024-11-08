export function LoadingState() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((n) => (
        <div 
          key={n}
          className="bg-white rounded-lg shadow-lg p-6 animate-pulse"
        >
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4" />
          <div className="h-6 bg-gray-200 rounded mb-3" />
          <div className="h-20 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
}