import ResponsiveAppBar from "../components/Appbar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import {
  Button,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import {
  ChevronRight,
  IntegrationInstructions,
  SettingsApplications,
  StorageOutlined,
  TableChart,
  WorkspacePremium,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const HomePage = () => {
  const [progressValues, setProgressValues] = useState([
    { label: "DATA ANALYSIS", value: 0 },
    { label: "SOCIAL ASSISTANT", value: 0 },
    { label: "AI SOLUTIONS", value: 0 },
  ]);

  useEffect(() => {
    const updatedValues = [80, 55, 20]; // The target values for each progress bar

    const timers = progressValues.map(
      (progress, index) =>
        setTimeout(() => {
          setProgressValues((prev) =>
            prev.map((p, i) =>
              i === index ? { ...p, value: updatedValues[i] } : p
            )
          );
        }, (index + 1) * 1000) // Delay increases for each progress bar
    );

    // Cleanup timeouts when the component unmounts
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

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
      {/* hero section */}
      <section className="hero-section">
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid
                size={{ xs: 12, sm: 6 }}
                alignSelf="center"
                height={{ xs: "55vh", md: "90vh" }}
                sx={{
                  justifyItems: "start",
                  alignContent: "center",
                }}
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
                size={{ xs: 12, sm: 6 }}
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
      {/* why choose us */}
      <section>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={6}>
              <Grid
                size={{ xs: 12, sm: 6 }}
                alignSelf="center"
                sx={{ justifyItems: "start", alignContent: "center" }}
              >
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: 500,
                    mb: 1,
                    display: { xs: "none", md: "block" },
                  }}
                >
                  Why Chose Us?
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: 800,
                    mb: 3,
                  }}
                >
                  We are master in data science & big data analysis
                </Typography>
                <p>
                  Humoured likewise moderate. Much nor game son say feel. Fat
                  make met can must form into gate.
                </p>
              </Grid>
              {/* progress */}
              <Grid
                size={{ xs: 12, sm: 6 }}
                sx={{ justifyItems: "start", alignContent: "center" }}
              >
                <Box sx={{ width: "100%" }}>
                  {progressValues.map((progress, index) => (
                    <Box key={index} mb={2}>
                      <Item
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontWeight: "700",
                          color: "black",
                        }}
                        elevation={0}
                      >
                        <Typography>{progress.label}</Typography>
                        <Typography>{Math.round(progress.value)}%</Typography>
                      </Item>
                      <LinearProgress
                        variant="determinate"
                        className="rounded"
                        value={progress.value}
                      />
                    </Box>
                  ))}
                </Box>
              </Grid>
              {/* progress */}
              <Grid
                size={{ xs: 12, sm: 5 }}
                alignSelf="center"
                sx={{ justifyItems: "start", alignContent: "center" }}
              >
                <img
                  src="https://validthemes.net/site-template/anada/assets/img/illustration/14.png"
                  alt="hero-image"
                  width={"100%"}
                />
              </Grid>
              <Grid
                size={{ xs: 12, sm: 7 }}
                width={"100%"}
                sx={{
                  justifyItems: "start",
                  alignContent: "center",
                  padding: 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "column",
                  }}
                >
                  <Item style={{ display: "flex", gap: "20px" }} elevation={0}>
                    <Item
                      sx={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "aliceblue",
                      }}
                    >
                      <DeleteIcon color="primary" sx={{ fontSize: "30px" }} />
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ marginRight: "15px", marginLeft: "10px" }}
                      />
                      <Typography component="small" fontWeight={700}>
                        Data Cleaning
                      </Typography>
                    </Item>
                    <Item
                      sx={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "aliceblue",
                      }}
                    >
                      <IntegrationInstructions
                        color="primary"
                        sx={{ fontSize: "30px" }}
                      />
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ marginRight: "15px", marginLeft: "10px" }}
                      />
                      <Typography component="small" fontWeight={700}>
                        API Integration Service
                      </Typography>
                    </Item>
                  </Item>
                  <Item style={{ display: "flex", gap: "20px" }} elevation={0}>
                    <Item
                      sx={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "aliceblue",
                      }}
                    >
                      <TableChart color="primary" sx={{ fontSize: "30px" }} />
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ marginRight: "15px", marginLeft: "10px" }}
                      />
                      <Typography component="small" fontWeight={700}>
                        Table Storage
                      </Typography>
                    </Item>
                    <Item
                      sx={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "aliceblue",
                      }}
                    >
                      <StorageOutlined
                        color="primary"
                        sx={{ fontSize: "30px" }}
                      />
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ marginRight: "15px", marginLeft: "10px" }}
                      />
                      <Typography component="small" fontWeight={700}>
                        SQL Database
                      </Typography>
                    </Item>
                  </Item>
                  <Item style={{ display: "flex", gap: "20px" }} elevation={0}>
                    <Item
                      sx={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "aliceblue",
                      }}
                    >
                      <SettingsApplications
                        color="primary"
                        sx={{ fontSize: "30px" }}
                      />
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ marginRight: "15px", marginLeft: "10px" }}
                      />
                      <Typography component="small" fontWeight={700}>
                        Applicatication Services
                      </Typography>
                    </Item>
                    <Item
                      sx={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "aliceblue",
                      }}
                    >
                      <WorkspacePremium
                        color="primary"
                        sx={{ fontSize: "30px" }}
                      />
                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ marginRight: "15px", marginLeft: "10px" }}
                      />
                      <Typography component="small" fontWeight={700}>
                        Data Quality Audit
                      </Typography>
                    </Item>
                  </Item>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      {/* why choose us */}
      {/* services */}
      <section>
        <Container maxWidth="lg"></Container>
      </section>
    </>
  );
};

export default HomePage;
