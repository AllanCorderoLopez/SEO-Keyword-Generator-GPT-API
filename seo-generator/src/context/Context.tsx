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
export interface phraseInterest{
  id: number;
  phrase: string;
}

export const getMiddleKeywords = (initialInputs: initialInput) => {
  //todo create interface
  return (
    "genere una cantidad de " +
    initialInputs.amountOfKeywords +
    " frases seguidas una de otra sin nunguna numeracion por frase, que esten relacionadas con el siguiente tema:  " +
    initialInputs.mainTopic +
    ". Que no incluyan ninguna de las siguientes palabras: " +
    initialInputs.badWords +
    ". Y que vayan relacionadas con esta intencion: " +
    initialInputs.intentions + ". Ademas al final de cada frase debe terminar con este simbolo .# "
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

export const getIncrementKeyword = (phrase: phraseInterest) => {
  return "Incremente el texto de las siguiente frase: " + phrase.phrase;
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
  topicSelected: string;
  setTopicSelected: React.Dispatch<React.SetStateAction<string>>;
  mainTopic: string;
  setMainTopic: React.Dispatch<React.SetStateAction<string>>;
  isTopicsGenerated: boolean;
  setIsTopicsGenerated: React.Dispatch<React.SetStateAction<boolean>>;


}


export const KeywordContext = createContext<keywordContextType>({
  keywords: [],
  selectedKeywords: { keyword: "", id: 0 },
  setKeyword: () => {},
  setInitialKeywords: () => {},
  setSelectedKeywords: () => {},
  deleteKeyword: () => {},
  initialKeywords: [],
  topicSelected: "",
  setTopicSelected: () => {},
  mainTopic: "",
  setMainTopic: () => {},
  isTopicsGenerated: false,
  setIsTopicsGenerated: () => {},
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
  const [mainTopic, setMainTopic] = useState<string>("");

  const [topicSelected, setTopicSelected] = useState<string>("");
  const [isTopicsGenerated, setIsTopicsGenerated] = useState<boolean>(false);

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
        topicSelected,
        setTopicSelected,
        mainTopic,
        setMainTopic,
        isTopicsGenerated,
        setIsTopicsGenerated,

      }}
    >
      {children}
    </KeywordContext.Provider>
  );
};
export const useKeywordContext = () => useContext(KeywordContext);
export default KeywordContextProvider;
 
