  let finalURL = `https://hp-api.onrender.com/api/characters/students`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].species);

        results.innerHTML = 
      `
      <div class="all">
        <div class="text">
        <h2>${data[0].name}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Species</h4>
                <span>${data[0].species}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Gender</h4>
                <span>${data[0].gender}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>House</h4>
                <span>${data[0].house}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>DOB</h4>
                <span>${data[0].dateOfBirth}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Ancestry</h4>
                <span>${data[0].ancestry}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Eye Colour</h4>
                <span>${data[0].eyeColour}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Hair Colour</h4>
                <span>${data[0].hairColour}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Wand</h4>
                <span>${data[0].wand.core}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Patronus</h4>
                <span>${data[0].patronus}</span>
            </div>
        </div>
        </div>
        <div class="image">
        <img src="${data[0].image}" class="flag-img">
        </div>
        </div>
      `;

    });
