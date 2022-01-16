import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import useStyles from './useStyles';
import { Box } from '@mui/material';
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
        <Box className={classes.cardMedia}>
          <img src={image} alt="Profile Image" className={classes.userImage} />
        </Box>
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
        <Box>
          <Typography variant="body2" color="text.secondary">
            {city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${rate}/hr
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default UserDetails;
