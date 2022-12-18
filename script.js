const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "89d201395amsh5479e74e041dfc5p16e973jsnc99da6c680dc",
    "X-RapidAPI-Host": "fake-data3.p.rapidapi.com",
  },
};

const form = document.querySelector(".lorem");
const amount = document.getElementById("amount");
const loremText = document.querySelector(".lorem-text");
const btn = document.querySelector(".btn");
console.log(amount);
const spinner = document.querySelector(".spinner");

const getData = async function (value) {
  spinner.classList.remove("hidden");
  try {
    const response = await fetch(
      "https://fake-data3.p.rapidapi.com/fk/texts?_characters=500",
      options
    );
    const data = await response.json();

    let result = [];
    for (i = 0; i < value; i++) {
      result += `<p class="result">${data.data[i].content}</p>`;
    }
    loremText.innerHTML = result;
  } catch (err) {
    console.log(err);
  }
  spinner.classList.add("hidden");
};

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const value = Number(amount.value);

  getData(value);
});
