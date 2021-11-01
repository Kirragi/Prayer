import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function CheckedSvg() {
  return (
    <Svg width={14} height={13} fill="none">
      <Path
        d="M13 1L4.75 12 1 7"
        stroke="#514D47"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CheckedSvg;
