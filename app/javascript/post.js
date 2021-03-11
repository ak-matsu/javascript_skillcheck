function post (){
  const submit = document.getElementById("submit_btn");
  submit.addEventListener("click", (e) => {
    console.log(document.getElementById("new_article"));
    e.preventDefault();
  });
}

// ページが読まれたら実行
window.addEventListener("load",post);