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

    XHR.onload = () => {
      console.log(XHR.response.article);
    
    // レスポンスのうち、コントローラー側で指定したjson形式のデータを変数に代入しています。
    const item = XHR.response.article

    // 今回投稿したデータを追加する要素を取得しています。今回追加する要素の親要素にあたります。
    const contentsArea = document.getElementById("contents_area");

    // フォーム投稿の際にテキストを入力した、テキストエリアを取得しています。
    const articleText = document.getElementById("article_text");

    // 今回追加する要素を定義しています。${ item.text }によって、
    // レスポンスとして返されたデータのうち、textのプロパティを指定しています。
    // HTMLに描画する際、何を表示させたいか。
    const HTML = `
      <div class="article">
        ${ item.text }
      </div>`;
    
    // 親要素に直前で定義した要素を追加しています。afterbeginは親要素内の最上部に追加することを意味しています。
    contentsArea.insertAdjacentHTML("afterbegin",HTML);

    // フォームの入力欄を空にしています。
    articleText.value = "";
  };

    // ブラウザ上に用意されている送信ボタンが反応してしまい
    // 処理が重複してしまうのでe.preventDefault();でデフォルト送信をキャンセルする。
    e.preventDefault();
  });
}
window.addEventListener("load",post);