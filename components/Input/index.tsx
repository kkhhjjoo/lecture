// src/components/Input/index.tsx

"use client";

import { useState } from "react";
import { DeleteIconButton } from "./DeleteIconButton";

interface InputProps {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete?: () => void;
  type?: "text" | "password" | "email" | "number"; // 필요한 타입을 추가할 수 있습니다.
  placeholder?: string;
  isError?: boolean;
  testId?: string;
  // 추가적인 props가 필요하다면 여기에 정의할 수 있습니다.
}
export const Input = ({
  id,
  name,
  value,
  defaultValue = "",
  onChange,
  onDelete,
  type = "text",
  placeholder,
  isError = false,
  testId
}: InputProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleDelete = () => {
    if (isControlled) {
      onDelete?.();
    } else {
      setInternalValue("");
    }
  };

  return (
    <div className="relative inline-block w-full">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        data-testid={testId}
        className={`p-2 pr-8 border rounded-md w-full ${
          isError ? "border-red-500" : "border-gray-300"
        }`}
      />
      {currentValue && (
        <button
          type="button"
          onClick={handleDelete}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          aria-label="입력값 지우기"
        >
          <DeleteIconButton />
        </button>
      )}
    </div>
  );
};