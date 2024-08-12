import React, { useCallback, memo, useEffect } from 'react';
import { ThresholdSliderProps } from "@/src/types/types";
import Slider from '@mui/material/Slider';
import { purple } from '@mui/material/colors';
// @ts-ignore
import debounce from 'lodash.debounce';

const ThresholdSlider = memo(({ threshold, setThreshold }: ThresholdSliderProps) => {
    const debouncedSetThreshold = useCallback(
        debounce((value: number) => {
            setThreshold(value);
        }, 100),
        [setThreshold]
    );

    const handleSliderChange = useCallback((event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            debouncedSetThreshold(newValue);
        }
    }, [debouncedSetThreshold]);


    useEffect(() => {
        return () => {
            debouncedSetThreshold.cancel();
        };
    }, [debouncedSetThreshold]);

    return (
        <Slider
            value={threshold}
            onChange={handleSliderChange}
            min={0}
            max={100}
            valueLabelDisplay="auto"
            sx={{
                mb: 3,
                '& .MuiSlider-thumb': {
                    backgroundColor: purple[700],
                    '&:hover': {
                        backgroundColor: purple[900],
                    },
                },
                '& .MuiSlider-track': {
                    backgroundColor: purple[500],
                },
                '& .MuiSlider-rail': {
                    backgroundColor: purple[300],
                },
            }}
        />
    );
});

export default ThresholdSlider;
