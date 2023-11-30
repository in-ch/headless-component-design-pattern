import useDropdown from "@/hooks/useDropdown";
import { Item } from "./1.Dropdown";

interface DropdownProps {
    items: Item[];
}

const SimpleDropdown = ({ items }: DropdownProps) => {
    const {
      isOpen,
      toggleDropdown,
      selectedIndex,
      selectedItem,
      updateSelectedItem,
      getAriaAttributes,
      dropdownRef,
    } = useDropdown(items);
  
    return (
      <div tabIndex={0} ref={dropdownRef} {...getAriaAttributes()}>
        <button onClick={toggleDropdown}>Select</button>
        <p data-testid="selected-item">{selectedItem?.text}</p>
        {isOpen && (
          <ul role="listbox">
            {items.map((item, index) => (
              <li
                key={index}
                role="option"
                aria-selected={index === selectedIndex}
                onClick={() => updateSelectedItem(item)}
              >
                {item.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};

export default SimpleDropdown;