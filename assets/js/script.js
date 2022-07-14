let form = document.querySelector("form");
let title = document.getElementById('title')
let titleP = document.getElementById('title-p')
let pseudonym = document.getElementById('pseudonym')
let pseudonymP = document.getElementById('pseudonym-p')
let message = document.getElementById('message')
let messageP = document.getElementById('message-p')
let inputContainer = document.querySelectorAll("input-container")
let divider = document.querySelectorAll(".divider")

const { getPost } = require('./post.js')

const inputs = [
    { inputTag: title, pTag: titleP, textContent: "Title" },
    { inputTag: pseudonym, pTag: pseudonymP, textContent: "Author" }
]

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleValue = title.value;
    const pseudonymValue = pseudonym.value;
    const messageValue = message.value;

    createMessage(titleValue, pseudonymValue, messageValue)
    // fetch("http://localhost:3001/posts").then(res => res.json()).then(h => console.log(h))
})


async function createMessage(title, name, story, url = "") {
    // e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, name, story, url })
        }
        const response = await fetch('http://localhost:3001/posts', options);
        // const { id, err } = await response.json();
        console.log(response)
        window.location.href = "./post.html"
        getPost && getPost(title)


    } catch (err) {
        console.warn(err);
    }
}
const keydownChanges = (input, pTag, textContent) => {
    pTag.textContent = textContent

    // input && input.style.color = "green";
    divider.forEach(d => {
        d.classList.add("dividerOnfocus") //!ESTO NO ANDAAA!!!
    })
    // alertBanner.setAttribute("style", "color: red; font-weight: bold"

}

// create side p tags next to inputs when user starts typing
inputs.map(input => {
    const { inputTag, pTag, textContent } = input;
    inputTag.addEventListener('keydown', () => {
        const { value } = inputTag;
        value && (value.trim().length >= 1 && value.trim() !== "") ? keydownChanges(input, pTag, textContent) : pTag.textContent = "";

    })
})

message.addEventListener('keydown', (e) => {
    // let urlInput = document.createElement("p");
    // messageP.appendChild(urlInput)
})
