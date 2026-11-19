import React from "react";

/* The wordmark is artwork, not UI copy: it stays the same in every locale. */
/* eslint-disable i18next/no-literal-string */

interface PenshowTextLogoProps {
  width?: number;
  className?: string;
}

/**
 * The Penshow wordmark: 笔受 above a small PENSHOW, both in the current text
 * colour so it reads on the rice-paper and ink themes without a raster asset.
 */
const PenshowTextLogo: React.FC<PenshowTextLogoProps> = ({
  width = 160,
  className,
}) => (
  <svg
    viewBox="0 0 200 112"
    width={width}
    className={`h-auto select-none ${className ?? ""}`}
    role="img"
    aria-label="Penshow 笔受"
  >
    <text
      x="100"
      y="72"
      textAnchor="middle"
      fill="currentColor"
      fontFamily={
        '"Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", serif'
      }
      fontSize="68"
      fontWeight="600"
      letterSpacing="2"
    >
      笔受
    </text>
    <text
      x="100"
      y="101"
      textAnchor="middle"
      fill="currentColor"
      opacity="0.72"
      fontFamily={'"DM Serif Display", Georgia, serif'}
      fontSize="17"
      letterSpacing="7"
    >
      PENSHOW
    </text>
  </svg>
);

export default PenshowTextLogo;
