
let baskets = [];
class Basket {


    itemName = '';
    itemId;
    itemPrice;


    /*constructor(item) {
        this.itemName = item.itemName
        this.itemId = item.itemId
        this.itemPrice = item.itemPrice
    }
*/
    addItem(item) {        // baskets = baskets.push([this.itemName, this.itemId, this.itemPrice]);
        //console.log("hi");
        baskets.push([item.itemName, item.itemId, item.itemPrice]);
        console.log(baskets);
        return baskets;
    }

    removeItem(itemId) {

        // console.log("basket " + baskets);
        for (let i = 0; i < baskets.length; i++) {

            if (baskets[i][1] !== itemId) {
                return false;
            }
            baskets.splice(i, 1);
        }

        return baskets;
    }


}





module.exports = Basket;