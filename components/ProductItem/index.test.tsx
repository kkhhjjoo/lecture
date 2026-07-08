import { render, screen } from '@testing-library/react';
import ProductItem from './index';

test("props에 전달된 상품의 title, description이 렌더링되는지 확인", () => { 
  const testTitle = "테스트 상품명";
  const testDescription = "테스트 상품 설명입니다.";

  render(<ProductItem title={testTitle} description={testDescription} />);

  const titleElement = screen.getByText(testTitle);
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(testDescription);
  expect(descriptionElement).toBeInTheDocument();
});

test("증가 버튼, 감소 버튼, 초기 숫자 1이 존재하는지 확인", () => { 
  render(<ProductItem title="상품명" description='상품 설명' />);

  const decreaseButton = screen.getByRole("button", { name: "-" });
  expect(decreaseButton).toBeInTheDocument();

  const increaseButton = screen.getByRole("button", { name: "+" });
  expect(increaseButton).toBeInTheDocument();

  const quantityText = screen.getByText("1");
  expect(quantityText).toBeInTheDocument();
});

test("구매하기 버튼 존재하는지 확인", () => { 
  render(<ProductItem title="상품명" description='상품 설명' />);

  const purchaseButton = screen.getByRole("button", { name: "구매하기" });
  expect(purchaseButton).toBeInTheDocument();
});

test("상품이 품절 상태일떄 '품절' 확인", () => { 
  render(<ProductItem title="상품명" description='상품 설명' isSoldOut={true} />);

  const soldOutText = screen.getByText("품절");
  expect(soldOutText).toBeInTheDocument();
});

test("상품이 품절 상태일때 버튼이 비활성화 되고, css클래스에 opacity-50이 포함되어있는지 확인", () => { 
  render(<ProductItem title="상품명" description='상품 설명' isSoldOut={true} />);

  const purchaseButton = screen.getByRole("button", { name: "구매하기" });
  expect(purchaseButton).toBeDisabled();
  expect(purchaseButton).toHaveClass("opacity-50");
  expect(purchaseButton).toHaveClass("cursor-not-allowed");

});