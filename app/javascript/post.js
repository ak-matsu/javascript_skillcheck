function post (){
  // 文字入力フォームのidはarticle_textであるため
  // getElementByIdを用いて取得
  const article_text = document.getElementById("article_text")
  // キーボード操作があった場合にイベント発火。
  // そのときに用いるイベントハンドラーがkeyup
  article_text.addEventListener("keyup", () => {
    // 取得した要素に含まれる値をvalueを用いてconsole.logへ出力させる 
    console.log(article_text.value.length);
    });
  }

// ページが読まれたら実行
window.addEventListener("load",post);
