import { useState, useEffect } from "react";

export const useLocalStorageState = (initial, key) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue) || initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
