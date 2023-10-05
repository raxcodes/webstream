// App.jsx
import { Navbar, Movies, Profile, Actors, MovieInformation } from './components';
import { Routes, Route } from "react-router-dom";
import "./css/index.css";


function App() {
        return (
        <div className='container'>
            <Navbar />
            <main>
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
