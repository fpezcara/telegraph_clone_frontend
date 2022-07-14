const fetchPost = async (title) => {
    const response = await fetch(`http://localhost:3001/posts/${title}`)
    const post = await response.json();
    return post;

}

const fetchToCreatePost = async (title, name, story, url) => {
    const options = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, name, story, url })
    }
    const response = await fetch('http://localhost:3001/posts', options);
}
