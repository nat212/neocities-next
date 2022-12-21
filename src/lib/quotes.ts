import quotes from '@data/quotes.json';
import loadingMessages from '@data/loading_messages';

const generateNewIndex = (
    allowSame: boolean,
    currentQuote: string | null = null,
    arrayToGenerateFrom: string[] = quotes,
): number => {
    const currIndex = currentQuote ? arrayToGenerateFrom.indexOf(currentQuote) : -1;
    const generateIndex = () => Math.floor(Math.random() * arrayToGenerateFrom.length);
    let newIndex;
    do {
        newIndex = generateIndex();
    } while (newIndex === currIndex && !allowSame);
    return newIndex;
};

// Decide on loading message vs quote, with configurable chances.
// Outputs: 0 => quote, 1 => loading message.
const decideOnLoadingMessageOrQuote = (chanceForLoadingMessage: number = 0.3) => {
    return Math.random() <= chanceForLoadingMessage ? 1 : 0;
};

export const refreshQuote = (allowSame = false, currentQuote: string | null = null): string => {
    const choice = [quotes, loadingMessages][decideOnLoadingMessageOrQuote()];
    return choice[generateNewIndex(allowSame, currentQuote, choice)];
};
