const light_buton = document.querySelector(".light_buton");
      const Textform = document.querySelector("textarea");
      const Textformid = document.querySelector("#id_tear");
      const capital = document.querySelector("#cap_buton");
      const small = document.querySelector("#sma_buton");
      const maint = document.querySelector("main");

      //TODO: Functio 1 Complete light section

      function ligbuton() {
        let bgcolor = Textform.style.backgroundColor;
        if (Textform.style.backgroundColor === "white") {
          Textform.style.backgroundColor = "black";
          document.body.style.backgroundColor = "rgba(24, 24, 24, 0.929)";
          Textform.style.color = "white";
        } else {
          Textform.style.backgroundColor = "white";
          document.body.style.backgroundColor = "rgba(242, 233, 233, 0.82)";
          Textform.style.color = "black";
        }
      }
      light_buton.addEventListener("click", ligbuton);

      //TODO: Function 2 complete Captial word/Section/para Section

      function Captialword() {
        Textform.value = Textform.value.toUpperCase();
      }
      capital.addEventListener("click", Captialword);

      // TODO: Function 3 small word/Section/para Section
      function smallword() {
        Textform.value = Textform.value.toLowerCase();
      }
      small.addEventListener("click", smallword);