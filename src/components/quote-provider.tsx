import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { refreshQuote } from '@lib/quotes';
import { NextPage } from 'next';
import quotes from '@data/quotes.json';

interface Quote {
    quote: string;
    setQuote: (quote: string) => void;
}

const startingQuote = quotes[0];

export const QuoteContext = createContext<Quote>({
    quote: startingQuote,
    setQuote: (_) => {},
});

export const useQuote = () => useContext(QuoteContext);

export const QuoteProvider: NextPage<{ children: ReactNode }> = ({ children }) => {
    const [quote, setQuote] = useState(startingQuote);

    useEffect(() => {
        setQuote(refreshQuote());
        setInterval(() => setQuote((q) => refreshQuote(false, q)), 60 * 1000);
    }, []);

    return <QuoteContext.Provider value={{ quote, setQuote }}>{children}</QuoteContext.Provider>;
};
