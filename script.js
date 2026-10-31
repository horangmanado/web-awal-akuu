const judul = document.querySelector('#judul-utama')
const tombol = document.querySelector('.btn-aksi')

console.log(judul);


function jalankanManipulasiDOM() {
    judul.textContent = 'study group sea';
judul.classList.add('highlight')
judul.style.color = 'blue';


const itemBaru = document.createElement('li');
itemBaru.textContent = 'studygroup dimulai';
document.querySelector('ul')
document.querySelector('ul').appendChild(itemBaru);

tombol.textContent = 'berhasil diubah';


}