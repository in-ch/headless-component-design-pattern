import { useState } from "react";
import { Item } from "./1.Dropdown";
import DropdownMenu from "./2.DropdownMenu";
import Trigger from "./2.Trigger";

interface DropdownProps {
    items: Item[];
}

/**
 * @description 그런 다음 Dropdown 컴포넌트 내에서 Trigger와 DropdownMenu를 조합하고 필요한 상태를 제공한다. 
 *              이 접근 방식은 Trigger 및 DropdownMenu 컴포넌트가 상태에 구애받지 않고, 전달된 프로퍼티에만 반응하도록 보장한다.
*/
const Dropdown = ({ items }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  
    return (
      <div className="dropdown">
        <Trigger
          label={selectedItem ? selectedItem.text : 'Select an item...'}
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && <DropdownMenu items={items} onItemClick={setSelectedItem} />}
      </div>
    );
  };

export default Dropdown;