import React from 'react'

const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        history.push("/listaparticipantes")
    }

    return (
        <div className="container mt-5 text-center">
            <div className="row">
                <div className="col-6">
                    <img src="assets/utl.png" width="100%" height="100%" alt="animacion" />
                </div>
                <div className="col-6">
                    <img src="assets/Tics.png" alt="animacion" />
                </div>
            </div>
            <div className="justify-content-center">
                <h1 className="my-3">Congreso de Tecnologías de la Información</h1>
                <button className="btn btn-outline-primary" onClick={handleLogin}>Entrar</button>
            </div>
        </div>
    )
}

export default LoginScreen
