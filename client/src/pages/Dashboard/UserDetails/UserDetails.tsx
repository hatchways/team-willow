import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import useStyles from './useStyles';
interface UserDetailsProps {
  user: {
    id: number;
    image: string;
    name: string;
    occupation: string;
    rating: number;
    description: string;
    rate: number;
    city: string;
  };
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  const { image, name, occupation, rating, description, rate, city } = user;

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card sx={{ maxWidth: 550, margin: 'auto' }}>
        <CardMedia
          component="img"
          alt="Profile Image"
          height="auto"
          image={image}
          width="100%"
          className={classes.cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {occupation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Button size="small">{city}</Button>
          <Button size="small">{rate}</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default UserDetails;
