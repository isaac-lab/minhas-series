import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Generos = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios
            .get('/api/genres/')
            .then(res => {
                setdata(res.data.data)
            })
    }, [])

    const deletaGenero = id => {
        axios
        .delete('/api/genres/' + id)
        .then(res => {
            const filtrado = data.filter(item => item.id !== id)
            setdata(filtrado)
        })
    }

    const renderizaLinha = record => {
        return (
            <tr key={record.id}>
                <th scope='row'>{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <button className="btn btn-danger mx-1" onClick={() => deletaGenero(record.id)}>Apagar</button>
                    <Link to={'generos/' +  record.id} className="btn btn-warning mx-1">Editar</Link>
                </td>
            </tr>
        )
    }

    if (data.length === 0) {
        return (
            <div className='container'>
                <h1>Genêros</h1>
                <div className='alert alert-warning' role='alert'>
                    Você não possui genêros criados.
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <h1>Generos</h1>
            <Link to='/generos/novo' className="btn btn-primary my-2">Novo genêros</Link>
            <table className='table'>
                <thead className="thead-dark">
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderizaLinha)}
                </tbody>
            </table>
        </div>
    )
}

export default Generos;
