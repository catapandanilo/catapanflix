import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(infoDoEvento) {
    const { name, value } = infoDoEvento.target;
    setValue(
      name,
      value,
    );
  }

  useEffect(() => {
    const url = 'http://localhost:8080/categorias';
    fetch(url)
      .then(async (respostaServidor) => {
        const respostaServidorJson = await respostaServidor.json();
        setCategorias([
          ...respostaServidorJson,
        ]);
      });
  }, [

  ]);

  return (
    <PageDefault>
      <h1>
        {' '}
        Cadastro de Categoria:
        { values.nome }
      </h1>

      <form onSubmit={function handleSubmit(infoDoEvento) {
        infoDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {
        categorias.length === 0 && (
          <div>
            Carregando...
          </div>
        )
      }

      <ul>
        { categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            { categoria.nome }
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
