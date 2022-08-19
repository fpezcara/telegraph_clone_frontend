let form = document.querySelector("form");
let title = document.getElementById('title')
let titleP = document.getElementById('title-p')
let pseudonym = document.getElementById('pseudonym')
let pseudonymP = document.getElementById('pseudonym-p')
let message = document.getElementById('message')
let inputContainer = document.querySelectorAll("input-container")
let divider = document.querySelectorAll(".divider");
let fileInput = document.querySelector("#file");
let icons = document.querySelectorAll('.fa-solid');
let urlIcon = document.getElementById('url-icons');
let messageIContainer = document.getElementById("message-input-container");
let urlI = document.createElement("input");
let renderPicture = document.querySelector('#render-picture')


const inputs = [
    { inputTag: title, pTag: titleP, textContent: "Title" },
    { inputTag: pseudonym, pTag: pseudonymP, textContent: "Author" }
]


form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleValue = title.value;
    const pseudonymValue = pseudonym.value;
    const messageValue = message.value;
    const urlValue = urlI.value;
    const images = fileInput.files;
    console.log(urlValue)
    console.log(images)
    console.log("input", fileInput)
    createMessage(titleValue, pseudonymValue, messageValue, urlValue, images)
    window.location.href = `./post.html`
    const picture = fileInput.files;
    
    console.log(picture)
    createMessage(titleValue, pseudonymValue, messageValue, urlValue, picture)

    sessionStorage.setItem("title", titleValue);
})


const createMessage = async (title, name, story, urlValue = "", picture) => {
    try {
        const post = await fetchToCreatePost(title, name, story, urlValue, picture)
    } catch (err) {
        console.warn(err);
    }

    const fetch = await fetchPost(title)
    window.location.href = `./post.html`

}
const keydownChanges = (input, pTag, textContent) => {
    pTag.textContent = textContent
    divider.forEach(d => {
        d.classList.add("dividerOnfocus") //!NOT WORKIN!!
    })
    console.log(fileInput)

}

// create side p tags next to inputs when user starts typing
inputs && inputs.map(input => {
    const { inputTag, pTag, textContent } = input;
    inputTag && inputTag.addEventListener('keydown', () => {
        const { value } = inputTag;
        value && (value.trim().length >= 1 && value.trim() !== "") ? keydownChanges(input, pTag, textContent) : pTag.textContent = "";

    })
})


message && message.addEventListener('click', () => {
    for (const icon of icons) {
        icon.style.color = "darkslategray";
    }
})

message && message.addEventListener('blur', () => {
    for (const icon of icons) {
        icon.style.color = 'white';
    }
    message.style.display = "flex";
})


urlIcon && urlIcon.addEventListener('click', () => {
    const urlIconCss = `
    padding: 0;
    margin: 3px 0 0 0;
    font-size: 16px;
    width: 430px;
    `

    message.style.display = "none"
    urlI.setAttribute('type', 'url');
    urlI.setAttribute('placeholder', "Paste a YouTube, Vimeo or Twitter link and press Enter")
    urlI.style.cssText = urlIconCss
    messageIContainer.appendChild(urlI)


})


fileInput.addEventListener('change', (e) => {

    const img = document.createElement('img')
    img.className = 'pictureOnLoad'

    renderPicture.append(img)

    let reader = new FileReader();
    reader.onload = () => {
        img.src = reader.result;
    };

    reader.readAsDataURL(e.target.files[0]);

});
