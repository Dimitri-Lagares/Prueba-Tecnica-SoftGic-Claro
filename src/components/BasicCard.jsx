import { Card, CardActions, CardMedia, CardContent, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import { useNavigate } from 'react-router-dom';

export default function BasicCard({ name, id, image, types }) {
    const { setId } = useContext(PokemonContext)
	const navigate = useNavigate();

    const handleButton = () => {
        setId(id);
        navigate("pokemon/:id")
    }
    return (
        <Card >
            <CardMedia
                component="img"
                image={image}
            />
            <CardContent>
                <b>NOMBRE:</b>{name} <b>ID:</b>{id} <b>Tipos</b>
                {
                    types.map((data) => {
                        return (
                            data.type.name
                        )
                    })
                }
            </CardContent>
            <CardActions>
                <Button onClick={handleButton} variant='contained' size="small">ver más</Button>
            </CardActions>
        </Card>
    );
}
