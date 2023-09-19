import './App.css'
import PokemonProvider from './contexts/PokemonProvider.jsx'
import MainPage from "./components/MainPage"

function App() {
  return (
    <PokemonProvider>
      <MainPage/>
    </PokemonProvider>  )
}

export default App
