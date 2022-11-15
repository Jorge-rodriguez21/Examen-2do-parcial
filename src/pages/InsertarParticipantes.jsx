import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useLocation } from "react-router";
import queryString from "query-string";
import { Participantes } from "../models/Participantes";
import Card from "../components/Card.jsx";


const InsertarParticipantes = ({ history }) => {

    var arreglo = []
    var consulta = JSON.parse(localStorage.getItem('participantes'))
    if (consulta == null) {
        arreglo.push(consulta)
    } else {

        arreglo = consulta
    }


    const [participantes, setParticipantes] = useState({ nombre: "", apellidos: "", email: "", twitter: "" });

    const { nombre, apellidos, email, twitter } = participantes

    const [checked, setChecked] = React.useState(true);

    // Definimos la función handleChange
    const handleChange = (e) => {
        e.preventDefault();
        setParticipantes({
            ...participantes,
            [e.target.name]: e.target.value,
        })
    }

    const actionAdd = {
        id: uuid(),
        nombre,
        apellidos,
        email,
        twitter
    }
    const handleClick = () => {

        if (nombre && apellidos && email && twitter) {
            arreglo.push(actionAdd)
            localStorage.setItem("participantes", JSON.stringify(arreglo))
            setParticipantes({
                nombre: "",
                apellidos: "",
                email: "",
                twitter: ""
            });
            handleLista()
        } else {
            alert('Llena todos los campos, no dejar ninguno vacio');
        }
    }

    const handleLista = () => {
        history.push("/listaparticipantes")
    }

    return (
        <div className="container">
            <h1>Registro de participante</h1>
            <hr />
            <label className="mx-1 d-grid gap-2">
                Nombre: {" "}
                <input onChange={handleChange}
                    name="nombre"
                    value={nombre}
                    type="text"
                    className="form-control"
                    autoComplete="off" />
            </label>
            <label className="mx-1 d-grid gap-2">
                Apellidos: {" "}
                <input
                    onChange={handleChange}
                    name="apellidos"
                    value={apellidos}
                    type="text"
                    className="form-control"
                    autoComplete="off" />
            </label>
            <label className="mx-1 d-grid gap-2">
                Email: {" "}
                <input
                    onChange={handleChange}
                    name="email"
                    value={email}
                    type="text"
                    className="form-control"
                    autoComplete="off" />
            </label>
            <label className="mx-1 d-grid gap-2">
                Twitter: {" "}
                <input onChange={handleChange}
                    name="twitter"
                    value={twitter}
                    type="text"
                    className="form-control"
                    autoComplete="off" />
            </label>
            
            <br />
            <div className="justify-content-end">
                <button onClick={handleClick} className="btn btn-outline-success">Guardar</button>
            </div>

        </div>
    );
};
export default InsertarParticipantes;
