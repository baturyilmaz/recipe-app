import { useState, useEffect } from "react";

const useStorage = (dataName) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(dataName)) || []
  );

  useEffect(() => {
    localStorage.setItem(dataName, JSON.stringify(data));
  }, [data, dataName]);

  return [data, setData];
};

export default useStorage;
