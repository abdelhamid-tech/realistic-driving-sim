/**
 * CANTACT PATCH — the mark.
 *
 * Drawn as SVG text rather than shipped as a bitmap: ink letterforms with a
 * terracotta keyline and a soft warm bloom, so the mark sits on Claude's ivory
 * paper the way a stamped plate would. Being text it stays crisp at every
 * size, weighs nothing, and picks up the display font the game already loads.
 */
export function GameLogo({
  className,
  width = 300,
  glow = true,
}: {
  className?: string;
  width?: number;
  glow?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 320 128"
      width={width}
      className={className}
      role="img"
      aria-label="Cantact Patch"
      style={{ display: "block", overflow: "visible" }}
    >
      <defs>
        <filter id="cp-logo-bloom" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        filter={glow ? "url(#cp-logo-bloom)" : undefined}
        fill="#141413"
        stroke="#d97757"
        strokeWidth="2.4"
        strokeLinejoin="round"
        paintOrder="stroke"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-display), Rajdhani, sans-serif",
          fontWeight: 700,
          letterSpacing: "1px",
        }}
      >
        <text x="160" y="55" fontSize="60">
          CANTACT
        </text>
        <text x="160" y="116" fontSize="60">
          PATCH
        </text>
      </g>
    </svg>
  );
}
