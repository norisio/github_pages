import { Stack, Typography } from "@mui/material";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  if (subtitle) {
    return (
      <Stack
        direction="row"
        spacing={2}
        sx={{
          borderBottom: "2px solid #1976d2",
          mb: 2,
          pb: 1,
        }}
        alignItems="baseline"
        justifyContent="center"
      >
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="subtitle1">({subtitle})</Typography>
      </Stack>
    );
  }

  return (
    <Typography
      variant="h5"
      component="h2"
      sx={{
        mb: 2,
        pb: 1,
        borderBottom: "2px solid #1976d2",
      }}
    >
      {title}
    </Typography>
  );
};
