"use strict";
//Base URL of the HTTP status Garden API(API - 1)
const natureBaseURL = "https://http.garden/";
//Base URL of the HTTP status Dog API(API - 2)
const dogBaseURL = "https://http.dog/";
//Base URL of the HTTP status Cat API(API - 3)
const catBaseURL = "https://http.cat/";

//Adding cors-anywhere to avoid cross origin error from 3rd party api
const corsFix = "https://cors-anywhere.herokuapp.com/";

//Variables for HTML Elements
const catBtn = document.getElementById("catButton");
const dogBtn = document.getElementById("dogButton");
const natureBtn = document.getElementById("natureButton");
const searchInput = document.getElementById("HTTPCode");
const container = document.getElementById("myContainer");
const image = document.getElementById("memeImage");
const HTTPStatusCodes = [
  "100",
  "101",
  "102",
  "103",
  "200",
  "201",
  "202",
  "203",
  "204",
  "205",
  "206",
  "207",
  "208",
  "218",
  "226",
  "300",
  "301",
  "302",
  "303",
  "304",
  "305",
  "306",
  "307",
  "308",
  "400",
  "401",
  "402",
  "403",
  "404",
  "405",
  "406",
  "407",
  "408",
  "409",
  "410",
  "411",
  "412",
  "413",
  "414",
  "415",
  "416",
  "417",
  "418",
  "419",
  "420",
  "421",
  "422",
  "423",
  "424",
  "425",
  "426",
  "428",
  "429",
  "430",
  "431",
  "440",
  "444",
  "449",
  "450",
  "451",
  "460",
  "463",
  "464",
  "494",
  "495",
  "496",
  "497",
  "498",
  "499",
  "500",
  "501",
  "502",
  "503",
  "504",
  "505",
  "506",
  "507",
  "508",
  "509",
  "510",
  "511",
  "520",
  "521",
  "522",
  "523",
  "524",
  "525",
  "526",
  "527",
  "529",
  "530",
  "561",
  "598",
  "599",
  "999",
];
console.log(HTTPStatusCodes.length);

//Fetch function to get image from API
const commonFetch = async (url) => {
  const response = await fetch(url);
  const imageBlob = await response.blob();
  const reader = new FileReader();
  reader.readAsDataURL(imageBlob);
  reader.onloadend = () => {
    image.src = reader.result;
  };
};

//Search Input Validation
const verifySearchInput = (input) => {
  if (input === "") {
    alert("Please enter a HTTP Status code as an input value");
  } else if (!HTTPStatusCodes.includes(input)) {
    alert("Invalid HTTP Status code");
  }
};

//Fetch nature meme for HTTP Status code
const getNatureHTTPStatus = () => {
  try {
    verifySearchInput(searchInput.value);
    commonFetch(`${corsFix}${natureBaseURL}${searchInput.value}.jpg`);
  } catch (e) {
    console.error(e);
  }
};

//Fetch cat meme for HTTP Status code
const getCatHTTPStatus = () => {
  try {
    verifySearchInput(searchInput.value);
    commonFetch(`${corsFix}${catBaseURL}${searchInput.value}.jpg`);
  } catch (e) {
    console.error(e);
  }
};

//Fetch dog meme for HTTP Status code
const getDogHTTPStatus = () => {
  try {
    verifySearchInput(searchInput.value);
    commonFetch(`${corsFix}${dogBaseURL}${searchInput.value}.jpg`);
  } catch (e) {
    console.error(e);
  }
};

//Buttons Implementation
catBtn.addEventListener("click", getCatHTTPStatus);
dogBtn.addEventListener("click", getDogHTTPStatus);
natureBtn.addEventListener("click", getNatureHTTPStatus);
