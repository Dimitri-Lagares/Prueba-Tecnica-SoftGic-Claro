import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import MediaCard from './MediaCard';

function MainPage() {
  const { fullData } = useContext(PokemonContext)
  return (
    <main>
      {
        fullData.map((item, index) => {
          <MediaCard image={item[0].sprites.back_default} name={item[0].name} types={item[0].types} id={item[0].id} />
        })
      }
    </main>
  )
}

export default MainPage