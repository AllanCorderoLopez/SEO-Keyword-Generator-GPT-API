import fetchCompletion from "@/api/GPTAPI";
import { ArrayOfPhrases, getIncrementPhrase, getMiddleKeywords, initialInput, keywordSEO, phraseInterest } from "@/context/Context";
import React, { useEffect, useState } from "react";
import FinalList from "./FinalList";

function PhraseList() {
    const phraseList: string[] = ["Viajes", "cancelar, enfermedad, atraso, muerte, perdida, robo", "conocer nuevos lugares", "3"];
    const initialKeywordsArray: keywordSEO[] = [];
    const badWordsArray: string[] = phraseList[1].split(", ");
    const intentionsArray: string[] = [phraseList[2]];
    const amountOfKeyword: number = parseInt(phraseList[3]);
    const [phrasesThatInterest, setPhrasesThatIntrest] = useState<phraseInterest[]>([]);
    const [finalListPhrases, setFinalListPhrases] = useState<phraseInterest[]>([]);
    const [isActive, setIsActive] = useState(false);
    const initialInputs: initialInput = {
        mainTopic: phraseList[0],
        badWords: badWordsArray,
        intentions: intentionsArray,
        amountOfKeywords: amountOfKeyword + 2,
        initialKeywords: initialKeywordsArray,
    };
    const moreInputs: initialInput = {
        mainTopic: phraseList[0],
        badWords: badWordsArray,
        intentions: intentionsArray,
        amountOfKeywords: 2,
        initialKeywords: initialKeywordsArray,
    };
    const handleGetInitialSuggestions = async () => {
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
    }
    const handleGetMoreSuggestions = async () => {
        const prompt = getMiddleKeywords(moreInputs);
        const completion = await fetchCompletion(prompt);
        const phraseArray = completion.split("#");
        const phraseSEOArray: phraseInterest[] = phraseArray
            .filter((p: string) => p.trim() !== "")
            .map((p: string, index: number) => ({
                id: phrasesThatInterest.length + index + 1,
                phrase: p.trim(),
            }));
        setPhrasesThatIntrest((prevPhrases) => [...prevPhrases, ...phraseSEOArray]);
    };
    const handleIncrementPhrase = async (selectedPhrase: phraseInterest) => {
        const prompt = getIncrementPhrase(selectedPhrase);
        const newPhrase = await fetchCompletion(prompt);
        const updatedPhrases = phrasesThatInterest.map((phrase) => {
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
    const handleIncrementAllPhrases = async (selectedPhrases: phraseInterest[]) => {
        const updatedPhrases: phraseInterest[] = [];
        await Promise.all(
            phrasesThatInterest.map(async (phrase) => {
                if (selectedPhrases.some((selected) => selected.id === phrase.id)) {
                    const prompt = getIncrementPhrase(phrase);
                    const newPhrase = await fetchCompletion(prompt);
                    const updatedPhrase = {
                        ...phrase,
                        phrase: newPhrase ? newPhrase.trim() : '',
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
    }, [phrasesThatInterest]);
    const handleDeletePhrase = (selectedPhrase: phraseInterest) => {
        const updatedPhrases = phrasesThatInterest.filter(
            (phrase) => phrase.phrase !== selectedPhrase.phrase
        );
        setPhrasesThatIntrest(updatedPhrases);
        if ((phrasesThatInterest.length - 1) === amountOfKeyword) {
            handleGetMoreSuggestions();
        }
    };
    const handleClearPhrases = () => {
        setPhrasesThatIntrest([]);
    };
    const handleButtonClick = () => {
        setFinalListPhrases(phrasesThatInterest.slice(0, amountOfKeyword));
        setIsActive(true);
        handleClearPhrases();
    };
    return (
        <div className="rounded-lg border-2 border-red-500 p-4  items-center justify-center ">
            <h3>Lista de frases</h3>
            <div className="items-center justify-center">
                <button onClick={handleGetInitialSuggestions} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Generar Frases </button>
                <span>  </span>
                <button onClick={() => handleIncrementAllPhrases(phrasesThatInterest)} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"> Incrementar todas las frases</button>
                {phrasesThatInterest.slice(0, amountOfKeyword).map((phrase, index) => (
                    <div key={index} className="my-2 rounded-lg border-2 border-blue-500 p-4">
                        <div>{phrase.phrase}</div>
                        <div className="">
                            <button onClick={() => handleIncrementPhrase(phrase)}>Modificar </button>
                            <span> </span>
                            <button onClick={() => handleDeletePhrase(phrase)}>Eliminar</button>
                        </div>
                    </div>
                ))}
                <div>
                    <button onClick={handleButtonClick} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Listo </button>
                    {isActive && <FinalList arrayOfPhrases={finalListPhrases} />}
                </div>
            </div>
        </div>
    )
}
export default PhraseList;