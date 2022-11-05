import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import SinglePost from "../../components/SinglePost";
import { query, where, collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../firebase-config";

const Post = () => {
  const [post, setPost] = useState([]);
  const title = useParams().id.replace(/ /g, "%20");
  const postsCollectionRef = collection(db, "posts");

  const q = query(postsCollectionRef, where("title", "==", title));

  const getPost = async () => {
    const posts = await getDocs(q);
    posts.forEach((doc) => {
      setPost({ ...doc.data(), id: doc.id });
    });
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <Container className="d-flex flex-lg-column justify-content-center mt-5">
      {post && <SinglePost post={post} />}
    </Container>
  );
};

export default Post;
