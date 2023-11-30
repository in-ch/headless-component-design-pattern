import { Item } from "@/components/1.Dropdown";
import { useState } from "react";

const useDropdown = (items: Item[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "13":
        console.log("Enter 클릭");
        break;
      case "8":
        console.log("Spacebar 클릭");
        break;
    }
  };

  const toggleDropdown = () => setIsOpen((isOpen) => !isOpen);

  return {
    isOpen,
    toggleDropdown,
    handleKeyDown,
    selectedItem,
    setSelectedItem,
    selectedIndex,
  };
};

export default useDropdown;
