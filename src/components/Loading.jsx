export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAFAF7]">
      <p className="font-display text-2xl font-extrabold animate-wiggle">
        Loading<span className="inline-block animate-pulse text-[#C08B3E]">...</span>
      </p>
      <div className="mt-6 h-3 w-48 overflow-hidden rounded-full brutal-border bg-white">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-[#C08B3E]" />
      </div>
    </div>
  );
}
