function createPostHTML(tittle, body) {
  //   let div = document.createElement("div");
  //   document.body.appendChild(div);
  let h1 = document.createElement("h1");
  h1.style.fontWeigth = "bolder";
  h1.style.color = "red";
  h1.textContent = tittle;
  document.body.appendChild(h1);
  let p = document.createElement("p");
  p.style.fontWeigth = "normal";
  p.textContent = body;
  document.body.appendChild(p);
}
createPostHTML();

function foo() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((post) =>
      post.forEach((post) => {
        createPostHTML(post.title, post.body);
      })
    );
}

foo();
