import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroCategoria () {
  const [categorias, setCategorias] = useState(['Teste'])
  const valoresIniciais = {
    nome: 'Categoria Inicial',
    descricao: 'Descrição Inicial',
    cor: '#000',
  }
  const [values, setValues] = useState(valoresIniciais)

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
              value = { values.nome }
              onChange = { (infoDoEvento) => {
                setValues (infoDoEvento.target.value)
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <textarea
              type = "text"
              value = { values.descricao }
              onChange = { (infoDoEvento) => {
                setValues (infoDoEvento.target.value)
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type = "color"
              value = { values.cor }
              onChange = { (infoDoEvento) => {
                setValues (infoDoEvento.target.value)
              }}
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
              { categoria }
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