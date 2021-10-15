class Item {
    itemName = '';
    itemId;
    itemPrice;

    constructor(itemName, itemId, itemPrice) {
        this.itemName = itemName
        this.itemId = itemId
        this.itemPrice = itemPrice
    }

}

module.exports = Item;