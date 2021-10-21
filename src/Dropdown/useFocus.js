import { useCallback, useState, useEffect } from "react";
import * as key from '../helpers/keycodes'

const useFocus = (size) => {
  const [currentFocus, setCurrentFocus] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false)

  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === key.DOWN) {
        // Down arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (e.keyCode === key.UP) {
        // Up arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
      }
    },
    [size, currentFocus, setCurrentFocus]
  );
  
  const handleButtonKeyPress = useCallback(
    e => {
      if (e.keyCode === key.DOWN) {
        // Down arrow
        e.preventDefault();
        if (!menuOpen) {
          setMenuOpen(true)
        }
        handleKeyDown(e)
      } else if (e.keyCode === key.ENTER) {
        // Enter
        e.preventDefault();
        if (!menuOpen) {
          setMenuOpen(true)
          handleKeyDown(e)
        } else {
          setMenuOpen(false)
        }
      }
    },
    [menuOpen, handleKeyDown]
  )
  

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus, handleButtonKeyPress, menuOpen, setMenuOpen];
}

export default useFocus;