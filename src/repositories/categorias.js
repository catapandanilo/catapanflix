import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

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
  getAllWithVideos,
};
