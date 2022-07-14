let form = document.querySelector("form");
let title = document.getElementById('title')
let titleP = document.getElementById('title-p')
let pseudonym = document.getElementById('pseudonym')
let pseudonymP = document.getElementById('pseudonym-p')
let message = document.getElementById('message')
let messageP = document.getElementById('message-p')
let inputContainer = document.querySelectorAll("input-container")
let divider = document.querySelectorAll(".divider");

const inputs = [
    { inputTag: title, pTag: titleP, textContent: "Title" },
    { inputTag: pseudonym, pTag: pseudonymP, textContent: "Author" }
]


form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleValue = title.value;
    const pseudonymValue = pseudonym.value;
    const messageValue = message.value;

    createMessage(titleValue, pseudonymValue, messageValue)
    window.location.href = `./post.html`
    sessionStorage.setItem("title", titleValue);
    // fetch("http://localhost:3001/posts").then(res => res.json()).then(h => console.log(h))
})


const createMessage = async (title, name, story, url = "") => {
    // e.preventDefault();
    try {
        // const { id, err } = await response.json();
        const post = await fetchToCreatePost(title, name, story, url)
        


    } catch (err) {
        console.warn(err);
    }
    const fetch = await fetchPost(title)
    console.log("RESPONSE in script.js ", fetch)

}
const keydownChanges = (input, pTag, textContent) => {
    pTag.textContent = textContent
    divider.forEach(d => {
        d.classList.add("dividerOnfocus") //!NOT WORKIN!!
    })
}

// create side p tags next to inputs when user starts typing
inputs && inputs.map(input => {
    const { inputTag, pTag, textContent } = input;
    inputTag && inputTag.addEventListener('keydown', () => {
        const { value } = inputTag;
        value && (value.trim().length >= 1 && value.trim() !== "") ? keydownChanges(input, pTag, textContent) : pTag.textContent = "";

    })
})

message && message.addEventListener('keydown', (e) => {
    // let urlInput = document.createElement("p");
    // messageP.appendChild(urlInput)
})


