import React, { createContext, useContext, useState } from "react";

export interface keywordSEO {
  id: number;
  keyword: string;
}
export interface initialInput {
  mainTopic: string;
  badWords: keywordSEO[];
  intentions: keywordSEO[];
  amountOfKeywords: number;
  initialKeywords: keywordSEO[]; // Add the property here
}

export interface phareList {
  topic: string;
  badWords: keywordSEO[];
  intentions: keywordSEO[];
  amountOfKeywords: number;
}

export interface phraseInterest {
  id: number;
  phrase: string;
}

export interface ArrayOfPhrases {
  arrayOfPhrases: phraseInterest[];
}

export const getMiddleKeywords = (initialInputs: initialInput) => {
  return (
    "genere una cantidad de " +
    initialInputs.amountOfKeywords +
    " diferentes frases totalmente completas, seguidas una de otra sin nunguna numeracion por frase, que esten relacionadas y orientadas al siguiente tema:  " +
    initialInputs.mainTopic +
    ". Que no incluyan ninguna relacion con las siguientes palabras: " +
    initialInputs.badWords.map(badwords => badwords.keyword).join(', ') +
    ". Y que vayan orientadas exclusivamente con estas intenciones para un sitio web: " +
    initialInputs.intentions.map(intention => intention.keyword).join(', ') +
    ". Las frases no deben llevar comillas de ningun tipo. Cada frase generada tiene que terminar obligatoriamente con este simbolo: # "
  );
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

export const getIncrementPhrase = (phrase: phraseInterest) => {
  return (
    "Tome como base la frase que se esta proporcionado y amplie ligeramente su contenido, no puede utilizar mas de 10 palabras para ampliar la siguiente frase: " +
    phrase.phrase
  );
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

  setInitialKeywords: (newKeyword: keywordSEO[]) => void;
  setInitialBadKeywords: (newKeyword: keywordSEO[]) => void;
  setInitialIntentions: (newKeyword: keywordSEO[]) => void;
  setSelectedIntentions: (newKeyword: keywordSEO[]) => void;
  setSelectedBadKeywords: (newKeyword: keywordSEO[]) => void;

  setSelectedKeywords: (id: number) => void;
  deleteKeyword: (id: number) => void;
  initialKeywords: keywordSEO[];
  topicSelected: string;
  setTopicSelected: React.Dispatch<React.SetStateAction<string>>;
  mainTopic: string;
  setMainTopic: React.Dispatch<React.SetStateAction<string>>;
  isTopicsGenerated: boolean;
  setIsTopicsGenerated: React.Dispatch<React.SetStateAction<boolean>>;
  setIsBadKeyWordsGenerated: React.Dispatch<React.SetStateAction<boolean>>;
  setIsIntentionsGenerated: React.Dispatch<React.SetStateAction<boolean>>;
  isBadKeyWordsGenerated: boolean;
  isIntentionsGenerated: boolean;

  badKeywords: keywordSEO[];
  intentions: keywordSEO[];
  selectedIntentions: keywordSEO[];
  selectedBadKeywords: keywordSEO[];
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStep: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;

  setPhrases: React.Dispatch<React.SetStateAction<phareList>>;
  phrases: phareList;

  initialInputs: initialInput;
  setInitialInputs: React.Dispatch<React.SetStateAction<initialInput>>;
  setPhrasesThatIntrest: React.Dispatch<React.SetStateAction<phraseInterest[]>>;
  phrasesThatIntrest: phraseInterest[];
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  setIsLoadedPhrases: React.Dispatch<React.SetStateAction<boolean>>;
  isLoadedPhrases: boolean;
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
  setInitialBadKeywords: () => {},
  badKeywords: [],
  setInitialIntentions: () => {},
  intentions: [],

  setSelectedIntentions: () => {},
  selectedIntentions: [],
  setSelectedBadKeywords: () => {},
  selectedBadKeywords: [],
  setIsBadKeyWordsGenerated: () => {},
  setIsIntentionsGenerated: () => {},
  isBadKeyWordsGenerated: false,
  isIntentionsGenerated: false,
  setActiveStep: () => {},
  activeStep: 0,
  setShowModal: () => {},
  showModal: false,

  initialInputs: {
    mainTopic: "",
    badWords: [],
    intentions: [],
    amountOfKeywords: 0,
    initialKeywords: [],
  },

  setInitialInputs: () => {},

  phrases: {
    topic: "",
    badWords: [],
    intentions: [],
    amountOfKeywords: 0,
  },
  setPhrases: () => {},
  phrasesThatIntrest: [],
  setPhrasesThatIntrest: () => {},
  setIsActive: () => {},
  isActive: false,
  setIsLoadedPhrases: () => {},
  isLoadedPhrases: false,
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
  const [badKeywords, setBadKeywords] = useState<keywordSEO[]>([]);
  const [selectedBadKeywords, setSelectedBadKeywords] = useState<keywordSEO[]>(
    []
  );
  const [intentions, setIntentions] = useState<keywordSEO[]>([]);
  const [selectedIntentions, setSelectedIntentions] = useState<keywordSEO[]>(
    []
  );
  const [topicSelected, setTopicSelected] = useState<string>("");
  const [isTopicsGenerated, setIsTopicsGenerated] = useState<boolean>(false);
  const [isBadKeyWordsGenerated, setIsBadKeyWordsGenerated] =
    useState<boolean>(false);
  const [isIntentionsGenerated, setIsIntentionsGenerated] =
    useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phrasesThatIntrest, setPhrasesThatIntrest] = useState<
    phraseInterest[]
  >([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoadedPhrases, setIsLoadedPhrases] = useState<boolean>(false);

  const [phrases, setPhrases] = useState<phareList>({
    topic: "",
    badWords: [],
    intentions: [],
    amountOfKeywords: 0,
  });

  const [initialInputs, setInitialInputs] = useState<initialInput>({
    mainTopic: "",
    badWords: [],
    intentions: [],
    amountOfKeywords: 0,
    initialKeywords: [],
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
        topicSelected,
        setTopicSelected,
        mainTopic,
        setMainTopic,
        isTopicsGenerated,
        setIsTopicsGenerated,
        setInitialBadKeywords: setBadKeywords,
        badKeywords,
        setInitialIntentions: setIntentions,
        intentions,

        setSelectedBadKeywords: setSelectedBadKeywords,
        selectedBadKeywords,
        setSelectedIntentions: setSelectedIntentions,
        selectedIntentions,
        setIsBadKeyWordsGenerated,
        setIsIntentionsGenerated,
        isBadKeyWordsGenerated,
        isIntentionsGenerated,
        setActiveStep,
        activeStep,
        setShowModal,
        showModal,

        initialInputs,
        setInitialInputs,
        setPhrases,
        phrases,
        setPhrasesThatIntrest,
        phrasesThatIntrest,
        setIsActive,
        isActive,
        setIsLoadedPhrases,
        isLoadedPhrases,

      }}
    >
      {children}
    </KeywordContext.Provider>
  );
};
export const useKeywordContext = () => useContext(KeywordContext);
export default KeywordContextProvider;
