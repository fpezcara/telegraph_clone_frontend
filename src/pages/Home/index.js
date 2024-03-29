import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import {
  BsChevronLeft,
  BsChevronRight,
  BsFillCameraFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase-config";

const Home = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const [picture, setPicture] = useState(null);
  const [url, setUrl] = useState("");
  const [seeUrlInput, setSeeUrlInput] = useState(false);
  const [showSideInput, setShowSideInput] = useState(false);

  const postsCollectionRef = collection(db, "posts");

  const handleStoryInput = (e) => {
    setStory(e.target.value);
    story !== "" ? setShowSideInput(false) : setShowSideInput(true);
  };

  const createPost = async () => {
    if (!title) return;
    try {
      const body = {
        title,
        name,
        story,
        url,
        picture: picture.name,
        date: new Date(),
      };
      const newPost = await addDoc(postsCollectionRef, body);

      const imageRef = ref(storage, `images/${picture.name + newPost.id}`);
      await uploadBytes(imageRef, picture);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    createPost();
  };

  return (
    <Container className="mt-4 d-flex justify-content-lg-center">
      <Row
        className="d-flex align-items-center justify-content-center pt-4"
        style={{ width: "85%" }}
      >
        <Form className="d-flex flex-lg-row flex-column flex-md-column flex-sm-column flex-xs-column align-items-lg-end justify-content-lg-end">
          <Col
            className="d-flex flex-column justify-content-lg-between align-items-lg-between"
            lg={10}
            md={12}
            xs={12}
          >
            <Row className="">
              <Form.Group className="d-flex align-items-center justify-content-between">
                <Col
                  className="d-lg-flex align-items-center justify-content-center d-md-none d-sm-none d-xs-none"
                  lg={2}
                >
                  <Form.Label
                    htmlFor="title"
                    className="d-flex fs-3 mt-1 text-secondary"
                    visuallyHidden={title !== "" ? false : true}
                  >
                    Title
                    <div className="vr mx-2"></div>
                  </Form.Label>
                </Col>
                <Col lg={10} md={12} sm={12} xs={12}>
                  <Form.Control
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    className="shadow-none border-0 fs-2"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    size="sm"
                    required
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row className="d-flex flex-md-row-reverse">
              <Form.Group className="d-flex align-items-center justify-content-center">
                <Col
                  lg={2}
                  className="d-lg-flex align-items-center justify-content-center d-md-none d-sm-none d-xs-none"
                >
                  <Form.Label
                    htmlFor="pseudonym"
                    className="d-flex fs-6 mt-1 mx-4 text-secondary"
                    visuallyHidden={name !== "" ? false : true}
                  >
                    Author
                    <div className="vr mx-2"></div>
                  </Form.Label>
                </Col>
                <Col lg={10} md={12} sm={12} xs={12}>
                  <Form.Control
                    type="text"
                    name="pseudonym"
                    id="pseudonym"
                    placeholder="Your name"
                    className="shadow-none border-0"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    rows={1}
                    sm="2"
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row className="">
              <Form.Group className="d-flex flex-row-reverse flex-lg-row flex-md-row-reverse flex-sm-row-reverse flex-xs-row-reverse  align-items-between justify-content-between align-items-xs-center justify-content-xs-center">
                <Col
                  lg={2}
                  md={2}
                  className="d-flex align-items-lg-center mt-1"
                >
                  <Form.Label
                    htmlFor="url"
                    className="d-flex cursor-pointer mt-1 mx-2"
                    onClick={() => setSeeUrlInput(true)}
                    visuallyHidden={showSideInput ? false : true}
                  >
                    <BsChevronLeft size="17" />
                    <BsChevronRight size="17" />
                  </Form.Label>
                  <Form.Label
                    htmlFor="file"
                    className="cursor-pointer"
                    visuallyHidden={showSideInput ? false : true}
                  >
                    <BsFillCameraFill size="22" />
                  </Form.Label>
                </Col>

                <Col lg={10} md={10} sm={10} xs={10} className="">
                  <Form.Control
                    type="file"
                    name="image"
                    className="d-none"
                    id="file"
                    onChange={(e) => setPicture(e.target.files[0])}
                  />
                  {seeUrlInput ? (
                    <Form.Control
                      type="url"
                      name="url"
                      id="url"
                      onChange={(e) => setUrl(e.target.value)}
                      value={url}
                      placeholder="Paste a Youtube, Vimeo or Twitter link, and press Enter"
                      className="border-0 shadow-none"
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Your story..."
                      className="border-0 shadow-none fs-5"
                      onChange={handleStoryInput}
                      value={story}
                      onClick={() =>
                        story === ""
                          ? setShowSideInput(true)
                          : setShowSideInput(false)
                      }
                    />
                  )}
                </Col>
              </Form.Group>
            </Row>
          </Col>
          <Col
            className="d-flex justify-content-lg-end align-self-start align-items-end mt-1"
            lg={2}
            md={12}
            xs={12}
          >
            <Button
              className="border border-dark border-2 border-radius-3 text-uppercase rounded-pill fw-bold mt-lg-0 mt-md-4"
              id="form-button"
              variant="outline-dark"
              onClick={handleClick}
              type="submit"
            >
              <Link id="post-new" to="/posts">
                Publish
              </Link>
            </Button>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default Home;
