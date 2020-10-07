import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

type ProjectTileProps = {
  title: string;
  image: string;
  titleColor?: string;
  description: string;
  descriptionWidth:
    | boolean
    | "auto"
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textStyle: {
      color: (props) => props.titleColor,
      marginBottom: 8,
      //   marginTop: 32,
      //   marginBottom: 16,
      //   marginLeft: 32,
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      display: "block",
    },
  })
);

export default function ProjectTile(props: ProjectTileProps) {
  const classes = useStyles(props);

  return (
    <Box borderRadius={32} bgcolor="#ffffff" overflow="hidden">
      <Box m={4}>
        <Typography variant="h3" className={classes.textStyle}>
          {props.title}
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={props.descriptionWidth}>
            <Typography variant="body1">{props.description}</Typography>
          </Grid>
        </Grid>
      </Box>
      <img src={props.image} alt="Project Image" className={classes.image} />
    </Box>
  );
}
