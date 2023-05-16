initdata();

function initdata() {
  // BANDS
  if (!localStorage.bands) {
    const bands = [
      {
        name: "Muse",
        genre: "Pop-Rock",
        cover:
          "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/b/9/c/6/b9c663834bfaa66bfc81ab2ac754a628.jpg",
        desc: "The best band ever",
        music: "xxx",
      },
      {
        name: "RadioHead",
        genre: "Pop-Rock",
        cover:
          "https://ep01.epimg.net/elpais/imagenes/2017/05/17/icon/1495017818_647155_1495125183_noticia_normal.jpg",
        desc: "Great songs!",
        music: "xxx",
      },
      {
        name: "James",
        genre: "Pop-Rock",
        cover:
          "http://ksassets.timeincuk.net/wp/uploads/sites/55/2013/01/2012JamesBandPress181212-2.jpg",
        desc: "The 90's were amazing!",
        music: "xxx",
      },
      {
        name: "Metallica",
        genre: "Metal",
        cover:
          "https://images.impresa.pt/blitz/2016-08-19-metallica.jpg/original/mw-860",
        desc: "Too much metal for my head",
        music: "xxx",
      },
      {
        name: "Placebo",
        genre: "Pop-Rock",
        cover: "https://i.ytimg.com/vi/9aIYBSiAEDk/0.jpg",
        desc: "Brian Molko is a star!",
        music: "xxx",
      },
    ];
    localStorage.setItem("bands", JSON.stringify(bands));
  }

  // USERS
  if (!localStorage.users) {
    const users = [
      {
        username: "user1",
        password: "pass1",
      },
      {
        username: "user2",
        password: "pass2",
      },
    ];
    console.log("inject");
    localStorage.setItem("users", JSON.stringify(users));
  }
}
