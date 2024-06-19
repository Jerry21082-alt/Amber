import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const storedValue =
    typeof window === "undefined" ? null : localStorage.getItem(key);
  const initialValue = storedValue ? JSON.stringify(storedValue) : defaultValue;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (value === "undefined") {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue];
};
