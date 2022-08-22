import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { parseISO } from 'date-fns';

interface Time {
    dateTime: Date;
    setDateTime: (dateTime: Date) => void;
}

const startingTime = parseISO('1997-09-07', { additionalDigits: 0 });

export const TimeContext = createContext<Time>({
    dateTime: startingTime,
    setDateTime: (_) => {},
});

export const useTime = () => useContext(TimeContext);

export const TimeProvider: NextPage<{ children: ReactNode }> = ({ children }) => {
    const [dateTime, setDateTime] = useState(startingTime);

    useEffect(() => {
        setDateTime(new Date());
        setInterval(() => setDateTime(new Date()), 1000);
    }, []);

    return <TimeContext.Provider value={{ dateTime, setDateTime }}>{children}</TimeContext.Provider>;
};
