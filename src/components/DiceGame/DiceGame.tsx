'use client';

import { useState } from 'react';
import {
    Button,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Box,
    Paper, Checkbox
} from '@mui/material';
import ResultAlert from '../ResultAlert/ResultAlert';
import { Choice, HistoryEntry, NullableBoolean, NullableNumber } from "@/src/types/types";
import GameHistory from "@/src/components/GameHistory/GameHistory";
import ThresholdSlider from "@/src/components/ThresholdSlider/ThresholdSlider";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const DiceGame = () => {
    const [threshold, setThreshold] = useState<number>(20);
    const [choice, setChoice] = useState<Choice>('Over');
    const [result, setResult] = useState<NullableNumber>(null);
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [isWin, setIsWin] = useState<NullableBoolean>(null);

    console.log(history)

    const handlePlay = () => {
        const diceRoll = Math.floor(Math.random() * 100) + 1;
        const win = (choice === 'Over' && diceRoll > threshold) || (choice === 'Under' && diceRoll < threshold);
        const time = new Date().toLocaleTimeString();

        const newEntry = { time, guess: `${choice} ${threshold}`, result: diceRoll };
        setHistory([newEntry, ...history.slice(0, 9)]);

        setIsWin(win);
        setResult(diceRoll);
    };

    const CustomRadio = styled(Radio)(({ theme }) => ({
        color: purple[500], // Фіолетовий колір для незаповненої Radio кнопки
        '&.Mui-checked': {
            color: purple[700], // Темніший фіолетовий для заповненої Radio кнопки
        },
    }));

// Кастомний стиль для FormControlLabel
    const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
        '& .MuiTypography-root': {
            color: purple[700], // Фіолетовий колір для тексту мітки
        },
    }));



    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>Dice</Typography>

            {isWin !== null && (
                <ResultAlert
                    isWin={isWin}
                    message={isWin ? 'Number was higher' : 'Number was lower'}
                />
            )}

            <Paper elevation={3} sx={{ padding: 3, mb: 3 }}>
                <Typography variant="h2" align="center">{result ?? 100}</Typography>
                <RadioGroup
                    row
                    value={choice}
                    onChange={(e) => setChoice(e.target.value as 'Over' | 'Under')}
                    sx={{ justifyContent: 'center', mb: 3 }}
                >
                    {/*<FormControlLabel value="Under" control={<Radio />} label="Under" />*/}
                    {/*<FormControlLabel value="Over" control={<Radio />} label="Over" />*/}
                    <CustomFormControlLabel
                        value="Under"
                        control={<CustomRadio />}
                        label="Under"
                    />
                    <CustomFormControlLabel
                        value="Over"
                        control={<CustomRadio />}
                        label="Over"
                    />
                </RadioGroup>
                {/*<Slider*/}
                {/*    value={threshold}*/}
                {/*    valueLabelDisplay="auto"*/}
                {/*    onChange={(e, value) => setThreshold(value as number)}*/}
                {/*    min={0}*/}
                {/*    max={100}*/}
                {/*    sx={{ mb: 3 }}*/}
                {/*/>*/}
                <ThresholdSlider threshold={threshold} setThreshold={setThreshold} />
                <Button
                    variant="contained"
                    onClick={handlePlay}
                    fullWidth
                    sx={{
                        backgroundColor: 'purple',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkviolet',
                        },
                    }}
                >
                    PLAY
                </Button>
            </Paper>

            <GameHistory history={history} />
        </Box>
    );
};

export default DiceGame;
