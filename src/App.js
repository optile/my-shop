import React from "react";

import {
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  ButtonGroup,
  Badge,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
  CardActionArea,
  CardMedia,
  CardActions,
  withStyles,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Theme } from "barisan";
import styles from "./styles";
import products from "./data/products";

function App({ classes }) {
  return (
    <Theme>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.mainTitle}>
            My Shop
          </Typography>
          <Badge badgeContent={4} color="primary">
            <IconButton
              edge="start"
              size="small"
              className={classes.cartButton}
              color="inherit"
              aria-label="ShoppingCart"
            >
              <ShoppingCart />
            </IconButton>
          </Badge>
        </Toolbar>
      </AppBar>
      <Paper elevation={0}>
        <Container className={classes.paddingTop}>
          <Grid container className={classes.paddingTop} spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`./assets/${product.media}.jpg`}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h3">
                      {`${product.price} USD`}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Paper>
    </Theme>
  );
}
export default withStyles(styles)(App);
