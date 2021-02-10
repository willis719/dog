function replaceImage(imageUrl) {
    const dogImg = document.createElement("img");
    dogImg.setAttribute("src", imageUrl)
    document.querySelector("body").appendChild(dogImg)
    dogButton.innerHTML = "Generate Doggo..."
    console.log(data)
}



const dogButton = document.getElementById("dogButton")


dogButton.addEventListener("click", function() {
    dogButton.innerHTML = "Generating Doggo..."
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        replaceImage(data.message)
    })
    .catch((error) => {
        console.log(error);
    })
})

const select = document.getElementById("dogSelect")

fetch("https://dog.ceo/api/breeds/list")
.then(res => res.json())
.then(data => {
    console.log(data)

    for(let i = 0; i < data.message.length; i++) {
        const name = data.message[i]
        const option = document.createElement("option")
        option.innerText = name
        select.append(option)
    }
})

select.addEventListener("change", () => {
    console.log(select.value)

    fetch(`https://dog.ceo/api/breed/${select.value}/images/random`)
    .then(res => res.json())
    .then(data => {
        replaceImage(data.message)
})
})















