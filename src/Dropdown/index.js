import { useState, useRef } from "react";
import Option from "./Option";
import useFocus from "./useFocus";
import {
  DropdownButton,
  List,
  Arrow,
  Dot
} from './styles'

const options = [
  {
    color: 'green',
    name: "Option 1"
  },
  {
    color: 'blue',
    name: "Option 2"
  },
  {
    color: 'orange',
    name: "Option 3"
  },
  {
    color: 'red',
    name: "Option 4"
  },
 ];

const DropDown = ({ onChange, language = 'en' }) => {
  const [selected, setSelected] = useState({ index: 0, value: options[0]});
  const [currentFocus, handleButtonKeyPress, menuOpen, setMenuOpen] = useFocus(options.length);
  const buttonRef = useRef()

  const toggleOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMenuOpen((prevState) => !prevState);
  };

  const selectOption = (value) => {
    setMenuOpen(false);
    setSelected(value);
    onChange(value)
  };

  return (
    <div>
      <DropdownButton
        ref={buttonRef}
        aria-haspopup="listbox"
        aria-labelledby={currentFocus}
        onClick={toggleOpen}
        onKeyDown={handleButtonKeyPress}
        aria-expanded={menuOpen ? true : undefined}
      >
        <div>
          <Dot color={selected.value.color}/><span>{selected.value.name}</span>
        </div>
        <Arrow aria-hidden="true" />
      </DropdownButton>
      <List
        isOpen={menuOpen}
        tabIndex="-1"
        role="listbox"
        aria-labelledby="exp_elem"
        aria-activedescendant={currentFocus}
      >
        {options.map((opt, i) => {
          return <Option
            optionName={opt.name}
            language={language}
            optionColor={opt.color}
            selected={selected}
            key={opt.name}
            index={i}
            currentFocus={currentFocus === i}
            onSelect={selectOption}
            setMenuOpen={setMenuOpen}
            buttonRef={buttonRef}
          />;
        })}
      </List>
    </div>
  );
};

export default DropDown;
