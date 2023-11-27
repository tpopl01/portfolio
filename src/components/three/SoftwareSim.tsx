import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const SoftwareSim = () => {
    
    function Computer() {
        const boxRef = useRef<any>();
        useFrame(() => {
            if(boxRef.current){
                boxRef.current.rotation.y += 0.007;
            }
        });
        return (
        <group ref={boxRef} position={[0,4,6]} rotation={[0,Math.PI * -0.3,0]}>
            <mesh receiveShadow  position={[0, 0, 0]} scale={[1,0.2,1]}>
                <boxGeometry />
                <meshStandardMaterial attach="material" color="lightgray" />
            </mesh>
            <mesh receiveShadow  position={[0, 0.2, 0]} scale={[.4,0.4,.4]}>
                <boxGeometry />
                <meshStandardMaterial attach="material" color="lightgray" />
            </mesh>
            <mesh receiveShadow  position={[0, 0.7, 0]} scale={[.7,0.7,1]}>
                <boxGeometry />
                <meshStandardMaterial attach="material" color="lightgray" />
            </mesh>
            <mesh receiveShadow  position={[0, 0.7, 0.5]} scale={[1,1,.1]}>
                <boxGeometry />
                <meshStandardMaterial attach="material" color="lightgray" />
            </mesh>
            <mesh receiveShadow  position={[0, 0.7, 0.6]} scale={[.9,.9,.05]}>
                <boxGeometry />
                <meshStandardMaterial attach="material" color="black" />
            </mesh>
          </group>
        );
      }

  return (
    <div style={{width:"100%", height:"100vh"}}>
    <Canvas style={{height:"100vh"}} dpr={[1, 1.5]} camera={{ position: [0, 2, 15], rotation:[0,0,0], fov: 45, near: 1, far: 30 }}>
        <color attach="background" args={['#0b0c10']} />
        <hemisphereLight position={[0, 2, 15]} intensity={0.15} groundColor="#0b0c10" />
        <spotLight position={[5, 5, 15]} angle={0.12} penumbra={1} intensity={10} castShadow shadow-mapSize={1024} />
        <rectAreaLight
        width={10}
        height={10}
        color={"white"}
        intensity={2}
        position={[0, 5, 15]}
        castShadow
        />
        <Computer/>
    </Canvas>
    </div>
  )
}

export default SoftwareSim