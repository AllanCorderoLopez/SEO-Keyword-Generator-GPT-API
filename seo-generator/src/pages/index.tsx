import fetchCompletion from "@/api/GPTAPI";
import { useEffect, useState } from "react";


export default function Home() {

  const [response, setResponse] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const prompt = "fine";
      const completion = await fetchCompletion(prompt);
      setResponse(completion);
    };
    fetchData();
  }, []);
  return (
    <main className="p4">
      <h1 className="p-10">
        SEO Keyword Generator
      </h1>
      <p>{response || "catgando..."}</p>


      
    </main>
  )
}
