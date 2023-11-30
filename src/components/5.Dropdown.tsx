import useDropdown from "@/hooks/useDropdown";
import { Item } from "./1.Dropdown";
import Trigger from "./2.Trigger";
import DropdownMenu from "./4.DropdownMenu";

interface DropdownProps {
    items: Item[];
}

/**
 * @description 4.Dropdown은  selectedItem, selectedIndex, setSelectedItem 등과 같은 모든 상태 관리 구조체와 함께 광범위한 스위치 케이스가 들어 있다.
 *              이를 해결하기 위해 아래와 같이 훅스 패턴을 이용한다.
 *              디자인의 장점은 로직과 프레젠테이션이 명확하게 분리되어 있다는 점이다.
 *              여기서 ‘로직’이란 선택 컴포넌트의 핵심 기능인 열기/닫기 상태, 선택된 항목, 강조 표시된 요소, 목록에서 선택할 때 화살표 아래로 누르는 등의 사용자 입력에 대한 반응 등을 의미한다. 
 *              이러한 분리를 통해 컴포넌트는 특정 시각적 표현에 얽매이지 않고 핵심 동작을 유지하므로 “헤드리스 컴포넌트”라는 용어를 정당화할 수 있다.
*/  
const Dropdown = ({ items }: DropdownProps) => {

    const {
        isOpen,
        selectedItem,
        selectedIndex,
        toggleDropdown,
        handleKeyDown,
        setSelectedItem,
      } = useDropdown(items);

    return (
        <div className="dropdown" onKeyDown={handleKeyDown}>
        <Trigger
          onClick={toggleDropdown}
          label={selectedItem ? selectedItem.text : 'Select an item...'}
        />
        {isOpen && (
          <DropdownMenu
            items={items}
            onItemClick={setSelectedItem}
            selectedIndex={selectedIndex}
          />
        )}
      </div>
    );
}
export default Dropdown;