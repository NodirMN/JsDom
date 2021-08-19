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

console.log(a);