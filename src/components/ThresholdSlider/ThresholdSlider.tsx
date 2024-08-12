import React, { useCallback, memo, useState } from 'react';
import { ThresholdSliderProps } from "@/src/types/types";
import Slider from '@mui/material/Slider';
import { purple } from '@mui/material/colors';
import { Box, Typography } from "@mui/material";


const MAX = 100;
const MIN = 0;


const ThresholdSlider = memo(({ threshold, setThreshold }: ThresholdSliderProps) => {
    const [val, setVal] = useState<number>(MIN);
    const handleSliderChange = useCallback((event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number' && newValue !== threshold) {
            setThreshold(newValue);
        }
    }, [threshold, setThreshold]);

    return (
        <div style={{ width: '50%', margin: '0 auto' }}>
            <Slider
                value={threshold}
                onChange={handleSliderChange}
                min={0}
                max={100}
                valueLabelDisplay="auto"
                sx={{
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between',  marginBottom: '15px' }}>
                <Typography
                    variant="body2"
                    onClick={() => setVal(MIN)}
                    sx={{ cursor: 'pointer' }}
                >
                    {MIN}
                </Typography>
                <Typography
                    variant="body2"
                    onClick={() => setVal(MAX)}
                    sx={{ cursor: 'pointer' }}
                >
                    {MAX}
                </Typography>
            </Box>
        </div>
    );
});

export default ThresholdSlider;
