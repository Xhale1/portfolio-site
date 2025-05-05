import { Box, Button, Card, Grid, Typography } from "@mui/material";
import type Project from "interfaces/project";
import Image from "next/legacy/image";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Grid
      size={{
        xs: 12,
        sm: project.isWide ? 12 : 6,
      }}
    >
      <Card variant="outlined" sx={{ height: "100%", p: 4 }}>
        <Grid container direction="column" sx={{ height: "100%" }}>
          <Grid>
            <Typography variant="h2" sx={{ mb: 1, color: project.titleColor }}>
              {project.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600 }}>
              {project.description}
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 600, my: 1 }}>
              {project.date}. {project.subtitleDescription}
            </Typography>
            {project.links !== undefined ? (
              <>
                {project.links.map((link, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    href={link.url}
                    rel="noopener"
                    target="_blank"
                    sx={{ mr: 2, mb: 2 }}
                  >
                    {link.name}
                  </Button>
                ))}
              </>
            ) : null}
          </Grid>
          <Grid
            sx={{ display: "flex", flexGrow: 1, flexShrink: 1, mt: 3 }}
            alignItems="flex-end"
          >
            {project.isWebScreenshot === true ? (
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "1px 1px 60px 0 rgba(0, 0, 0, .15)",
                  display: "flex",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                />
              </Box>
            ) : (
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
                  // quality={90}
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
