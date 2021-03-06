import memories from './components/images/memories.png'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import Form from './components/Form/Form.js'
import Posts from './components/Posts/Posts.js'
import useStyles from './style'
import {DataProvider} from './context'

function App() {
  const classes = useStyles();
  return (
    <DataProvider>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
          <img className={classes.image} src={memories} alt="logo" height="60"/>
        </AppBar>
        <Grow in>
          <Container >
            <Grid container justify="space-between" alignItems="stretch" spacong={3}>
              <Grid item xs={12} sm={7}>
                  <Posts/>
              </Grid>
              <Grid item xs={12} sm={4}>
                  <Form/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </DataProvider>
  );
}

export default App;
