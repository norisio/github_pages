import { Box, Link, Typography } from "@mui/material";

export type EntryWithDetails = {
  title: string;
  url: string | null;
  details: string[] | null;
};

type EntryListProps = {
  entries: EntryWithDetails[];
};

export const EntryList = ({ entries }: EntryListProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {entries.map((entry) => (
        <div key={entry.title}>
          {entry.url ? (
            <Link href={entry.url} target="_blank" color="inherit">
              {entry.title}
            </Link>
          ) : (
            <Box sx={{ mb: 1 }}>{entry.title}</Box>
          )}
          {entry.details && (
            <Box
              sx={{
                maxWidth: "600px",
                color: "text.secondary",
                fontSize: "0.875rem",
                textAlign: "left",
              }}
            >
              {entry.details.map((detail, index) => (
                <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                  {detail}
                </Typography>
              ))}
            </Box>
          )}
        </div>
      ))}
    </Box>
  );
};
