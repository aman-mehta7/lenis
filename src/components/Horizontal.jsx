import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';

const Horizontal = ({objects,id,className}) => {

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#horizontal",
      {
        x: 1500,
      },
      {
        opacity: 1,
        x: -2200,
        duration: 1,
        scrollTrigger: {
          trigger: "#horizontal",
          start: "top 80%",
          end: "bottom -400%",
          scrub: true,
        },
      }
    );
const elements = gsap.utils.toArray("#horivat > *");

gsap.fromTo(
  elements,
  {
    x: 500,
    y: 700,
  },
  {
    x: -20,
    y: (i) => -200 + i * 40,
    stagger: {
      each: 0.45,
      from: "start",
    },
    // markers: true,
    scrollTrigger: {
      trigger: "#horivat",
      start: "top 80%",
      end: "bottom -400%",
      scrub: true,
    },
  }
);


  });


  // const obj = [
  //   {
  //     num: '01',
  //     title: 'Loss of performance budget due to using CSS transforms',
  //   },
  //   {
  //     num: '02',
  //     title: 'Inaccessibility from no page search support and native scrollbar',
  //   },
  //   {
  //     num: '03',
  //     title: 'Non-negligible import costs (12.1kb - 24.34kb gzipped)',
  //   },
  //   {
  //     num: '04',
  //     title: 'Limited animation systems for complex, scroll-based animations',
  //   },
  //   {
  //     num: '05',
  //     title: 'Erasing native APIs like Intersection-Observer, CSS Sticky, etc.',
  //   },
  // ]


  return (
    <>
      {objects.map((item, index) => (
        <div key={index} id={id} className={className} >
          <h1 className='md:text-[7vw] text-[10vw] -mt-[2vw] font-bold text-color font-[compressed]'>{item.num}</h1>
          <p className=' w-[58vw] md:text-[2vw] text-[3vw] md:leading-[2.2vw] uppercase md:w-[28vw] font-[expanded] text-wrap'>{item.title}</p>
        </div>
))}
</>
  )
}

export default Horizontal;