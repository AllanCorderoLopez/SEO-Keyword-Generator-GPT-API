import React, { createContext, useContext, useState } from 'react';

export interface keywordSEO {
  id: number;
  keyword: string;
}
export interface initialInput
{
  mainTopic: string;
  badWords: string[];
  intentions: string[];
  amountOfKeywords: number;
}



export const getMiddleKeywords = (initialInputs: initialInput) => {//todo create interface 
  return "this is middle keywords " + initialInputs.mainTopic ; //todo PROMPT PARA CREAR LAS MIDDLEKEYWORDS
}

const getInitialSuggestions = () => {
  return "this is initial suggestions "; //todo PROMPT PARA CREAR LAS INITIAL SUGGESTIONS
}

const getFinalPrompt = (keywords: string[]) => {
  return "This is the final prompt";
};

const getInitialPrompt = () => {
  return "This is the initial prompt: ";
}

const getIncrementKeyword = (keywords: string[]) => {
  return "This is the increment keyword";
}



interface keywordContextType {
  keywords: keywordSEO[];
  selectedKeywords: keywordSEO;
  setKeyword: React.Dispatch<React.SetStateAction<keywordSEO[]>>;
  setSelectedKeywords: (id: number) => void;
  deleteKeyword: (id: number) => void;
}

export const KeywordContext = createContext<keywordContextType>({
  keywords: [],
  selectedKeywords: { keyword: '', id: 0 },
  setKeyword: () => {},
  setSelectedKeywords: () => {},
  deleteKeyword: () => {},
});

export interface CustomContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const KeywordContextProvider: React.FC<CustomContextProviderProps> = ({ children }) => {
  const [keywords, setKeywords] = useState<keywordSEO[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<keywordSEO>({ keyword: '', id: 0 });
  




  const setKeyword = (id: number) => {
    if(id===0){
        setSelectedKeywords({ keyword: '', id: 0 });
    }
    else{
        const changeKeyword = keywords.filter((keyword) => keyword.id === id)[0];
        setSelectedKeywords(changeKeyword);
  };
  }

  const deleteKeyword = (id: number) => {
    setKeywords((prevKeywords) => prevKeywords.filter((keyword) => keyword.id !== id));
  };

  return (
    <KeywordContext.Provider
      value={{
        keywords,
        selectedKeywords,
        setKeyword: setKeywords,
        setSelectedKeywords: setKeyword,
        deleteKeyword,
      }}
    >
      {children}
    </KeywordContext.Provider>
  );
};


export const useKeywordContext = () => useContext(KeywordContext);

export default KeywordContextProvider;
