// src/app/page.tsx

"use client";

import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostListPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:4000/posts");

      if (!response.ok) {
        throw new Error("게시글 목록을 불러오지 못했습니다.");
      }

      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <main>
      <h1>게시글 목록</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>
              {post.id}: {post.title}
            </h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
