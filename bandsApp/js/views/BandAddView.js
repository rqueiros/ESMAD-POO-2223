import * as Band from "../models/BandModel.js";

function addBandView() {
  Band.init();

  document.querySelector("#frmAddBand").addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      Band.add(
        document.querySelector("#txtName").value,
        document.querySelector("#sltGenre").value,
        document.querySelector("#txtCover").value,
        document.querySelector("#txtDescription").value,
        document.querySelector("#txtMusic").value
      );
      alert("Band added with success!");

      setTimeout(() => {
        location.href = "../index.html";
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  });
}

addBandView();
