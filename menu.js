// MEnu yang di tekan

document.addEventListener("DOMContentLoaded", function() {

    // Menu yang di tekan

    const foodButton = document.getElementById("foodButton");
    const drinkButton = document.getElementById("drinkButton");
    const orderButton = document.getElementById("orderButton")
    const foodContent = document.getElementById("foodContent");
    const drinkContent = document.getElementById("drinkContent");
    const orderContent = document.getElementById("orderContent")
    const content = document.getElementById("content");

    // Content yang memuat semua detail menu

    const multiWrapper1 = document.querySelector(".multi-wrapper1");
    const multiWrapper2 = document.querySelector(".multi-wrapper2");

    // Detail semua menu

    // Makanan
    const burger = document.getElementById('burger');
    const sosis = document.getElementById('sosis');
    const kue = document.getElementById('kue');


    // Minuman
    const KopiHitam = document.getElementById('kopi-hitam');
    const KopiMaca = document.getElementById('kopi-maca');
    const kopiKapalApi = document.getElementById('kopi-api');

    // Button Back
    const drinkBtnBack = document.querySelectorAll(".drink-btn");
    const foodBtnBack = document.querySelectorAll(".food-btn");

    // BUtton semua detail menu

    // makanan
    const btnDetailBurger = document.getElementById('btn-burger');
    const btnDetailSosis =document.getElementById('btn-sosis');
    const btnDetailKue = document.getElementById('btn-kue');

    // minuman
    const btnDetailMacchiato = document.getElementById("macchiato");
    const btnDetailKopiHitam = document.getElementById("hitam");
    const btnDetailKopiKapalApi = document.getElementById("kapalApi");




    // mEnampilkan konten secara default

    showDrinkContent();

    // Menu makanan jika di klik

    foodButton.addEventListener("click", function() {
        showFoodContent();
    });

    // Menu minuman jika di klik
    drinkButton.addEventListener("click", function() {
        showDrinkContent();
    });

    // menu order jika di klik

    orderButton.addEventListener("click", function(){
        showOrderContent();
    });

    // detail makanan

    btnDetailBurger.addEventListener("click", function(){
        detailBurger();
    });

    btnDetailSosis.addEventListener("click", function(){
        detailSosis();
    });

    btnDetailKue.addEventListener("click", function(){
        detailKue();
    })

    // Detail Minuman

    btnDetailMacchiato.addEventListener("click", function(){
        detailMacchiato();
    });

    btnDetailKopiHitam.addEventListener("click", function(){
        detailKopiHitam();
    });

    btnDetailKopiKapalApi.addEventListener("click", function(){
        detailKopiKapalApi();
    });

    // button back

    drinkBtnBack.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            buttonBack();
        });
    });

    foodBtnBack.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            foodBack();
        });
    });

    // Lihat Konten makanan

    function showFoodContent() {
        content.style.transform = "translateY(0)";
        foodContent.style.display = "block";
        drinkContent.style.display = "none";
        orderContent.style.display = "none";
        multiWrapper1.style.display = "none";
        multiWrapper2.style.display = "none";
    }

    // Lihat konten minuman
    
    function showDrinkContent() {
        content.style.transform = "translateY(0)";
        foodContent.style.display = "none";
        drinkContent.style.display = "block";
        orderContent.style.display = "none";
        multiWrapper1.style.display = "none";
        multiWrapper2.style.display = "none";
    }

    // lihat konten order
    
    function showOrderContent() {
        content.style.transform = "translateY(0)";
        foodContent.style.display = "none";
        drinkContent.style.display = "none";
        orderContent.style.display = "block";
        multiWrapper1.style.display = "none";
        multiWrapper2.style.display = "none";
    }

    // Food content

    function detailBurger() {
        content.style.transform = 'translateY(0)';
        foodContent.style.display = "none";
        drinkContent.style.display = "none";
        orderContent.style.display = "none";
        multiWrapper1.style.display = "block";
        multiWrapper2.style.display = "none";
        KopiMaca.style.display = "none";
        KopiHitam.style.display = "none";
        kopiKapalApi.style.display = "none";
        burger.style.display = "block";
    }

    function detailSosis() {
        content.style.transform = 'translateY(0)';
        foodContent.style.display = "none";
        drinkContent.style.display = "none";
        orderContent.style.display = "none";
        multiWrapper1.style.display = "block";
        multiWrapper2.style.display = "none";
        KopiMaca.style.display = "none";
        KopiHitam.style.display = "none";
        kopiKapalApi.style.display = "none";
        burger.style.display = "none";
        sosis.style.display = "block";
        kue.style.display = "none";
    }

    function detailKue() {
        content.style.transform = 'translateY(0)';
        foodContent.style.display = "none";
        drinkContent.style.display = "none";
        orderContent.style.display = "none";
        multiWrapper1.style.display = "block";
        multiWrapper2.style.display = "none";
        KopiMaca.style.display = "none";
        KopiHitam.style.display = "none";
        kopiKapalApi.style.display = "none";
        burger.style.display = "none";
        sosis.style.display = "none";
        kue.style.display = "block";
    }

    // Drink COntent

    function detailMacchiato() {
        content.style.transform = 'translateY(0)';
        foodContent.style.display = "none";
        drinkContent.style.display = "none";
        orderContent.style.display = "none";
        multiWrapper1.style.display = "none";
        multiWrapper2.style.display = "block";
        KopiMaca.style.display = "block";
        KopiHitam.style.display = "none";
        kopiKapalApi.style.display = "none";
        burger.style.display = "none";
    }

    function detailKopiHitam() {
        content.style.transform = 'translateY(0)';
        foodContent.style.display = "none";
        drinkContent.style.display = "none";
        orderContent.style.display = "none";
        KopiMaca.style.display = "none";
        multiWrapper1.style.display = "none";
        multiWrapper2.style.display = "block";
        KopiHitam.style.display = "block";
        kopiKapalApi.style.display = "none";
        burger.style.display = "none";
    }

    function detailKopiKapalApi() {
        content.style.transform = 'translateY(0)';
        foodContent.style.display = "none";
        drinkContent.style.display = "none";
        orderContent.style.display = "none";
        multiWrapper1.style.display = "none";
        multiWrapper2.style.display = "block";
        KopiMaca.style.display = "none";
        KopiHitam.style.display = "none";
        kopiKapalApi.style.display = "block";
        burger.style.display = "none";
    }

    // Button back

    function buttonBack() {
        content.style.transform = 'translateY(0)';
        drinkContent.style.display = "block";
        multiWrapper1.style.display = "none";
        multiWrapper2.style.display = "none";
    }

    function foodBack(){
        content.style.transform = 'translateY(0)';
        foodContent.style.display = "block";
        multiWrapper1.style.display = "none";
        multiWrapper2.style.display = "none";
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

        if (!nama || !email || !nomorHp || !alamat) {
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
        var pesanWhatsApp = '%0A%0APesanan%20Anda : %0A';

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
                           '%0AKeterangan : %20' + encodeURIComponent(keterangan) + pesanWhatsApp;
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

const imgs = document.querySelectorAll('.img-item a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);



