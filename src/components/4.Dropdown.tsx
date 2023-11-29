import { useState } from "react";
import { Item } from "./1.Dropdown";
import DropdownMenu from "./4.DropdownMenu";
import Trigger from "./2.Trigger";

interface DropdownProps {
    items: Item[];
}

/**
 * @description 이제 어디에 키보드 탐색을 구현한다. 이는 접근성을 위해 특히 중요하며 웹 페이지에서 원활한 탐색 환경을 제공한다.
 *              onKeyDown 이벤트 핸들러를 사용하여 이를 구현한다.
 *              먼저 Dropdown 컴포넌트의 onKeyDown 이벤트에 handleKeyDown 함수를 연결한다. 여기서는 switch 문을 사용하여 특정 키가 눌렸는지 확인하고 그에 따라 동작을 수행한다. 
 *              예를 들어 'Enter' or 'Space' 키를 누르면 드롭다운이 토글된다. 
 *              마찬가지로 'ArrowDown' 및 'ArrowUp' 키를 사용하면 목록 항목을 탐색하고 필요한 경우 목록의 시작 또는 끝으로 돌아갈 수 있다.
*/
const Dropdown = ({ items }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      switch (
        e.key
      ) {
        case '13':
          console.log('Enter 클릭');
          break;
        case '8':
          console.log('Spacebar 클릭');
          break;
      }
    };
  
    return (
      <div className="dropdown" onKeyDown={handleKeyDown}>
        <Trigger
          label={selectedItem ? selectedItem.text : 'Select an item...'}
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && <DropdownMenu items={items} onItemClick={setSelectedItem} selectedIndex={selectedIndex} />}
      </div>
    );
  };

export default Dropdown;