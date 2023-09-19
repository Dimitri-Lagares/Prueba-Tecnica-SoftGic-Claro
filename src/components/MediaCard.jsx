import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ image, name, types, id }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={name}
      />
      <CardContent>
        {
          types.map((type, index) => {
            <Typography gutterBottom variant="h5" component="div">
              {type[index].type.name}
            </Typography>
          })
        }
        <Typography>
          {id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small">ver mas</Button>
      </CardActions>
    </Card>
  );
}