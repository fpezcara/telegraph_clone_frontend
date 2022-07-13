const form = document.querySelector("form");
const title = document.querySelector('#title')
const titleP = document.querySelector('#title-p')
const pseudonym = document.querySelector('#pseudonym')
const pseudonymP = document.querySelector('#pseudonym-p')
const message = document.querySelector('#message')
const messageP = document.querySelector('#message-p')


const inputs = [
    { inputTag: title, pTag: titleP, textContent: "Title" },
    { inputTag: pseudonym, pTag: pseudonymP, textContent: "Author" }
]

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("is it working?")

})

const keydownChanges = () => {

}

// create side p tags next to inputs when user starts typing
inputs.map(input => {
    const { inputTag, pTag, textContent } = input;
    inputTag.addEventListener('keydown', ({ target }) => {
        const { value } = target;
        console.log(inputTag)
        value && (value.length !== 0 )? pTag.textContent = textContent : pTag.textContent = "";

    })
})

message.addEventListener('keydown', (e) => {
    let urlInput = document.createElement("li");
    messageP.appendChild(urlInput)
})
