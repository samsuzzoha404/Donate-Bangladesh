// Input common function by id
function getInputValueById(id) {
  const inputValue = Number(document.getElementById(id).value);
  return inputValue;
}

// text common function by id
function getTextValueById(id) {
  const textValue = Number(document.getElementById(id).innerText);
  return textValue;
}

//Noakhali Donate function
document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    let emptyAmount = document.getElementById("noakhali-donate-amount");
    const noakhaliDonateAmount = getInputValueById("noakhali-donate-amount");
    const amount = getTextValueById("noakhali-amount");
    const myAmountBalance = getTextValueById("my-amount");

    if (
      isNaN(noakhaliDonateAmount) ||
      noakhaliDonateAmount <= 0 ||
      noakhaliDonateAmount > myAmountBalance
    ) {
      alert("Invalid Donation amount");
      return;
    }

    document.getElementById("noakhali-amount").innerText =
      amount + noakhaliDonateAmount;
    document.getElementById("my-amount").innerText =
      myAmountBalance - noakhaliDonateAmount;
    let div = document.createElement("div");
    div.innerHTML = `
      <div class="border border-slate-200 rounded-lg mt-4 mb-4 p-4 space-y-3">
          <h3 class="font-bold text-lg">
            ${noakhaliDonateAmount} Taka is Donated for flood at Noakhali, Bangladesh
          </h3>
          <p class="text-dark2 text-sm bg-slate-100 p-3 rounded-xl">
            Date : ${new Date().toLocaleString()}
          </p>
        </div>
    `;
    document.getElementById("history-section").appendChild(div);
    my_modal.showModal();
    emptyAmount.value = "";
  });

//Feni Donate function
document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    let emptyAmount = document.getElementById("feni-donate-amount");
    const feniDonateAmount = getInputValueById("feni-donate-amount");
    const amount = getTextValueById("feni-amount");
    const myAmountBalance = getTextValueById("my-amount");

    if (
      isNaN(feniDonateAmount) ||
      feniDonateAmount <= 0 ||
      feniDonateAmount > myAmountBalance
    ) {
      alert("Invalid Donation amount");
      return;
    }

    document.getElementById("feni-amount").innerText =
      amount + feniDonateAmount;
    document.getElementById("my-amount").innerText =
      myAmountBalance - feniDonateAmount;
    let div = document.createElement("div");
    div.innerHTML = `
        <div class="border border-slate-200 rounded-lg mt-4 mb-4 p-4 space-y-3">
            <h3 class="font-bold text-lg">
              ${feniDonateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh
            </h3>
            <p class="text-dark2 text-sm bg-slate-100 p-3 rounded-xl">
              Date : ${new Date()}
            </p>
          </div>
      `;
    document.getElementById("history-section").appendChild(div);
    my_modal.showModal();
    emptyAmount.value = "";
  });

// Quota Movement function
document
  .getElementById("quota-movement-btn")
  .addEventListener("click", function () {
    let emptyAmount = document.getElementById("quoto-movement-donate");
    const quotoMovementDonate = getInputValueById("quoto-movement-donate");
    const amount = getTextValueById("quota-amount");
    const myAmountBalance = getTextValueById("my-amount");

    if (
      isNaN(quotoMovementDonate) ||
      quotoMovementDonate <= 0 ||
      quotoMovementDonate > myAmountBalance
    ) {
      alert("Invalid Donation amount");
      return;
    }

    document.getElementById("quota-amount").innerText =
      amount + quotoMovementDonate;
    document.getElementById("my-amount").innerText =
      myAmountBalance - quotoMovementDonate;

    let div = document.createElement("div");
    div.innerHTML = `
          <div class="border border-slate-200 rounded-lg mt-4 mb-4 p-4 space-y-3">
              <h3 class="font-bold text-lg">
                ${quotoMovementDonate} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
              </h3>
              <p class="text-dark2 text-sm bg-slate-100 p-3 rounded-xl">
                Date : ${new Date()}
              </p>
            </div>
        `;
    document.getElementById("history-section").appendChild(div);

    my_modal.showModal();
    emptyAmount.value = "";
  });

//Toggle Button
let historyBtn = document.getElementById("history-btn");
let donationBtn = document.getElementById("donation-btn");
let donationContainer = document.getElementById("donation-container");
let historySection = document.getElementById("history-section");

document.getElementById("history-btn").addEventListener("click", function () {
  historyBtn.classList.add("bg-primary", "font-semibold", "text-dark1");
  historyBtn.classList.remove(
    "border-2",
    "border-[rgba(17,17,17,0.3)]",
    "text-dark2"
  );
  donationBtn.classList.remove("bg-primary", "font-semibold", "text-dark1");
  donationBtn.classList.add(
    "border-2",
    "border-[rgba(17,17,17,0.3)]",
    "text-dark2"
  );
  donationContainer.classList.add("hidden");
  historySection.classList.remove("hidden");
});

document.getElementById("donation-btn").addEventListener("click", function () {
  donationBtn.classList.add("bg-primary", "font-semibold", "text-dark1");
  historyBtn.classList.remove("bg-primary", "font-semibold", "text-dark1");
  historyBtn.classList.add(
    "border-2",
    "border-[rgba(17,17,17,0.3)]",
    "text-dark2"
  );
  donationBtn.classList.remove(
    "border-2",
    "border-[rgba(17,17,17,0.3)]",
    "text-dark2"
  );
  donationContainer.classList.remove("hidden");
  historySection.classList.add("hidden");
});