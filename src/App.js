import React, { useEffect, useState } from 'react';
import APITmdb from './APITmdb'
import MovieRow from './components/MovieRow'

export default () => {

  const [movieList, setMovieList] = useState([])
  useEffect (() =>{
    const loadAll = async() => {
      //pegando a lista total dos filmes
      let list = await APITmdb.getHomeList()
      setMovieList(list)
    }
    loadAll()
  }, [])

  return(
    <div className="page"> 
      <section className='lists'>
        {movieList.map((item,key) => (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div> //Pagina dividida em Header(cabeçario) Main(Destaque), as listas(Originais, recomendados e etc) e footer(rodapé)
  );
}