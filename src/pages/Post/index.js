import React from "react";
import { Container, Row, Grid, Image } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { format, parseISO } from "date-fns";
import { Link, useParams, useLocation } from "react-router-dom";

import SinglePost from "../../components/SinglePost";

const Post = () => {
  const title = useParams().id.replace(/ /g, "%20");
  const post = useFetch(`https://telegraph-api.herokuapp.com/posts/${title}`);
  console.log(title);
  console.log("PARAMS", useParams());
  console.log(post);
  return (
    <Container className="d-flex flex-lg-column justify-content-center mt-5">
      {post[0] && <SinglePost post={post[0]} />}
    </Container>
  );
};

export default Post;
