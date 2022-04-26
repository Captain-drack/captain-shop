import React from "react";
// import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./individual.css";

const IndividualCard = ({ productArray }) => {
  // const products = useSelector((state) => state);
  console.log("hello", productArray);
  const renderList = productArray.map((product) => {
    const { id, title, image, price, category, rating } = product;
    return (
      <Card
        className="card-styling"
        style={{ textAlign: "center" }}
        sx={{ maxWidth: 355 }}
        key={id}
      >
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/product/${id}`}
        >
          <img className="product-image" src={image} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title.substring(0, 32)}
            </Typography>
            <Typography
              style={{ fontSize: "16px", fontWeight: "bold" }}
              variant="body1"
              color="text.secondary"
            >
              Price: ${price.toFixed(2)}
            </Typography>
            <Typography
              style={{ fontSize: "16px", fontWeight: "bold" }}
              variant="body1"
              color="text.secondary"
            >
              Category: {category}
            </Typography>
            <Typography
              style={{ fontSize: "16px" }}
              variant="body1"
              color="text.secondary"
            >
              <strong>Rating: </strong> {rating.rate} out of {rating.count}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    );
  });
  return <>{renderList}</>;
};

export default IndividualCard;
