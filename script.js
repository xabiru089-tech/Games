// Database Dummy untuk contoh awal (Sample Gambar RAW Memanjang)
const sampleImages = [
  "https://picsum.photos/800/1200?random=1",
  "https://picsum.photos/800/1200?random=2",
  "https://picsum.photos/800/1200?random=3",
  "https://picsum.photos/800/1200?random=4"
];

// Element DOM
const imageWrapper = document.getElementById("imageWrapper");
const openAdminBtn = document.getElementById("openAdminBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const adminModal = document.getElementById("adminModal");
const saveChapterBtn = document.getElementById("saveChapterBtn");
const inputUrls = document.getElementById("inputUrls");
const chapterSelect = document.getElementById("chapterSelect");
const chapterIndicator = document.getElementById("chapterIndicator");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Render Daftar Gambar ke Reader
function renderImages(urls) {
  imageWrapper.innerHTML = ""; // Bersihkan gambar lama

  if (!urls || urls.length === 0) {
    imageWrapper.innerHTML = `<div class="error-msg"><p>Tidak ada gambar pada chapter ini.</p></div>`;
    return;
  }

  urls.forEach((url, index) => {
    if (url.trim() !== "") {
      const img = document.createElement("img");
      img.src = url.trim();
      img.alt = `Halaman ${index + 1}`;
      img.loading = "lazy"; // Optimize loading
      imageWrapper.appendChild(img);
    }
  });

  // Scroll otomatis kembali ke atas saat ganti chapter
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inisialisasi Pertama
renderImages(sampleImages);

// Modal Event Handlers
openAdminBtn.addEventListener("click", () => {
  adminModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  adminModal.style.display = "none";
});

// Simpan/Muat Gambar Baru dari Textarea Modal
saveChapterBtn.addEventListener("click", () => {
  const textValue = inputUrls.value.trim();
  if (textValue !== "") {
    const urlArray = textValue.split("\n"); // Memisah URL per baris
    renderImages(urlArray);
    adminModal.style.display = "none";
    inputUrls.value = ""; // Clear input
  } else {
    alert("Harap masukkan minimal 1 URL gambar!");
  }
});

// Event Dropdown Chapter
chapterSelect.addEventListener("change", (e) => {
  const chNumber = e.target.value;
  chapterIndicator.innerText = `Chapter ${chNumber}`;
  // Kamu bisa menambahkan logic pemanggilan URL chapter spesifik di sini
  renderImages(sampleImages); 
});

// Event Navigasi Tombol Footer
prevBtn.addEventListener("click", () => {
  let currentCh = parseInt(chapterSelect.value);
  if (currentCh > 1) {
    chapterSelect.value = currentCh - 1;
    chapterIndicator.innerText = `Chapter ${currentCh - 1}`;
    renderImages(sampleImages);
  }
});

nextBtn.addEventListener("click", () => {
  let currentCh = parseInt(chapterSelect.value);
  chapterSelect.value = currentCh + 1;
  chapterIndicator.innerText = `Chapter ${currentCh + 1}`;
  renderImages(sampleI
  mages);
});
