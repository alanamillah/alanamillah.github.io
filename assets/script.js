let bg = document.querySelector(".bg-img");
let galery = document.querySelector(".galery");
let pita = document.querySelector(".pita-container");
let typedSlide;
let explore;
let catatan;
let feed;

function widgetWaktu() {
  let date = new Date();
  let hari = date.getDay();
  let tanggal = date.getDate();
  let bulan = date.getMonth();
  let tahun = date.getFullYear();
  setTimeout("widgetWaktu()", 1000);
  switch (hari) {
    case 0:
      hari = "Minggu";
      break;
    case 1:
      hari = "Senin";
      break;
    case 2:
      hari = "Selasa";
      break;
    case 3:
      hari = "Rabu";
      break;
    case 4:
      hari = "Kamis";
      break;
    case 5:
      hari = "Jum'at";
      break;
    case 6:
      hari = "Sabtu";
      break;
  }
  switch (bulan) {
    case 0:
      bulan = "Januari";
      break;
    case 1:
      bulan = "Februari";
      break;
    case 2:
      bulan = "Maret";
      break;
    case 3:
      bulan = "April";
      break;
    case 4:
      bulan = "Mei";
      break;
    case 5:
      bulan = "Juni";
      break;
    case 6:
      bulan = "Juli";
      break;
    case 7:
      bulan = "Agustus";
      break;
    case 8:
      bulan = "September";
      break;
    case 9:
      bulan = "Oktober";
      break;
    case 10:
      bulan = "November";
      break;
    case 11:
      bulan = "Desember";
      break;
  }
  let tampilTanggal = hari + ", " + tanggal + " " + bulan + " " + tahun;

  document.getElementById("jam").innerHTML =
    (date.getHours() < 10 ? "0" : "") + date.getHours();
  document.getElementById("menit").innerHTML =
    (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  document.getElementById("tanggal").innerHTML = tampilTanggal;
}

document.addEventListener("click", function () {
  const bs = document.getElementById("backsound");
  bs.play();
});

document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout("widgetWaktu()", 1000);

  explore = function () {
    // galery.style.visibility = "hidden";

    if (galery.classList.contains("visible")) {
      galery.classList.remove("visible");
    }

    if (typedSlide != null) {
      typedSlide.destroy();
    }
    Swal.fire({
      imageUrl:
        "https://i.pinimg.com/originals/4c/63/1f/4c631f3f33889d55eeb1b6a3432b36db.gif",
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "joget",
      html: "<span id='hai'></span>",
      confirmButtonText: "Hai sayangkuu!",
      allowOutsideClick: false,
    }).then(() => {
      bg.style = "transform: scale(1.5); transition: all .8s ease;";
      Swal.fire({
        imageUrl:
          "https://s3.getstickerpack.com/storage/uploads/sticker-pack/quby-pentol-gif/sticker_9.gif?afb050261cc5640e21ce2eb44043c17a",
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "ngesot",
        html: "<span id='sesuatu'></span>",
        confirmButtonText: "Apaan ya??",
        allowOutsideClick: false,
      }).then(() => {
        bg.style = "transform: scale(1.2); transition: all .8s ease;";
        Swal.fire({
          imageUrl:
            "https://i.pinimg.com/originals/58/31/d7/5831d7ee7bece67034325b85f2ed9ef1.gif",
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "ngesot",
          html: "<span id='beneran'></span>",
          confirmButtonText: "Iyaa mau..",
          allowOutsideClick: false,
          showCancelButton: true,
          cancelButtonText: "Ndak ah..",
        }).then((res) => {
          bg.style = "transform: scale(1.5); transition: all .8s ease;";
          if (res.isConfirmed) {
            bg.style = "transform: scale(1); transition: all .8s ease;";
            Swal.fire({
              imageUrl:
                "https://temanbakat.id/img/Journey%202%20Kado%20Gif-Dark%20Purple.9ee2b605.gif",
              imageWidth: 100,
              imageHeight: 100,
              imageAlt: "ngesot",
              html: `<span id='selamat'></span>`,
              confirmButtonText: "Makasih sayangkuu!!",
              allowOutsideClick: false,
            }).then(() => {
              bg.style = "transform: scale(1.6); transition: all .8s ease;";
              Swal.fire({
                imageUrl:
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia2.giphy.com%2Fmedia%2FvxAO4SdoYLmWmwWIof%2Fsource.gif&f=1&nofb=1&ipt=f2ae64d90ca25a1ca0261166d5e3f74ab461a3103dcde3645783b4da0f559f5a&ipo=images",
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: "ngesot",
                html: "<span id='liat'></span>",
                confirmButtonText: "Iyaa ayokk!",
                allowOutsideClick: false,
              }).then(() => {
                bg.style = "transform: scale(1); transition: all .8s ease;";
                // galery.style.visibility = "visible";
                galery.classList.add("visible");
                opening();
              });

              let typed = new Typed("#liat", {
                strings: ["Liat sesuatu yukk!! 😁😁"],
                typeSpeed: 50,
              });
            });

            pita.style.visibility = "visible";
            setTimeout(() => {
              pita.style.visibility = "hidden";
            }, 20000);

            let typed = new Typed("#selamat", {
              strings: [
                "Selamat ulang tahun sayangkuu!! 🎉<br>maaf yaa gabisa ngasih apa apa 🥲",
                "Semoga usia semakin berkah...😊",
                "Menjadi pribadi yang lebih baik... 😁",
                "Tambah cuanntikkkk... 😎",
                "Tambah glowing... 🤣",
                "Tambah gemooyyy... 😅",
                "Tambah imuuttt... 😍",
                "Tambah lucuuu... 👌",
                "Tambah sayangg... 🤩",
                "Semuaaa yang baik baik pokok ee... hehehe 💕",
                "Aku suaayang sampeannnn.... ❤️😘😘",
              ],
              typeSpeed: 40,
            });
          } else {
            bg.style = "transform: scale(1); transition: all .8s ease;";
            Swal.fire({
              imageUrl:
                "https://i.pinimg.com/originals/d9/ee/bc/d9eebc53b32cce2b93eb0301cfc64c2c.gif",
              imageWidth: 100,
              imageHeight: 100,
              imageAlt: "ngesot",
              html: "Yahh,, yaudah kalo gamau 😒",
              confirmButtonText: "Hmm..",
              allowOutsideClick: false,
            });
          }
        });

        let typed = new Typed("#beneran", {
          strings: ["Emang beneran mau? 😉"],
          typeSpeed: 50,
        });
      });

      let typed = new Typed("#sesuatu", {
        strings: ["Aku mau kasih sesuatu nih...! 😅"],
        typeSpeed: 50,
      });
    });

    let typed = new Typed("#hai", {
      strings: ["Haiii cantikkuu! 🧒"],
      typeSpeed: 50,
    });
  };
  explore();

  catatan = function () {
    if (galery.classList.contains("visible")) {
      galery.classList.remove("visible");
    } else {
      galery.classList.add("visible");
      if (typedSlide != null) {
        typedSlide.destroy();
      }
      opening();
    }

    // if (galery.style.visibility == "visible") {
    //   console.log("galery opened!");
    // } else {
    //   galery.style.visibility = "visible";
    //   if (typedSlide != null) {
    //     typedSlide.destroy();
    //   }
    //   opening();
    // }
  };

  feed = function () {
    // galery.style.visibility = "hidden";
    if (galery.classList.contains("visible")) {
      galery.classList.remove("visible");
    } else {
      galery.classList.add("visible");
    }
    window.location.href = "https://api.whatsapp.com/send?phone=628983569362";
  };

  /**
   * Slide swiper JS
   */

  let currentSlideIndex = 0;
  const swiperEl = document.querySelector(".galery");
  swiperEl.addEventListener("swiperslidechange", (event) => {
    let slideIndex = event.detail[0].activeIndex;
    typer(slideIndex);
    currentSlideIndex = slideIndex;
  });

  const opening = function () {
    typer(currentSlideIndex);
  };

  const typer = function (slideIndex) {
    console.log("iki slide index:", slideIndex);
    if (typedSlide != null) {
      typedSlide.destroy();
    }

    switch (slideIndex) {
      case 0:
        typedSlide = new Typed("#slide1", {
          strings: [
            "Bermula dari makan malam di nasi surga. Malam itu sungguh malam yang membuat hati ini berdebar, hehe. Gugup tapi geembiraa... 🎉",
          ],
          typeSpeed: 50,
        });
        break;
      case 1:
        typedSlide = new Typed("#slide2", {
          strings: [
            "Perlahan aku mulai mengagumimu, senyuman itu sungguh telah mencuat menembus dalam ingatan. Aaahh beginikah jatuh cinta... 😍",
          ],
          typeSpeed: 50,
        });
        break;
      case 2:
        typedSlide = new Typed("#slide3", {
          strings: [
            "Seperti mimpi, ternyata sampean mau menerimaku walaupun keadaanku yang bisa dibilang gak perfek, hehehe. Mau diajak keluar juga,, wahh...",
          ],
          typeSpeed: 50,
        });
        break;
      case 3:
        typedSlide = new Typed("#slide4", {
          strings: [
            "Sampean udah baik banget, keluar di tempat sederhana pun it's oke. Hehe. Padahal secantik sampean seharusnya di tempat yang sesuai.. huhuhu..",
          ],
          typeSpeed: 50,
        });
        break;
      case 4:
        typedSlide = new Typed("#slide5", {
          strings: [
            "Ehh,, ini foto apaan yaa... gayanya kaya prewedd tapi bukan juga se, hahaha kaya model tegang gituuu heheh,, tapi kala itu cukup berkesan.. Hmmm",
          ],
          typeSpeed: 50,
        });
        break;
      case 5:
        typedSlide = new Typed("#slide6", {
          strings: [
            "Heii masih ingat gak?? pernah loh kita nonton bareng, dan kalo gak salah pernah juga pas puasa hahahaha... 😅, kapan nonton lagi??",
          ],
          typeSpeed: 50,
        });
        break;
      case 6:
        typedSlide = new Typed("#slide7", {
          strings: [
            "Ini jugaa.. keluyuran ke Ampel. Heheh jadi inget saat saat itu yaa... itu kita keluar sampe mualem bahkan mau subuh baru pulang. Huhh..",
          ],
          typeSpeed: 50,
        });
        break;
      case 7:
        typedSlide = new Typed("#slide8", {
          strings: [
            "Hoiii,,, ini foto bareng padahal pas ada anak anak loo... dan aman dari rasan-rasan orang hahaha....",
          ],
          typeSpeed: 50,
        });
        break;
      case 8:
        typedSlide = new Typed("#slide9", {
          strings: [
            "Ya begitulah,,, cuma bisa ngajak sampean paling paling ya ke air terjun,, hehehe... belum bisa ngasih hadiah yang mewah..",
          ],
          typeSpeed: 50,
        });
        break;
      case 9:
        typedSlide = new Typed("#slide10", {
          strings: [
            "Sampean udah buanyak ngasih aku, terlebih aku sampean ajak ke acara nikahan saudara sampean, wuhh ndredeg loo aslinyaa. Kaya-kaya kita juga mau nikah hahah",
          ],
          typeSpeed: 50,
        });
        break;
      case 10:
        typedSlide = new Typed("#slide11", {
          strings: [
            "Makasih ya sayangku,, udah menerima pemberian sederhanaku pas ultah sampean di tahun yang lalu, bukan barang mahal, tapi diberikan dengan penuh ketulusan kok.",
          ],
          typeSpeed: 50,
        });
        break;
      case 11:
        typedSlide = new Typed("#slide12", {
          strings: [
            "Latihan nyetir sambil kasih surprise,, emang sampean jago sekali bikin kejutan. Sampe aku bingung gimana balasnya... 😁",
          ],
          typeSpeed: 50,
        });
        break;
      case 12:
        typedSlide = new Typed("#slide13", {
          strings: [
            "Yaudah foto dulu ituuu rice bowl nyaa... nasinyaa duiikiiittttt masih kurang kenyang akuuu... hahahahah",
          ],
          typeSpeed: 50,
        });
        break;
      case 13:
        typedSlide = new Typed("#slide14", {
          strings: [
            "Heii fotbar lagiii... untung masih bisa menyempatkan foto bareng di luar negeri hehehe... gupuh lo pas waktu itu.. selak keliatan orang-orang...",
          ],
          typeSpeed: 50,
        });
        break;
      case 14:
        typedSlide = new Typed("#slide15", {
          strings: [
            "Ini looo.. kaya bukan sampean... hehehe... makeup nya loo kuandell,, hahahaha... tapi aku pangling dan terpesona sekaliiiiii uhuuyy....",
          ],
          typeSpeed: 50,
        });
        break;
      case 15:
        typedSlide = new Typed("#slide16", {
          strings: [
            "Yaa dengan cara ini se aku membahagiakan sampean,, heehe,, semoga cara sederhana ini sudah bikin sampean sukaa.. Amiinnn",
          ],
          typeSpeed: 50,
        });
        break;
      case 16:
        typedSlide = new Typed("#slide17", {
          strings: [
            "Dan ini kita keluar yang barusan aja kemarin, hehehe... cukup estetik hahah kehujanan tapi tetep lanjut. next bawa mobil aja...",
          ],
          typeSpeed: 50,
        });
        break;
      case 17:
        typedSlide = new Typed("#slide18", {
          strings: [
            "Doaku buat sampean. semoga selalu mendapat berkah.. tetep sayang aku.. daannnn jangan lupa cium dulu hehehe... 😘 Selamat ulang tahun sayangku ",
          ],
          typeSpeed: 50,
        });
        break;
    }
  };

  // end swiper

  /**
   * Pita
   */
  const Confettiful = function (el) {
    this.el = el;
    this.containerEl = null;

    this.confettiFrequency = 10;
    this.confettiColors = [
      "#EF2964",
      "#00C09D",
      "#2D87B0",
      "#48485E",
      "#EFFF1D",
    ];
    this.confettiAnimations = ["slow", "medium", "fast"];

    this._setupElements();
    this._renderConfetti();
  };

  Confettiful.prototype._setupElements = function () {
    const containerEl = document.createElement("div");
    const elPosition = this.el.style.position;

    if (elPosition !== "relative" || elPosition !== "absolute") {
      this.el.style.position = "relative";
    }

    containerEl.classList.add("confetti-container");

    this.el.appendChild(containerEl);

    this.containerEl = containerEl;
  };

  Confettiful.prototype._renderConfetti = function () {
    this.confettiInterval = setInterval(() => {
      const confettiEl = document.createElement("div");
      const confettiSize = Math.floor(Math.random() * 3) + 7 + "px";
      const confettiBackground =
        this.confettiColors[
          Math.floor(Math.random() * this.confettiColors.length)
        ];
      const confettiLeft =
        Math.floor(Math.random() * this.el.offsetWidth) + "px";
      const confettiAnimation =
        this.confettiAnimations[
          Math.floor(Math.random() * this.confettiAnimations.length)
        ];

      confettiEl.classList.add(
        "confetti",
        "confetti--animation-" + confettiAnimation
      );
      confettiEl.style.left = confettiLeft;
      confettiEl.style.width = confettiSize;
      confettiEl.style.height = confettiSize;
      confettiEl.style.backgroundColor = confettiBackground;

      confettiEl.removeTimeout = setTimeout(function () {
        confettiEl.parentNode.removeChild(confettiEl);
      }, 3000);

      this.containerEl.appendChild(confettiEl);
    }, 25);
  };

  window.confettiful = new Confettiful(document.querySelector(".js-container"));

  // end pita
});

console.log(window.innerWidth, window.innerHeight);
