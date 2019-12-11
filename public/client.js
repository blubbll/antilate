//fix da pres

const beauty = str => {
  return window.html_beautify(str, {
    indent_size: 2,
    space_in_empty_paren: false
  });
};

fetch("https://antilate.glitch.me/")
  .then(r => r.text())
  .then(t => {
    const original = $($.parseHTML(t));

    if (location.href.startsWith("https://translate.google")) {
      $(original.find("section")).each((i, el) => {
        const curId = $(el).prop("id");

        if (curId) {
          const pre = $(el).find("[pre]");
          const pos = $(el).find("[pos]");

          const origHtml = $(el)
            .find("pre[pre]")
            .html();
          const brokenHtml = $(`#${curId}`)
            .find("pre[pos]")
            .html();

          const brokenHtmlmod = beauty(
            brokenHtml ? brokenHtml.split(/</).join("\r\n<") : origHtml
          );
          const origHtmlmod = beauty(
            beauty(origHtml)
              .split(/</)
              .join("\r\n<")
          );
          //fix pre code
          $(`#${curId}`)
            .find("pre[pre]")
            .text(origHtmlmod);
          //show pos code
          $(`#${curId}`)
            .find("pre[pos]")
            .text(brokenHtmlmod);
        }
      });
    } else {
      $("pre[pre]").each((i, el) => {
        $(el).text(
          beauty(
            $(el)
              .html()
              .split(/</)
              .join("\r\n<")
          )
        );
      });

      $("pre[pos]").text("not translating 🙉");
    }
  });
