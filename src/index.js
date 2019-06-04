import React from 'react'
import {render} from 'react-dom'
import MainLogin from './components/Main.login'
import MainPage from './components/MainPage'
import Profile from './components/Profile'
import Register from './components/Register'
import ReadBook from './components/ReadBook'
import CreateBook from './components/CreateBook'
import EditBook from './components/EditBook'
import DeleteBook from './components/DeleteBook'
import AboutLibrary from './components/AboutLibrary'
import AboutAuthor from './components/AboutAuthor'
import Help from './components/Help'
import { BrowserRouter as Router, Route } from 'react-router-dom'


render(
<Router>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/login" component={MainLogin} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/aboutlibrary" component={AboutLibrary}/>
    <Route exact path="/aboutauthor" component={AboutAuthor}/>
    <Route exact path="/help" component={Help}/>
    <Route path="/read/:id" component={ReadBook}/>
    <Route path="/add/:id" component={CreateBook}/>
    <Route path="/edit/:id" component={EditBook}/>
    <Route path="/delete/:id" component={DeleteBook}/>
</Router>,
document.getElementById('root'))
