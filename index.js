// const hiragana = {
//     あ: "a",
//     い: "i",
//     う: "u",
//     え: "e",
//     お: "o",
//     か: "ka",
//     き: "ki",
//     く: "ku",
//     け: "ke",
//     こ: "ko",
//     さ: "sa",
//     し: "shi",
//     す: "su",
//     せ: "se",
//     そ: "so",
//     た: "ta",
//     ち: "chi",
//     つ: "tsu",
//     て: "te",
//     と: "to",
//     な: "na",
//     に: "ni",
//     ぬ: "nu",
//     ね: "ne",
//     の: "no",
//     は: "ha",
//     ひ: "hi",
//     ふ: "fu",
//     へ: "he",
//     ほ: "ho",
//     ま: "ma",
//     み: "mi",
//     む: "mu",
//     め: "me",
//     も: "mo",
//   };

//   // Exemplo de uso:
//   console.log(hiragana["あ"]);
//   console.log(hiragana["か"]);

let listaDeFrasesSeparadas = [];
let listaDeFrasesTraduzidas = [];

// Início da tradução
async function traduzirFrase(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
    let responsee = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        lista[i]
      )}&langpair=ja|pt`
    );

    let data2 = await responsee.json();

    if (data2 && data2.responseData && data2.responseData.translatedText) {
      listaDeFrasesTraduzidas.push(data2.responseData.translatedText);
      console.log(data2.responseData.translatedText); // palavra traduzida
    } else {
      console.error("Erro ao traduzir a frase:", frase);
    }

    let listaDePalavra = lista[i].split(" ");
    for (let j = 0; j < listaDePalavra.length; j++) {
      let response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          listaDePalavra[j]
        )}&langpair=ja|pt`
      );

      let data = await response.json();

      if (data && data.responseData && data.responseData.translatedText) {
        listaDeFrasesTraduzidas.push(data.responseData.translatedText);
        console.log(
          `${listaDePalavra[j]} - ${data.responseData.translatedText}`
        ); // palavra traduzida
      } else {
        console.error("Erro ao traduzir a frase:", frase);
      }
    }
  }
}

botao.addEventListener("click", () => {
  let roteiro = campo.value;
  listaDeFrasesSeparadas = roteiro.split("\n");
  traduzirFrase(listaDeFrasesSeparadas);
});
