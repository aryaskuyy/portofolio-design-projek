// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Mendaftarkan event listener ketika halaman telah dimuat sepenuhnya.

    // Validasi formulir kontak
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah pengiriman formulir secara default

        // Mengambil nilai dari input formulir
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Validasi input
        if (name === "") {
            alert("Nama tidak boleh kosong");
            nameInput.focus();
            return false;
        }

        if (email === "") {
            alert("Email tidak boleh kosong");
            emailInput.focus();
            return false;
        } else if (!isValidEmail(email)) {
            alert("Email tidak valid");
            emailInput.focus();
            return false;
        }

        if (message === "") {
            alert("Pesan tidak boleh kosong");
            messageInput.focus();
            return false;
        }

        // Jika semua validasi berhasil, Anda dapat mengirim data formulir ke server di sini
        // Misalnya, dengan menggunakan fetch API atau mengirim permintaan AJAX.

        // Setelah pengiriman berhasil, Anda dapat membersihkan formulir atau menampilkan pesan sukses.
        // contactForm.reset();
        // alert("Pesan Anda telah terkirim!");

        return true;
    });

    // Fungsi untuk memeriksa apakah email valid menggunakan ekspresi reguler
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Navigasi animasi untuk tautan menu
    const menuLinks = document.querySelectorAll("nav ul li a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Ambil target tautan (misalnya, #portfolio) dan elemennya
            const targetId = this.getAttribute("href").substring(1); // Hilangkan tanda pagar (#)
            const targetElement = document.getElementById(targetId);

            // Gulir ke elemen target dengan animasi smooth scroll
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
