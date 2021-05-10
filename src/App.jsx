import "./App.css";
import {
  Container,
  createMuiTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import FeaturedPost from "./components/FeaturedPost.jsx";
import PostCard from "./components/PostCard.jsx";
import Header from "./components/Header.jsx";
import { featuredPosts, sidebar } from "./Data/Data";
import Main from "./components/Main.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          <Main title="From the firehose" />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;
