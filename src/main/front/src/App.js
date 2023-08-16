import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from './page/Start';
import Main from './page/Main';
import Search from './page/Search';

function App() {

    return(


        <div className="App">


            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Start /> } />
                    <Route path="/main" element={ <Main /> } />
                    <Route path="/search" element={ <Search /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;