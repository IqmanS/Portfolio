import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
const Computers = ({ isMobile }) => {
	const astro = useGLTF("./astronaut/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={0.9} groundColor="black" />
			<pointLight intensity={0.2} />
			<spotLight
				position={[-20, 80, 20]}
				angle={0.12}
				penumbra={1}
				intensity={0.8}
				castShadow
				shadow-mapSize={1024}
			/>
			{/* <primitive
				object={comp.scene}
				scale={isMobile ? 0.65 : 0.75}
				position={[0, -4.5, -1.5]}
				rotation={[-0.0, -0.2, -0.05]}
			/> */}
			<primitive
				object={astro.scene}
				scale={isMobile ? 1.2 : 1.9}
				position={[-1.5, -5, 0]}
				rotation={[0, 1.3, -0.0]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setMobile] = useState(false);
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 500px)");
		setMobile(mediaQuery.matches);
		const handleMediaQueryChange = (event) => {
			setMobile(event.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		mediaQuery.removeEventListener("change", handleMediaQueryChange);
	}, []);
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 35 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enablePan={false}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					autoRotateSpeed={4}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
