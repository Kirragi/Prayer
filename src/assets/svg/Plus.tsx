import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function PlusSvg(props: { fill: string; size: number }) {
  return (
    <Svg
      height={props.size}
      width={props.size}
      viewBox="0 0 17 17"
      fill={props.fill}>
      <Path
        d="M9 1a1 1 0 10-2 0v6H1a1 1 0 000 2h6v6a1 1 0 102 0V9h6a1 1 0 100-2H9V1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default PlusSvg;
