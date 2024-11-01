const btnElement = document.querySelector("button")
const imgElement = document.getElementById("qr-img")
const boxElement = document.getElementById("img-box")
const qrElement = document.getElementById("qr-text")
const downloadElement = document.getElementById("download")



btnElement.addEventListener('click', () => {
  if( qrElement.value.length > 0){
  imgElement.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrElement.value}`

  boxElement.classList.add("show-img")
  
  } else 
  alert("Please enter a valid text");

});

downloadElement.addEventListener('click', () => {
  if (imgElement.src) {
      const link = document.createElement("a");
      link.href = imgElement.src;
      link.download = "QRCode.png";
      link.click();
    
  }
  
});




