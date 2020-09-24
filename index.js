let express = require("express");

let app = express();

app.set("view engine", "ejs"); /// визначаємо який будемо використовуваи для сайда движок (1 крок) 2 - крок - стоврити папку views в якій створити файл index.ejs

app.use("/assets", express.static("assets")); /// підключення статичних файлів Наприклад CSS  /assets - замість цього можна писати будь що
app.use("/js", express.static("js")); /// підключення статичних файлів Наприклад JS

app.get("/", function (req, res) {
  let obj = {
    title: "Super",
    user: {
      name: "Vas",
      age: 22,
    },
  };
  res.render("index", { obj });
});

let news = [
  {
    id: 1,
    title: "abracadabra",
    description: "decription news",
  },
  {
    id: 2,
    title: "abracadabra22222",
    description: "decription news2222",
  },
  {
    id: 3,
    title: "abracadabra333333",
    description: "decription news3333",
  },
];

app.get("/news", function (req, res) {
  let obj = {
    title: "News",
    news: news,
  };

  res.render("news/news", { obj });
});

app.get("/news/:id", function (req, res) {
  let newsId = +req.params.id;

  let newsItem = news.find((item) => item.id === newsId);

  let obj = {
    news: newsItem,
  };

  res.render("news/news-item", { obj });
});


app.get("/about", function (req, res) {

  
    res.render("about/about");
  });

app.listen(3000);

///// npm init (npm init -y)- команда яка створюэ залежності і стоврює файл package.json

//// npm install ejs --save - встановлення
