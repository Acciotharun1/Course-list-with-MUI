import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Coursecard({
  image,
  title,
  description
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" component="text.secondary">
          {description}
        </Typography>

      </CardContent>
      <CardActions>
        <Button variant="contained" size="small"> Download the Brochure </Button>
        <Button variant="outlined" size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
