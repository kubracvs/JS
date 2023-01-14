


const randomNumber = Math.round(Math.random()*100);

console.log(randomNumber)

document.querySelector('.btn').addEventListener('click',() => {
    const guessNumber= Number(document.querySelector('.input').value);
// console.log(guessNumber);
 const bodyBgColor = document.querySelector('.container')
 const newH4 = document.querySelector('h4')


 if(randomNumber > guessNumber){
    alert('Biraz yukarı ☝️')
    document.querySelector('body').style.backgroundImage ='url(saskın.jpg)'
 }else if(randomNumber < guessNumber) {
    alert('Biraz Aşağı 👇')
    document.querySelector('body').style.backgroundImage ='url(emoji.jpg)'
    document.querySelector('body').style.backgroundcolor ='url(emoji.jpg)'
 }else {
    alert('🥳 TEBRİKLER 🥳')
    bodyBgColor.style.backgroundColor = 'yellow'
    newH4.textContent = '🎉Congratulations🎉'
    document.querySelector('body').style.backgroundImage ='url(imagesss.jpg)'

 }
 document.querySelector('.input').value='';
 document.querySelector('.input').focus()='';
})