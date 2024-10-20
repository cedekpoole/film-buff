import { useEffect } from "react";

export const useKey = (key, callback) => {
  useEffect(() => {
    function handle(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) callback();
    }

    document.addEventListener("keydown", handle);

    return () => {
      document.removeEventListener("keydown", handle);
    };
  }, [callback, key]);
};
