export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
        <span className="text-white font-bold text-xl">T</span>
      </div>
      <span className="font-bold text-xl text-white">Toronto Marketing</span>
    </div>
  );
}
