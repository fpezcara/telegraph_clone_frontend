let form = document.querySelector("form");
let title = document.getElementById('title')
let titleP = document.getElementById('title-p')
let pseudonym = document.getElementById('pseudonym')
let pseudonymP = document.getElementById('pseudonym-p')
let message = document.getElementById('message')
let inputContainer = document.querySelectorAll("input-container")
let divider = document.querySelectorAll(".divider");
let fileInput = document.querySelector("#file")
let urlInput = document.querySelector('#url')
let icons = document.querySelectorAll('.fa-solid')
let urlIcon = document.getElementById('url-icons')
let messageIContainer = document.getElementById("message-input-container")

const inputs = [
    { inputTag: title, pTag: titleP, textContent: "Title" },
    { inputTag: pseudonym, pTag: pseudonymP, textContent: "Author" }
]


form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleValue = title.value;
    const pseudonymValue = pseudonym.value;
    const messageValue = message.value;
    const urlValue = urlInput.value;
    const images = fileInput.files;
    // e.preventDefault();
    console.log(images)
    createMessage(titleValue, pseudonymValue, messageValue, urlValue, images)
    window.location.href = `./post.html`
    sessionStorage.setItem("title", titleValue);
})


const createMessage = async (title, name, story, url = "", images) => {
    try {
        // const { id, err } = await response.json();
        const post = await fetchToCreatePost(title, name, story, url, images)

    } catch (err) {
        console.warn(err);
    }
    const fetch = await fetchPost(title)
    // console.log("RESPONSE in script.js ", fetch)

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



message.onclick = () => {
    for (const icon of icons) {
        icon.style.color = 'rgba(0, 0, 0, .44)';
    }
}
message.onblur = () => {
    for (const icon of icons) {
        icon.style.color = 'white';
    }
    message.style.display = "flex";
}




urlIcon.onclick = () => {
    const urlIconCss = `
    color: blue;
    padding: 0;
    margin: 3px 0 0 0;
    font-size: 16px;
    width: 430px;

    `

    message.style.display = "none"
    const urlI = document.createElement("input");
    urlI.setAttribute('type', 'url');
    urlI.setAttribute('placeholder', "Paste a YouTube, Vimeo or Twitter link and press Enter")
    urlI.style.cssText = urlIconCss
    messageIContainer.appendChild(urlI)
}

// urlIcon.addEventListener('click', () => { console.log("hola") })

