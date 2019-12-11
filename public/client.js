//fix da pres

fetch("https://antilate.glitch.me/")
  .then(r => r.text())
  .then(t => {
    const original = $($.parseHTML(t));

    $(original.find("section")).each((i, el) => {
      const curId = $(el)[0].id;
      console.log(curId);
      curId && console.log(original.find("#" + curId));

      const pre = $(el).find("[pre]");
      const pos = $(el).find("[pos]");

      const originalHtml = pre.html();

      let newHtml = originalHtml;
      console.log(newHtml);
      // $(el).find(text(newHtml));
    });
  });
