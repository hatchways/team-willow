import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import useStyles from './useStyles';
import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
      <Card
        sx={{
          maxWidth: 550,
          minHeight: 600,
          margin: 'auto',
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow:
            '0px 0px 1.9px rgba(0, 0, 0, 0.007),0px 0px 4.9px rgba(0, 0, 0, 0.014),0px 0px 9.9px rgba(0, 0, 0, 0.021),0px 0px 20.4px rgba(0, 0, 0, 0.031),0px 0px 56px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Box className={classes.imageCropper}>
          <CardMedia component="img" image={image} alt="Profile Image" className={classes.userImage} />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 700 }}>
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {occupation}
          </Typography>
          <Rating
            sx={{ my: 2 }}
            name="read-only"
            value={rating}
            readOnly
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <Typography variant="h5" sx={{ mb: 3 }}>
            {description}
          </Typography>
        </CardContent>
        <Divider />
        <Box className={classes.cardFooter}>
          <Box className={classes.iconSeting}>
            <LocationOnIcon className={classes.icon} sx={{ mr: 1 }} />
            <Typography variant="body1" color="text.secondary">
              {city}
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            ${rate}/hr
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default UserDetails;
