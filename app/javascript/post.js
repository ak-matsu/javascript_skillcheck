function post (){
  // クリックしたことを認識するために.getElementById("submit_btn")を用いて取得
  const submit = document.getElementById("submit_btn");
  // クリックによるイベントはclickを用いる
  submit.addEventListener("click", (e) => {
    // コンソール上（ログ）に表示させる。
    // index.html.erbでformにはnew_articleというのidが付与されているため、getElementByIdを用いて取得します。
    const formData = new FormData(document.getElementById("new_article"));

    // Ajaxに利用するオブジェクトを生成
    const XHR = new XMLHttpRequest();

    // .openメソッドでAjaxに関する情報を初期化、URLを設定
    XHR.open("POST","/articles",true);

    // レスポンスとしてjsonを指定
    XHR.responseType = "json"

    // Ajaxで送信
    XHR.send(formData);


    // ブラウザ上に用意されている送信ボタンが反応してしまい
    // 処理が重複してしまうのでe.preventDefault();でデフォルト送信をキャンセルする。
    e.preventDefault();
  });
}
window.addEventListener("load",post);