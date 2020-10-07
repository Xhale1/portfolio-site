import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outer: { height: "100%" },
    inner: { objectFit: "cover", width: "100%", height: "100%" },
  })
);

type ProjectTileProps = {
  image: string;
};

export default function ProjectTile(props: ProjectTileProps) {
  const classes = useStyles();

  return (
    <Box className={classes.outer} borderRadius={16} overflow="hidden">
      <img src={props.image} alt="Project Image" className={classes.inner} />
    </Box>
  );
}
