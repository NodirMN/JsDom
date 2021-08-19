///////////////a xarifini b xarifga almashtirish

let text = document.getElementById('text')
let btn = document.getElementById('btn')
let res = document.getElementById('res')

btn.addEventListener('click',function(){
    res.textContent = text.value.replaceAll('a','b')
    
})


let mat = document.getElementById('mat')
let btns = document.getElementById('btns')
let resst = document.getElementById('resst')
let sw = document.getElementById('switch')

btns.addEventListener('click',function(){
    switch (sw.value) {
        case 'f2s':
                resst.textContent = 5/9*(mat.value-32)+'selsiy'
            break;
        case 'm2km':
                resst.textContent = mat.value*1.60943+ 'km'
            break;
        case 'd2mm':
                resst.textContent = mat.value*25.4+ 'mm'
            break;
    
        default:
            break;
    }
})