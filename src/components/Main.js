import React from 'react'
import '../css/app.css'
import ListOfBooks from './ListOfBooks'
import MainInfo from './MainInfo'
import { Link } from 'react-router-dom';

function Main(){
    return(
        <div className="main">
            <div className="menu">
                <div className="menu-label">Информация</div>
                <div className="menu-button"><Link to={"/aboutlibrary"}>О библиотеке</Link></div>
                <div className="menu-button"><Link to={"/aboutauthor"}>Об авторе</Link></div>
                <div className="menu-button"><Link to={"/help"}>Помощь</Link></div>
            </div>
            <div className="last-updates">
                <ListOfBooks/>
            </div>
            <div className="search">
                <MainInfo/>
            </div>
        </div>
    )
}

export default Main