// Select Elements
var elPakemonList = document.querySelector(".pakemon__list");
var elForm = document.querySelector('.pakemon__form');
var elInput1 = document.querySelector('.pakemon__input__img');
var elInput2 = document.querySelector('.pakemon__input__title');
var elInput3 = document.querySelector('.pakemon__input__type');
var elInput4 = document.querySelector('.pakemon__input__weight');
var elInput5 = document.querySelector('.pakemon__input__height');
var elFormButton = document.querySelector('.pakemon__button');

// Rendering Pakemons
function renderPakemons(pakemonsArrey) {
    // pakemonsList.innerHTML = null;
    elPakemonList.innerHTML=null;
    
    for (var i = 0; i < pakemonsArrey.length; i++) {
        // Create elements
        var pakemonLi = document.createElement("li");
        var pakemonInne = document.createElement('div')
        var pakemonImg = document.createElement("img");
        var pakemonHeading = document.createElement("h3");
        var pakemonUl = document.createElement("ul");
        var pakemonType = document.createElement("p");
        var pakemonSpan = document.createElement("span");
        var pakemonSpanAge = document.createElement("span");
        
        
        pakemonLi.setAttribute('class', 'pakemon__item col-3 mb-3');
        pakemonInne.setAttribute('class', 'pakemon__inner bg-light border border-3 border-dark')
        pakemonImg.setAttribute('src', pakemonsArrey[i].img);
        pakemonImg.setAttribute('alt', pakemonsArrey[i].name + ', image');
        pakemonImg.setAttribute('class', 'pakemon__image mx-auto d-block mb-3');
        pakemonImg.setAttribute('width', 155);
        pakemonImg.setAttribute('height', 155);
        pakemonHeading.setAttribute('class', 'pakemon__heading fw-bold text-dark');
        pakemonType.setAttribute("class", "pakemon__type ");
        pakemonUl.setAttribute('class', 'pakemon__feature');
        pakemonSpan.setAttribute('class', 'pakemon__weight mx-4 ms-0 fw-bold');
        pakemonSpanAge.setAttribute('class', 'pakemon__age ms-2 fw-bold');
        
        pakemonHeading.textContent = pakemonsArrey[i].name;
        pakemonType.textContent = pakemonsArrey[i].type;
        pakemonSpan.textContent = pakemonsArrey[i].weight;
        pakemonSpanAge.textContent = pakemonsArrey[i].height;
        
        // Appending
        pakemonLi.appendChild(pakemonInne)
        pakemonInne.appendChild(pakemonImg);
        pakemonInne.appendChild(pakemonHeading);
        pakemonInne.appendChild(pakemonType);
        pakemonInne.appendChild(pakemonUl);
        
        pakemonInne.appendChild(pakemonSpan);
        pakemonInne.appendChild(pakemonSpanAge);
        elPakemonList.appendChild(pakemonLi);
        
    }
}

renderPakemons(pokemons)



function adddNewPakemon(img, title, type, weight, height, array) {
    var newPakemonImg = img.value.trim();
    var newPakemonTitle = title.value.trim();
    var newPakemonType = type.value.trim();
    var newPakemonWeight = weight.value.trim();
    var newPakemonHeight = height.value.trim();
    
    var newPakemon = {
        img: newPakemonImg,
        name: newPakemonTitle,
        weaknesses: newPakemonType,
        weight: newPakemonWeight,
        height: newPakemonHeight,
        
    }
    array.unshift(newPakemon);
}

var renderNewPokemon = function (evt) {
    evt.preventDefault();
    
    adddNewPakemon(
        elInput1,
        elInput2,
        elInput3,
        elInput4,
        elInput5,
        pokemons
        );
        renderPakemons(pokemons)
    }
    
    elForm.addEventListener('submit', renderNewPokemon);
    renderPakemons(pokemons)
    