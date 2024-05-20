let dataLikes = [123, 25, 0];
let dataTexts = ["Я так рад лету!", "Вот бы щас на пляж", "Сегодня такой отличный день"];
let dataImgs = ["8888.jpeg", "00000.jpeg", "1111.jpeg"];

let korobkaPostov = document.getElementById("postsBox");
let originalPost = document.getElementById("firstPost");

for (let i = 0; i < 100; i++) {
    let newPost = originalPost.cloneNode(true);
    newPost.style.display = "block"; // Убираем скрытие клонированного элемента

    let img = newPost.getElementsByClassName("img")[0];
    img.setAttribute("src", dataImgs[i % 3]);

    let numberOfLikes = newPost.getElementsByClassName("numberOfLikes")[0];
    numberOfLikes.innerHTML = dataLikes[i % 3];

    let postText = newPost.getElementsByClassName("postText")[0];
    postText.innerHTML = dataTexts[i % 3];

    let likeBtn = newPost.getElementsByClassName("likeBtn")[0];
    likeBtn.setAttribute("onclick", `like(${i})`);

    korobkaPostov.appendChild(newPost);
}

function like(index) {
    dataLikes[index % 3]++;
    let posts = document.getElementsByClassName("post");
    let numberOfLikes = posts[index + 1].getElementsByClassName("numberOfLikes")[0];
    numberOfLikes.innerHTML = dataLikes[index % 3];
}
