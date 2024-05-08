// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/dist/ScrollSmoother";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// ScrollTrigger.normalizeScroll(true);

// const SmoothScroll = ({ children }) => {
//   const smoother = useRef(null);

//   useEffect(() => {
//     smoother.current = ScrollSmoother.create({
//       smooth: 1,
//       effects: true,
//       normalizeScroll: true
//     });

//     return () => {
//       smoother.current.kill();
//     };
//   }, []);

//   return (
//     <div ref={smoother}>
//       {children}
//     </div>
//   );
// };

// export default SmoothScroll;