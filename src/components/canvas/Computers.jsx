import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
const Computers = () => {
	const drone = useGLTF("./hologram_console/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={0.25} groundColor="black" />
			<pointLight intensity={0.8} />
			<primitive
				object={drone.scene}
				scale={0.7}
				position={[0, -3.25, -1.5]}
				// rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 35 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
