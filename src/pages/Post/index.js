import React from "react";
import { Container } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

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
