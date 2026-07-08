import { render, screen } from "@testing-library/react";
import LoginForm from '.';

test("로그인 폼이 올바르게 렌더링 되는지 확인", () => { 
  render(<LoginForm />);

  const emailByLabel = screen.getByLabelText("이메일:");
  const emailByPlaceholder = screen.getByPlaceholderText("이메일을 입력하세요");
  const loginButton = screen.getByRole("button", { name: "로그인" });
  const emailByTestId = screen.getByTestId("email-input");

   // 모든 요소가 화면에 있는지 확인
  expect(emailByLabel).toBeInTheDocument();
  expect(emailByPlaceholder).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(emailByTestId).toBeInTheDocument();

  // emailByLabel, emailByPlaceholder, emailByTestId가 동일한 요소인지 확인
  expect(emailByLabel).toBe(emailByPlaceholder);
  expect(emailByLabel).toBe(emailByTestId);
});