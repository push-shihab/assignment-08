import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-8">
      <div className="flex flex-col items-center text-center max-w-md w-full animate-fade-up">
        <h1 className="text-[100px] font-bold text-[#0F172A] leading-none tracking-tighter">
          404
        </h1>

        <div className="w-12 h-0.75 bg-[#38BDF8] rounded-full my-4" />

        <h2 className="text-xl font-semibold text-[#0F172A] mb-3">
          Page Not Found
        </h2>
        <p className="text-sm text-[#64748B] leading-relaxed mb-8">
          Looks like this page does not exist.
        </p>

        <Link
          href="/"
          className="px-8 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
