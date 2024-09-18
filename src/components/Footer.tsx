import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

function ResponsiveFooter() {
  return (
    <footer>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ lg: 6, xs: 0 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <img
                src="https://validthemes.net/site-template/anada/assets/img/logo.png"
                alt=""
              />
              <p>
                Required honoured trifling eat pleasure man relation. Assurance
                yet bed was improving furniture man. Distrusts delighted
              </p>
            </Grid>
            <Grid
              size={{ xs: 12, md: 2 }}
              alignSelf="center"
              sx={{ justifyItems: "start", alignContent: "center" }}
            >
              <Typography variant="h5" marginBottom={"20px"}>
                Useful Links
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                }}
              >
                <ListItem
                  disablePadding
                  sx={{
                    marginBottom: "15px",
                    textDecoration: "none",
                    color: "black",
                  }}
                  component="a"
                  href="#"
                >
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    marginBottom: "15px",
                    textDecoration: "none",
                    color: "black",
                  }}
                  component="a"
                  href="#"
                >
                  <ListItemText primary="Services" />
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    marginBottom: "15px",
                    textDecoration: "none",
                    color: "black",
                  }}
                  component="a"
                  href="#"
                >
                  <ListItemText primary="Testimonials" />
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    marginBottom: "15px",
                    textDecoration: "none",
                    color: "black",
                  }}
                  component="a"
                  href="#"
                >
                  <ListItemText primary="Blog" />
                </ListItem>
              </List>
            </Grid>
            <Grid
              size={{ xs: 12, md: 2 }}
              alignSelf="center"
              sx={{ justifyItems: "start", alignContent: "center" }}
            >
              <Typography variant="h5" marginBottom={"20px"}>
                Services
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                }}
              >
                <ListItem
                  disablePadding
                  sx={{
                    marginBottom: "15px",
                    textDecoration: "none",
                    color: "black",
                  }}
                  component="a"
                  href="#"
                >
                  <ListItemText primary="Manufacturing" />
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    marginBottom: "15px",
                    textDecoration: "none",
                    color: "black",
                  }}
                  component="a"
                  href="#"
                >
                  <ListItemText primary="Marketing and Sales" />
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    marginBottom: "15px",
                    textDecoration: "none",
                    color: "black",
                  }}
                  component="a"
                  href="#"
                >
                  <ListItemText primary="Supply Chain" />
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{
                    marginBottom: "15px",
                    textDecoration: "none",
                    color: "black",
                  }}
                  component="a"
                  href="#"
                >
                  <ListItemText primary="Data Visualisation" />
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h5" marginBottom={"30px"}>
                Contact Info
              </Typography>
              <Typography component="small" marginBottom={"20px"}>
                Possible offering at contempt mr distance stronger an.
                Attachment excellence announcing
              </Typography>
              <p>
                <b>Email: </b>support@validtheme.com
              </p>
              <p>
                <b>Contact: </b>+44-20-7328-4499
              </p>
            </Grid>
          </Grid>
        </Box>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            margin: "80px 0px 0px 0px",
          }}
        >
          © Copyright 2024. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default ResponsiveFooter;
