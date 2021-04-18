//retrieve html data
let imageFile = document.getElementById('vectorIMG');
let postBtn = document.getElementById('submitBtn');
let userInpt = document.querySelector('input');


async function getData(){
    const allStates = await fetch("./states.json");

    dataFile = await allStates.json();
    //console.log(dataFile);
    return dataFile;
}

getData().then(data => {
    //generate random state
    let i = Math.floor(Math.random() * 50);

    //get that state info
    let newImg = './imgs/' + data[i].image;
    imageFile.src = newImg;
    newName = data[i].name;
    let newAbr = data[i].abbreviation;

    postBtn.addEventListener('click', () => {

        try{
            let value = userInpt.value;
            value = value.toLowerCase();

            //console.log(value);
            //console.log(newName);

            if(value === newName.toLowerCase() || value === newAbr.toLowerCase()){
                alert("Congratulations! You guessed the state correctly");
            }else{
                alert("Sorry, that is not the right state. The correct answer is " + newName + " (" + newAbr + ")");
            }

        }catch (error) {
            console.log(error);
        }

    })
})