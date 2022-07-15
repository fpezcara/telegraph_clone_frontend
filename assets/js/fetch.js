const port = 3000;

const fetchPost = async (title) => {
    const response = await fetch(`http://localhost:${port}/posts/${title}`)
    const post = await response.json();
    return post;

}

const fetchToCreatePost = async (title, name, story, urlValue, picture) => {

    const formData = new FormData();

    formData.append('title', title);
    formData.append('name', name);
    formData.append('story', story);
    formData.append('url', urlValue);
    formData.append('picture', picture[0]);

    const options = {
        method: 'POST',
        body: formData,
    }
    const response = await fetch(`http://localhost:${port}/posts`, options);
}
