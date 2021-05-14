import React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "react-router-dom";

const images = [
  {
    url:
      "https://image.shutterstock.com/image-vector/welcome-letters-banner-on-blue-260nw-1189574716.jpg",
    title: "Start",
    width: "40%",
    height: "300px",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 300,
      width: "100%",
      minHeight: "100vh",
    },
    image: {
      position: "relative",
      height: 200,
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.12,
        },
        "& $imageMarked": {
          opacity: 0,
        },
        "& $imageTitle": {
          border: "4px solid currentColor",
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%",
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.1,
      transition: theme.transitions.create("opacity"),
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
        theme.spacing(1) + 6
      }px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity"),
    },
  })
);

export default function Login() {
  const classes = useStyles();

  return (
    <Link to="/quiz" className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
            height: image.height,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}></span>
        </ButtonBase>
      ))}
    </Link>
  );
}
