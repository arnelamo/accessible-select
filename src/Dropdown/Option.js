import React, { useEffect, useRef, useCallback } from "react";
import { ListOption, Text, Dot } from './styles'

const Option = ({ optionName, optionColor, currentFocus, index, language, onSelect, selected, setMenuOpen, buttonRef }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (currentFocus) {
      ref.current.focus();
    }
  }, [currentFocus]);

  const handleSelect = useCallback(() => {
    onSelect({index, value: { name: optionName, color: optionColor }})
    buttonRef.current.focus()
    setMenuOpen(false)
  }, [optionName, optionColor, index, onSelect, setMenuOpen, buttonRef ]);

  return (
    <ListOption
      tabIndex={currentFocus ? 0 : -1}
      role="option"
      id={index}
      aria-selected={optionName === selected.value.name}
      ref={ref}
      onClick={handleSelect}
      onKeyPress={handleSelect}
    >
      <Dot color={optionColor} />
      <Text lang={language}>
        {optionName}
      </Text>
    </ListOption>
  );
};

export default Option;