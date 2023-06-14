import { ArrayOfPhrases } from "@/context/Context";
import React from "react";

function FinalList({ arrayOfPhrases }: ArrayOfPhrases) {
    return (
        <div className="">
            <h3>Lista Final de Frases</h3>
            <div className="my-2 rounded-lg border-2 border-blue-500 p-4">
                
                {arrayOfPhrases.map((phrase, index) => (
                    <li key={index}>{phrase.phrase}</li>
                ))}
            </div>
        </div>
    )
}
export default FinalList;