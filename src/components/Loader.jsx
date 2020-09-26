import React from "react";
import { Preloader, Col } from "react-materialize";

function Loader(props) {
  const { color, size, message } = props;
  return (
    <>
      <Col className={"center"} s={6} offset={"s3"}>
        <Preloader
          active
          color={color ? color : "blue"}
          flashing={false}
          size={size ? size : "small"}
        />
        {message ? <p className={"center-align"}>{message}</p> : null}
      </Col>
    </>
  );
}

export default Loader;
