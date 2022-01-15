import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import useStyles from './useStyles';
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FormLabel from '@mui/material/FormLabel';
import SettingHeader from '../../../components/SettingsHeader/SettingsHeader';
import profileImage from '../../../images/profile/mock-image.jpg';

const Input = styled('input')({
  display: 'none',
});
interface ProfilePhotoProps {
  header: string;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ header }) => {
  const classes = useStyles();
  return (
    <>
      <SettingHeader header={header} />
      <Box textAlign="center">
        <Box className={classes.imageCropper}>
          <img className={classes.img} src={profileImage} alt="Profile Photo" />
        </Box>
        <Typography variant="body1" className={classes.txt}>
          Be sure to use a photo that <br /> clearly shows your face
        </Typography>
        <Box className={classes.input}>
          <FormLabel htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="outlined" component="span" sx={{ textTransform: 'none', fontSize: 16, py: 2, px: 5 }}>
              Upload a file from your device
            </Button>
          </FormLabel>
        </Box>
        <Button aria-label="delete">
          <DeleteIcon sx={{ mr: 1, color: 'black' }} />
          <Typography variant="body1" className={classes.txt}>
            Delete photo
          </Typography>
        </Button>
      </Box>
    </>
  );
};

export default ProfilePhoto;
