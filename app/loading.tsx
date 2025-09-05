export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-white border-opacity-20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-white text-lg font-medium">Loading Ship & Earn...</div>
        <div className="text-white text-opacity-70 text-sm mt-2">Connecting to Base network</div>
      </div>
    </div>
  );
}
