"use strict";

const products = [
  {
    title: "落単らくだ",
    description: "落単した人の授業レビューを見ることができるサイトです。",
    tech: "React / Ruby on Rails / PostgreSQL / Heroku / Figma",
    image_path: "./images/products/rakutan.png",
    link: "https://rakutan-rakuda.netlify.app",
  },
  {
    title: "めいだいトイレマップ",
    description: "名古屋大学周辺のトイレをマップで確認できるサイトです。",
    tech: "React / TypeScript / GoogleMapAPI / Firebase / Figma",
    image_path: "./images/products/toilet.png",
    link: "https://nu-toilet-map.netlify.app",
  },
  {
    title: "通知で覚える英単語",
    description: "通知で英単語を簡単に覚えられるアプリです。",
    tech: "Swift / Figma",
    image_path: "./images/products/tutan.png",
    link: "https://apps.apple.com/jp/app/%E9%80%9A%E7%9F%A5%E3%81%A7%E8%A6%9A%E3%81%88%E3%82%8B%E8%8B%B1%E5%8D%98%E8%AA%9E/id1537063008",
  },
  {
    title: "ひろうけん",
    description:
      "ゴミを検知して回収してくれるペット型ゴミ拾いロボットです。ハッカソンで開発しました。",
    tech: "Bluetooth / WebSocket / AR / OpenCV / Arduino / Flask",
    image_path: "./images/products/hirouken.jpg",
    link: "https://github.com/jphacks/C_2203",
  },
  {
    title: "男磨き",
    description:
      "男を磨いてより高みを目指すゲームです。ハッカソンで開発しました。",
    tech: "TypeScript / Phaser",
    image_path: "./images/products/otoko_migaki.png",
    link: "https://jack-app.github.io/jackHack2024_I",
  },
  {
    title: "Tiwtter",
    description: "タイポしたTweetができるサイトです。",
    tech: "React / TwitterAPI / TinySegmenter / Jacov",
    image_path: "./images/products/tiwtter.png",
    link: "https://tiwtter.netlify.app",
  },
  {
    title: "I Love Generator",
    description: "「I Love 〇〇」な背景画像を生成できるサイトです。",
    tech: "React / TypeScript / Canvas",
    image_path: "./images/products/ilove.png",
    link: "https://obashun22.github.io/ilove",
  },
  {
    title: "今日の体温を決めてくれるアプリ",
    description: "今日の体温を決めてくれるサイトです。",
    tech: "HTML / CSS / JavaScript",
    image_path: "./images/products/temperature.png",
    link: "https://obashun22.github.io/today-body-temperature",
  },
  {
    title: "腹筋チャレンジ",
    description: "腹筋メニューの実行回数を共有できるサイトです。",
    tech: "Ruby / Ruby on Rails / PostgreSQL / Heroku",
    image_path: "./images/products/jane.png",
    link: "https://github.com/obashun22/jane",
  },
  {
    title: "Anco",
    description: "日々の体温を簡単に記録できるアプリです。",
    tech: "Swift",
    image_path: "./images/products/no_image.jpg",
    link: "https://github.com/obashun22/anco",
  },
  {
    title: "Trimo",
    description: "旅の記録を共有できるサイトです。ハッカソンで開発しました。",
    tech: "Vue / Ruby on Rails / Heroku",
    image_path: "./images/products/trimo.png",
    link: "https://trimo.netlify.app",
  },
  {
    title: "U match",
    description:
      "大学生向けマッチングアプリの遺構です。法律が難しく断念しました。",
    tech: "Figma / Ai",
    image_path: "./images/products/umatch.png",
    link: "https://www.figma.com/file/1RVKU3TUmlyhNpnjZYdMtr/U-match?type=design&node-id=100-2&t=JggnhIDuBIUz6Twk-0",
  },
  {
    title: "しんぷるメモ",
    description: "ブラウザでメモが取れるサイトです。",
    tech: "HTML / CSS / JavaScript",
    image_path: "./images/products/memo.png",
    link: "https://obashun22.github.io/simple-memo",
  },
  {
    title: "Tweeter",
    description: "ターミナルからTweetできるツールです。",
    tech: "ShellScript",
    image_path: "./images/products/tweeter.png",
    link: "https://github.com/obashun22/tweeter",
  },
  {
    title: "砂紋生成シミュレーション",
    description: "砂紋生成のシミュレーションです。",
    tech: "Unity / C#",
    image_path: "./images/products/sand.png",
    link: "https://twitter.com/obashun22/status/1364138933181812740?s=20",
  },
  {
    title: "群れ生成シミュレーション",
    description: "群れ生成のシミュレーションです。",
    tech: "Unity / C#",
    image_path: "./images/products/boid.png",
    link: "https://twitter.com/obashun22/status/1360591334390657026?s=20",
  },
  {
    title: "マインスイーパ",
    description: "ブラウザ上で遊べるマインスイーパです。",
    tech: "Unity / C# / Blender / WebGL",
    image_path: "./images/products/minesweeper.png",
    link: "https://obashun22.github.io/minesweeper_webgl",
  },
  {
    title: "New Face Game",
    description: "新しい顔を届けるゲームです。",
    tech: "Unity / C#",
    image_path: "./images/products/no_image.jpg",
    link: "https://github.com/obashun22/newface-game",
  },
  {
    title: "本山ふぁぼ原人bot",
    description: '"#春から名大"を見つけてお祝いリプを送るbotです。',
    tech: "Python / TwitterAPI",
    image_path: "./images/products/motofav.png",
    link: "https://twitter.com/motofavgenjin",
  },
  {
    title: "ぷよぷよ",
    description: "ターミナル上で遊べるぷよぷよです。",
    tech: "C++",
    image_path: "./images/products/puyopuyo.png",
    link: "https://github.com/obashun22/puyopuyo",
  },
  {
    title: "静水換算くん",
    description: "流水時のボートのタイムを静水換算することができるサイトです。",
    tech: "HTML / CSS / JavaScript",
    image_path: "./images/products/seisui.png",
    link: "https://obashun22.github.io/seisui-kansan",
  },
  {
    title: "Auto CAS Login",
    description: "名古屋大学のCAS認証ログインを自動化するChrome拡張です。",
    tech: "JavaScript / ChromeExtension",
    image_path: "./images/products/no_image.jpg",
    link: "https://github.com/obashun22/auto-cas-login",
  },
  {
    title: "ポートフォリオ",
    description: "このサイトです。オーガニックな技術を使っています。",
    tech: "HTML / CSS / JavaScript",
    image_path: "./images/products/portfolio.png",
    link: "https://github.com/obashun22/light-portfolio",
  },
];

const skills = [
  {
    name: "HTML",
    description: "大体書ける",
    level: 5,
  },
  {
    name: "CSS",
    description: "大体書ける",
    level: 4,
  },
  {
    name: "JavaScript",
    description: "大体書ける",
    level: 5,
  },
  {
    name: "TypeScript",
    description: "基本は書ける",
    level: 3,
  },
  {
    name: "React",
    description: "大体書ける",
    level: 5,
  },
  {
    name: "Vue",
    description: "ちょっと書いたことがある",
    level: 1,
  },
  {
    name: "Gatsby",
    description: "実務で使用",
    level: 4,
  },
  {
    name: "Python",
    description: "大体書ける",
    level: 5,
  },
  {
    name: "Ruby",
    description: "調べれば書ける",
    level: 2,
  },
  {
    name: "Ruby on Rails",
    description: "基本は理解している",
    level: 2,
  },
  {
    name: "Swift",
    description: "調べれば書ける",
    level: 1,
  },
  {
    name: "C",
    description: "基本は書ける",
    level: 4,
  },
  {
    name: "C++",
    description: "基本は書ける",
    level: 3,
  },
  {
    name: "C#",
    description: "基本は書ける",
    level: 3,
  },
  {
    name: "Haskell",
    description: "調べれば読める",
    level: 1,
  },
  {
    name: "R",
    description: "調べれば読める",
    level: 1,
  },
  {
    name: "Unity",
    description: "調べれば使える",
    level: 3,
  },
  {
    name: "Docker",
    description: "実務で使用",
    level: 4,
  },
  {
    name: "AWS",
    description: "調べれば使える",
    level: 3,
  },
  {
    name: "Linux",
    description: "実務で使用",
    level: 4,
  },
  {
    name: "Git",
    description: "実務で使用",
    level: 5,
  },
  {
    name: "シェルスクリプト",
    description: "調べれば書ける",
    level: 2,
  },
];

const productsTable = document.getElementById("products_table");
products.forEach((product) => {
  const tr = document.createElement("tr");

  const imageTd = document.createElement("td");
  const img = document.createElement("img");
  img.src = product.image_path;
  img.alt = product.title;
  img.style =
    "width: 100px; height: 100px; object-fit: cover; border-radius: 10px;";
  imageTd.appendChild(img);
  tr.appendChild(imageTd);
  tr.className = "product";

  const detailTd = document.createElement("td");
  const h3 = document.createElement("h3");
  const a = document.createElement("a");
  a.textContent = product.title;
  a.href = product.link;
  a.target = "_blank";
  h3.appendChild(a);
  const descP = document.createElement("p");
  descP.textContent = product.description;
  const techP = document.createElement("small");
  techP.textContent = product.tech;
  techP.style = "color: darkgray";
  tr.appendChild(h3);
  tr.appendChild(descP);
  tr.appendChild(techP);

  productsTable.appendChild(tr);
});

const skillsTable = document.getElementById("skills_table");
skills.forEach((skill) => {
  const tr = document.createElement("tr");
  const nameTd = document.createElement("td");
  nameTd.textContent = skill.name;
  const levelTd = document.createElement("td");
  for (let i = 0; i < skill.level; i++) {
    const img = document.createElement("img");
    img.src = "./images/level_icon/icon.png";
    img.width = 12;
    img.style = "padding: 2px";
    levelTd.appendChild(img);
  }
  const descTd = document.createElement("td");
  descTd.textContent = skill.description;
  tr.appendChild(nameTd);
  tr.appendChild(levelTd);
  tr.appendChild(descTd);

  skillsTable.appendChild(tr);
});
