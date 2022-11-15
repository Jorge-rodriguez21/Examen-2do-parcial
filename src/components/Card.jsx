import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({nombre,apellidos, twitter, email,id}) => {
   
    const path = `/assets/usuario.png`
    const pathTwitter = `/assets/twitter.png`

    return (
        <div className="card m-3 col-12 col-md-4" style={{width: 400}}>
            <br/>
            <img src={path} width="25%" height="25%" alt="animacion"/>
            <div className="card-body">
                <h3 className="card-title">{nombre} {apellidos}</h3>
                <p className="card-text">
                    <img src={pathTwitter} width="10%" height="10%" alt="animacion"/>
                    <a href={`https://twitter.com/@${twitter}`}>{twitter}</a>
                    <br />
                    <Link className="btn btn-outline-primary" to={`/modificarScreen/${id}`}>
                        Modificar
                    </Link>
                    <h4>{email}</h4>
                </p>
            </div>
        </div>
    )
}

export default Card
