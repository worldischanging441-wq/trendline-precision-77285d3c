export function ChartBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="1" opacity="0.35">
        {[80, 160, 240, 320, 400].map((y) => (
          <line key={y} x1="0" y1={y} x2="800" y2={y} />
        ))}
      </g>
      <path
        d="M20 430 L160 360 L300 300 L440 240 L580 170 L760 90"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.8"
      />
      <path
        d="M20 470 L200 430 L380 350 L560 300 L760 210"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="6 8"
        opacity="0.5"
      />
      <g stroke="currentColor" opacity="0.55">
        {Array.from({ length: 26 }).map((_, i) => {
          const x = 40 + i * 29;
          const mid = 420 - i * 12 + (i % 3 === 0 ? 26 : -8);
          const h = 22 + ((i * 13) % 46);
          return (
            <g key={i}>
              <line x1={x} y1={mid - h} x2={x} y2={mid + h} strokeWidth="1" />
              <rect
                x={x - 5}
                y={mid - h / 2}
                width="10"
                height={h}
                fill="currentColor"
                fillOpacity={i % 2 === 0 ? 0.25 : 0.06}
                strokeWidth="0.8"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}