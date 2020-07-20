'use-strict'
//all objects array
var allProducts = [];
var productsName = [];
var noOfClicksArray = [];
var noOfShownArray = []; 
var clicksColor = [];
var shownColor = [];
var noOfRounds = 25;

//constructor
function Product(name, path) {
    this.name = name.toUpperCase();
    this.path = path;
    this.noOfClicks = 0;
    this.noOfShown = 0;
    this.instantView = ' ';
    this.clicksColor = "red";
    this.shownColor = "blue";

    allProducts.push(this);
    productsName.push(this.name);
    clicksColor.push(this.clicksColor);
    shownColor.push(this.shownColor);
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

console.log(noOfClicksArray);

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
    if (totalClicks < 5) {
        var clickedElement = event.target;
        var clickedElementId = clickedElement.id;
        totalClicks += 1;
        if (clickedElementId === 'first-img') {
            allProducts[firstImageIndex].noOfClicks += 1;
        }
        if (clickedElementId === 'sec-img') {
            allProducts[secImageIndex].noOfClicks += 1;
        }
        if (clickedElementId === 'third-img') {
            allProducts[thirdImageIndex].noOfClicks += 1;
        }

        generateProductImage()



    } else {
        createOnClickArray();
        createShownArray()
        generateFinalResult();
        generateChart();
        console.table(noOfClicksArray);
        imageSection.removeEventListener('click', ClickHandler);


    }

}

generateProductImage()

function generateChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productsName,
            datasets: [{
                label: 'No of Clicks',
                data: noOfClicksArray,
                backgroundColor: clicksColor,
                borderColor: shownColor,
                borderWidth: 1
            },
            {
                label: 'No of Shown',
                data: noOfShownArray,
                backgroundColor: shownColor,
                    
                borderColor: clicksColor,
                borderWidth: 1
            }]

        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
function createOnClickArray() {
    for (let index = 0; index < allProducts.length; index++) {
        noOfClicksArray.push(allProducts[index].noOfClicks);

    }
}

function createShownArray() {
    for (let index = 0; index < allProducts.length; index++) {
        noOfShownArray.push(allProducts[index].noOfShown);

    }
}

