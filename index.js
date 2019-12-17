const goods = [
    { title: 'Футболка', price: 150 },
    { title: 'Носки', price: 150 },
    { title: 'Куртка', price: 150 },
    { title: 'Ботинки', price: 150 },
];

const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3 class="goods-title"> ${title}</h3><p>${price}</p></div>`
};

const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);
