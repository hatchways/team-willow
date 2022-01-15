import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import useStyles from './useStyles';
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FormLabel from '@mui/material/FormLabel';
import SettingHeader from '../../../components/SettingsHeader/SettingsHeader';

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
          <img
            className={classes.img}
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="Profile Photo"
          />
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
