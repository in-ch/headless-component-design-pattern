import { act } from "@testing-library/react-hooks";
import { renderHook, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { Item } from "../components/1.Dropdown";
import SimpleDropdown from "../components/SimpleDropdown";
import useDropdown from "../hooks/useDropdown";

const items = [
  { text: "Apple" },
  { text: "Orange" },
  { text: "Banana" },
] as Item[];

it("드롭다운 열기/닫기 상태가 핸들링된다.", () => {
  const { result } = renderHook(() => useDropdown(items));

  expect(result.current.isOpen).toBe(false);

  act(() => {
    result.current.toggleDropdown();
  });

  expect(result.current.isOpen).toBe(true);

  act(() => {
    result.current.toggleDropdown();
  });

  expect(result.current.isOpen).toBe(false);
});


it('토글을 실행시킨다', async () => {
  render(<SimpleDropdown items={items} />);

  const trigger = screen.getByRole('button');

  expect(trigger).toBeInTheDocument();

  await userEvent.click(trigger);

  const list = screen.getByRole('listbox');
  expect(list).toBeInTheDocument();

  await userEvent.click(trigger);

  expect(list).not.toBeInTheDocument();
});