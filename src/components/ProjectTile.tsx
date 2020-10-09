import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Project from "../models/Project";

type Props = {
  project: Project;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outer: {
      height: "100%",
      // display: "flex"
    },
    textBlock: {
      maxWidth: 655,
    },
    textStyle: {
      color: (props: Props) => props.project.titleColor,
      marginBottom: theme.spacing(1),
    },
    subtitle: {
      marginTop: theme.spacing(1),
    },
    image: {
      objectFit: "cover",
      width: "100%",
      alignSelf: "flex-end",
    },
    gridContent: {
      display: "flex",
      flexGrow: 1,
      flexShrink: 1,
    },
  })
);

export default function ProjectTile(props: Props) {
  const classes = useStyles(props);

  return (
    //Horizantal container grid for card
    <Grid item xs={12} sm={props.project.isWide ? 12 : 6}>
      <Card variant="outlined" className={classes.outer}>
        {/* Vertical grid for card contents */}
        <Grid container direction="column" className={classes.outer}>
          <Grid item>
            <Box m={4}>
              <Typography variant="h3" className={classes.textStyle}>
                {props.project.title}
              </Typography>
              <Typography variant="body1" className={classes.textBlock}>
                {props.project.description}
              </Typography>
              <Typography variant="body2" className={classes.subtitle}>
                {props.project.subtitleDescription}
              </Typography>
            </Box>
          </Grid>
          <Grid item className={classes.gridContent}>
            <img
              src={props.project.image}
              alt="Project Image"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
