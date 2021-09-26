'use strict';

const products = [
  {
    title: "落単らくだ",
    description: "楽単した授業の情報を共有できるサイトです。",
    image_path: "./images/products/rakutan.png",
    link: "https://rakutan-rakuda.netlify.app/"
  },
  {
    title: "通知で覚える英単語",
    description: "通知で英単語を簡単に覚えられるアプリです。",
    image_path: "./images/products/tutan.png",
    link: "https://apps.apple.com/jp/app/%E9%80%9A%E7%9F%A5%E3%81%A7%E8%A6%9A%E3%81%88%E3%82%8B%E8%8B%B1%E5%8D%98%E8%AA%9E/id1537063008"
  },
  {
    title: "Tiwtter",
    description: "タイポしたTweetができるサイトです。",
    image_path: "./images/products/tiwtter.png",
    link: "https://tiwtter.netlify.app/"
  },
  {
    title: "I Love Generator",
    description: "「I Love 〇〇」な背景画像を生成できるサイトです。",
    image_path: "./images/products/ilove.png",
    link: "https://obashun22.github.io/ilove/"
  },
  {
    title: "今日の体温を決めてくれるアプリ",
    description: "今日の体温を決めてくれるサイトです。",
    image_path: "./images/products/temperature.png",
    link: "https://obashun22.github.io/today-body-temperature/"
  },
  {
    title: "腹筋チャレンジ",
    description: "腹筋メニューの実行回数を共有できるサイトです。",
    image_path: "./images/products/jane.png",
    link: "https://jane-challenge.herokuapp.com/"
  },
  {
    title: "Anco",
    description: "日々の体温を簡単に記録できるアプリです。",
    image_path: "./images/products/no_image.jpg",
    link: "https://github.com/obashun22/anco"
  },
  {
    title: "Trimo",
    description: "旅の記録を共有できるサイトです。ハッカソンで開発しました。",
    image_path: "./images/products/trimo.png",
    link: "https://trimo.netlify.app/"
  },
  {
    title: "しんぷるメモ",
    description: "ブラウザでメモが取れるサイトです。",
    image_path: "./images/products/memo.png",
    link: "https://obashun22.github.io/simple-memo/"
  },
  {
    title: "Tweeter",
    description: "ターミナルからTweetできるツールです。",
    image_path: "./images/products/tweeter.png",
    link: "https://github.com/obashun22/tweeter"
  },
  {
    title: "砂紋生成シミュレーション",
    description: "砂紋生成のシミュレーションです。",
    image_path: "./images/products/sand.png",
    link: "https://twitter.com/obashun22/status/1364138933181812740?s=20"
  },
  {
    title: "群れ生成シミュレーション",
    description: "群れ生成のシミュレーションです。",
    image_path: "./images/products/boid.png",
    link: "https://twitter.com/obashun22/status/1360591334390657026?s=20"
  },
  {
    title: "マインスイーパ",
    description: "ブラウザ上で動くマインスイーパです。",
    image_path: "./images/products/minesweeper.png",
    link: "https://obashun22.github.io/minesweeper_webgl/"
  },
  {
    title: "New Face Game",
    description: "新しい顔を届けるゲームです。",
    image_path: "./images/products/no_image.jpg",
    link: "https://github.com/obashun22/newface-game"
  },
  {
    title: "本山ふぁぼ原人bot",
    description: "\"#春から名大\"を見つけてお祝いリプを送るbotです。",
    image_path: "./images/products/motofav.png",
    link: "https://twitter.com/motofavgenjin"
  },
  {
    title: "ぷよぷよ",
    description: "ターミナル上で動作するぷよぷよです。",
    image_path: "./images/products/puyopuyo.png",
    link: "https://github.com/obashun22/puyopuyo"
  },
  {
    title: "静水換算くん",
    description: "流水時のボートのタイムを静水換算することができるサイトです。",
    image_path: "./images/products/seisui.png",
    link: "https://obashun22.github.io/seisui-kansan/"
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
    name: "Javascript",
    description: "大体書ける",
    level: 5,
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
    name: "Typescript",
    description: "調べれば書ける",
    level: 2,
  },
  {
    name: "Gatsby",
    description: "実務で使用",
    level: 2,
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
    level: 3,
  },
  {
    name: "Swift",
    description: "調べれば書ける",
    level: 2,
  },
  {
    name: "C",
    description: "調べれば書ける",
    level: 4,
  },
  {
    name: "C++",
    description: "調べれば書ける",
    level: 4,
  },
  {
    name: "C#",
    description: "調べれば書ける",
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
    name: "Heroku",
    description: "調べれば使える",
    level: 3,
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
];

const productsTable = document.getElementById('products_table');
products.forEach(product => {
  const tr = document.createElement('tr');

  const imageTd = document.createElement('td');
  const img = document.createElement('img');
  img.src = product.image_path;
  img.alt = product.title;
  img.style = "width: 100px; height: 100px; object-fit: cover; border-radius: 10px;";
  imageTd.appendChild(img);
  tr.appendChild(imageTd);

  const detailTd = document.createElement('td');
  const h3 = document.createElement('h3');
  const a = document.createElement('a');
  a.textContent = product.title;
  a.href = product.link;
  a.target = "_blank";
  h3.appendChild(a);
  const p = document.createElement('p');
  p.textContent = product.description;
  tr.appendChild(h3);
  tr.appendChild(p);

  productsTable.appendChild(tr);
});

const skillsTable = document.getElementById('skills_table');
skills.forEach((skill) => {
  const tr = document.createElement('tr');
  const nameTd = document.createElement('td');
  nameTd.textContent = skill.name;
  const levelTd = document.createElement('td');
  for (let i = 0; i < skill.level; i++) {
    const img = document.createElement('img');
    img.src = "./images/level_icon/icon.png";
    img.width = 12;
    img.style = "padding: 2px";
    levelTd.appendChild(img);
  }
  const descTd = document.createElement('td');
  descTd.textContent = skill.description;
  tr.appendChild(nameTd);
  tr.appendChild(levelTd);
  tr.appendChild(descTd);

  skillsTable.appendChild(tr);
})