function count (){
  // 入力したことを認識するために.getElementById("article_text")を用いて取得
  const articleText = document.getElementById("article_text");

  // 取得した要素に何らかのキーボード操作があった場合にイベント発火。
  // そのときに用いるイベントハンドラーが"keyup"である。
  articleText.addEventListener("keyup",() => {

    // 実際に打ち込んだ値を（articleText）valueで用いて取得し
    // コンソールログで表示させる。
    console.log(articleText.value);
  });
}

window.addEventListener("load",count);
