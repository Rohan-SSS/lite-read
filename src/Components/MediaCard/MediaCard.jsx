import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
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
        height="320"
        image={props.imageUrl}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          sx={{
            fontWeight: "700",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <center>{props.title}</center>
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
        }}
      >
        <Button
          size="small"
          component={Link}
          to={`/read/${props.readlink}`}
          sx={{
            color: "black",
            ":hover": { background: "rgba(0, 0, 0, 0.4)" },
          }}
        >
          <span className="custom-text">READ</span>
        </Button>
        <Button
          size="small"
          component={Link}
          to={props.mallink}
          sx={{
            color: "black",
            ":hover": { background: "rgba(0, 0, 0, 0.4)" },
          }}
        >
          <span className="custom-text">MAL</span>
        </Button>
      </CardActions>
    </Card>
  );
}
