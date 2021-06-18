import React from "react";
import { Box, Typography, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ScheduleList from "./ScheduleList";

function CourseSchedule() {
  const classes = useStyles();

  return (
    <Box mt={8}>
      <Typography variant="h2" className={classes.title}>
        Course Schedule
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        12 sections • 111 lectures • 14h 25m total length
      </Typography>
      <Box>
        <List>
          {[1, 2, 3].map((items, index) => (
            <ScheduleList key={index} props={items} />
          ))}
        </List>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(5),
  },
}));

export default CourseSchedule;
