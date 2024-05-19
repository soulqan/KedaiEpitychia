//toggle class active
const navbarNav =document.querySelector('.navbar-nav');

//ketika menu di click
document.querySelector('#hum-menu').onclick =(e)=>{
    e.preventDefault();
   navbarNav.classList.toggle('active'); 
};


//klik diluar sidebar untuk menghilankan nav
const humberger =document.querySelector('#hum-menu');


document.addEventListener('click', function(e){
    if (!humberger.contains(e.target)&&!navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


//email
function submitForm(event) {
    event.preventDefault(); // Menghentikan perilaku bawaan pengiriman formulir

    // Ambil nilai dari input
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var noHp = document.getElementById("noHp").value;
    document.getElementById("submitButton").disabled = true;
   
    // Validasi input
    if (nama.trim() === '' || email.trim() === '' || noHp.trim() === '') {
        alert('Harap lengkapi semua kolom sebelum mengirim pesan.');
        return; // Menghentikan proses pengiriman formulir jika ada input yang kosong
    }

    // Kirim email menggunakan SMTPJS
    Email.send({
        SecureToken : "7a0ab282-b85a-4f0d-b586-076f05d1f90a ",
        To : 'soultan.agnar@gmail.com',
        From : "soultan.agnar@gmail.com",
        Subject: "Pesan dari Formulir Kontak",
        Body: `Nama: ${nama}\nEmail: ${email}\nNo Hp: ${noHp}`
    }).then(
        function(message) {
            alert("Berhasil Terkirim");
            // Aktifkan kembali tombol "Kirim Pesan" setelah email terkirim
            document.getElementById("submitButton").disabled = false;
            // Menghapus nilai dari input setelah email terkirim
            document.getElementById("nama").value = '';
            document.getElementById("email").value = '';
            document.getElementById("noHp").value = '';
        }
    );
}