import * as React from 'react';
import Svg, { SvgProps, Mask, Path, G } from 'react-native-svg';

function BackSvg() {
  return (
    <Svg width={24} height={24} viewBox="0 0 18 16" fill="none">
      <Mask id="prefix__a" x={0} y={0} width={29} height={29}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.707 1.707A1 1 0 007.293.293l-7 7a1 1 0 000 1.414l7 7a1 1 0 001.414-1.414L3.414 9H17a1 1 0 000-2H3.414l5.293-5.293z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill="#fff" d="M-3-4h29v29H-3z" />
      </G>
    </Svg>
  );
}

export default BackSvg;
