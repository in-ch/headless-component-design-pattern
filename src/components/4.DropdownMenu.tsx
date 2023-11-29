import Image from "next/image";
import { Item } from "./1.Dropdown";

/**
 * @description selectedIndex 프로퍼티를 허용하도록 DropdownMenu 컴포넌트를 업데이트한다. 
 *              이 프로퍼티는 강조 표시된 CSS 스타일을 적용하고 현재 선택된 항목에 aria-selected 속성을 설정하는 데 사용되어 시각적 피드백과 접근성을 향상시킨다.
*/
const DropdownMenu = ({
    items,
    onItemClick,
    selectedIndex,
  }: {
    items: Item[];
    onItemClick: (item: Item) => void;
    selectedIndex: number;
  }) => {
    return ( 
      <div className="dropdown-menu" role="listbox">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => onItemClick(item)}
            className="item-container"
          >
            <Image src={item.icon} alt={item.text} width={20} height={20} />
            <div className="details">
              <div>{item.text}</div>
              <small>{item.description}</small>
            </div>
          </div>
        ))}
      </div>
    );
};

export default DropdownMenu;