import React, { useState } from "react";
import { keywordSEO, useKeywordContext } from "@/context/Context";
import fetchCompletion from "@/api/GPTAPI";
import { getInitialSuggestionsPromtp } from "@/Promtps/PromtsGPT";

function GetInitialSuggestions() {
  const { setInitialKeywords } = useKeywordContext();
  const [initialSuggestions, setInitialSuggestions] = useState("");

  const handleGetInitialSuggestions = async () => {
    const prompt = getInitialSuggestionsPromtp();
    const completion = await fetchCompletion(prompt);
    console.log(completion);
    setInitialSuggestions(completion);
    const cleanedKeywords = completion.replace(/^\[|\[|\]|\].|\.|\,$/g, " ");


const keywordArray = cleanedKeywords.split(", ");

// Crear un arreglo de objetos keywordSEO
const keywordSEOArray: keywordSEO[] = keywordArray.map((keyword:string, index:number) => ({
  id: index + 1, // Asignar un ID único a cada palabra clave
  keyword: keyword.trim(), // Eliminar espacios en blanco alrededor de la palabra clave
}));

setInitialKeywords(keywordSEOArray);
  };

  return (
    <div>
      <button onClick={handleGetInitialSuggestions}>
        Cambiar elementos de la lista
      </button>

    </div>
  );
}

export default GetInitialSuggestions;
