const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
Happy birthday to you
มีความสุขมากๆน้ะคิดอะไรก็ขอให้สมหวังอยู่ด้วยกันไปนานๆย้ายไปการบินไทยก็ขอให้ตั้งใจน้ะเค้าจะคอยซัพพอร์ตเชเสนอ ถ้าเหนื่อยก็มาบอกน้ะเค้าจะคอยกอดตรงนี้แหละ ขอให้มีความสุขกับชีวิตและการทำงานหาตังได้เยอะๆ แล้ววันที่เค้าพร้อมเค้าจะดูแลเชเอง💗
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
