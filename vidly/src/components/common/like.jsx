import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    classes += this.props.liked !== true ? "" : "-o";
    return (
      <i
        className={classes}
        onClick={this.props.onLiked}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
