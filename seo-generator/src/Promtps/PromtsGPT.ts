export const getInitialSuggestionsPromtp = () => {
  return "genere una lista de 4 palabras clave, más cotidianas y comunes en sitios web que funcionen como base para un tema pricipal de una página web para el uso de posicionamiento web, importante seguir este formato: [keyword1 , keyword2 , keyword3 ] los temas deben ser variados y de diferentes usos, no utilices palabras relacionadas a la palabra 'SEO', palabras relacionadas solo con tecnologia, ni uses palabras extensas";
};

export const getInitialBadWordsPrompt = (maintopic: string) => {
  return (
    "genere una lista de 10 palabras negativas clave para SEO," +
    "haz unicamente arreglo para hacerle un split"
    +
    "que NO se deben utilizar para el posicionamiento web relacionado a este tema: " +
    "es importante que sean palabras que no contribuyan con el SEO"+
    "con este formato [ , , ]"+
    "no utilices palabras relacionadas a la palabra 'SEO' ni uses palabras extensas"+
    "y que tengan mucha relación con el tema principal que es un tema de un sitio web de: " +
    maintopic +
    "deben ser poco descriptivas del tema del sitio"
  );
};
