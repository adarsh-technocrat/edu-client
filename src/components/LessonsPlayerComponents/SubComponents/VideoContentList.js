import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Typography,
  ListItem,
  ListItemText,
  IconButton,
  Collapse,
  Avatar,
  ListItemAvatar,
} from "@material-ui/core";
import VideoSubSectionList from "./VideoSubSectionList";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function VideoContentList({ props, index }) {
  const classes = useStyles();
  const [open, setopen] = useState(false);
  const handleChange = () => {
    setopen(!open);
  };

  return (
    <Box className={classes.container}>
      <ListItem button className={classes.listItem} onClick={() => handleChange()}>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <Typography>{index}</Typography>
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h5" className={classes.courseTitle}>
            Course Introduction
          </Typography>
          <Box className={classes.subsection}>
            <Typography component="span" className={classes.duration}>
              69 min
            </Typography>
            <Typography variant="subtitle2" className={classes.resources}>
              Resources (1)
            </Typography>
          </Box>
        </ListItemText>
        <IconButton edge="end" className={classes.expandIcon}>
          {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </IconButton>
      </ListItem>
      <Collapse in={open}>
        {[1, 2, 3].map((items, index) => (
          <VideoSubSectionList key={index} />
        ))}
      </Collapse>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  ListContainer: {
    flex: 2,
    height: 800,
    marginLeft: theme.spacing(3),
  },
  appBar: {
    backgroundColor: theme.palette.text.primary,
    borderRadius: "5px",
  },
  courseTitle: {
    fontWeight: 600,
  },
  listItem: {
    marginBottom: theme.spacing(2),
    borderRadius: "5px",
    // background: "linear-gradient(90.28deg, #2A5EDA -20.31%, #4379FE 104.28%)",
    // color: "#fff",
  },
  subsection: {
    display: "flex",
    alignItems: " center",
  },
  duration: {
    marginRight: theme.spacing(1),
  },
  resources: {
    marginRight: theme.spacing(1),
  },
  avatar: {
    border: "2px solid #000",
    background: "#fff",
    color: theme.palette.text.primary,
    height: 30,
    width: 30,
  },
}));

export default VideoContentList;
