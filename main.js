// const imageInput = document.getElementById("file")
// const preview = document.getElementById("preview")

// window.onload = () => {
//   const savedImage = localStorage.getItem("uploadedImage")
//   if (savedImage) {
//     preview.src = savedImage
//   }
// }
// const loadFile = () => {
//   imageInput.click()
//   imageInput.onchange = (e) => {
//     const file = e.target.files[0]
//     if (!file || !file.type.match("image/*")) return
//     readFile(file)
//   }
// }

// const readFile = (file) => {
//   const reader = new FileReader()
  
//   reader.onload = () => {
//     localStorage.setItem("uploadedImage", reader.result)
//     preview.src = reader.result
//   }
//   reader.readAsDataURL(file)
// }

// async function getDataURLFromBlob(blob) {
//   const arrayBuffer = await blob.arrayBuffer()
//   const bytes = new Uint8Array(arrayBuffer)
//   const binaryString = bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), "")
//   const base64 = btoa(binaryString)
//   return `data:application/octet-stream;base64,${base64}`
// }

const utf8_to_b64 = (str) => {
  return window.btoa(unescape(encodeURIComponent(str)))
}

const b64_to_utf8 = (str) => {
  return decodeURIComponent(escape(window.atob(str)))
}

//alert(b64_to_utf8("0J/KkNC60LLQtdGK"))

class Product {
  constructor(name, price) {
    this._name = name
    this._price = price
  }
  
  get price() {
    return `$${this._price}`
  }
  set price(newPrice) {
    if (newPrice > 0) {
      this._price = newPrice
    }
  }
}

// const video = document.getElementById("video")

// navigator.mediaDevices.getUserMedia({ video: true })
// .then(stream => {
//   video.srcObject = stream
// })

