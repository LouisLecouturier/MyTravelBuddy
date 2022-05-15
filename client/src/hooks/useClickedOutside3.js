import { useEffect, useState, useRef } from "react";


export default function useClickedOutside3() {
  const target3 = useRef();
  const button3 = useRef();

  const [isShown3, setIsShown3] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside3 = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isShown3 &&
        target3.current &&
        button3.current &&
        !target3.current.contains(e.target)
      ) {
        setIsShown3(!isShown3);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside3);
    console.log(123);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside3);
    };
  }, [isShown3]);

  return { target3, button3, isShown3, setIsShown3 };
}
