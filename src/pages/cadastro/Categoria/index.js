import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria () {
  const [categorias, setCategorias] = useState([])
  const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição Inicial',
    cor: '#000',
  }
  const [values, setValues] = useState(valoresIniciais)

  function setValue (key, value) {
    setValues({
      ...values,
      [key]: value
    })
  }

  function handleChange (infoDoEvento) {
    setValue(
      infoDoEvento.target.getAttribute('name'), 
      infoDoEvento.target.value
    )
  }

  return (
    <PageDefault>
      <h1> Cadastro de Categoria: { values.nome } </h1>

      <form onSubmit = { function handleSubmit (infoDoEvento) {
        infoDoEvento.preventDefault()
        setCategorias([
          ...categorias,
          values
        ])
      }}>

        <div>
          <label>
            Nome da Categoria:
            <input
              type = "text"
              name = "nome"
              value = { values.nome }
              onChange = { handleChange }
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <textarea
              type = "text"
              name = "descricao"
              value = { values.descricao }
              onChange = { handleChange }
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type = "color"
              name = "cor"
              value = { values.cor }
              onChange = { handleChange }
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        { categorias.map((categoria, indice) => {
          return (
            <li key = { `${categoria} ${indice}` } >
              { categoria.nome }
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria