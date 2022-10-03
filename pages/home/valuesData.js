const valuesCategory = ["Entrada", "Saída"];
/*ID:1 = Entrada /  ID:2 = SAÍDA    */

const newArrEntry = [];
const newArrOut = []
const insertedValues = [
  // {
  //   id: 1,
  //   value: 90.0,
  //   categoryID: 1,
  // },
  // {
  //   id: 2,
  //   value: 40.0,
  //   categoryID: 2,
  // },
  // {
  //   id: 3,
  //   value: 15.5,
  //   categoryID: 1,
  // },


];
const sumFinal = document.getElementById("sum-total")
let modalId = document.querySelector("#id-modal")
let input = document.querySelector("#value")
let radioEntrance =  document.querySelector("#inputRadio1")
let radioOut =  document.querySelector("#inputRadio2")
let btnRegister = document.querySelector("#register-btn")
let divButton = document.querySelector(".buttons-div")



let formulary = document.getElementById("form-up")
formulary.addEventListener("submit",(event) =>{
  event.preventDefault();
})



btnRegister.addEventListener('click', (event) =>{
  
  
  const inputOutput = Number(input.value)
  let atriId = Math.floor(Math.random() * 100);;

  if(radioEntrance.checked){
    insertedValues.forEach((currentValue, index) =>{
      atriId = index;
      

    })
   
    insertedValues.push({
      id : atriId,
      value : inputOutput,
      categoryID : 1
      
    
    })
    newArrEntry.push({
      id : atriId,
      value : inputOutput,
      categoryID : 1
    })
  }
  else if(radioOut.checked){
    insertedValues.forEach((currentValue, index) =>{
      atriId = index;

    })
    insertedValues.push({
      id : atriId,
      value : inputOutput,
      categoryID : 2
    })
    newArrOut.push({
      id : atriId,
      value : inputOutput,
      categoryID : 2
    })
  }
  tagUL.innerHTML = ""

  separateElements(insertedValues)
})


let allListCards = () =>{

  let btnAll = document.getElementById("btn-all")
  btnAll.addEventListener('click', () => {
    let currentArray = insertedValues
   let filterAll = currentArray.filter((e)=>e.categoryID === 1 || e.categoryID === 2);
        tagUL.innerHTML =""
        
   separateElements(filterAll)
   if(tagUL.innerHTML === ""){
    emptyDivAll()
  }
    });
    
  }


allListCards()


let filterEntry = () =>{

  let btnEntry = document.getElementById("btn-entry-filter")
  btnEntry.addEventListener('click', () => {
    let currentArray = insertedValues
    let filterEntry = currentArray.filter((e)=>e.categoryID === 1);
    
    tagUL.innerHTML =""

    separateElements(filterEntry)
    
    sumSpan.innerText = `R$${sumValues(newArrEntry)},00`
    if(tagUL.innerHTML === ""){
      sumSpan.innerText =`R$00,00` 
      emptyDivAll()
    }
  })
  
}

filterEntry()
  // function renderCard()

let filterOut = () =>{

  let btnOut = document.getElementById("btn-out-filter")
  btnOut.addEventListener('click', () => {
    let currentArray = insertedValues
    let filterOut = currentArray.filter((e)=>e.categoryID === 2);
    
    console.log(sumValues(newArrOut))
    tagUL.innerHTML =""
    
    separateElements(filterOut)   
    sumSpan.innerText = `R$${sumValues(newArrOut)},00` 
    
    if(tagUL.innerHTML === ""){
      sumSpan.innerText =`R$00,00` 
      emptyDivAll()
    }
  })
 
}

filterOut()




function sumValues(arr){
  let basicSum = 0;
  let countSum = arr.forEach((initial, index) =>{
      basicSum += initial.value

  })  
  return basicSum
}