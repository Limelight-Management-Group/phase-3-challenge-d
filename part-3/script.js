let roomButtons = document.querySelectorAll('.button-data')
let buttonArr = [];
let modalOverlay = document.querySelector('.modal-overlay')
let modalClose = document.querySelector('.modal-close')
let shopCartPrice = []
let shopCartRoomNumber = []
let roomRateInModal= document.querySelector('#price')
let roomNumberInModal= document.querySelector('#name')
let totalInModal = document.querySelector('.modal-section-amount')
let allRoomDataArr = roomButtons.forEach((roomButton) =>{
  let buttonData = roomButton
  buttonArr.push(buttonData)
})
let clearButton = document.querySelector('.modal-clear')
console.log(clearButton, 'this is the clearButton')
let updateButton = document.querySelector('.updateTotal')
let daysStayedDropdown = document.querySelector('.daysStayed')
console.log('daysStayedDropdown', daysStayedDropdown)
let modal = document.querySelector('.modal-content')
// console.log(modal,'<-- modal')
// console.log(buttonArr)
let total = []

let twoB = buttonArr[0]
console.log(twoB)
twoB.addEventListener('click', () =>{
let price = twoB.innerText.split(",")
let roomRate = (price[0][6] + price[0][7]+ price[0][8] + price[0][9] + price[0][10])
console.log(Number(roomRate))
let roomNumber = price[0][0] + price[0][1]
console.log(roomNumber)
shopCartPrice.push(roomRate)
shopCartRoomNumber.push(roomNumber)
console.log('this is opening!')
  modal.classList.add('modal-open')
  modalOverlay.classList.add('hide-overlay')
  let stringToNumber = Number(shopCartPrice[0])
  console.log(stringToNumber,'shopCartPrice')
  roomRateInModal.append(stringToNumber)
  roomNumberInModal.append(roomNumber)
})
if(shopCartPrice > 0){
  console.log('shopCartLength',shopCartPrice)
  console.log(shopCartPrice.reduce((a,c)=>{
  let sum = a + c
  total.push(sum) 
}))
}
console.log('this is the sumArr--->',total)
console.log(shopCartPrice, 'price')
if(shopCartPrice.length !== 0){
 console.log('shopCartPriceArr--->',shopCartPrice)
} 

console.log('this is the total',total)
let twoA = buttonArr[1]
console.log(twoA)
twoA.addEventListener('click', () =>{
let price = twoA.innerText.split(",")
let roomRate = (price[0][6] + price[0][7]+ price[0][8] + price[0][9] + price[0][10])
console.log(Number(roomRate))
let roomNumber = price[0][0] + price[0][1]
console.log(roomNumber)
shopCartPrice.push(roomRate)
shopCartRoomNumber.push(roomNumber)
console.log('this is opening!')
  modal.classList.add('modal-open')
  modalOverlay.classList.add('hide-overlay')

})


let threeA = buttonArr[2]
console.log(threeA)
threeA.addEventListener('click', () =>{
let price = threeA.innerText.split(",")
let roomRate = (price[0][6] + price[0][7]+ price[0][8] + price[0][9] + price[0][10])
console.log(Number(roomRate) * 3)
let roomNumber = price[0][0] + price[0][1]
console.log(roomNumber)
shopCartPrice.push(roomRate)
shopCartRoomNumber.push(roomNumber)
console.log('this is opening!')
  modal.classList.add('modal-open')
  modalOverlay.classList.add('hide-overlay')
})


let threeB = buttonArr[3]
console.log(threeB)
threeB.addEventListener('click', () =>{
let price = threeB.innerText.split(",")
let roomRate = (price[0][6] + price[0][7]+ price[0][8] + price[0][9] + price[0][10])
console.log(Number(roomRate) * 3)
let roomNumber = price[0][0] + price[0][1]
console.log(roomNumber)
shopCartPrice.push(roomRate)
shopCartRoomNumber.push(roomNumber)
console.log('this is opening!')
  modal.classList.add('modal-open')
  modalOverlay.classList.add('hide-overlay')
})


let threeC = buttonArr[4]
console.log(threeC)
threeC.addEventListener('click', () =>{
  let price = threeC.innerText.split(",")
  let roomRate = (price[0][6] + price[0][7]+ price[0][8] + price[0][9] + price[0][10])
  console.log(parseFloat(Number(roomRate) ))
  let roomNumber = price[0][0] + price[0][1]
  console.log(roomNumber)
  shopCartPrice.push(roomRate)
shopCartRoomNumber.push(roomNumber)
console.log('this is opening!')
  modal.classList.add('modal-open')
  modalOverlay.classList.add('hide-overlay')
  
})


let fourA = buttonArr[5]
console.log(fourA)
fourA.addEventListener('click', () =>{
let price = fourA.innerText.split(",")
let roomRate = (price[0][6] + price[0][7]+ price[0][8] + price[0][9] + price[0][10])
console.log(Number(roomRate) * 3)
let roomNumber = price[0][0] + price[0][1]
console.log(roomNumber)
shopCartPrice.push(roomRate)
shopCartRoomNumber.push(roomNumber)
console.log('this is opening!')
  modal.classList.add('modal-open')
  modalOverlay.classList.add('hide-overlay')
})


let fourB = buttonArr[6]
console.log(fourB)
fourB.addEventListener('click', () =>{
let price = fourB.innerText.split(",")
let roomRate = (price[0][6] + price[0][7]+ price[0][8] + price[0][9] + price[0][10])
console.log(Number(roomRate) * 3)
let roomNumber = price[0][0] + price[0][1]
console.log(roomNumber)
shopCartPrice.push(roomRate)
shopCartRoomNumber.push(roomNumber)
console.log('this is opening!')
  modal.classList.add('modal-open')
  modalOverlay.classList.add('hide-overlay')
})
console.log('this is the modalClose', modalClose)

modalClose.addEventListener('click', ()=>{
  console.log('clicked')
  modal.classList.remove('modal-open')
  modalOverlay.classList.remove('hide-overlay')
  
})

clearButton.addEventListener('click', ()=>{
let sum = '$' + 0
// totalInModal.append(sum)  
console.log('clicked')
totalInModal.innerHTML = sum
  modal.classList.remove('modal-open')
  modalOverlay.classList.remove('hide-overlay')

})

updateButton.addEventListener('click', ()=>{
  let rateTotal = Number(shopCartPrice[0])
  let sum = rateTotal * daysStayedDropdown.value
  console.log(sum,'<----------this is the totalSum')
  totalInModal.innerHTML = sum
})
