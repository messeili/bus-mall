'use-strict'
//all objects array
var allProducts = [];

//constructor
function Product(name, path) {
    this.name = name.toUpperCase();
    this.path = path;
    this.noOfClicks = 0;
    this.noOfRounds = 25;
    this.noOfShown = 0;
    this.instantView = ' ';

    allProducts.push(this);
}
var totalClicks = 0;
var allProducts = [];
var firstImageIndex;
var secImageIndex;
var thirdImageIndex;
var imageSection = document.getElementById('imgsec');
var firstImage = document.getElementById('first-img');
var secImage = document.getElementById('sec-img');
var thirdImage = document.getElementById('third-img');
console.log(imageSection);

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');


function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * allProducts.length);
    return randomNumber;
}


function generateProductImage() {
    firstImageIndex = generateRandomNumber();
    secImageIndex = generateRandomNumber();
    thirdImageIndex = generateRandomNumber();

    while (firstImageIndex === secImageIndex || firstImageIndex === thirdImageIndex
        || secImageIndex === thirdImageIndex) {
        firstImageIndex = generateRandomNumber();
        secImageIndex = generateRandomNumber();
        thirdImageIndex = generateRandomNumber();
    }
    var firstPath = allProducts[firstImageIndex].path;
    var secPath = allProducts[secImageIndex].path;
    var thirdPath = allProducts[thirdImageIndex].path;

    firstImage.setAttribute('src', firstPath);
    secImage.setAttribute('src', secPath);
    thirdImage.setAttribute('src', thirdPath);

    allProducts[firstImageIndex].noOfShown += 1;
    allProducts[secImageIndex].noOfShown += 1;
    allProducts[thirdImageIndex].noOfShown += 1;
}

imageSection.addEventListener('click', ClickHandler);

function generateFinalResult() {
    var ulList = document.getElementById('finalResults');
    for (let index = 0; index < allProducts.length; index++) {
        var lilist = document.createElement('li');
        lilist.textContent = allProducts[index].name + ' shown ' + allProducts[index].noOfShown + " and clicked " + allProducts[index].noOfClicks;
        ulList.appendChild(lilist);
    }

}

function ClickHandler() {
    if (totalClicks < 25) {
        var clickedElement = event.target;
        var clickedElementId = clickedElement.id;
        totalClicks += 1;
        if (clickedElementId === 'first-img') {
            allProducts[firstImageIndex].noOfClicks += 1;
        }
        if (clickedElementId === 'sec-img') {
            allProducts[secImageIndex].noOfClicks += 1;
        }
        if (clickedElementId ==='third-img') {
            allProducts[thirdImageIndex].noOfClicks +=1; 
        }

        generateProductImage()



    }else{
        generateFinalResult();
        imageSection.removeEventListener('click',ClickHandler);

    }

}

generateProductImage()
console.log(allProducts);