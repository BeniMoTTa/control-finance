/* Desenvolva sua lógica aqui */

const tagUL = document.getElementById("total-list") 

const divEmpty = document.getElementById("div-empty")
const sumTotal = document.getElementById("sum-total")
const buttonRemoveCard = document.getElementsByClassName("button-remove-card")
// console.log(buttonRemoveCard)

function liControl(atributte){
    

    let  {id, value, categoryID} = atributte

    const tagli = document.createElement("li")
    tagli.classList.add("card-item")
    tagli.id = id

    let tagSpan = document.createElement("span")
    tagSpan.innerText = `R$${value},00`;

    let tagDivLi = document.createElement("div")
    tagDivLi.classList.add("interation-direct")

    let tagCard = document.createElement("span")
    tagCard.classList.add("tag-card")
    tagCard.id = categoryID;
    if(tagCard.id === "1"){
        tagCard.innerText = "Entrada"
        
    }
    else if(tagCard.id === "2"){
        tagCard.innerText = "Saída"
    }

    let buttonTrash = document.createElement("button")
    buttonTrash.classList.add("button-remove-card")

    
    let imgTrashCan = document.createElement("img")
    imgTrashCan.src = "./assets/trash.png"
    imgTrashCan.alt = "trashCan"
    imgTrashCan.id = id





    imgTrashCan.addEventListener('click', (event) => {
        // insertedValues.slice([início[,fim]])
     const removeValues = insertedValues.find((element, index, array) => {
            console.log(event.target.id)
            if(element.id == event.target.id){
            array.splice(index, 1)
              console.log(array)
            }
        })
        separateElements(insertedValues)
     let valuesEntry = newArrEntry.find((element, index, array) => {
            console.log(event.target.id)
            if(element.id == event.target.id){
            array.splice(index, 1)
              console.log(array)
            }
        })
        separateElements(newArrEntry)
     const valuesOut = newArrOut.find((element, index, array) => {
            console.log(event.target.id)
            if(element.id == event.target.id){
            array.splice(index, 1)
              console.log(array)
            }
        })
        separateElements(newArrOut)

    })

        
    tagDivLi.append(tagCard, buttonTrash)
    buttonTrash.appendChild(imgTrashCan)
    tagli.append(tagSpan, tagDivLi)
    
    // tagUL.appendChild(tagli)

   

    return tagli


}

// liControl(insertedValues)

let sumSpan = document.createElement("span")
sumSpan.innerText = `R$00,00`
    sumTotal.appendChild(sumSpan)



let separateElements = (createCards) =>{
    tagUL.innerHTML = ""
    sumSpan.innerText = `R$00,00`
    createCards.forEach((initial) => {
        
        tagUL.append(liControl(initial))
        sumSpan.innerText = `R$${sumValues(insertedValues)},00`

})
    
    }
    



    


    const emptyDivAll = () =>{
        let divEmpty = document.createElement("div")
        divEmpty.classList.add("empty")
        divEmpty.id= "div-empty"
    
        let tagH4 = document.createElement("h4")
        tagH4.classList.add("title-empty")
        tagH4.innerText = "Sem nenhum valor cadastrado"
    
        let btnEmpty = document.createElement("button")
        btnEmpty.classList.add("btn-empty")
        btnEmpty.id = "btn-let"
        btnEmpty.innerText = "Registrar novo valor"
        btnEmpty.addEventListener('click', () => openOrClose())

        divEmpty.append(tagH4, btnEmpty)
        tagUL.append(divEmpty)
    }

  emptyDivAll()


