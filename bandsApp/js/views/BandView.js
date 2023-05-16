import * as Band from "../models/BandModel.js";

function bandView() {
  Band.init();

  const band = Band.getCurrentBand();
  document.querySelector("#bandName").innerHTML = band.name;
  document.querySelector("#bandGenre").innerHTML = band.genre;
  document.querySelector("#bandDescription").innerHTML = band.desc;
  document.querySelector("#bandPhoto").src = band.cover;
}

bandView();
