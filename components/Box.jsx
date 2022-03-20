import React from "react";

function Box(props) {
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry args={[5,5,5]}/>
      <meshPhysicalMaterial  color={"red"} />
    </mesh>
  );
}
export default Box;