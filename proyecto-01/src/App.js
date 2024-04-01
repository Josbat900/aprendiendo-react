import { useState } from 'react';
import './App.css';
import { Create } from './components/Create';
import { Listado } from './components/Listado';
import { Search } from './components/Search';

function App() {

    const [listState, setListState] = useState([])

    return (
        <div className="layout">
            {/*Cabezera*/}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                <h1>blog de pelis</h1>
            </header>
            {/*Barra de navegacion*/}
            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Peliculas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>
            {/*Contenido principal*/}
            <section className="content">
                <Listado listState={listState} setListState={setListState} />
            </section>
            {/*Barra lateral*/}
            <aside className="lateral">
                <Search  listState={listState} setListState={setListState}/>
                <Create setListState={setListState}/>
            </aside>
            {/*Pie de pagina*/}
            <footer className="footer">
                &copy;Blog de pelis - <a href="https://www.instagram.com/josbat.gr/"> Josbat</a>
            </footer>

        </div>
    );
}

export default App;
