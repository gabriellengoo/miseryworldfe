import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'


function Scene() {
    const fbx = useLoader(FBXLoader, '../../public/midss.fbx')
    return <primitive object={fbx} />
  }