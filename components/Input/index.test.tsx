import { render, screen } from '@testing-library/react';
import { Input } from './index';

test("input 컴포넌트 미입력시 x버튼이 보이지 않아야 한다", () => { 
  render(<Input />);

  const input = screen.getByRole("textbox");
  const deleteButton = screen.queryByRole("button", { name: "입력값 지우기" });

  expect(input).toHaveValue("");
  expect(deleteButton).not.toBeInTheDocument();
});

test("Input 컴포넌트에 입력값이 있을때 X 버튼이 보이는지 확인", () => { 
  render(<Input defaultValue="입력값" />)

  const input = screen.getByRole("textbox");
  const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

  expect(input).toHaveValue("입력값");
  expect(deleteButton).toBeInTheDocument();
});