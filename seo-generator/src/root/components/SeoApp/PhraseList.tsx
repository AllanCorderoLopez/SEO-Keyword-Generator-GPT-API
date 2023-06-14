import fetchCompletion from "@/api/GPTAPI";
import { getIncrementKeyword, getMiddleKeywords, initialInput, keywordSEO, phraseInterest } from "@/context/Context";
import React, { useEffect, useState } from "react";

function PhraseList() {
    const phraseList: string[] = ["Viajes", "cancelar, enfermedad, atraso, muerte, perdida, robo", "conocer nuevos lugares", "3"];
    const initialKeywordsArray: keywordSEO[] = [];
    const badWordsArray: string[] = phraseList[1].split(", ");
    const intentionsArray: string[] = [phraseList[2]];
    const amountOfKeyword: number = parseInt(phraseList[3]);
    const [phrasesThatInterest, setPhrasesThatIntrest] = useState<phraseInterest[]>([]);
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
        console.log(completion);

        const phraseArray = completion.split("#");

        const phraseSEOArray: phraseInterest[] = phraseArray
            .filter((p: string) => p.trim() !== "") // Filtrar cadenas vacías
            .map((p: string, index: number) => ({
                id: index + 1,
                phrase: p.trim(),
            }));
        console.log(phraseSEOArray);
        setPhrasesThatIntrest(phraseSEOArray);
    }
    const handleGetMoreSuggestions = async () => {
        const prompt = getMiddleKeywords(moreInputs);
        const completion = await fetchCompletion(prompt);
      
        const phraseArray = completion.split("#");
      
        const phraseSEOArray: phraseInterest[] = phraseArray
          .filter((p: string) => p.trim() !== "") // Filtrar cadenas vacías
          .map((p: string, index: number) => ({
            id: phrasesThatInterest.length + index + 1, // Generar un nuevo ID único
            phrase: p.trim(),
          }));
      
        setPhrasesThatIntrest((prevPhrases) => [...prevPhrases, ...phraseSEOArray]); // Concatenar correctamente las frases generadas
        console.log("-----getMore--------");
        console.log(phrasesThatInterest);
      };
    const handleIncrementPhrase = async (selectedPhrase: phraseInterest) => {
        const prompt = getIncrementKeyword(selectedPhrase);
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
    }
    useEffect(() => {
        
      }, [phrasesThatInterest]);
    const handleDeletePhrase = (selectedPhrase: phraseInterest) => {
        
        const updatedPhrases = phrasesThatInterest.filter(
            (phrase) => phrase.phrase !== selectedPhrase.phrase
        );
        setPhrasesThatIntrest(updatedPhrases);
        if ((phrasesThatInterest.length - 1) === amountOfKeyword) {
            console.log("entre");
            handleGetMoreSuggestions();
        }
        console.log("-----finalDelete--------");
        console.log(phrasesThatInterest);

    };
    return (
        <div className="rounded-lg border-2 border-red-500 p-4">
            <h3>Lista de frases</h3>
            <div >
                <button onClick={handleGetInitialSuggestions}>
                    Generar Frases
                </button>
                {phrasesThatInterest.slice(0, amountOfKeyword).map((phrase, index) => (
                    <div key={index} className="my-2 rounded-lg border-2 border-blue-500 p-4">
                        <div>{phrase.phrase}</div>
                        <div className="">
                            <button onClick={() => handleIncrementPhrase(phrase)}>Incrementar</button>
                            <button onClick={() => handleDeletePhrase(phrase)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PhraseList;