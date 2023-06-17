import fetchCompletion from "@/api/GPTAPI";
import {
  ArrayOfPhrases,
  getIncrementPhrase,
  getMiddleKeywords,
  initialInput,
  keywordSEO,
  phareList,
  phraseInterest,
  useKeywordContext,
} from "@/context/Context";
import React, { useEffect, useState } from "react";
import FinalList from "./FinalList";
import { FaPlus, FaTimes, FaTrash } from "react-icons/fa";

function PhraseList() {
  const {
    setPhrases,
    phrases,
    mainTopic,
    selectedBadKeywords,
    selectedIntentions,
    setPhrasesThatIntrest,
    phrasesThatIntrest,
    setIsActive,
    isActive,

    setIsLoadedPhrases,
    isLoadedPhrases,
  } = useKeywordContext();

  const initialKeywordsArray: keywordSEO[] = [];
  const badWordsArray: keywordSEO[] = phrases.badWords;
  const intentionsArray: keywordSEO[] = phrases.intentions;
  const amountOfKeyword: number = phrases.amountOfKeywords;

  const [finalListPhrases, setFinalListPhrases] = useState<phraseInterest[]>(
    []
  );
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const initialInputs: initialInput = {
    mainTopic: phrases.topic,
    badWords: badWordsArray,
    intentions: intentionsArray,
    amountOfKeywords: amountOfKeyword + 2,
    initialKeywords: initialKeywordsArray,
  };

  const moreInputs: initialInput = {
    mainTopic: phrases.topic,
    badWords: badWordsArray,
    intentions: intentionsArray,
    amountOfKeywords: 2,
    initialKeywords: initialKeywordsArray,
  };

  const handleGetInitialSuggestions = async () => {
    //DELETE THIS
    const phraseList: phareList = {
      topic: mainTopic,
      badWords: selectedBadKeywords,
      intentions: selectedIntentions,
      amountOfKeywords: 15,
    };
    setPhrases(phraseList);
    //DELETE THIS ^^^^^

    const prompt = getMiddleKeywords(initialInputs);
    const completion = await fetchCompletion(prompt);
    const phraseArray = completion.split("#");
    const phraseSEOArray: phraseInterest[] = phraseArray
      .filter((p: string) => p.trim() !== "")
      .map((p: string, index: number) => ({
        id: index + 1,
        phrase: p.trim(),
      }));
    setPhrasesThatIntrest(phraseSEOArray);
    setIsActive(false);
    console.log("phraseSEOArray", phraseSEOArray);
    setIsBlocked(false);
  };

  const handleGetMoreSuggestions = async () => {
    const prompt = getMiddleKeywords(moreInputs);
    const completion = await fetchCompletion(prompt);
    const phraseArray = completion.split("#");
    const phraseSEOArray: phraseInterest[] = phraseArray
      .filter((p: string) => p.trim() !== "")
      .map((p: string, index: number) => ({
        id: phrasesThatIntrest.length + index + 1,
        phrase: p.trim(),
      }));
    setPhrasesThatIntrest((prevPhrases) => [...prevPhrases, ...phraseSEOArray]);
  };

  const handleIncrementPhrase = async (selectedPhrase: phraseInterest) => {
    const prompt = getIncrementPhrase(selectedPhrase);
    const newPhrase = await fetchCompletion(prompt);
    const updatedPhrases = phrasesThatIntrest.map((phrase) => {
      if (phrase.id === selectedPhrase.id) {
        return {
          ...phrase,
          phrase: newPhrase.trim(),
        };
      }
      return phrase;
    });
    setPhrasesThatIntrest(updatedPhrases);
  };
  const handleIncrementAllPhrases = async (
    selectedPhrases: phraseInterest[]
  ) => {
    const updatedPhrases: phraseInterest[] = [];
    await Promise.all(
      phrasesThatIntrest.map(async (phrase) => {
        if (selectedPhrases.some((selected) => selected.id === phrase.id)) {
          const prompt = getIncrementPhrase(phrase);
          const newPhrase = await fetchCompletion(prompt);
          const updatedPhrase = {
            ...phrase,
            phrase: newPhrase ? newPhrase.trim() : "",
          };
          updatedPhrases.push(updatedPhrase);
        } else {
          updatedPhrases.push(phrase);
        }
      })
    );
    setPhrasesThatIntrest(updatedPhrases);
  };
  useEffect(() => {
    if (isLoadedPhrases === false) {
      console.log("isLoadedPhrases", isLoadedPhrases);
      handleGetInitialSuggestions();
      setIsLoadedPhrases(true);
    }
    console.log("isLoadedPhrases", isLoadedPhrases);
  }, [phrasesThatIntrest]);
  const [deletedPhrases, setDeletedPhrases] = useState<phraseInterest[]>([]);
  const handleDeletePhrase = (
    selectedPhrase: phraseInterest,
    index: number
  ) => {
    const updatedPhrases = phrasesThatIntrest.filter(
      (phrase) => phrase.phrase !== selectedPhrase.phrase
    );
    const divElement = document.getElementById(index.toString());
    if (divElement) {
      divElement.classList.add("fade-out");
    }
    setTimeout(() => {
      setPhrasesThatIntrest(updatedPhrases);
      if (phrasesThatIntrest.length - 1 === amountOfKeyword) {
        handleGetMoreSuggestions();
      }
      if (divElement) {
        divElement.classList.remove("fade-out");
        divElement.classList.add("opacity-1");
      }
    }, 700);

    if (phrasesThatIntrest.length === 1) {
      handleGetInitialSuggestions();
    }
  };

  const handleClearPhrases = () => {
    setPhrasesThatIntrest([]);
  };

  const handleButtonClick = () => {
    setFinalListPhrases(phrasesThatIntrest.slice(0, amountOfKeyword));
    setIsActive(true);
    handleClearPhrases();
    setIsBlocked(true);
  };

  return (
    <div className="rounded-lg p-4   items-center justify-center ">
      <button
        onClick={handleGetInitialSuggestions}
        className="btn-suggestions-topic focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 animate-slide-top"
      >
        Generar Frases{" "}
      </button>
      <span> </span>
      <button
        onClick={() => handleIncrementAllPhrases(phrasesThatIntrest)}
        className="btn-suggestions-topic focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 animate-slide-top"
      >
        {" "}
        Incrementar todas las frases
      </button>
      <button
        onClick={handleButtonClick}
        className="ml-1 btn-suggestions-topic focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 animate-slide-top"
      >
        Listo{" "}
      </button>
      <div
        className={`main-modal color-bg2 fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster ${
          phrasesThatIntrest.length === 0 && isBlocked === false ? "" : "hidden"
        }`}
      ></div>
      <div
        className={`main-modal   fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster ${
          phrasesThatIntrest.length === 0 && isBlocked === false ? "" : "hidden"
        }`}
      >
        <div id="preloader">
          <div id="loader"></div>
        </div>
        <h1 className="pulse-ani font-bold mt-80 text-gray-800 text-2xl">
          Trabajando en potenciar tu sitio...
        </h1>
      </div>
      <div className="items-center overflow-x-hidden overflow-auto phrases-container justify-center">
        <div>{isActive && <FinalList arrayOfPhrases={finalListPhrases} />}</div>
        {phrasesThatIntrest.slice(0, amountOfKeyword).map((phrase, index) => (
          <div>
            <div
              id={index.toString()}
              key={index}
              className="phrase-container mt-5 justify-between flex animate-slide-bottom my-2 rounded-lg p-4 px-6"
            >
              <div>
                <h1 className="font-semibold text-lg h1-phrase">
                  {phrase.phrase}
                </h1>
              </div>
              <div className="flex  ml-10">
                <button onClick={() => handleIncrementPhrase(phrase)}>
                  <div className="plus flex">
                    <div className="pt-1 pr-2">
                      <FaPlus />
                    </div>
                    <h1 className="font-medium text-base  mr-1">Ampliar</h1>
                  </div>
                </button>
                <button
                  onClick={() => handleDeletePhrase(phrase, index)}
                  className="pl-2"
                >
                  <div className="delete ">
                    <FaTimes />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PhraseList;
