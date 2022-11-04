import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { format, parseISO } from "date-fns";

const SinglePost = ({ post }) => {
  // console.log("jiji", format(post.date.toDate()));
  const date =
    post.date &&
    post.date
      .toDate()
      .toLocaleString("en-GB", { timeZone: "UTC" })
      .split(",")[0];

  return (
    <Container className="" style={{ minWidth: "60%" }}>
      <Row>
        <p className="fs-2">{post.title}</p>
      </Row>
      <Row className="d-flex flex-row flex-md-row flex-sm-row flex-xs-row align-items-center text-secondary w-lg-50">
        <Col
          className="d-flex w-auto justify-content-center align-items-center"
          lg={3}
          md={2}
          sm={1}
          xs={3}
        >
          <p className="fst-italic">{post.name}</p>
        </Col>
        <Col
          className="d-flex px-1 justify-content-center align-items-center"
          lg={1}
          md={1}
          sm={1}
          xs={3}
        >
          <p className="fw-bold fs-3 text-end">·</p>
        </Col>
        <Col
          lg={2}
          md={3}
          sm={3}
          xs={3}
          className="d-flex justify-content-center align-items-center"
        >
          <p className="fs-6">
            {post.date &&
              post.date
                .toDate()
                .toLocaleString("en-GB", { timeZone: "UTC" })
                .split(",")[0]}
          </p>
        </Col>
      </Row>
      {post.story && (
        <Row>
          <p className="fw-italic fs-5">{post.story}</p>
        </Row>
      )}
      {(post.picture || post.file) && (
        <Row>
          <Image src={post?.picture || post.file} className="fw-italic fs-6" />
        </Row>
      )}
      {post.url && (
        <Row>
          <p src={post?.picture || post.file} className="fw-italic fs-6">
            {post.url}
          </p>
        </Row>
      )}
    </Container>
  );
};

export default SinglePost;
