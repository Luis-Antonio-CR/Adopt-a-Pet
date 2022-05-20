import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { selectFlastat, filterPets } from '../features/Flastat/flastatSlice'
import { selectFlebloc } from '../features/Flebloc/fleblocSlice'
import { selectFLoddic } from '../features/Floddic/floddicSlice'
 
import Search from './Search'
import Animal from '../components/Animal'

import "../style/Home.css"

function Home() {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const flastat = useSelector(selectFlastat);
  const flebloc = useSelector(selectFlebloc);
  const floddic = useSelector(selectFLoddic);

  const title = searchParams.get("title");

  const filteredFlastat = title ? filterPets(title, flastat) : Object.values(flastat);
  const filteredFlebloc = title ? filterPets(title, flebloc) : Object.values(flebloc);
  const filteredFloddic = title ? filterPets(title, floddic) : Object.values(floddic);

  return (
    <main className='main'>
      <div className="box_1" >
        <h1 className="big-text">Adopt Our Pets</h1>
        <h2 className="normal-text">Frightening, horrible and unquiet pets from all over the world</h2>
      </div>
      <Search />
      <div className="box_animals" >
        { filteredFlastat.map( data => <Animal name={data.name} image= {data.image} description= {data.description} /> ) }
        { filteredFlebloc.map( data => <Animal name={data.name} image= {data.image} description= {data.description} /> ) }
        { filteredFloddic.map( data => <Animal name={data.name} image= {data.image} description= {data.description} /> ) }
      </div>
    </main>
  )
}

export default Home
