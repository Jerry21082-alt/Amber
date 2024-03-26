import { useState } from "react";

export const useLocalStorage = (key, initialVal) => {
  const [value, setStoredVal] = useState(() => {
    if (typeof window === "undefined") return initialVal;

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialVal;
    } catch (error) {
      console.log(error);
      return initialVal;
    }
  });

  const setValue = (value) => {
    setStoredVal(value);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [value, setValue];
};
