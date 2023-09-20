import { useContext } from "react"
import CustomizedTables from "../components/CustomizedTables"
import { PokemonContext } from "../contexts/PokemonContext"
import { useParams } from 'react-router-dom';


const PokemonExtraInfo = () => {
    const {Pokemon}=useContext(PokemonContext)
    const { id } = useParams();
console.log(Pokemon);
    return(
        <div>Aqui ves informacion extra
        <CustomizedTables/>
        </div>
    )
}

export default PokemonExtraInfo