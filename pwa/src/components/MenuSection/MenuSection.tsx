import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import dishCardImg from "../../assets/img/dish-card-img.jpeg";
import drinkCardImg from "../../assets/img/drink-card-img.jpeg";
import cakeCardImg from "../../assets/img/cake-card-img.jpeg";

const menu = [
  {
    title: "Dish",
    description:
      "Arturist is an idea using AR technology to unlock the world of digitally augmented content around tourists.",
    link: "/arturist",
    cover: dishCardImg
  },
  {
    title: "Cake",
    description:
      "Thanks to the service worker, the webshop is enhanced in performance and available when there is no internet connection.",
    link: "https://deli-store-demo.netlify.com/",
    cover: cakeCardImg
  },
  {
    title: "Drink",
    description:
      "The objective of this project is to deliver a prototype of an application which help people to reduce food waste in daily life.",
    link: "/food-saver",
    cover: drinkCardImg
  }
];

const MenuSection: React.FunctionComponent = () => {
  return (
    <Container className="component-MenuSection">
      <h1 className="text-center">Menu</h1>
      <Grid container spacing={3}>
        {menu.map((category, idx) => (
          <Grid key={idx} item container xs={12} sm={4}>
            <Card className="component-MenuSection__MenuCard">
              <CardActionArea>
                <CardMedia component="img" image={category.cover} height="240" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {category.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default MenuSection;
