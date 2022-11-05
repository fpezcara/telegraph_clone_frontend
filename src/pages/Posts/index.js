import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SinglePost from "../../components/SinglePost";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase-config";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(query(postsCollectionRef, orderBy("date")));
    setPosts(data.docs.reverse().map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  });

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
            <Row className="mt-2 d-flex align-items-end justify-content-end">
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
