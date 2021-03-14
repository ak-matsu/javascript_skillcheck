function count (){
  // 入力したことを認識するために.getElementById("article_text")を用いて取得
  const articleText = document.getElementById("article_text");


  // 取得した要素に何らかのキーボード操作があった場合にイベント発火。
  // そのときに用いるイベントハンドラーが"keyup"である。
  articleText.addEventListener("keyup",() => {

  // 入力されている文字数をカウントした結果を取得。
  const countVal = articleText.value.length;

  // 入力した文字数を表示するためにchar_numを取得
  const charNum = document.getElementById("char_num")  

  // 取得した要素に対して、${countVal}文字を、innerHTMLを用いて置き換えている。
  charNum.innerHTML = `${countVal}文字`;
  });
}

window.addEventListener("load",count);
