import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
import "./MediaCard.css";

export default function ImgMediaCard(props) {
  return (
    <Card
      className="card-div"
      sx={{
        background: "rgba(0, 0, 0, 0.2)",
        // ":hover": { background: "rgba(0, 0, 0, 0.3)" },
      }}
    >
      <CardMedia
        component="img"
        alt={props.alt}
        height="380"
        image={props.imageUrl}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          sx={{
            fontWeight: "700",
            color: "rgb(0, 0, 0)",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            margin: "-12px -12px -9px -12px",
          }}
        >
          <center>{props.title}</center>
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          margin: "-3px -12px -3px -12px",
        }}
      >
        <Button
          size="small"
          component={Link}
          to={`/read/${slugify(props.title).toLowerCase()}`}
          sx={{
            color: "black",
            ":hover": { background: "rgba(0, 0, 0, 0.4)" },
            width: "40%",
          }}
        >
          <span className="custom-text">READ</span>
        </Button>
        <Button
          size="small"
          component={Link}
          to={props.malLink}
          sx={{
            color: "black",
            ":hover": { background: "rgba(0, 0, 0, 0.4)" },
            width: "40%",
          }}
        >
          <span className="custom-text">INFO</span>
        </Button>
      </CardActions>
    </Card>
  );
}
