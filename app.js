const fileInput = document.getElementById('fileInput');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');

function resizeImage() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    const dataURI = reader.result;

    // Image into canva 1
    const ctx1 = image1.getContext('2d');
    const img1 = new Image();
    img1.onload = () => ctx1.drawImage(img1, 0, 0, 3600, 4500);
    img1.src = dataURI;

    // Image into canva 2
    const ctx2 = image2.getContext('2d');
    const img2 = new Image();
    img2.onload = () => ctx2.drawImage(img2, 0, 0, 3300, 4200);
    img2.src = dataURI;

    // Image into canva 3
    const ctx3 = image3.getContext('2d');
    const img3 = new Image();
    img3.onload = () => ctx3.drawImage(img3, 0, 0, 3000, 3600);
    img3.src = dataURI;

    // Image into canva 4
    const ctx4 = image4.getContext('2d');
    const img4 = new Image();
    img4.onload = () => ctx4.drawImage(img4, 0, 0, 2400, 3000);
    img4.src = dataURI;

    // Image into canva 5
    const ctx5 = image5.getContext('2d');
    const img5 = new Image();
    img5.onload = () => ctx5.drawImage(img5, 0, 0, 1800, 2400);
    img5.src = dataURI;

    // Image into canva 6
    const ctx6 = image6.getContext('2d');
    const img6 = new Image();
    img6.onload = () => ctx6.drawImage(img6, 0, 0, 1500, 2100);
    img6.src = dataURI;

    // Image into canva 7
    const ctx7 = image7.getContext('2d');
    const img7 = new Image();
    img7.onload = () => ctx7.drawImage(img7, 0, 0, 1200, 1800);
    img7.src = dataURI;

  });

  // Read the file as a data URI
  reader.readAsDataURL(file);
}

function downloadImages() {
  // Link element to download images
  const link1 = document.createElement('a');
  link1.download = '12x15.png';
  link1.href = image1.toDataURL();
  link1.click();

  const link2 = document.createElement('a');
  link2.download = '11x14.png';
  link2.href = image2.toDataURL();
  link2.click();

  const link3 = document.createElement('a');
  link3.download = '10x12.png';
  link3.href = image3.toDataURL();
  link3.click();

  const link4 = document.createElement('a');
  link4.download = '8x10.png';
  link4.href = image4.toDataURL();
  link4.click();

  const link5 = document.createElement('a');
  link5.download = '6x8.png';
  link5.href = image5.toDataURL();
  link5.click();

  const link6 = document.createElement('a');
  link6.download = '5x7.png';
  link6.href = image6.toDataURL();
  link6.click();

  const link7 = document.createElement('a');
  link7.download = '4x6.png';
  link7.href = image7.toDataURL();
  link7.click();

}