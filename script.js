
const tg = window.Telegram.WebApp;
tg.expand();
let lang = "ru";

const products = [{"ru": "Буррито", "pl": "Burrito", "desc_ru": "Тортилья с мясом, рисом, фасолью.", "desc_pl": "Tortilla z mięsem, ryżem i fasolą.", "price": 29}, {"ru": "Кесадилья", "pl": "Quesadilla", "desc_ru": "Тортилья с сыром и овощами.", "desc_pl": "Tortilla z serem i warzywami.", "price": 38}, {"ru": "Тако", "pl": "Taco", "desc_ru": "Два тако с мясом и сальсой.", "desc_pl": "Dwa taco z mięsem i salsą.", "price": 31}];
const images = ["66.jpg", "55.jpg", "11.jpg"];

function render() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="lang-switch">
      <button onclick="setLang('ru')">RU</button>
      <button onclick="setLang('pl')">PL</button>
    </div>
  `;
  products.forEach((p, i) => {
    const title = lang === 'ru' ? p.ru : p.pl;
    const desc = lang === 'ru' ? p.desc_ru : p.desc_pl;
    app.innerHTML += `
      <div class="card">
        <img src="img/${images[i]}" alt="${title}"/>
        <div class="card-content">
          <div class="card-title">${title}</div>
          <div class="card-desc">${desc}</div>
          <div class="card-price">${p.price} zł</div>
          <button class="add" onclick="addToCart('${title}', ${p.price})">${lang === 'ru' ? 'Добавить' : 'Dodaj'}</button>
        </div>
      </div>
    `;
  });
}

const cart = [];
function addToCart(item, price) {
  cart.push({item, price});
  tg.showAlert(lang === 'ru' ? 'Добавлено в корзину' : 'Dodano do koszyka');
}

function setLang(l) {
  lang = l;
  render();
}

render();
