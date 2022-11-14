import React, { useState } from "react";
import DropdownButton from "./DropdownButton";

type Option = {
  value: string;
  label: string;
};

type Props = {
  id: string;
  options: Option[];
  selected: string;
  onSelect: Function;
};

const Dropdown = ({ options, selected, onSelect, id }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleDropdown = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <div className="relative">
      <button
        aria-expanded={isOpened}
        aria-controls={id}
        className="px-5 py-2 border-2 border-black bg-white text-black w-[10.8125rem]"
        onClick={toggleDropdown}
      >
        <div className="flex flex-row justify-between items-center">
          <span className="flex-1 text-center">
            {options.find((option) => option.value === selected)?.label}
          </span>
          <svg
          className={`transition-all${isOpened ? " transform rotate-180" : ""}`}
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.25 7L6.11959e-07 -9.17939e-07L10.5 0L5.25 7Z"
              fill="#333333"
            />
          </svg>
        </div>
      </button>
      <div id={id} className={isOpened ? "absolute z-10 animate-fade-in" : "hidden"}>
        <ul className="dropdown-list" role="listbox">
          {options.map((option) => (
            <li key={option.value} role="option" aria-selected={selected === option.value}>
              <DropdownButton
                onClick={() => {
                  onSelect(option);
                  setIsOpened(false);
                }}
              >
                {option.label}
              </DropdownButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
