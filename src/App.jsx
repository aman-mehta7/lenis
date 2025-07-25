import React, { useEffect, useState } from "react";
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
import Gun from "./components/models/Gun";
import { Float } from "@react-three/drei";

const App = () => {
  const [bgColor, setBgColor] = useState("black");

  useEffect(() => {
    Lenis.current = new Lenis({
      duration: 0.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: true,
    });

    const animate = (time) => {
      Lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      Lenis.current.destroy();
    };
  }, []);

  return (
    <>
      <main className="absolute z-10 h-screen w-full">
        <Hero />
        <WhySection />

        <div className="hidden md:block">
          <div className="w-full h-[250vh] md:h-[270vh] lg:h-[650vh]">
            <div className="flex lg:justify-normal lg:items-baseline items-center justify-center gap-[10vw] lg:mt-[10vw] h-[100dvh] overflow-hidden sticky top-0 -mt-[100vw] md:-mt-0">
              <Horizontal
                id={"horizontal"}
                className="h-[80vw] md:h-[33vw] lg:h-[30vw] lg:w-[31vw] md:w-[35vw] w-[70vw] mt-[10vw] border-2 border-white p-10 flex flex-col justify-between backdrop-blur-sm"
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
        </div>

        <div className="flex flex-col md:hidden items-center mb-72 ">
          {/* <div className="w-full h-[250vh] md:h-[270vh] lg:h-[650vh]"> */}
          {/* <div className="flex lg:justify-normal lg:items-baseline items-center justify-center gap-[10vw] lg:mt-[10vw] h-[100dvh] overflow-hidden sticky top-0 -mt-[100vw] md:-mt-0"></div> */}
          <Horizontal
            // id={"horizontal"}
            className="h-[80vw] md:h-[33vw] lg:h-[30vw] lg:w-[31vw] md:w-[35vw] w-[70vw] mt-[10vw] border-2 border-white p-10 flex flex-col justify-between backdrop-blur-sm"
            objects={[
              {
                num: "01",
                title: "Loss of performance budget due to using CSS transforms",
              },
              {
                num: "02",
                title:
                  "Inaccessibility from no page search support and native scrollbar",
              },
              {
                num: "03",
                title: "Non-negligible import costs (12.1kb - 24.34kb gzipped)",
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

        <Popup setBgColor={setBgColor} />
        <WhiteSection />
        <Footer />
        <Footer2 />
      </main>

      <main className="fixed -z-50 w-full h-screen">
        <Canvas
          camera={{ position: [0, 0, 100] }}
          style={{
            background: bgColor,
          }}
        >
          <ambientLight intensity={10} color="pink" />
          <directionalLight
            intensity={5}
            position={[0, 10, 5]}
            color="purple"
          />
          <Suspense fallback={null}>
            <group position={[0, 0, 0]}>
              <Float floatIntensity={100}>
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
