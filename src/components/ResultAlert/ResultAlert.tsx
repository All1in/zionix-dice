import { Alert, AlertTitle } from '@mui/material';

interface ResultAlertProps {
    isWin: boolean;
    message: string;
}

const ResultAlert = ({ isWin, message }: ResultAlertProps) => {
    return (
        <Alert severity={isWin ? 'success' : 'error'} sx={{ mb: 2 }}>
            <AlertTitle>{isWin ? 'You won' : 'You lost'}</AlertTitle>
            {message}
        </Alert>
    );
};

export default ResultAlert;
