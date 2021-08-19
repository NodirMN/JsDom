let ism = document.getElementById('ism')
let day = document.getElementById('day')

let gender = document.getElementsByName('gender')
let lang = document.getElementsByName('lang')
let checkGender = ''
let checkeLang = []

let info = document.getElementById('info')
let depart = document.getElementById('depart')

let table = document.querySelector('table')
let count = 1

function send(){
    if (ism.value== '' || day.value== ''  || depart.value=='null'){
        info.style.display ='block'
        return false
    }
    info.style.display = 'none'
    checkeLang = []
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            checkGender = gender[i].value
            gender[i].checked = false
        }
    }
    for(let i=0;i<lang.length;i++){
        if(lang[i].checked){
            checkeLang.push(lang[i].value)
            lang[i].checked = false
        }
    }
    
    
    table.innerHTML += `
    <tr>
    <td>${count}</td>
    <td>${ism.value}</td>
    <td>${day.value}</td>
    <td>${checkGender}</td>
    <td>${checkeLang}</td>
    <td>${depart.value}</td>
    </tr>
    `
    ism.value= ''
    day.value= ''
    depart.value=''

    count++
}