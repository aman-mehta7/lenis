import React, { useEffect } from "react";
import Hero from "./sections/Hero";
import WhySection from "./sections/WhySection";
import Lenis from "@studio-freight/lenis";
import Horizontal from "./components/Horizontal";
import Popup from "./components/Popup";
import WhiteSection from "./sections/WhiteSection";
import Footer from "./sections/Footer";
import Footer2 from "./sections/Footer2";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Gun from './components/models/Gun'
import { Float, OrbitControls } from "@react-three/drei";
// import Computer from "./components/models/Computer-optimized-transformed";

const App = () => {
  useEffect(() => {
    // Initialize Lenis
    Lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      Lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      Lenis.current.destroy();
    };
  }, []);

  return (
    <>
      <main className=" absolute z-10 h-screen w-full">
        <Hero />
        <WhySection />

        <div className="w-full h-[250vh] md:h-[270vh] lg:h-[650vh]">
          <div className="flex lg:justify-normal lg:items-baseline  items-center justify-center  gap-[10vw] lg:mt-[10vw] h-[100dvh] overflow-hidden sticky top-0 -mt-[100vw] md:-mt-0">
            <Horizontal
              id={"horizontal"}
              className={
                "h-[80vw] md:h-[33vw] lg:h-[30vw] lg:w-[31vw] md:w-[35vw] w-[70vw] mt-[10vw] border-2 border-white p-10 flex flex-col justify-between backdrop-blur-sm"
              }
              objects={[
                {
                  num: "01",
                  title:
                    "Loss of performance budget due to using CSS transforms",
                },
                {
                  num: "02",
                  title:
                    "Inaccessibility from no page search support and native scrollbar",
                },
                {
                  num: "03",
                  title:
                    "Non-negligible import costs (12.1kb - 24.34kb gzipped)",
                },
                {
                  num: "04",
                  title:
                    "Limited animation systems for complex, scroll-based animations",
                },
                {
                  num: "05",
                  title:
                    "Erasing native APIs like Intersection-Observer, CSS Sticky, etc.",
                },
              ]}
            />
          </div>
        </div>
        <Popup />
        <WhiteSection />
        <Footer />
        <Footer2 />
      </main>

      <main className="fixed -z-50 bg-black h-screen w-full ">
        <Canvas
          camera={{ position: [0, 0, 100] }}
          // style={{ height: "100vh", width: "100vw" }}
        >
          {/* <OrbitControls /> */}
          <ambientLight intensity={10} color="pink" />
          <directionalLight
            intensity={5}
            position={[0, 10, 5]}
            color="purple"
          />
          <Suspense fallback={false}>
            <group position={[0, 0, 0]}>
              <Float floatIntensity={100} >
                <Gun />
              </Float>
            </group>
          </Suspense>
        </Canvas>
      </main>
    </>
  );
};

export default App;
