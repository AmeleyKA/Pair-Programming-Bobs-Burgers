# Pair-Programming-Bobs-Burgers

# Part 1
As a member of the public
I'd like to add an item to my basket
So I can order a bagel when I want to

| Object      | Properties                                        | Messages         |Output         |
| ----------- | --------------------------------------------------| ---------------- | --------------|
| Item        | itemName @String, itemId @Integer, itemPrice @Integer | itemToAdd()      | item @string  |
| Basket      | @Array[@Items]                                    | addItemToBasket()| @Array[@Items]|





As a member of the public,
I'd like to remove an item from my basket
So that I can change my order

| Object      | Properties                                        | Messages              |Output         |
| ----------- | --------------------------------------------------| --------------------- | --------------|
| Item        | itemName @string, itemId @Integer, itemPrice @Integer | itemToRemove()        | item @string  |
| Basket      | @Array[@Items]                                    | removeItemFromBasket()| @Array[@Items]|






# Part 2
As a member of the public,
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.
So that I can not overfill my small bagel basket

| Object      | Properties                                        | Messages                         |Output                        |
| ----------- | --------------------------------------------------| -------------------------------- | -----------------------------|
| Item        | itemName @string, itemId @Integer, itemPrice @Integer | itemToAdd()                      | item @string                 |
| Basket      | @Array[@Items], maxSize @Integer                  | addItemToBasket(),isBasketFull() | @Array[@Items], @String      |



As a Bob's Bagels manager,
I’d like to create baskets with larger capacity when I need to.
So that I can record more sales

| Object  | Properties                                            | Messages                                             |Output                                 |
| --------| ------------------------------------------------------| ---------------------------------------------------- | --------------------------------------|
| Item    | itemName @string, itemId @Integer, itemPrice @Integer     | itemToAdd()                                      | item @string                          |
| Basket  | @Array[@Items], maxSize @Integer, increaseBy @Integer | addItemToBasket(),isBasketFull(), increaseCapacity() | @Array[@Items],Boolean, Boolean       |



As a member of the public
I'd like to know if I try to remove an item that doesn't exist in my basket. In the same way, I want to know if I try to add an item with the same ID already in my basket.
So that I can maintain my sanity

| Object      | Properties                                        | Messages                                    |Output                                 |
| ----------- | --------------------------------------------------| --------------------------------------------| --------------------------------------|
| Item        | Item @string, itemId @Integer, itemPrice @Integer | itemToAdd(), itemToRemove()                 | item, item @string                    |
| Basket      | @Array[@Items]                                    | isItemNameInBasket(), isItemIdInBasket()    | @String, @String                      |



# Part 3
As a member of the public,
I’d like to see the price of each item before I add it to my basket.
So that I can know how much my bagels are,

| Object      | Properties                                            | Messages                         |Output                        |
| ----------- | ------------------------------------------------------| ---------------------------------| -----------------------------|
| Item        | Item @string, itemId @Integer, itemPrice @Integer     | itemToAdd(), checkPrice()        | item @string                 |
| Basket      | @Array[@Items]                                        |                                  |                              |






As a member of the public,
When I go to checkout I'd like to know the total sum of the bagels in my basket
So that I can prepare to pay

| Object      | Properties                                       | Messages                |Output                  |
| ----------- | -------------------------------------------------| ------------------------| -----------------------|
| Item        | Item @string, itemId @Integer, itemPrice @Integer     | item()                  | item @string           |
| Basket      | @Array[@Items]                                        | calculateTotal()        | @Integer               |
