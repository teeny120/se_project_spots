const initialCards = [ 
    {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
    },   
    { 
    name: "Val Thorens", 
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg", 
    }, 
    { 
    name: "Restaurant terrace", 
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg", 
    },
    { 
    name: "An outdoor cafe", 
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg", 
    },
    { 
    name: "A very long bridge, over the forest and through the trees", 
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg", 
    },
    { 
    name: "Tunnel with morning light", 
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg", 
    },
    { 
    name: "Mountain house", 
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg", 
    },
];

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector (".new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = document.querySelector (".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    editProfileModal.classList.add("modal__is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
    editProfileModal.classList.remove("modal__is-opened");
});

newPostBtn.addEventListener("click", function () {
    newPostModal.classList.add("modal__is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
    newPostModal.classList.remove("modal__is-opened");
});

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");


function getCardElement(data) {
    const cardElement = cardTemplate.content.querySelector(".card").cloneNode(true);
    const cardTitleEl = cardElement.querySelector(".card__title");
    const cardImage = cardElement.querySelector(".card__image");

    cardTitleEl.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitleEl.textContent = data.name;

    const cardLikeBtnEl = cardElement.querySelector(".card__like-btn");
    cardLikeBtnEl.addEventListener("click", () => {
        cardLikeBtnEl.classList.toggle("card__like-button_active")
    });

    const cardDeleteBtnEl = cardElement.querySelector(".card__delete-button");
    cardDeleteBtnEl.addEventListener("click", () => {
          cardElement.remove();
    }) 
    return cardElement;    
}


// function openModal(){
//     editModalNameInput.value = profileName.textContent;
//     editModalDescriptionInput.value = profileDescription.textContent;
//     editModal.classList.add ("modal_opened");
// }

// function closeModal(){
//     editModal.classList.remove ("modal_opened");
// }

// function handleEditFormSubmit (evt) {
//     evt.preventDefault();
//     profileName.textContent = editModalNameInput.value;
//     profileDescription.textContent = editModalDescriptionInput.value;
//     closeModal();

// }

// profileEditButton.addEventListener("click", openModal);

// editModalCloseBtn.addEventListener("click", closeModal);

// editFormElement.addEventListener("submit", handleEditFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
    const cardElement = getCardElement(initialCards[i]);
    cardsList.prepend(cardElement);
}

//  const captionInputEl = document.querySelector('caption-input');

//  const inputValues = {
//      name: captionInputEl.value,
//      link: linkInputEl.value,
//  };

//  const cardElement = getCardElement(inputValues);
//  cardsList.prepend(cardElement); 

 
initialCards.forEach(function (item) {
    const cardElement = getCardElement(item);
    cardsList.append(cardElement);
} );