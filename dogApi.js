
dogButton.addEventListener("click", function() {
    dogButton.innerHTML = "Generating Doggo..."
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        const dogImg = document.createElement("img");
        dogImg.setAttribute("src", data.message)
        document.querySelector("body").appendChild(dogImg)
        dogButton.innerHTML = "Generate Doggo..."
        console.log(data)
    })
    .catch((error) => {
        console.log(error);
    })
})
