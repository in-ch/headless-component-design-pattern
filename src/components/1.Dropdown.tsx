import Image from 'next/image';
import { useState } from 'react';

export interface Item {
  icon: string;
  text: string;
  description: string;
}

export type DropdownProps = {
  items: Item[];
};

/**
 * @description useState 훅을 사용하여 isOpen 및 selectedItem 상태를 관리하여 드롭다운의 동작을 제어한다. 
 *              트리거 요소를 간단히 클릭하면 드롭다운 메뉴가 토글되고, 항목을 선택하면 selectedItem 상태가 업데이트한다.
 * 
 *              이제 이 컴포넌트를 더 명확하게 보기 위해 더 작고 관리하기 쉬운 조각으로 분해한다. 
 *              이 분해는 헤드리스 컴포넌트 패턴의 일부는 아니지만, 복잡한 UI 컴포넌트를 여러 조각으로 나누는 것은 가치 있는 활동이다. 
 *              
 *              사용자 클릭을 처리하는 Trigger 컴포넌트를 먼저 추출한다.
 */
const Dropdown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className="dropdown">
      <div className="trigger" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        <span className="selection">
          {selectedItem ? selectedItem.text : 'Select an item...'}
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
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
      )}
    </div>
  );
};

export default Dropdown;