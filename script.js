// const button = document.querySelector('button')
// const breedInput = document.querySelector('input')
// const imageDiv = document.querySelector('div')

// button.addEventListener('click', async () => {
//     let breed = breedInput.value
//     let response = await axios.get(
//         `https://dog.ceo/api/breed/${breed}/images/random`
//       )
//     let dogPic = response.data.message
//     imageDiv.innerHTML = `<img src="${dogPic}">`
// })

const button = document.querySelector('button');

const pwDisplay = document.querySelector('#pwDisplay');

//Input Fields
let numbersRadios = document.body.querySelectorAll('input[name="numbers"]');
let specialRadios = document.body.querySelectorAll('input[name="special"]');
let uppercaseRadios = document.body.querySelectorAll('input[name="uppercase"]');
let length = document.querySelector('#length');

// console.log(numbersRadios);

button.addEventListener('click', async () => {
    let numbersValue = false;
    let specialValue = false;
    let uppercaseValue = false;

    if(numbersRadios[0].checked == true){
      numbersValue = 'num=true&';
    }else{
      numbersValue = '';
    }
    if(specialRadios[0].checked == true){
      specialValue = 'char=true&';
    }else{
      specialValue = '';
    }
    if(uppercaseRadios[0].checked == true){
      uppercaseValue = 'caps=true&';
    } else{
      uppercaseValue = '';
    }

    //GET Request
    let response = await axios.get(
        `https://passwordinator.herokuapp.com?${numbersValue}${specialValue}${uppercaseValue}len=${length.value}`
      )

    console.log(response);
    let pw = response.data.data;
    pwDisplay.innerText = pw;
})
