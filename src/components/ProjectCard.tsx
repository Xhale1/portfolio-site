import React from "react";
import { Box, Typography, Grid, Card } from "@material-ui/core";
import Project from "models/Project";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props): JSX.Element {
  return (
    <Grid item xs={12} sm={project.isWide ? 12 : 6}>
      <Card variant="outlined" sx={{ height: "100%", p: 4 }}>
        <Grid container direction="column" sx={{ height: "100%" }}>
          <Grid item>
            <Typography variant="h2" sx={{ mb: 1, color: project.titleColor }}>
              {project.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600 }}>
              {project.description}
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 600, mt: 1 }}>
              {project.date}. {project.subtitleDescription}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", flexGrow: 1, flexShrink: 1, mt: 3 }}
            alignItems="flex-end"
          >
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                width: "100%",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={project.width}
                height={project.height}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
