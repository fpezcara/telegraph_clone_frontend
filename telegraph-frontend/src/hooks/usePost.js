import { useState } from "react";

const usePost = () => {
  const [data, setData] = useState([]);
  const postApi = async (url, body) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const res = await fetch(url, options);
    const info = await res.json();
    console.log(res);
    setData(info);
  };

  return { postApi, data };
};

export default usePost;
