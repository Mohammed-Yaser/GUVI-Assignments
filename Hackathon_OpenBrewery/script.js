"use strict";
//Base URL of the openbrewerydb API
const baseURL = "https://api.openbrewerydb.org/breweries";

//Variables to access DOM elements
const myContainer = document.getElementById("myContainer");
const searchKey = document.getElementById("searchKey");
const searchButton = document.getElementById("searchButton");
const getAll = document.getElementById("getAll");
const noResult = document.createElement("h1");
noResult.id = "nrMsg";

//Common fetch function to implement async/await
const commonFetch = async (url, payload) => {
  let response = await fetch(url, payload);
  return await response.json();
};

//Function to get first 50 records from the api
const getAllRecords = () => {
  searchKey.value = ""; //To clear the search box
  createTable();
  try {
    commonFetch(`${baseURL}?per_page=50`, { method: "GET" }).then((data) => {
      populateResults(data);
    });
  } catch (e) {
    console.error(e);
  }
};

//Function to fetch records based on search input
const getSearchRecords = () => {
  if (searchKey.value === "") {
    alert("Please enter a search input value"); //Alert message incase of empty input
  } else {
    createTable();
    try {
      commonFetch(`${baseURL}/search?query=${searchKey.value}`, {
        method: "GET",
      }).then((data) => {
        populateResults(data);
      });
    } catch (e) {
      console.error(e);
    }
  }
};

//Function to create table
const createTable = () => {
  const checkTable = document.getElementById("resultTable");
  if (checkTable) {
    checkTable.remove(); //To avoid creating multiple or duplicate tables
  }
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  table.classList.add("table", "table-striped");
  table.style.backgroundColor = "white";
  table.id = "resultTable";
  thead.style.backgroundColor = "#28253f";
  thead.style.color = "white";
  table.appendChild(thead);
  thead.style.textAlign = "center";
  let row_1 = document.createElement("tr");
  let heading_1 = document.createElement("th");
  heading_1.innerHTML = "NAME";
  heading_1.scope = "col";
  let heading_2 = document.createElement("th");
  heading_2.innerHTML = "TYPE";
  heading_2.scope = "col";
  let heading_3 = document.createElement("th");
  heading_3.innerHTML = "ADDRESS";
  heading_3.scope = "col";
  let heading_4 = document.createElement("th");
  heading_4.innerHTML = "URL";
  heading_4.scope = "col";
  let heading_5 = document.createElement("th");
  heading_5.innerHTML = "PHONE";
  heading_5.scope = "col";
  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  row_1.appendChild(heading_4);
  row_1.appendChild(heading_5);
  thead.appendChild(row_1);
  table.style.marginTop = "150px";
  myContainer.appendChild(table);
};

//Function to populate the data from the api in the created table
const populateResults = (data) => {
  const content = document.getElementById("resultTbody");
  const warningMsg = document.getElementById("nrMsg");
  if (content) {
    content.remove(); //Clearing table content for every search
  }
  let tbody = document.createElement("tbody");
  tbody.id = "resultTbody";
  const table = document.getElementById("resultTable");
  if (data.length > 0) {
    if (warningMsg) {
      warningMsg.remove(); //To remove error message if results are available
    }
    for (let i = 0; i < data.length; i++) {
      let tRow = document.createElement("tr");

      let name = document.createElement("td");
      name.textContent = data[i].name ?? `Not Available`;
      tRow.appendChild(name);

      let type = document.createElement("td");
      type.textContent = data[i].brewery_type ?? `Not Available`;
      tRow.appendChild(type);

      let address = document.createElement("td");
      address.textContent = generateAddress(data[i]);
      tRow.appendChild(address);

      let url = document.createElement("td");
      url.textContent = data[i].website_url ?? `Not Available`;
      tRow.appendChild(url);

      let phone = document.createElement("td");
      phone.textContent = data[i].phone ?? `Not Available`;
      tRow.appendChild(phone);
      tbody.appendChild(tRow);
    }
    table.appendChild(tbody);
  } else {
    const checkTable = document.getElementById("resultTable");
    if (checkTable) {
      checkTable.remove(); //To remove table if there are no search results
    }

    //To display message if there are no search results
    noResult.innerHTML = `No results available for the keyword "${searchKey.value}" !`;
    noResult.style.color = "red";
    noResult.style.marginTop = "200px";
    myContainer.appendChild(noResult);
  }
};

//Function to create address string using street, city, state, country and postal code
const generateAddress = (data) => {
  const street = data.street ?? "";
  const city = data.city ?? "";
  const state = data.state ?? "";
  const country = data.country ?? "";
  const postal_code = data.postal_code ?? "";
  const address = `
  ${street},
  ${city},
  ${state},
  ${country} -
  ${postal_code}.
  `;
  return address;
};

//Implementing search button
searchButton.addEventListener("click", getSearchRecords);

//Implementing display all button
getAll.addEventListener("click", getAllRecords);
