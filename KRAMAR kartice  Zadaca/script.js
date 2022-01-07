var automobili = [
  {
    img: "https://www.askramar.com/Files/Foto/Vozila/2021/6/428754.JPG",
    naziv: "Mercedes-Benz AMG GT 63 S 4Matic+ 4 Doors 639 KS",
    cijena: "120,000.00",
    godina: "2020",
    kilometri: "8 500",
  },
  {
    img: "https://www.askramar.com/Files/Foto/Vozila/2021/12/460784.JPG",
    naziv:
      "Mercedes-Benz GLC 250 D Coupe 4Matic 9G-Tronic Sportpaket AMG Line EXCLUSIVE",
    cijena: "150,000.00",
    godina: "2017",
    kilometri: "116 339",
  },
  {
    img: "https://www.askramar.com/Files/Foto/Vozila/2021/12/461224.JPG",
    naziv: "Mercedes-Benz S 400 D Long 4Matic AMG Line -Novi model-",
    cijena: "222,990.00",
    godina: "2021",
    kilometri: "26 862",
  },
  {
    img: "https://www.askramar.com/Files/Foto/Vozila/2021/10/451127.JPG",
    naziv: "Mercedes-Benz CLA 180 D Sportpaket EXCLUSIVE -FACELIFT-",
    cijena: "32,000.00",
    godina: "2017",
    kilometri: "156 339",
  },
];

function crE(el) {
  return document.createElement(el);
}
function append(appE) {
  return document.body.appendChild(appE);
}
function displayCars() {
  for (var auto of automobili) {
    var wrapper = crE("div");
    append(wrapper);
    wrapper.className = "wrapper";
    var image = crE("img");
    wrapper.append(image);
    image.src = auto.img;
    image.className = "voziloPhoto";
    var header = crE("div");
    wrapper.append(header);
    header.innerHTML = auto.naziv;
    header.className = "header";
    var cijena = crE("p");
    wrapper.append(cijena);
    cijena.innerHTML = `CIJENA U KM: ${auto.cijena}`;
    cijena.className = "paragraf line";
    var godina = crE("p");
    wrapper.append(godina);
    godina.innerHTML = `GODINA: ${auto.godina}`;
    godina.className = " godina paragraf";
    var kilometri = crE("p");
    wrapper.append(kilometri);
    kilometri.innerHTML = `KILOMETRI: ${auto.kilometri}`;
    kilometri.style.display = "inline";
    kilometri.className = " paragraf kilometri";
  }
}

displayCars(automobili);
