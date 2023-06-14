import axios from 'axios';

const openaiAPI = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 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` //TODO 
  }
});

 const fetchCompletion = async (prompt:string) => {
  try {
    const response = await openaiAPI.post('/engines/text-davinci-003/completions', {
      prompt,
      temperature: 0.5,
      max_tokens: 256,
      top_p: 1.0,
      frequency_penalty: 0.8,
      presence_penalty: 0.0
    });

    const { choices } = response.data;
    const completion = choices[0].text.trim();
    return completion;
  } catch (error) {
    console.error('Error al llamar a la API de OpenAI:', error);
    return null;
  }
};


export default fetchCompletion;