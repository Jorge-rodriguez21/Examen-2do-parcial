import React,{useReducer,useEffect} from 'react'
import { Route, Switch } from 'react-router'
import NavBar from '../components/NavBar'
import InsertarParticipantes from '../pages/InsertarParticipantes'
import ListaParticipantes from '../pages/ListaParticipantes'
import EditarParticipantes from '../pages/EditarParticipantes'
import Login from '../pages/Login'


const AppRouter = () => {
    
    return (
        <>
            <NavBar></NavBar>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/inicio" component={Login}/>
                <Route exact path="/listaparticipantes" component={ListaParticipantes} />
                <Route exact path="/registro" component={InsertarParticipantes}/>
                <Route exact path="/editarparticipantes/:id" component={EditarParticipantes}/>
            </Switch>
        </>
    )
}

export default AppRouter
