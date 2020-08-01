import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function CadastroCategoria () {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)

  function setValue (key, value) {
    setValues({
      ...values,
      [key]: value
    })
  }

  function handleChange (infoDoEvento) {
    const { name, value } = infoDoEvento.target
    setValue(
      name, 
      value
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

        setValues(valoresIniciais)
      }}>

        <FormField
          label = "Nome da Categoria: "
          type = "text"
          name = "nome"
          value = { values.nome }
          onChange = { handleChange }
        />

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

        <FormField
          label = "Cor: "
          type = "color"
          name = "cor"
          value = { values.cor }
          onChange = { handleChange }
        />

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