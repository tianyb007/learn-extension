const article = document.querySelector("article");

if (article) {
  const text = article.textContent;

  //计算英文单词量
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;

  //计算中文字词数
  const chineseMatchRegExp = /[\u4E00-\u9FA5]+/g;
  const chineseChars = text.matchAll(chineseMatchRegExp);
  const chineseCount = [...chineseChars].length;

  // 估计阅读时长
  const readingTime = Math.round(wordCount / 200) + Math.round(chineseCount / 200);

  //为页面创建新的元素，添加样式，在页面中插入
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️预计${readingTime}分钟可读完 `;

  const heading = document.querySelector("h1");
  const date = article.querySelector("time")?.parentNode;
  (date ?? heading).insertAdjacentElement("afterend", badge);

}
