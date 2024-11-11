import Spline from "@splinetool/react-spline";

const SplineViewer = () => {
//   useEffect(() => {
//     // Dynamically add the Spline script to the document head
//     const script = document.createElement('script');
//     script.src = 'https://unpkg.com/@splinetool/viewer@1.9.37/build/spline-viewer.js';
//     script.type = 'module';
//     document.head.appendChild(script);

//     // Clean up the script on unmount
//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

  return (
    <div>
      <Spline scene="https://prod.spline.design/B0fbs3SnzdnJrxfn/scene.splinecode"
      />
    </div>
  );
};

export default SplineViewer;
