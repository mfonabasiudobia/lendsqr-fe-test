import { useState, useEffect, useRef, RefObject } from "react";
import { DropdownModel } from "./Models/DropdownModel";
import useAtomicStyle from "@/Views/Hooks/useAtomicStyle";

const Dropdown: React.FC<DropdownModel> = ({
  children,
  className,
  elevation,
  size,
  color,
  Item,
  margin,
  padding,
  align,
  weight,
  spacingX,
  spacingY,
  spacing,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    function handleClickOutside(e: Event) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const styles = {
    importedStyles: useAtomicStyle({
      size,
      color,
      margin,
      padding,
      className,
      elevation,
      align,
      weight,
      spacingX,
      spacingY,
      spacing,
    }),
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <div onClick={setIsOpen} className="cursor-pointer">
        {Item}
      </div>
      {isOpen && (
        <div className={`absolute ${Object.values(styles).join(" ")}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
