// fetch(`https://jsonplaceholder.typicode.com/photos`)
//   .then((res) => res.json())
//   .then((output) => console.log(output))
//   .catch((err) => console.error(err));

//res.json= convert string into json

const photoSection = document.querySelector(".photo-lib");
const photoFetchBtn = document.querySelector("#fetch-btn");

const fetchPhotoFn = async () => {
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const output = await data.json();
    const minifieldOutput = output.slice(0, 100);
    console.log(minifieldOutput);
    minifieldOutput.map((photo) => {
      const img = document.createElement("img");
      img.onclick = imgAction;
      img.addEventListener("mouseover", (event) => {
        console.log(event);
      });
      img.addEventListener("click", (event) => {
        event.target.remove();
      });
      img.src = photo.url;
      img.alt = `photo from dummy api with id: ${photo.id}`;
      img.width = 200;
      img.height = 200;
      photoSection.appendChild(img);
    });
  } catch (err) {
    console.error("error", err);
  }
};

const imgAction = () => {
  console.log("clicked");
};
photoFetchBtn.addEventListener("click", () => {
  fetchPhotoFn();
});
