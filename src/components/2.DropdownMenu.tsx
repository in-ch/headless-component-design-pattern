import Image from "next/image";
import { Item } from "./1.Dropdown";

/**
 * @description DropdownMenu 컴포넌트는 각 항목에 아이콘과 설명이 포함된 항목들의 목록을 표시한다.
 *              각 항목을 클릭하면 선택된 항목에 인수로 제공된 onItemClick 함수가 실행된다.
*/
const DropdownMenu = ({
    items,
    onItemClick,
  }: {
    items: Item[];
    onItemClick: (item: Item) => void;
  }) => {
    return (
      <div className="dropdown-menu">
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