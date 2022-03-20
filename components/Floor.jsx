
import React from "react";

function Floor(props) {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[200,1,10]} />
      <meshPhysicalMaterial color='green' />
    </mesh>
  );
}

export default Floor;