import { useEffect, useState } from "react";

const Loader = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < 100) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 5);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="h-screen flex flex-col items-end gap-y-48">
        <div className=" font-sans m-10 text-9xl loader-per text-white" style={styles.loaderPer}>{count}%</div>
        {/* <div className=" text-9xl text-start text-white w-screen flex justify-start">
          <h1 className="ml-16 font-heading">loading</h1></div> */}
      </div>
    );
}

export default Loader

const styles ={
  loaderPer:{
     fontSize: '25vw'
  }
}