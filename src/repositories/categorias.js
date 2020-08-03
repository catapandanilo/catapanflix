import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function create(objetoDaCategoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const respostaServidorJson = await respostaServidor.json();
        return respostaServidorJson;
      }
      throw new Error('Não foi possível conectar com o servidor backend');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const respostaServidorJson = await respostaServidor.json();
        return respostaServidorJson;
      }
      throw new Error('Não foi possível conectar com o servidor backend');
    });
}

export default {
  create,
  getAll,
  getAllWithVideos,
};
