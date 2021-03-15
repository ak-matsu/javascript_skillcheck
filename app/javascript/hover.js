function hover(){
  // 表示されている投稿の文だけ取得するため
  // .querySelectorAllですべての要素を用いて取得する。
  const articles = document.querySelectorAll(".article");

  // forEachを用いて取得したすべての要素に(articles)イベントハッカができるようにする。
  articles.forEach((article) => {

    // マウスオーバーしたときのイベントハンドラーはmouseover
    // 単体のためarticle
    article.addEventListener('mouseover',()=> {
      article.setAttribute("style","background-color:#F1940B;")
      console.log("マウスオーバー");
    });    
    
    article.addEventListener('mouseout',()=> {
      article.removeAttribute("style")
      console.log("マウスアウト");
    });    

  });
}
window.addEventListener("load",hover);