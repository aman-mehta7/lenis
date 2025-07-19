// import React, { useRef, useEffect } from "react";
// import { useGLTF } from "@react-three/drei";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";

// export function Gun({ setBgColor }) {
//   const gun = useRef();
//   const { nodes, materials } = useGLTF(
//     import.meta.env.BASE_URL + "models/gun.glb"
//   );

//   gsap.registerPlugin(ScrollTrigger);

//   // First Animation Scroll Zone
//   useEffect(() => {
//     if (!gun.current) return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: "body",
//         start: "top -20%",
//         end: "top -1000%",
//         scrub: true,
//         markers: true,
//         onEnter: () => setBgColor("black"),
//         onLeaveBack: () => setBgColor("black"),
//       },
//     });

//     tl.to(gun.current.position, { x: -50, ease: "none" }, 0);
//     tl.to(gun.current.position, { x: 10, ease: "none" }, 1);
//     tl.to(gun.current.position, { x: -70, ease: "none" }, 1.5);
//     tl.to(gun.current.position, { x: -150, ease: "none" }, 2);
//     tl.to(gun.current.rotation, { y: -1, ease: "none" }, 0);
//     tl.to(gun.current.rotation, { y: 0.5, ease: "none" }, 1);
//     tl.to(gun.current.scale, { x: 1.5, y: 1.5, z: 1.5, ease: "none" }, 1);

//     return () => tl.kill();
//   }, [setBgColor]);

//   // Second Animation Scroll Zone
//   useEffect(() => {
//     if (!gun.current) return;

//     const tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: "body",
//         start: "top -2200%",
//         end: "top -4000%",
//         scrub: true,
//         markers: true,
//         onEnter: () => setBgColor("white"),
//         onLeaveBack: () => setBgColor("black"),
//       },
//     });

//     tl2.to(gun.current.position, { x: -50, ease: "none" }, 0);
//     tl2.to(gun.current.position, { x: 10, ease: "none" }, 1);
//     tl2.to(gun.current.position, { x: -70, ease: "none" }, 1.5);
//     tl2.to(gun.current.position, { x: -150, ease: "none" }, 2);
//     tl2.to(gun.current.rotation, { y: -1, ease: "none" }, 0);
//     tl2.to(gun.current.rotation, { y: 0.5, ease: "none" }, 1);
//     tl2.to(gun.current.scale, { x: 1.5, y: 1.5, z: 1.5, ease: "none" }, 1);

//     return () => tl2.kill();
//   }, [setBgColor]);

//   return (
//     <group dispose={null}>
//       <group ref={gun} rotation={[-Math.PI / 2, 0, 0]}>
//         <mesh
//           geometry={nodes.Object_2.geometry}
//           material={materials.aiStandardSurface1SG}
//         />
//         <mesh
//           geometry={nodes.Object_3.geometry}
//           material={materials.aiStandardSurface2SG}
//         />
//         <mesh
//           geometry={nodes.Object_4.geometry}
//           material={materials.aiStandardSurface2SG}
//         />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload(import.meta.env.BASE_URL + "models/gun.glb");

// export default Gun;


import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export function Gun({ setBgColor }) {
  const gun = useRef();
  const { scene } = useGLTF(import.meta.env.BASE_URL + "models/gun.glb");

  gsap.registerPlugin(ScrollTrigger);

  // First Scroll Animation
  useEffect(() => {
    if (!gun.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top -20%",
        end: "top -1000%",
        scrub: true,
        markers: true,
        onEnter: () => setBgColor("black"),
        onLeaveBack: () => setBgColor("black"),
      },
    });

    tl.to(gun.current.position, { x: -50, ease: "none" }, 0)
      .to(gun.current.position, { x: 10, ease: "none" }, 1)
      .to(gun.current.position, { x: -70, ease: "none" }, 1.5)
      .to(gun.current.position, { x: -150, ease: "none" }, 2)
      .to(gun.current.rotation, { y: -1, ease: "none" }, 0)
      .to(gun.current.rotation, { y: 0.5, ease: "none" }, 1)
      .to(gun.current.scale, { x: 1.5, y: 1.5, z: 1.5, ease: "none" }, 1);

    return () => tl.kill();
  }, [setBgColor]);

  // Second Scroll Animation
  useEffect(() => {
    if (!gun.current) return;

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top -2200%",
        end: "top -4000%",
        scrub: true,
        markers: true,
        onEnter: () => setBgColor("white"),
        onLeaveBack: () => setBgColor("black"),
      },
    });

    tl2.to(gun.current.position, { x: -50, ease: "none" }, 0)
      .to(gun.current.position, { x: 10, ease: "none" }, 1)
      .to(gun.current.position, { x: -70, ease: "none" }, 1.5)
      .to(gun.current.position, { x: -150, ease: "none" }, 2)
      .to(gun.current.rotation, { y: -1, ease: "none" }, 0)
      .to(gun.current.rotation, { y: 0.5, ease: "none" }, 1)
      .to(gun.current.scale, { x: 1.5, y: 1.5, z: 1.5, ease: "none" }, 1);

    return () => tl2.kill();
  }, [setBgColor]);

  return (
    <group ref={gun} dispose={null} rotation={[-Math.PI / 2, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(import.meta.env.BASE_URL + "models/gun.glb");

export default Gun;

