import { render, screen } from '@testing-library/react';
import Home from './page';

describe("게시글 목록 페이지", () => { 
  test("게시글 목록을 불러와 화면에 렌더링한다.", async () => { 
    render(<Home />);
    const postListItems = await screen.findAllByRole("listitem");

    expect(postListItems).toHaveLength(2);
    expect(screen.getByText("1: 첫 번째 게시글")).toBeInTheDocument();
    expect(screen.getByText("2: 두 번째 게시글")).toBeInTheDocument();
  });

  describe("게시글 상세 페이지", () => { 
    test("게시글 상세 데이터를 불러와 화면에 렌더링한다", async () => { 
      render(<Home />);

      expect(await screen.findByText("1: 첫 번째 게시글")).toBeInTheDocument();
      expect(screen.getByText("내용 1")).toBeInTheDocument();
    });
  });
});