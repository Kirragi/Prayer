import * as React from 'react';
import Svg, { SvgProps, Circle, Mask, Path, G } from 'react-native-svg';

function AddMembersSvg() {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="#000">
      <Mask id="prefix__a" x={0} y={0} width={16} height={16}>
        <Path
          d="M7.273 15.273a.727.727 0 101.454 0V8.727h6.546a.727.727 0 100-1.454H8.727V.727a.727.727 0 10-1.454 0v6.546H.727a.727.727 0 100 1.454h6.546v6.546z"
          fill="#000"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path fill="#000" d="M-.727-.727h17.454v17.454H-.727z" />
      </G>
    </Svg>
  );
}

export default AddMembersSvg;
