window.addEventListener("load", () => {
  let text;
  let lines = [];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function getLines(t) {
    let div = document.getElementById("poem");
    let wmax = 350;
    let r = getRandomInt(wmax, t.length);
    let line = t.substring(r-wmax, r);
    console.log(line)
    line.split(" ").forEach((word, index) => {
      if (index < wmax) {
        lines.push(word);
        div.innerHTML += (word + " ");
      }
    })
  }

  // text taken from Project Gutenberg Australia: http://gutenberg.net.au/ebooks02/0201091h.html
  fetch("waves.txt").then((file) => file.text()).then((d) => {
    text = d;
    getLines(text);
    console.log(text.length);
    // call fx here
  });
});