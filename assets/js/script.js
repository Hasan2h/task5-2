let l = document.querySelectorAll('ul.nav-menu li a')
        l.forEach((ele) => {
            ele.onclick = () => {
                l.forEach((ele) => {
                    ele.classList.remove('active');
                })
                ele.classList.add('active');
            }
        });

// ****************************************************************

const dropdown = document.querySelector(".drop-down");
const list = document.querySelector(".list");
const selected = document.querySelector(".selected");
const selectedImg = document.querySelector(".selected-img");

dropdown.addEventListener('click', () => {
    list.classList.toggle('show');
})

list.addEventListener('click', (e) => {
    const text = e.target.querySelector('.text');
    selected.innerHTML = text.innerHTML;
    const img = e.target.querySelector('img');
    selectedImg.src = img.src;
})

// *******************************************************

const result = fetch("https://restcountries.com/v3.1/all") 
  .then(function (result) {
    return result.json();
  }) 
  .then(function (result) {
    displayData(result);
  }); 

function displayData(arr) {
    arr.forEach(function (item) {
      // list Known in advance
  
      const div1 = document.createElement("div");
      div1.classList = "item d-flex justify-content-around align-items-center";
  
      const div2 = document.createElement("div");
      div2.innerText = item.cca2;
      div2.classList = "text";
  
      const img = document.createElement("img");
      img.src = item.flags.svg;
      img.classList = "flag-image";
  
      div1.append(div2);
      div1.append(img);
  
      list.append(div1);
    })
  }

// *********************************************************************


const pop = document.querySelectorAll('.popup');
const bg = document.querySelectorAll('.container-popup');

let close = document.querySelectorAll('.div-close')
close.forEach((ele,index) => {
    ele.onclick = () => {
        pop[index].classList.remove('active');
        bg[index].classList.remove('active');
    }
})

let point = document.querySelectorAll('.point')
point.forEach((e,index) => {
    e.onclick = () => {
        pop[index].classList.add('active');
        bg[index].classList.add('active');
    }
})

// ********************************************************



// const result2 = fetch("https://dummyjson.com/products?limit=6") // fetch the data from the api
//   .then(function (result2) {
//     return result2.json();
//   }).then(function (result2) {
//     displayData2(result2.products);
//   });

// function displayData2(arr2) {
//   arr2.forEach(function (item1) {

//     const parent = document.querySelector(".slideshow-container");

//     const div5 = document.createElement("div");
//     div5.classList = "product";

//     const pic = document.createElement("picture");
//     pic.classList = "img-card";


//     const img2 = document.createElement("img");
//     img2.src = item1.images[0];
//     img2.classList = "";

//     const div555 = document.createElement("div");
//     div555.classList = "body-card";
  

//     const h5 = document.createElement("h5");
//     h5.classList = "text-center fw-bold";
//     h5.innerText = item1.title;

//     const div6 = document.createElement("div");
//     div6.classList = "text-center";

//     const i1 = document.createElement("i");
//     i1.classList = "fa-solid fa-star text-black-50";

//     const i2 = document.createElement("i");
//     i2.classList = "fa-solid fa-star text-black-50";

//     const i3 = document.createElement("i");
//     i3.classList = "fa-solid fa-star text-black-50";

//     const i4 = document.createElement("i");
//     i4.classList = "fa-solid fa-star text-black-50";

//     const i5 = document.createElement("i");
//     i5.classList = "fa-solid fa-star text-black-50";


//     const p1 = document.createElement("p");
//     p1.classList = "price-mob text-center";
//     p1.innerText = item1.price;

//     div6.append(i1);
//     div6.append(i2);
//     div6.append(i3);
//     div6.append(i4);
//     div6.append(i5);

//     pic.append(img2);
 
//     div555.append(h5);
//     div555.append(div6);
//     div555.append(p1);
//     div5.append(pic);
//     div5.append(div555);
//     parent.append(div5);
//   });
// }






let allSlides = document.querySelectorAll('.product');

let show1 = 0;
let show2 = 1;
let show3 = 2;
let show4 = 3;

for (i = 0; i < allSlides.length; i++){
  allSlides[i].style.display = 'none' ;
}

allSlides[0].style.display = "flex" ;
allSlides[1].style.display = "flex" ;
allSlides[2].style.display = "flex" ;
allSlides[3].style.display = "flex" ;

function rightSide(n) {
  if(show4 < allSlides.length - 1){
    for(i = 0; i < allSlides.length; i++){
      allSlides[i].style.display = 'none' ;
    }

    allSlides[show1 += n].style.display = "flex" ;
    allSlides[show2 += n].style.display = "flex" ;
    allSlides[show3 += n].style.display = "flex" ;
    allSlides[show4 += n].style.display = "flex" ;
  }
}

function leftSide(n) {
  if(show1 > 0){
    for(i = 0; i < allSlides.length; i++){
      allSlides[i].style.display = 'none' ;
    }

    allSlides[show1 -= n].style.display = "flex" ;
    allSlides[show2 -= n].style.display = "flex" ;
    allSlides[show3 -= n].style.display = "flex" ;
    allSlides[show4 -= n].style.display = "flex" ;
  }
}




// *****************************************************

        let acc = document.querySelectorAll('.accordion-item')
        acc.forEach((ele) => {
            ele.onclick = () => {
                acc.forEach((ele) => {
                    ele.classList.remove('active');
                })
                ele.classList.add('active');
            }
        });