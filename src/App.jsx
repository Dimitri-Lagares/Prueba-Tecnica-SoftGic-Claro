import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage, PokemonExtraInfo } from "./pages"
import PokemonProvider from './contexts/PokemonProvider.jsx'
import './App.css'

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="pokemon/:id" element={<PokemonExtraInfo />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider >
  )
}

export default App
