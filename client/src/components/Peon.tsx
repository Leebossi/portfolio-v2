import { useEffect, useState } from "react";
import PeonGif from "../assets/gif/peon.gif";

const Peon = () => {
  const [work, setWork] = useState<string[]>([]);

  useEffect(() => {
    console.log("work work", work.length);
    if (work.length > 0) {
      setTimeout(() => {
        const elem = document.getElementById(`work-${work.length}`);
        if (elem === null) {
          console.error("oops");
        } else {
          elem.remove();
        }
      }, 1000);
    }
  }, [work]);

  return (
    <div
      className="peon"
      onClick={() => setWork((prevWork) => [...prevWork, "work work"])}
    >
      {work.map((element, index) => {
        return (
          <span key={index} id={`work-${index + 1}`}>
            {element}
          </span>
        );
      })}
      <img src={PeonGif} />
    </div>
  );
};

export default Peon;
