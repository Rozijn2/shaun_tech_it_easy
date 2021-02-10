// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Hoeveel televisies moeten we in totaal nog verkopen?

// nog te verkopen: originalStock - sold

// MAYBE filter?

// NOPE find?

// NOPE sort?



// STRAT 1

// map? -> voor de hele array

// bereken per televisie type: hoevel nog te verkopen, met map

// [{​​}​​, {​​}​​, {​​}​​] -> [21, 0, 7]

// Alle getallen optellen in de array

// for loop



// STRAT 2

// for loop?

// loopen over alle televisies

// tellen (variabele count aanmaken)

// nog te verkopen: originalStock - sold

// optellen bij het totaal



// - [ ] functie maken

// - [ ] aanroepen

// - [ ] parameter toevoegen (inventory)

// - [ ] inventory ingeven als argument

// - [ ] count variabele (buiten de loop)

// - [ ] loop maken (voor elke televisie)

// - [ ] originalStock - sold optellen bij count

// - [ ] Totaal return uit de functie

//Opdracht 1a
const toSellPerType = inventory.map((television) => {
  const toSellOfThisType = television.originalStock - television.sold;
  return toSellOfThisType;
} );
const totalTvs = toSellPerType.reduce(function( a,b) {
  return a + b;
}, 0);

//Opdracht 1b
const showNumberTele = document.getElementById("header_3")
showNumberTele.textContent = totalTvs;

showNumberTele.setAttribute("id", "new_header");

//Opdracht 2a
const teleType = inventory.map(product => product.name);

//Opdracht 2b
const soldOut = inventory.filter((inventory) => {
  return(inventory.originalStock === inventory.sold)
});

//Opdracht 2c
const doesItHave = inventory.filter((inventory) => {
  return(inventory.options["ambiLight"] === true)
});

//Opdracht 2d
const lowToHigh = inventory.sort((teleA, teleB) => {
  return teleA.price - teleB.price;
});

//Opdracht 3a
const makinMoney = inventory.map((television) => {
  const toSellOfThisType = television.originalStock * television.price;
  return toSellOfThisType;
} );
const totalProfit = makinMoney.reduce(function( a,b) {
  return a + b;
}, 0);

const showValueOfStock = document.getElementById("total_2");
showValueOfStock.textContent = "\u20AC" + totalProfit;

showValueOfStock.setAttribute("id", "header_2");

//Opdracht 3b
const moreMoney = inventory.map((television) => {
  const toSellOfThisType = television.price * television.sold;
  return toSellOfThisType;
} );
const profitTillNow = moreMoney.reduce(function( a,b) {
  return a + b;
}, 0);

const showProfit = document.getElementById("total_3");
showProfit.textContent = "\u20AC" + profitTillNow;

showProfit.setAttribute("id", "header_1");

//Opdracht 4
//const addedList = document.createElement("li");
//addedList.setAttribute("class", "tv_list");
//const typeTv = inventory[0].type;
//addedList.textContent = typeTv;
//const myList = document.getElementById("list_of_tvs");
//myList.appendChild(addedList);

//const newList = document.createElement("li");
//newList.setAttribute("class", "tv_list");
//const modelTv = inventory[1].type;
//newList.textContent = modelTv;
//const firstList = document.getElementById("list_of_tvs");
//firstList.appendChild(newList);

//Opdracht 5a en 5b
function showAllTvs(television) {
  const addedList = document.createElement("li");
  addedList.setAttribute("class", "tv_list");
  const typeTv = `${television.brand} ${television.type} - ${television.name} \u20AC${television.price}`;
  addedList.textContent = typeTv;
  const myList = document.getElementById("list_of_tvs");
  myList.appendChild(addedList);
}
 for (let index=0; index<inventory.length; index++) {
   const television = inventory[index];
   showAllTvs(television);
 }

//Wegens gebrek aan tijd kwam ik niet verder.


