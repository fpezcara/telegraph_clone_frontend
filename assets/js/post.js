const main = document.querySelector("main")

window.addEventListener('click', (e) => {
    console.log(e.target.baseURI) //this will give me the url i'm currently at
})

const getPost = async (title = "FirstExample") => {
    // e.preventDefault()
    console.log(title)
   
    const response = await fetch(`http://localhost:3001/posts/${title}`)
    const post = await response.json();
    const { title: postTitle, name, story } = post[0];
    // console.log(story)

    const h1 = document.createElement("h1");
    const address = document.createElement("address");
    const p = document.createElement("p");

    h1.textContent = postTitle;
    address.textContent = name;
    p.textContent = story;
    main.append(h1, address, p)
    // console.log(title)

}
getPost()
// module.exports = { getPost }
