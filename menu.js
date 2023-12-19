// MEnu yang di tekan

document.addEventListener("DOMContentLoaded", function() {
    const foodButton = document.getElementById("foodButton");
    const drinkButton = document.getElementById("drinkButton");
    const orderButton = document.getElementById("orderButton")
    const foodContent = document.getElementById("foodContent");
    const drinkContent = document.getElementById("drinkContent");
    const orderContent = document.getElementById("orderContent")
    const content = document.getElementById("content");

    // mEnampilkan konten secara default

    showDrinkContent();

    foodButton.addEventListener("click", function() {
        showFoodContent();
    });

    drinkButton.addEventListener("click", function() {
        showDrinkContent();
    });

    orderButton.addEventListener("click", function(){
        showOrderContent();
    });

    function showFoodContent() {
        content.style.transform = "translateY(0)";
        foodContent.style.display = "block";
        drinkContent.style.display = "none";
        orderContent.style.display = "none";
    }
    
    function showDrinkContent() {
        content.style.transform = "translateY(0)";
        foodContent.style.display = "none";
        drinkContent.style.display = "block";
        orderContent.style.display = "none";
    }

    function showOrderContent() {
        content.style.transform = "translateY(0)";
        foodContent.style.display = "none";
        drinkContent.style.display = "none";
        orderContent.style.display = "block";
    }

});

// Untuk mengirim ke WhatsaApp


function sendToWhatsApp() {
    
    try {
        var nomorWhatsApp = '6281615650796';
        var nama = document.getElementById('nama').value;
        var email = document.getElementById('email').value;
        var nomorHp = document.getElementById('nomorHp').value;
        var alamat = document.getElementById('alamat').value;
        var keterangan = document.getElementById('keterangan').value;

        if (!nama || !email || !nomorHp || !alamat || !keterangan) {
            alert('Harap isi semua form sebelum mengirim pesan.');
            return;
        }

        // FUngsi Validasi EMail

        function validateEmail() {
            var emailInput = document.getElementById('email');
            var email = emailInput.value;
        
            // Pola ekspresi reguler untuk validasi email
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if (emailRegex.test(email)) {
                // Email valid
                return true;
            } else {
                // Email tidak valid
                return false;
            }
        }

        // memanggil alert email valid

        if (!validateEmail()) {
            alert('Harap isi email dengan benar sebelum mengirim pesan.');
            return;
        }

        // Daftar item di keranjang
        var itemsInCart = Alpine.store('cart').items;

        // Membuat pesan WhatsApp dengan informasi dari keranjang belanja
        var pesanWhatsApp = 'Pesan%20Anda : %0A';

        itemsInCart.forEach(function (item) {
            pesanWhatsApp += '%E2%80%A2%20' + item.name + '%20(%20' +
                             item.totalJumlah + '%20x%20' + rupiah(item.price) +
                             '%20)%0A';
            // totalBelanja = rupiah(item.total);

        });
        
        pesanWhatsApp += '%0ATotal : %20' + rupiah(Alpine.store('cart').total);
        // Tautan WhatsApp 
        var linkWhatsApp = 'https://wa.me/' + nomorWhatsApp +
                           '?text=Nama : %20' + encodeURIComponent(nama) +
                           '%0AEmail : %20' + encodeURIComponent(email) +
                           '%0ANomor%20HP : %20' + encodeURIComponent(nomorHp) +
                           '%0AAlamat : %20' + encodeURIComponent(alamat) +
                           '%0AKeterangan : %20' + encodeURIComponent(keterangan) +
                           '%0A%0AKeranjang%20Belanja : %0A' + pesanWhatsApp;
        window.open(linkWhatsApp, '_blank');
    } catch (error) {
        
        // Menangkap dan menanggapi kesalahan
        alert('Terjadi kesalahan: ' + error.message);
    }
}

myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // kirim ke whatsApp
    sendToWhatsApp();

    // reset semua konten setelah tekan tombol kirim
    Alpine.store('cart').clearCart();
});