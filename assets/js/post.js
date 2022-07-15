const main = document.querySelector("main")


const showPost = async () => {
    const title = sessionStorage.getItem("title");
    const post = await fetchPost(title)
    const { title: postTitle, name, story, date } = post[0];
    const h1 = document.createElement("h1");
    const address = document.createElement("address");
    const p = document.createElement("p");

    h1.textContent = postTitle;
    address.textContent = `${name} · ${date}`;
    p.textContent = story;
    main && main.append(h1, address, p);

}

window.onload = (e) => {
    showPost()

}

