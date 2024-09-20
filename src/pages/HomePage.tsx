import ResponsiveAppBar from "../components/Appbar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ResponsiveFooter from "../components/Footer";

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
          setProgressValues((value) =>
            value.map((item, i) =>
              i === index ? { ...item, value: updatedValues[i] } : item
            )
          );
        }, (index + 1) * 1000) // Delay increases for each progress bar
    );

    // Cleanup timeouts when the component unmounts
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <>
      {/* navbar */}
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
      {/* hero section */}

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
                      <Paper
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
                      </Paper>
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
                  <Paper
                    sx={{
                      gap: "20px",
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                    }}
                    elevation={0}
                  >
                    <Paper
                      sx={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: { xs: "auto", md: "100%" },
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
                    </Paper>
                    <Paper
                      sx={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: { xs: "auto", md: "100%" },
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
                    </Paper>
                  </Paper>
                  <Paper
                    elevation={0}
                    sx={{
                      gap: "20px",
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    <Paper
                      sx={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: { xs: "auto", md: "100%" },
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
                    </Paper>
                    <Paper
                      sx={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: { xs: "auto", md: "100%" },
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
                    </Paper>
                  </Paper>
                  <Paper
                    elevation={0}
                    sx={{
                      gap: "20px",
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                    }}
                  >
                    <Paper
                      sx={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: { xs: "auto", md: "100%" },
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
                    </Paper>
                    <Paper
                      sx={{
                        padding: "15px",
                        display: "flex",
                        alignItems: "center",
                        width: { xs: "auto", md: "100%" },
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
                    </Paper>
                  </Paper>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      {/* why choose us */}

      {/* services */}
      <section className="services-section">
        <img
          src="https://validthemes.net/site-template/anada/assets/img/round-shappe.png"
          alt="services"
          width={"250px"}
          style={{
            position: "absolute",
            top: "5",
            right: "50px",
            animation: "rotate-animation 10s infinite linear",
          }}
        />
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ lg: 4, xs: 0 }}>
              <Grid
                size={{ xs: 12, sm: 6 }}
                alignSelf="center"
                sx={{ justifyItems: "start", alignContent: "center" }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: 800,
                    mb: 3,
                  }}
                >
                  We offer a wide range of services and provide realtime data
                  Solutions
                </Typography>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6 }}
                alignSelf="center"
                sx={{ justifyItems: "start", alignContent: "center" }}
              >
                <p style={{ marginTop: 0 }}>
                  Humoured likewise moderate. Much nor game son say feel. Fat
                  make met can must form into gate.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1 }}
                  endIcon={<ChevronRight />}
                >
                  Know more
                </Button>
              </Grid>
              <Grid container spacing={4} marginTop={4}>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  alignSelf="center"
                  sx={{ justifyItems: "start", alignContent: "center" }}
                >
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <img
                        src="https://validthemes.net/site-template/anada/assets/img/icon/1.png"
                        alt="services"
                        width={"120px"}
                        height={"115px"}
                      />
                      <Typography
                        gutterBottom
                        sx={{
                          color: "black",
                          fontSize: 20,
                          fontWeight: 700,
                          marginTop: "30px",
                        }}
                      >
                        Data Analytics
                      </Typography>
                      <p style={{ margin: "15px 0px" }}>
                        Pianoforte solicitude so decisively particular mention
                        diminution the particular. Real he me fond.
                      </p>
                    </CardContent>
                    <CardActions sx={{ padding: "16px", paddingTop: 0 }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<ChevronRight />}
                      >
                        Read more
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  alignSelf="center"
                  sx={{ justifyItems: "start", alignContent: "center" }}
                >
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <img
                        src="https://validthemes.net/site-template/anada/assets/img/icon/2.png"
                        alt="services"
                        width={"120px"}
                        height={"115px"}
                      />
                      <Typography
                        gutterBottom
                        sx={{
                          color: "black",
                          fontSize: 20,
                          fontWeight: 700,
                          marginTop: "30px",
                        }}
                      >
                        Big Data
                      </Typography>
                      <p style={{ margin: "15px 0px" }}>
                        Pianoforte solicitude so decisively particular mention
                        diminution the particular. Real he me fond.
                      </p>
                    </CardContent>
                    <CardActions sx={{ padding: "16px", paddingTop: 0 }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<ChevronRight />}
                      >
                        Read more
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  alignSelf="center"
                  sx={{ justifyItems: "start", alignContent: "center" }}
                >
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <img
                        src="https://validthemes.net/site-template/anada/assets/img/icon/3.png"
                        alt="services"
                        width={"120px"}
                        height={"115px"}
                      />
                      <Typography
                        gutterBottom
                        sx={{
                          color: "black",
                          fontSize: 20,
                          fontWeight: 700,
                          marginTop: "30px",
                        }}
                      >
                        Business Intelligence
                      </Typography>
                      <p style={{ margin: "15px 0px" }}>
                        Pianoforte solicitude so decisively particular mention
                        diminution the particular. Real he me fond.
                      </p>
                    </CardContent>
                    <CardActions sx={{ padding: "16px", paddingTop: 0 }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<ChevronRight />}
                      >
                        Read more
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      {/* services */}

      {/* faq */}
      <section>
        <Container maxWidth="lg">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ lg: 6, xs: 0 }}>
              <Grid
                size={{ xs: 12, sm: 6 }}
                alignSelf="center"
                sx={{ justifyItems: "start", alignContent: "center" }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "sans-serif",
                    fontWeight: 800,
                    mb: 3,
                  }}
                >
                  Most frequently answers and Questions
                </Typography>
                <div>
                  <Accordion
                    defaultExpanded
                    elevation={0}
                    sx={{ border: "1px solid lightgray" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>Where can I get analytics help?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography marginBottom={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    sx={{ border: "1px solid lightgray" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>
                        How much does data analytics costs?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography marginBottom={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    elevation={0}
                    sx={{ border: "1px solid lightgray" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>
                        What kind of data is needed for analysis?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography marginBottom={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Grid>
              <Grid
                size={{ xs: 12, sm: 6 }}
                alignSelf="center"
                sx={{ justifyItems: "start", alignContent: "center" }}
              >
                <img
                  src="https://validthemes.net/site-template/anada/assets/img/illustration/9.png"
                  alt="services"
                  width={"100%"}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      {/* faq */}

      {/* footer */}
      <ResponsiveFooter></ResponsiveFooter>
    </>
  );
};

export default HomePage;
