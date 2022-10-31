const cardText = document.getElementsByClassName('card-text')[0];

const createWord = (text, index) => {
    const word = document.createElement("span");
    word.innerHTML = `${text} `;
    word.classList.add("card-text-word");

    return word;
}

const addWord = (text, index) => 
    cardText.appendChild(createWord(text,index));

const createSentence = text =>
    text.split(" ").map(addWord);

createSentence("And in the darkness bind them.");