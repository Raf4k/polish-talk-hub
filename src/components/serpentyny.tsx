/**
 * Dekoracyjne serpentyny w tle stron — delikatny fiolet, magenta i żółty
 * z palety fundacji (tokeny --accent, --motto-highlight, --secondary).
 */
export function Serpentyny() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* lewy górny */}
      <svg
        viewBox="0 0 420 300"
        fill="none"
        className="absolute -left-16 top-40 w-[420px] opacity-30"
      >
        <path
          d="M-30 70C60 10 140 170 230 100S380 20 450 120"
          stroke="var(--motto-highlight)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M-30 150C70 100 150 250 240 180S390 110 450 200"
          stroke="var(--accent)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M-30 230C80 180 160 330 250 260S400 190 450 280"
          stroke="var(--secondary)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>

      {/* prawy górny */}
      <svg
        viewBox="0 0 420 300"
        fill="none"
        className="absolute -right-16 top-24 w-[380px] opacity-30"
      >
        <path
          d="M450 40C360 110 300 -30 210 60S60 140 -20 60"
          stroke="var(--accent)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M450 130C350 200 290 60 200 150S50 230 -20 150"
          stroke="var(--secondary)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M450 220C370 280 300 150 220 230S90 300 -20 230"
          stroke="var(--motto-highlight)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>

      {/* lewy dolny */}
      <svg
        viewBox="0 0 420 300"
        fill="none"
        className="absolute -left-16 bottom-10 w-[380px] opacity-25"
      >
        <path
          d="M-30 60C70 10 150 160 240 90S390 30 450 110"
          stroke="var(--secondary)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M-30 140C80 90 160 240 250 170S400 110 450 190"
          stroke="var(--motto-highlight)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M-30 220C90 170 170 320 260 250S410 190 450 270"
          stroke="var(--accent)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>

      {/* prawy dolny */}
      <svg
        viewBox="0 0 420 300"
        fill="none"
        className="absolute -right-16 bottom-24 w-[420px] opacity-25"
      >
        <path
          d="M450 50C370 120 300 -20 210 70S70 150 -20 70"
          stroke="var(--motto-highlight)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M450 140C360 210 290 70 200 160S60 240 -20 160"
          stroke="var(--accent)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M450 230C380 290 300 160 220 240S100 310 -20 240"
          stroke="var(--secondary)"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
