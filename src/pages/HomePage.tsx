import ResponsiveAppBar from "../components/Appbar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

const HomePage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <section className="hero-section">
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid
                size={{ xs: 12, sm: 6 }}
                alignSelf="center"
                height={"70vh"}
                sx={{ justifyItems: "start", alignContent: "center" }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: 800,
                    mb: 3,
                    display: { xs: "none", md: "block" },
                  }}
                >
                  Applying Data Science & Techniques
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: 800,
                    mb: 3,
                    display: { xs: "block", md: "none" },
                  }}
                >
                  Applying Data Science & Techniques
                </Typography>
                <p>
                  Contented continued any happiness instantly objection yet her
                  allowance. Use correct day new brought tedious. Kept easy or
                  sons my it done.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1 }}
                  endIcon={<ChevronRight />}
                >
                  Read more
                </Button>
              </Grid>
              <Grid
                size={{ xs: 6, sm: 6 }}
                sx={{ justifyItems: "start", alignContent: "center" }}
              >
                <img
                  src="https://validthemes.net/site-template/anada/assets/img/illustration/13.png"
                  alt="hero-image"
                  width={"100%"}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
