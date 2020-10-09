import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Project from "../models/Project";
import Container from "@material-ui/core/Container";

type Props = {
  project: Project;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outer: {
      height: "100%",
      padding: theme.spacing(2),
      // display: "flex"
    },
    textBlock: {
      maxWidth: 600,
    },
    textStyle: {
      color: (props: Props) => props.project.titleColor,
      marginBottom: theme.spacing(1),
    },
    subtitle: {
      marginTop: theme.spacing(1),
      maxWidth: 600,
    },
    image: {
      objectFit: "cover",
      // alignContent: "center",
      // width: "100%",
      // height: "100%",
      maxWidth: "100%",
      maxHeight: 350,
      display: "flex",
      // alignSelf: "flex-end",
    },

    imageBox: {
      alignSelf: "flex-end",
      // textAlign: "center",
    },
    gridContent: {
      // minHeight: 400,
      display: "flex",
      flexGrow: 1,
      flexShrink: 1,
      marginTop: theme.spacing(3),
    },
  })
);

export default function ProjectTile(props: Props) {
  const classes = useStyles(props);

  return (
    //Horizantal container grid for card
    <Grid item xs={12} sm={props.project.isWide ? 12 : 6}>
      <Card variant="outlined" className={classes.outer}>
        {/* <Box m={4}> */}
        {/* Vertical grid for card contents */}
        <Grid container direction="column" className={classes.outer}>
          <Grid item>
            {/* <Box m={4}> */}
            <Typography variant="h3" className={classes.textStyle}>
              {props.project.title}
            </Typography>
            <Typography variant="body1" className={classes.textBlock}>
              {props.project.description}
            </Typography>
            <Typography variant="body2" className={classes.subtitle}>
              {props.project.subtitleDescription}
            </Typography>
            {/* </Box> */}
          </Grid>
          <Grid item className={classes.gridContent}>
            <Box
              justifyContent="center"
              display="flex"
              width="100%"
              className={classes.imageBox}
            >
              <img
                src={props.project.image}
                alt="Project Image"
                className={classes.image}
              />
            </Box>
          </Grid>
        </Grid>
        {/* </Box> */}
      </Card>
    </Grid>
  );
}
