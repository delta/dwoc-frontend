import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Navbar from '../Navbar/Navbar'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 100,
  },
  chip: {
    margin: theme.spacing(1),
    height: 40,
    fontSize: 17,
  },
  Avatar: {
    margin: 15,
    width: 100,
    height: 100,
  },
}));

export default function Chips() {
  const classes = useStyles();

  function handleClick() {
    alert('Mentor Details.');
  }
const imgsrc="data:image/jpeg;base64,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";
  return (
      <div>
          <Navbar />
        <div className={classes.root}>
            <Typography variant="h2" component="h3" gutterBottom>
                List Of Mentors
            </Typography>
        </div>
    <div className={classes.root}>
      <Chip 
        avatar={<Avatar alt="FS" src={imgsrc} />}
          label="FirstName LastName"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar alt="FS" src={imgsrc} />}
          label="FirstName LastName"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar alt="FS" src={imgsrc} />}
          label="FirstName LastName"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar alt="NS" src={imgsrc} />}
          label="FirstName LastName"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar alt="FS" src={imgsrc} />}
          label="FirstName LastName"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar alt="FS" src={imgsrc} />}
          label="FirstName LastName"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar alt="FS" src={imgsrc} />}
          label="FirstName LastName"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar alt="FS" src={imgsrc} />}
          label="FirstName LastName"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar alt="FS" src={imgsrc} />}
          label="FirstName LastName"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar alt="FS" src={imgsrc} />}
          label="FirstName LastName"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar alt="FS" src={imgsrc} />}
          label="FirstName LastName"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={<Avatar alt="FS" src={imgsrc} />}
          label="FirstName LastName"
        onClick={handleClick}
        className={classes.chip}
      />
    </div>
    </div>
  );
}