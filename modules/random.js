// function random(items) {
//     var item;
//     if (Array.isArray(items)) {
//         item = items[Math.floor(Math.random() * items.length)];
//     } else if (typeof (items) == 'number') {
//         item = Math.floor(Math.random() * items);
//     }
//     return item;
// }

// module.exports = random;

var random = (item) => {
    if (typeof (item) != 'string') {
        return item.length ? item[Math.floor(Math.random() * item.length)] : Math.floor(Math.random() * item);
    }
}

module.exports = random;