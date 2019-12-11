//fix da pres

$("code").each((i, el) => {
  const originalHtml = $(el).html();
  let newHtml = originalHtml;
  console.log(newHtml)
  $(el).text(newHtml);
});
