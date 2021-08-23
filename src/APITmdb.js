
const API_KEY = 'e987e630428672ac668962707adf272d'
const API_BASE = 'https://api.themoviedb.org/3'

/*
 - netflix originals
 - recomendados na netflix(filmes em destaque)
 - em alta(melhores classificados/maior nota)
 - ação
 - comédia
 - terror
 - romance
 - documentários
*/

const basicFetch = async (endpoint) => { // uma função que fará uma requisição, pegará o json e retornará o mesmo
  const req = await fetch(`${API_BASE}${endpoint}`)//requisição
  const json = await req.json() //pegando o json da requisição
  return json //retornando esse json
}


export default {
  getHomeList: async () => {
    return[
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'trending',
        title:'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items:await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'action',
        title:'Ação',
        items:await basicFetch(`/discore/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items:await basicFetch(`/discore/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'horror',
        title:'Terror',
        items:await basicFetch(`/discore/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items:await basicFetch(`/discore/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'documentary',
        title:'Documentários',
        items:await basicFetch(`/discore/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      }
    ]
  }

}