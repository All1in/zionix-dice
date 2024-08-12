import { Paper, Typography, Grid } from '@mui/material';
import { GameEntry, HistoryEntry, mapHistoryToGameEntry } from "@/src/types/types";


const GameHistory: React.FC<{ history: HistoryEntry[] }> = ({ history }) => {
    const gameEntries = mapHistoryToGameEntry(history);

    const getResultColor = (entry: GameEntry) => {
        const splitted = entry.guess.split(' ');
        const condition = splitted[0];
        const secondArg = Number(splitted[1]);

        if (condition === 'Over' && entry.result > secondArg) {
            return 'success.main';
        } else if (condition === 'Under' && entry.result < secondArg) {
            return 'success.main';
        } else {
            return 'error.main';
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 2, width: '100%' }}>
            <Typography variant="h6">Game History</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={4}>
                    <Typography variant="subtitle1" fontWeight="bold">Time</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle1" fontWeight="bold">Guess</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle1" fontWeight="bold">Result</Typography>
                </Grid>
                {gameEntries.map((entry, index) => (
                    <Grid container spacing={2} key={index}>
                        <Grid item xs={4}>
                            <Typography sx={{ marginLeft: '20px' }}>{entry.time}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>{entry.guess}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography sx={{ color: getResultColor(entry) }}>
                                {entry.result}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default GameHistory;