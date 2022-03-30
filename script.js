const generateButton = document.querySelector('#generateButton');
const pwDisplay = document.querySelector('#pwDisplay');
const resetButton = document.querySelector('#resetButton');

//Input Fields
let numbersRadios = document.body.querySelectorAll('input[name="numbers"]');
let specialRadios = document.body.querySelectorAll('input[name="special"]');
let uppercaseRadios = document.body.querySelectorAll('input[name="uppercase"]');
let length = document.querySelector('#length');

length.addEventListener('focus', () => {
  length.placeholder = '';
})
length.addEventListener('blur', () => {
  length.placeholder = '5';
})

resetButton.addEventListener('click', () => {
  numbersRadios.forEach(radio => {
    radio.checked = false;
  })
  specialRadios.forEach(radio => {
    radio.checked = false;
  })
  uppercaseRadios.forEach(radio => {
    radio.checked = false;
  })
  length.value = '';
});

generateButton.addEventListener('click', async () => {
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
  }
)