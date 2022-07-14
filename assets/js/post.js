const main = document.querySelector("main")

window.addEventListener('click', (e) => {
    console.log() //this will give me the url i'm currently at
})



const showPost = async () => {
    const title = sessionStorage.getItem("title");
    console.log(title)
    const post = await fetchPost(title)
    console.log(post)
    const { title: postTitle, name, story } = post[0];

    const h1 = document.createElement("h1");
    const address = document.createElement("address");
    const p = document.createElement("p");

    h1.textContent = postTitle;
    address.textContent = name;
    p.textContent = story;
    main && main.append(h1, address, p)

}



// window.onload = (e) => {
//     // e.target.baseURI.includes("post") && showPost("FirstExample")
//     //     const fetch = await fetchPost(title)
//     //    showPost()
//     console.log(e.target)
// }
window.onload = (e) => {
    showPost()

}
// module.exports = { getPost }
