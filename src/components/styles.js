// styles.js

import { makeStyles } from '@mui/material/styles';

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        height: '100%',
        backgroundColor: 'red',
    },
    toolbar: {
        height: '70px',
    },
    content: {
        flexGrow: '1',
        padding: '2em',
    }
}));
