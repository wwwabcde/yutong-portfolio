"use client";

export function NL2SQLSparkline() {
  return (
    <svg
      viewBox="0 0 160 60"
      className="h-16 w-full text-apple-primary"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nl2sql-line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      <path
        d="M8 44 C 40 40, 60 32, 88 30 S 136 14, 152 10"
        fill="none"
        stroke="url(#nl2sql-line)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="40" r="3" fill="#1d4ed8" />
      <circle cx="140" cy="12" r="3" fill="#16a34a" />
      <text x="16" y="54" fontSize="10" fill="#86868B">
        58%
      </text>
      <text x="126" y="20" fontSize="10" fill="#1D1D1F">
        95%+
      </text>
    </svg>
  );
}
