const url = 'https://api.adviceslip.com/advice'

async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.slip
  } catch (err) {
    console.log(`There was an error ${err}`)
  }
}

export default getData