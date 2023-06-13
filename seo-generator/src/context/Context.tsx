import React, { createContext, useContext, useState } from "react";

export interface keywordSEO {
  id: number;
  keyword: string;
}
export interface initialInput {
  mainTopic: string;
  badWords: string[];
  intentions: string[];
  amountOfKeywords: number;
  initialKeywords: keywordSEO[]; // Add the property here

}

export const getMiddleKeywords = (initialInputs: initialInput) => {
  //todo create interface
  return (
    "genere una lista de  " +
    initialInputs.amountOfKeywords +
    " frases relacionadas con el siguiente tema:  " +
    initialInputs.mainTopic +
    ". Que no incluyan ninguna de las siguientes palabras: " +
    initialInputs.badWords +
    ". Y que vayan relacionadas con esta intencion: " +
    initialInputs.intentions
  ); //todo PROMPT PARA CREAR LAS MIDDLEKEYWORDS
};

const getInitialSuggestions = () => {
  return "genere una lista de 15 palabras clave, más cotidianas y comunes en sitios web que funcionen como base para un tema pricipal de una página web para el uso de posicionamiento web, separadas por comas, es importante que cada elemento esté separado por comas, sin utilizar conjunciones y los temas deben ser variados, no utilices palabras relacionadas a la palabra 'SEO'"; 
};

const getFinalPrompt = (keywords: string[]) => {
  return "This is the final prompt" + keywords;
};

const getInitialPrompt = () => {
  return "This is the initial prompt: ";
};

const getIncrementKeyword = (keywords: string[]) => {
  return "Incremente el texto de las siguientes frases: " + keywords;
};

const getInitialBadWordsPrompt = (initialInputs: initialInput) => {
  return (
    "genere una lista de solo " +
    initialInputs.amountOfKeywords +
    " palabras a evitar relacionadas con el siguiente tema: " +
    initialInputs.mainTopic
  );
};

const getInitialIntentions = (initialInputs: initialInput) => {
  return (
    "genere una lista de 10 intenciones a manera de frase relacionadas en la siguiente palabra: " +
    initialInputs.mainTopic
  );
};

interface keywordContextType {
  keywords: keywordSEO[];
  selectedKeywords: keywordSEO;
  setKeyword: React.Dispatch<React.SetStateAction<keywordSEO[]>>;
  setInitialKeywords: (newKeyword: keywordSEO[]) => void; // Update the type here
  setSelectedKeywords: (id: number) => void;
  deleteKeyword: (id: number) => void;
  initialKeywords: keywordSEO[]; // Include the property here

}


export const KeywordContext = createContext<keywordContextType>({
  keywords: [],
  selectedKeywords: { keyword: "", id: 0 },
  setKeyword: () => {},
  setInitialKeywords: () => {},
  setSelectedKeywords: () => {},
  deleteKeyword: () => {},
  initialKeywords: [], // Include the property here
});

export interface CustomContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const KeywordContextProvider: React.FC<CustomContextProviderProps> = ({
  children,
}) => {
  const [keywords, setKeywords] = useState<keywordSEO[]>([]);
  const [initialKeywords, setInitialKeywords] = useState<keywordSEO[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<keywordSEO>({
    keyword: "",
    id: 0,
  });

  const setKeyword = (id: number) => {
    if (id === 0) {
      setSelectedKeywords({ keyword: "", id: 0 });
    } else {
      const changeKeyword = keywords.filter((keyword) => keyword.id === id)[0];
      setSelectedKeywords(changeKeyword);
    }
  };

  


  const deleteKeyword = (id: number) => {
    setKeywords((prevKeywords) =>
      prevKeywords.filter((keyword) => keyword.id !== id)
    );
  };

  return (
    <KeywordContext.Provider
      value={{
        keywords,
        selectedKeywords,
        setInitialKeywords,
        setKeyword: setKeywords,
        setSelectedKeywords: setKeyword,
        deleteKeyword,
        initialKeywords,
      }}
    >
      {children}
    </KeywordContext.Provider>
  );
};

export const useKeywordContext = () => useContext(KeywordContext);

export default KeywordContextProvider;
