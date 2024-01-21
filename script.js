const confirmation = document.getElementById("go-forward");
const getBack = document.getElementById("get-back");
const lowerSection = document.getElementById("lower");
const successSection = document.getElementById("success");
const detailRequired = document.querySelectorAll("#card-detail-required");
const errorLabel = document.querySelectorAll("#error");
const nameEntered = document.querySelector(".name-entered");
const numbersEntered = document.querySelector(".numbers-entered");
const cvcEntered = document.querySelector(".cvc-entered");
const month = document.querySelector(".month-entered");
const year = document.querySelector(".year-entered");
const cardNameLive = document.querySelector(".name-card-live");
const cardNumberLive = document.querySelector(".number-card-live");
const cvcNumberLive = document.querySelector(".cvc-number-live");
const monthLive = document.querySelector(".month-date-live");
const yearLive = document.querySelector(".year-date-live");

nameEntered.oninput = () => {
  cardNameLive.innerHTML = nameEntered.value;
};

numbersEntered.oninput = () => {
  cardNumberLive.innerHTML = numbersEntered.value;
};

cvcEntered.oninput = () => {
  cvcNumberLive.innerHTML = cvcEntered.value;
};

month.oninput = () => {
  monthLive.innerHTML = month.value;
};

year.oninput = () => {
  yearLive.innerHTML = year.value;
};

confirmation.addEventListener("click", () => {
  let isComplete = true;
  detailRequired.forEach((item, index) => {
    if (item.value === "") {
      isComplete = false;
      errorShow(index);
    } else {
      errorRemove(index);
    }
  });

  if (isComplete === true) {
    detailRequired.forEach((item) => {
      if (
        item.value !== "" &&
        numbersEntered.value.length === 16 &&
        cardNumberValidate(numbersEntered.value) === true &&
        cvcEntered.value.length === 3 &&
        cvcValidate(cvcEntered.value) === true &&
        month.value.length === 2 &&
        monthEntered(month.value) === true &&
        year.value.length === 2 &&
        yearValidate(year.value) === true
      ) {
        correct();
      }
    });
  }

  if (
    numbersEntered.value.length !== 16 ||
    cardNumberValidate(numbersEntered.value) === false
  ) {
    isComplete = false;
    errorShow(1);
  }

  if (
    cvcEntered.value.length !== 3 ||
    cvcValidate(cvcEntered.value) === false
  ) {
    isComplete = false;
    errorShow(4);
  }

  if (month.value.length !== 2 || monthEntered(month.value) === false) {
    isComplete = false;
    errorShow(2);
  }

  if (year.value.length !== 2 || yearValidate(year.value) === false) {
    isComplete = false;
    errorShow(3);
  }
});

function errorShow(indexNumber) {
  errorLabel[indexNumber].classList.remove("invisible");
}

function errorRemove(indexNumber) {
  errorLabel[indexNumber].classList.add("invisible");
}

function correct() {
  lowerSection.classList.add("hidden");
  successSection.classList.remove("hidden");
}

function cardNumberValidate(inputNumber) {
  const numberOnFrontCard = /^[0-9]+$/;
  if (inputNumber.match(numberOnFrontCard)) {
    return true;
  }
  return false;
}

function cvcValidate(inputCVC) {
  const numberOfCVC = /^[0-9]+$/;
  if (inputCVC.match(numberOfCVC)) {
    return true;
  }
  return false;
}

function monthEntered(inputMonth) {
  const dateDetail = /^[0-9]+$/;
  if (inputMonth.match(dateDetail)) {
    return true;
  }
  return false;
}

function yearValidate(inputYear) {
  const dateDetail = /^[0-9]+$/;
  if (inputYear.match(dateDetail)) {
    return true;
  }
  return false;
}

getBack.addEventListener("click", () => {
  lowerSection.classList.remove("hidden");
  successSection.classList.add("hidden");
});
