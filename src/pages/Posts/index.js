import React from "react";
import { Container, Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import SinglePost from "../../components/SinglePost";

const Posts = () => {
  const posts = useFetch("http://telegraph-api.herokuapp.com/posts");
  console.log(posts);
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center m-4"
    >
      {posts.map((post, i) => (
        <Container className="py-2 w-50" key={i}>
          <Link
            to={`/posts/${post.title}`}
            className="text-decoration-none text-dark"
          >
            <SinglePost key={post.id} post={post} i={i} />
            <Row
              className="mt-2 d-flex align-items-end justify-content-end"
              // style={{ width: "60%" }}
            >
              {i !== posts.length - 1 && (
                <div
                  className="vr w-100 d-flex align-items-end justify-content-end justify-self-end align-self-end"
                  style={{ minHeight: "2px" }}
                ></div>
              )}
            </Row>
          </Link>
        </Container>
      ))}
    </Container>
  );
};

export default Posts;
