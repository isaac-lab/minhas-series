import React from 'react'
import Header from './Header';
import Generos from './Generos';
import NovoGenero from './NovoGenero';
import EditarGenero from './EditarGenero';

import {
    BrowserRouter as Router, 
    Route
} from 'react-router-dom'

const Home = () => {
    return <h1>Home</h1>
}

function App() {
  
    return (
        <Router>
            <div>
                <Header />
                <Route path='/' exact component={Home} />
                <Route path='/generos' exact component={Generos} />
                <Route path='/generos/:id' exact component={EditarGenero} />
                <Route path='/generos/novo' exact component={NovoGenero} />
            </div>
        </Router>
    );
}
export default App;
