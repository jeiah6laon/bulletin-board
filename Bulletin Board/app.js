let form = document.getElementById("form");
let title = document.getElementById("title");
let content = document.getElementById("content");
let msg = document.getElementById("msg");
let articles = document.getElementById("articles");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = () => {
if((title.value === "") && (content.value === "")) {
    msg.innerHTML = "Post cannot be blank.";
    console.log("post failed");
} else {
    console.log("post success");
    msg.innerHTML = "";
    acceptData();
}


};


let data = {};

let acceptData = () => {
    data["title"] = title.value;
    data["content"] = content.value;
    console.log(data);
createArticle();
};

let createArticle = () => {
    articles.innerHTML += `
    <div>
        <a href="ArticleDetail.html">Article Title</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorum alias unde ea at eligendi eos laboriosam soluta, ex perferendis accusantium est ipsa mollitia aliquid error iure id ducimus minus.</p>
        <a href="EditArticle.html">Edit</a>
       <button onClick = "deletePost(this)">Delete</button>
    </div>
    `
    title.value = "";
    content.value ="";
}