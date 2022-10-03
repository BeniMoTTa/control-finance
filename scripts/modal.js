/* Desenvolva sua lógica aqui */
const buttonRegister = document.getElementById("open-modal")
const tagSectionModal = document.getElementById("modal-register")




function createModalRegister (){



    let divModal = document.createElement('div')
    divModal.classList.add("modal")
    divModal.id = "id-modal"

    let tagh3 = document.createElement("h3")
    tagh3.classList.add("title-modal")
    tagh3.innerText = "Registro do valor"

    let tagDivTextModal = document.createElement("div")
    tagDivTextModal.classList.add("text-modal")

    let tagSpanText = document.createElement("span")
    tagSpanText.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor"


    let tagFormModal = document.createElement("form")
    tagFormModal.classList.add("form-modal")
    tagFormModal.id = "form-up"


    let divValueModal = document.createElement("div")
    divValueModal.classList.add("value-div-modal")

    let spanValue = document.createElement("span")
    spanValue.innerText = "Valor"

    let inputModal = document.createElement("input")
    inputModal.type = "text"
    inputModal.classList.add("input-value") 
    inputModal.id = "value"
    inputModal.innerHTML= `onkeypress="$(this).mask('R$ #.##0,00', {reverse: true});`
    

    let divTypeValue = document.createElement("div")
    divTypeValue.classList.add("type-value-modal")

    let tagH5 = document.createElement("h5")
    tagH5.innerText = "Tipo de valor"

   


    let inputEntry = document.createElement("input")
    inputEntry.type = "radio"
    inputEntry.name = "entrance"
    inputEntry.value = "Entrada"
    inputEntry.id = "inputRadio1"
    inputEntry.classList.add("input-default")

    let inputOut = document.createElement("input")
    inputOut.type = "radio"
    inputOut.name = "entrance"
    inputOut.value = "Saída"
    inputOut.id = "inputRadio2"
    inputOut.classList.add("input-default")

       

    let divButtonAplication = document.createElement("div")
    divButtonAplication.classList.add("btn-aplication-modal")

    

    let buttonCancel = document.createElement("button")
    buttonCancel.classList.add("btn-cancel")
    buttonCancel.innerText = "Cancelar"
    buttonCancel.id = "btn-can"
    

    let buttonInsert = document.createElement("button")
    buttonInsert.classList.add("btn-insert-value")
    buttonInsert.innerText = "Inserir valor"
    buttonInsert.id = "register-btn"
    


    
    let buttonClose = document.createElement("button")
    buttonClose.classList.add("close-button")
    buttonClose.id = "modalClose"
    buttonClose.innerText = "X"

    tagDivTextModal.append(tagSpanText)
    
    divValueModal.append(spanValue, inputModal)
    divTypeValue.append(tagH5, inputEntry, inputOut)
    divButtonAplication.append(buttonCancel, buttonInsert)
    tagFormModal.append(divValueModal, divTypeValue, divButtonAplication)
    divModal.append(tagh3, tagDivTextModal, tagFormModal, buttonClose)

    tagSectionModal.append(divModal)
}

createModalRegister()

let inputValueModal = document.getElementById("value")
let buttonCloseModal = document.getElementById("modalClose")

const closeWithCancel = document.getElementById("btn-can")

// closeWithCancel.addEventListener('click', () => openOrClose())


buttonRegister.addEventListener('click', () => openOrClose())
buttonCloseModal.addEventListener('click', () => openOrClose())
closeWithCancel.addEventListener('click', () => openOrClose())




function openOrClose(){
    tagSectionModal.classList.toggle("modal-show")
    }




    
// let buttonInsertModal = document.getElementsByClassName("btn-insert-value")

// buttonInsertModal.addEventListener('click', (e)=>{
//     let botao = e.target.id
//     console.log(botao)
// })