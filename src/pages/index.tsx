import React, { useEffect } from "react";
// import Typical from "react-typical";
// import ViewMyWorkButton from "./ViewMyWorkButton";
// import makeStyles from "@material-ui/styles/makeStyles";

// const useStyles = makeStyles((theme) => ({
//   canvas: {
//     display: "block",
//     background: "#292b2c",
//     minHeight: '100vh',
//     minWidth: '100vw'
//   },
//   typewriter: {
//     color: "white",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//     top: "30%",
//     marginLeft: "0.5em",
//     [theme.breakpoints.down("xs")]: {
//       position: "absolute",
//       top: 0,
//       transform: "translateX(2%)",
//     },
//   },
//   h1: {
//     [theme.breakpoints.down("xs")]: {
//       width: "100vw",
//       fontSize: "1.8em",
//       margin: "auto",
//     },
//   },
//   typical: {
//     color: "gold",
//     fontSize: "2em",
//     [theme.breakpoints.down("xs")]: {
//       display: "block",
//     },
//   },
//   iAmA: {
//     fontSize: "2em",
//     marginRight: "0.2em",
//     [theme.breakpoints.down("xs")]: {
//       margin: 0,
//     },
//   },
// }));

const Home = () => {
  // const classes = useStyles();
  // // Bubble effect
  // useEffect(() => {
  //   (function () {
  //     window.addEventListener("load", function () {
  //       let canvas = document.getElementById("canvas");

  //       if (!canvas || !canvas.getContext) {
  //         return false;
  //       }
  //       // Random Number
  //       function rand(min, max) {
  //         return Math.floor(Math.random() * (max - min + 1) + min);
  //       }

  //       let ctx = canvas.getContext("2d");
  //       let X = (canvas.width = window.innerWidth);
  //       let Y = (canvas.height = window.innerHeight);
  //       let shapes = [];
  //       let shapeNum = 36;

  //       // Animation
  //       window.requestAnimationFrame =
  //         window.requestAnimationFrame ||
  //         window.mozRequestAnimationFrame ||
  //         window.webkitRequestAnimationFrame ||
  //         window.msRequestAnimationFrame ||
  //         function (cb) {
  //           setTimeout(cb, 17);
  //         };

  //       // Create Shape
  //       function Shape(ctx, x, y, i) {
  //         this.ctx = ctx;
  //         this.init(x, y, i);
  //       }

  //       Shape.prototype.init = function (x, y, i) {
  //         let mq = window.matchMedia("(max-width: 600px)");
  //         this.a = i;
  //         this.rad = (this.a * Math.PI) / 180;
  //         this.x = Math.sin(this.rad) * 1 + x;
  //         this.y = Math.cos(this.rad) * 1 + y;
  //         this.r = mq.matches ? rand(5, 15) : rand(15, 30);
  //         this.lw = this.r / 3;
  //         this.v = {
  //           x: rand(-1, 1) * Math.random() * Math.random(),
  //           y: rand(-1, 1) * Math.random() * Math.random(),
  //         };
  //         this.as = (rand(0, 360) * Math.PI) / 180;
  //       };

  //       Shape.prototype.draw = function () {
  //         let ctx = this.ctx;
  //         ctx.save();
  //         ctx.fillStyle = "#91c9ff";
  //         ctx.beginPath();
  //         ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
  //         ctx.fill();
  //         ctx.beginPath();
  //         ctx.lineWidth = this.lw;
  //         ctx.lineCap = "round";
  //         ctx.strokeStyle = "dimgray";
  //         ctx.arc(this.x, this.y, this.r * 0.6, this.as, this.as + 1, false);
  //         ctx.stroke();
  //         ctx.restore();
  //       };

  //       Shape.prototype.wrapPosition = function () {
  //         if (this.x - this.r < 0) {
  //           this.x = 0 + this.r;
  //         }
  //         if (this.x + this.r > X) {
  //           this.x = X - this.r;
  //         }
  //         if (this.y - this.r < 0) {
  //           this.y = 0 + this.r;
  //         }
  //         if (this.y + this.r > Y) {
  //           this.y = Y - this.r;
  //         }
  //       };

  //       Shape.prototype.collisionShape = function (i) {
  //         let j = i;
  //         // eslint-disable-next-line no-redeclare
  //         for (let i = 0; i < shapes.length; i++) {
  //           if (j !== i) {
  //             let sumRadius = this.r + shapes[i].r;
  //             let a = this.x - shapes[i].x;
  //             let b = this.y - shapes[i].y;
  //             let c = a * a + b * b;
  //             if (c < sumRadius * sumRadius) {
  //               this.v.x = -this.v.x;
  //               this.v.y = -this.v.y;
  //               let colAngle = Math.atan2(
  //                 this.y - shapes[i].y,
  //                 this.x - shapes[i].x
  //               );
  //               this.v.x = Math.cos(colAngle);
  //               this.v.y = Math.sin(colAngle);
  //               this.x += this.v.x;
  //               this.y += this.v.y;
  //             }
  //           }
  //         }
  //       };

  //       Shape.prototype.render = function (i) {
  //         this.collisionShape(i);
  //         this.wrapPosition();
  //         this.draw();
  //       };

  //       for (let i = 0; i < shapeNum; i++) {
  //         let s = new Shape(ctx, X / 2, Y - 30, i);
  //         shapes.push(s);
  //       }

  //       setInterval(function () {
  //         let s = new Shape(ctx, X / 2, Y - 30, 0);
  //         shapes.push(s);
  //       }, 100);

  //       // Render
  //       function render() {
  //         ctx.clearRect(0, 0, X, Y);
  //         for (let i = 0; i < shapes.length; i++) {
  //           shapes[i].render(i);
  //         }
  //         requestAnimationFrame(render);
  //       }

  //       render();

  //       // Event
  //       function onResize() {
  //         X = canvas.width = window.innerWidth;
  //         Y = canvas.height = window.innerHeight;
  //       }

  //       window.addEventListener("resize", function () {
  //         onResize();
  //         shapes = [];
  //         for (let i = 0; i < shapeNum; i++) {
  //           let s = new Shape(ctx, X / 2, Y - 30, i);
  //           shapes.push(s);
  //         }
  //       });

  //       canvas.addEventListener(
  //         "click",
  //         function (e) {
  //           let num = rand(5, 20);
  //           for (let i = 0; i < num; i++) {
  //             let s = new Shape(ctx, e.clientX, e.clientY, i);
  //             shapes.push(s);
  //           }
  //         },
  //         false
  //       );
  //     });
  //   })();
  // }, []);

  return (
    <>
      <canvas
        id="canvas"
        style={{
          display: "block",
          background: "#292b2c",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        Canvas not supported.
      </canvas>
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "30%",
          marginLeft: "0.5em",
          // [theme.breakpoints.down("xs")]: {
          //   position: "absolute",
          //   top: 0,
          //   transform: "translateX(2%)",
          // },
        }}
      >
        {/* <h1 className={classes.h1}> */}
        <h1>
          <span
            style={{
              fontSize: "2em",
              marginRight: "0.2em",
              // [theme.breakpoints.down("xs")]: {
              //   margin: 0,
              // },
            }}
          >
            I am a
          </span>{" "}
          {/* <Typical
            className={classes.typical}
            loop={Infinity}
            wrapper="b"
            steps={[
              "developer...",
              1000,
              "designer...",
              1000,
              "gamer...",
              1000,
              "contriver...",
              1000,
              "formulator...",
              1000,
              "researcher...",
              1000,
              "creator.",
              3000,
            ]}
          /> */}
        </h1>
      </div>
      {/* <ViewMyWorkButton /> */}
    </>
  );
};

export default Home;
