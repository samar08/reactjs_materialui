import React from 'react';
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import useStyles from './styles';
const cards=[1,2,3,4,5,6,7,8,9];
const App = () => {
    const classes=useStyles();
  return (
  <>
   <CssBaseline/>
   <AppBar position="relative">
       <Toolbar>
           <PhotoCamera className={classes.icon}/>
           <Typography variant="h3">samar's app</Typography>
       </Toolbar>
   </AppBar>
   <main>
       <div className={classes.container}>
           <Container maxwidth="sm">
               <Typography variant="h3" color="textPrimary" gutterBottom align="center">Albums</Typography>
               <Typography variant="h6" color="textSecondary" align="center" paragraph>
               A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.
               </Typography>
               <div className={classes.button}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                         <Button variant="contained" color="primary">
                          See my photos
                         </Button>
                    </Grid>
                    <Grid item>
                         <Button variant="outlined" color="primary">
                          Secondary button
                         </Button>
                    </Grid>

                </Grid>
                </div>

           </Container>
       </div>
       <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4} >
              {
                  cards.map((card)=>(
                    <Grid key={card} item xs={12} sm={6} md={4}>
                  <Card classname={classes.card}>
                      <CardMedia 
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"

                      />
                      <CardContent className={classes.cardContent }>
                          <Typography gutterBottom variant="h5">
                                Heading
                          </Typography>
                          <Typography>
                              This is a media card
                          </Typography>
                      </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            View
                        </Button>
                        <Button size="small" color="primary">
                            Edit
                        </Button>
                    </CardActions>
                  </Card>
              </Grid>
                  ))
              }
                
              
            </Grid> 

       </Container>
   </main>
   <footer className={classes.footer}>
    <Typography variant="h6" align="center" gutterbottom>
    Footer
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary">
    Copyright@ Samara simha reddy

    </Typography>
   </footer>
  </>
  );
};

export default App;
