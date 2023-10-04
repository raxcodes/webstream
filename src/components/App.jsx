// App.jsx
import { CssBaseline } from "@mui/material";
import { Navbar, Movies, Profile, Actors, MovieInformation } from './components';
import { Routes, Route } from "react-router-dom";
import { useStyles } from "./styles";

function App() {

 
        const classes = useStyles();


    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Navbar />
            <main className={classes.content}>
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/movies/:id" element={<Movies />} />
                    <Route path="/actors/:id" element={<Actors />} />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/movieinformation/:id" element={<MovieInformation />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
