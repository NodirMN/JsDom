let a = document.querySelector('button')

///style

a.style.color= 'red'
a.style.border= 0

////text

a.textContent = 'Order a Call' //text qib beradi


//////tag yozish

a.innerHTML = '<i>Qo`ng`iroqqa buyurtma berish<i>' // tipa htmlda beradi

///////class

a.classList.add('show')  // class qo'shish
console.log(a.classList.contains('show')); // tekshirsa bo'laadi show class bormi

////////////atrebutlar

let at = document.querySelector('a')
console.log(at.getAttribute('href'));
at.setAttribute('href', 'https://ya.ru')


//////event hodisalar bilan ishlash

let b = document.querySelector('.target')
b.addEventListener('click',function(){
    b.style.backgroundColor = 'red '
        console.log('salom');
})
console.log(a);


/////////////// id bo'yicha

let inp = document.getElementById('inp')
b.addEventListener('click', function () {
    b.style.backgroundColor = 'red '
    console.log(inp.value);
    res.innerHTML = inp.value
})
let res = document.getElementById('res')
////////////