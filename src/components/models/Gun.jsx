import React, { useRef, useLayoutEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Gun() {
  const gun = useRef();
  const { scene } = useGLTF(import.meta.env.BASE_URL + "models/gun.glb");

  const isMobile = window.innerWidth < 768;

  function getScale() {
    return isMobile ? [0.5, 0.5, 0.5] : [1, 1, 1];
  }

  const [scale, setScale] = useState(getScale());

  useLayoutEffect(() => {
    const handleResize = () => setScale(getScale());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (!gun.current) return;

    // Wait for one frame to ensure mount
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top -20%",
        end: "top -1000%",
        scrub: true,
      },
    });

    tl1.to(gun.current.position, { x: -50, ease: "none" }, 0)
      .to(gun.current.position, { x: 10, ease: "none" }, 1)
      .to(gun.current.position, { x: -70, ease: "none" }, 1.5)
      .to(gun.current.position, { x: -400, ease: "none" }, 2)
      .to(gun.current.rotation, { y: -2.5, x: 0.5, z: 2, ease: "none" }, 0)
      .to(gun.current.rotation, { y: 0.5, ease: "none" }, 1)
      .to(gun.current.scale, { x: 1.5, y: 1.5, z: 1.5, ease: "none" }, 1);

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top -1500%",
        end: "top -3000%",
        scrub: true,
      },
    });

    tl2.to(gun.current.position, { x: -50, ease: "none" }, 0)
      .to(gun.current.position, { x: -100, ease: "none" }, 0.5)
      .to(gun.current.position, { x: 300, y: 50, ease: "none" }, 1)
      .to(gun.current.rotation, { y: 0, x: 3, z: 3, ease: "none" }, 0)
      .to(gun.current.rotation, { y: 0, x: 3, z: 5, ease: "none" }, 0.5)
      .to(gun.current.scale, { x: 1, y: 1, z: 1, ease: "none" }, 0)
      .to(gun.current.scale, { x: 0.8, y: 0.8, z: 0.8, ease: "none" }, 0.5);

    return () => {
      tl1.kill();
      tl2.kill();
    };
  }, []);

  return (
    <group ref={gun} scale={scale} dispose={null} rotation={[-Math.PI / 10, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(import.meta.env.BASE_URL + "models/gun.glb");

export default Gun;
