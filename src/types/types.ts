export type NullableNumber = number | null;
export type NullableBoolean = boolean | null;

export type Choice = 'Over' | 'Under';

export type HistoryEntry = {
    time: string;
    guess: string;
    result: number;
};

export type GameEntry = {
    time: string;
    guess: 'Over' | 'Under';
    result: number;
};

export const mapHistoryToGameEntry = (history: HistoryEntry[]): GameEntry[] => {
    return history.map((entry) => ({
        time: entry.time,
        guess: entry.guess as 'Over' | 'Under',
        result: entry.result,
    }));
};

export type ThresholdSliderProps = {
    threshold: number,
    setThreshold: (value: number) => void
}