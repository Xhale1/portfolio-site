import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Project from "../models/Project";

type Props = {
  project: Project;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textStyle: {
      color: (props: Props) => props.project.titleColor,
      marginBottom: 8,
      //   marginTop: 32,
      //   marginBottom: 16,
      //   marginLeft: 32,
    },
    subtitle: {
      marginTop: 8,
    },
    image: {
      objectFit: "cover",
      width: "100%",
      maxHeight: "100%",
      display: "block",
    },
  })
);

export default function ProjectTile(props: Props) {
  const classes = useStyles(props);

  return (
    <Grid item xs={12} md={props.project.isWide ? 12 : 6}>
      <Box borderRadius={32} bgcolor="#ffffff" overflow="hidden" height="100%">
        <Box m={4}>
          <Grid container>
            <Grid item xs={12} sm={props.project.isWide ? 6 : 12}>
              <Typography variant="h3" className={classes.textStyle}>
                {props.project.title}
              </Typography>
              <Typography variant="body1">
                {props.project.description}
              </Typography>
              {/* <Typography variant="h4" className={classes.subtitle}>
                {props.subtitle}
              </Typography> */}
              <Typography variant="body2" className={classes.subtitle}>
                {props.project.subtitleDescription}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <img
          src={props.project.image}
          alt="Project Image"
          className={classes.image}
        />
      </Box>
    </Grid>
  );
}
