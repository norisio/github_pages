import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ width: "100%" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          saka's works
        </Typography>
        <Box>
          <IconButton
            color="inherit"
            onClick={() => handleSocialClick("https://github.com/norisio")}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => handleSocialClick("https://x.com/skb_apos")}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() =>
              handleSocialClick("mailto:k.exa.apostrophe@gmail.com")
            }
          >
            <EmailIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
