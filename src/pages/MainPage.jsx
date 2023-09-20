import { useContext, useState } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import BasicCard from '../components/BasicCard';
import Box from '@mui/material/Box';
import CustomizedTables from '../components/CustomizedTables';

function MainPage() {
  const { fullData, pokemon } = useContext(PokemonContext)

  return (
    <main>
      <h1>Pokemones</h1>
      <Box sx={{
             display: "grid",
             gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
             gridGap: "20px",
       }}>
        {
          fullData.map((data, index) => {
            return (
              <BasicCard key={index} image={data.data.sprites.other.dream_world.front_default} name={data.data.name} id={data.data.id} types={data.data.types} />
            )
          })
        }
      </Box>
    </main>
  )
}

export default MainPage