import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  console.log("HEEEY", post);
  return (
    <Container className="" style={{ width: "70%" }}>
      <Row>
        <p className="fs-2">{post.title}</p>
      </Row>
      <Row className="d-flex flex-row align-items-center text-secon dary w-50">
        <Col className="d-flex w-auto" lg={3}>
          <p className="fst-italic">{post.name}</p>
        </Col>
        <Col className="d-flex px-1" lg={1}>
          <p className="fw-bold fs-3 text-end">·</p>
        </Col>
        <Col
          lg={2}
          className="d-flex align-items-center justify-content-between"
        >
          <p className="fs-6">
            {/* {format(parseISO(post.date), "MM/dd/yyyy")} */}
            {/* /!/when date is fixed we can use function above */}
            {format(new Date(), "dd/MM/yyyy")}
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
