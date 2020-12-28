import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Project from "../models/Project";
import Image from "next/image";

type Props = {
  project: Project;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outer: {
      height: "100%",
      padding: theme.spacing(2),
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
      maxWidth: "100%",
      maxHeight: 350,
      display: "flex",
    },

    imageBox: {
      alignSelf: "flex-end",
    },
    gridContent: {
      display: "flex",
      flexGrow: 1,
      flexShrink: 1,
      marginTop: theme.spacing(3),
    },
  })
);

export default function ProjectTile(props: Props): JSX.Element {
  const classes = useStyles(props);

  return (
    //Horizantal container grid for card
    <Grid item xs={12} sm={props.project.isWide ? 12 : 6}>
      <Card variant="outlined" className={classes.outer}>
        {/* Vertical grid for card contents */}
        <Grid container direction="column" className={classes.outer}>
          <Grid item>
            <Typography variant="h2" className={classes.textStyle}>
              {props.project.title}
            </Typography>
            <Typography variant="body1" className={classes.textBlock}>
              {props.project.description}
            </Typography>
            <Typography variant="body2" className={classes.subtitle}>
              {props.project.date}. {props.project.subtitleDescription}
            </Typography>
          </Grid>
          <Grid item className={classes.gridContent}>
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                width: "100%",
              }}
              className={classes.imageBox}
            >
              <Image
                src={props.project.image}
                // srcSet={props.project.image2x}
                alt={props.project.title}
                className={classes.image}
                width={props.project.width}
                height={props.project.height}
                // objectFit="contain"
                // layout="fill"
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
