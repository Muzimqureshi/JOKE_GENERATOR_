const jokeElement = document.getElementById("joke");
const btn = document.getElementById("btn");

btn.addEventListener("click", getJoke);

async function getJoke() {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"); // API endpoint
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        jokeElement.textContent = data.joke;
    } catch (error) {
        console.error("Error:", error);
    }
}

// Initially, load a random joke when the page loads
getJoke();