document.addEventListener('alpine:init', () => {
    Alpine.data('foodContent', () => ({

        items: [
            { id: 1, name: 'Burger ', img: 'buger.jpg', price: 10000, deskripsi: 'wenakkk'},
            { id: 2, name: 'Kue ', img: 'cake.jpg', price: 15000, deskripsi: 'jossss'},
            { id: 3, name: 'Sosis ', img: 'sosis.jpg', price: 10000, deskripsi: 'mahokkk'},
        ],
    }));

    Alpine.data('drinkContent', () => ({
        items: [
            { id: 1, name: 'Kopi Macchiato ', img: 'menu1.jpg', price: 5000, deskripsi: 'sueger'},
            { id: 2, name: 'Kopi Hitam ', img: 'menu2.jpg', price: 5000, deskripsi: 'dinomu leee'},
            { id: 3, name: 'Kopi Kapal Api ', img: 'kapalapi.webp', price: 5000, deskripsi: 'manut o aku'},
        ],
    }));


    Alpine.store('cart', {

        // Awal permulaan sebelum ada pesanan di keranjang

        items: [],
        total: 0,
        totalJumlah: 0,

        // Digunakan untuk tombol plus ( + )

        add(newItem) {
            const cartItem = this.items.find((item) => item.id === newItem.id);

            if(!cartItem) {
                this.items.push({...newItem, totalJumlah: 1, total: newItem.price});
                this.total += newItem.price;
                this.totalJumlah++;
            } else {
                this.items = this.items.map((item) => {
                    if(item.id !== newItem.id){
                        return item;
                    } else {
                        item.totalJumlah ++;
                        item.total = item.price * item.totalJumlah;
                        this.totalJumlah++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },

        // digunakan untuk tombol kurang ( - )

        remove(id) {
            const cardItem = this.items.find((item) => item.id === id );

            if(cardItem.totalJumlah > 1) {
                this.items = this.items.map((item) => {
                    if(item.id !== id) {
                        return item;
                    } else {
                        item.totalJumlah--;
                        item.total = item.price * item.totalJumlah;
                        this.totalJumlah--;
                        this.total -= item.price;
                        return item;
                    }
                });
            } else if (cardItem.totalJumlah === 1) {
                this.items = this.items.filter((item) => item.id !== id);
                this.totalJumlah--;
                this.total -= cartItem.price;
            }
        },

        // digunakan untuk pada saat menekan tombol kirim / mengirim pesanan

        clearCart() {
            this.items = [];
            this.total = 0;
            this.totalJumlah = 0;
        },
    });
});

// Konversi uang ke rupiah

const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};

