import quotes from '@data/quotes.json';

const generateNewIndex = (allowSame: boolean, currentQuote: string | null = null): number => {
    const currIndex = currentQuote ? quotes.indexOf(currentQuote) : -1;
    const generateIndex = () => Math.floor(Math.random() * quotes.length);
    let newIndex;
    do {
        newIndex = generateIndex();
    } while (newIndex === currIndex && !allowSame);
    return newIndex;
};

export const refreshQuote = (allowSame = false, currentQuote: string | null = null): string => {
    return quotes[generateNewIndex(allowSame, currentQuote)];
};
