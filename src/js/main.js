import getData from "./api/requests.js";
const generateNewAdvice = document.getElementById('generateAdvice')
generateNewAdvice.addEventListener('click', displayData)

async function displayData() {
  const title = document.getElementById('adviceTitle')
  const text = document.getElementById('adviceText')
  const data = await getData();

  title.textContent = `${data.advice}`
  text.textContent = `adivice #${data.id}`
}

displayData()