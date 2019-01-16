import React, { Component } from "react";
import "./app.css";

const IMG_WIDTH = 700;
const IMG_HEIGHT = 400;

const imgBaseUrl = "https://source.unsplash.com/1600x900/?";

class App extends Component {
  state = {
    imgs: [
      imgBaseUrl + "beach",
      imgBaseUrl + "beaches",
      imgBaseUrl + "forest",
      imgBaseUrl + "bridge",
      imgBaseUrl + "lombok"
    ],
    currentIndex: 0,
    movement: 0
  };

  handleWheel = e => {
    this.handleMovement(e.deltaX);
  };

  handleMovement = delta => {
    this.setState(state => {
      const maxLength = state.imgs.length - 1;
      let nextMovement = state.movement + delta;

      if (nextMovement < 0) {
        nextMovement = 0;
      }

      if (nextMovement > maxLength * IMG_WIDTH) {
        nextMovement = maxLength * IMG_WIDTH;
      }

      return {
        movement: nextMovement
      };
    });
  };

  render() {
    const { imgs } = this.state;
    const { movement } = this.state;
    // console.log(imgs);
    return (
      <div className="App">
        <div
          className="main"
          style={{
            width: `${IMG_WIDTH}px`,
            height: `${IMG_HEIGHT}px`
          }}
          onWheel={this.handleWheel}>
          <div
            className="swiper"
            style={{
              transform: `translateX(${movement * -1}px)`
            }}>
            {imgs.map(src => {
              return (
                <img
                  key={src}
                  src={src}
                  alt="this is me"
                  width="50%"
                  height="100%"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
