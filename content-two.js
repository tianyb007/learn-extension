// get context
const article = document.querySelector("article");

if (article) {
  const text = article.textContent;
  // get US words
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordsCount = [...words].length;

  // get Chinese chars
  const chineseMatchRegExp = /[\u4E00-\u9FA5]+/g;
  const chineseChars = text.matchAll(chineseMatchRegExp);
  const charsCount = [...chineseChars].length;
  // calculate time
  const readingTime = Math.round(wordsCount / 200 + charsCount / 200);

  // insert p
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️预计${readingTime}分钟可读完 `;
  const heading = document.querySelector("h1");
  const date = article.querySelector("time")?.parentNode;
  (date ?? heading).insertAdjacentElement("afterend", badge)
}










