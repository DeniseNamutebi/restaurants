

class Item {
    constructor({name, price}){
        if(!name) throw new Error("Item must have name")
        this.name = name
        this.price = price
    }
}

class Menu{
    constructor({title, type, icon}){
        if(!title) throw new Error("Menu must have name")
        this.title = title
        this.type = type
        this.icon = icon
        this.items = []
    }

    addItem(item){
        this.items.push(item)
    }
}


class Restaurant{
    static restaurants = []
    name = ""
    image = ""
    cuisine = ""
    city = ""
    menus = []

    constructor({name, image, cuisine, city}){
    if(!name) throw new Error("Restaurant must have title")
    this.name = name 
    this.constructor.restaurants.push(this)
    this.image = image
    this.constructor.restaurants.push(this)
    this.cuisine = cuisine
    this.constructor.restaurants.push(this)
    this.city = city
    }
    addMenu(menu){
        this.menus.push(menu)
    }

}

const pizza = new Item({name: "Pizza", price: 40})
const menu2 = new Menu({name: "Menu2", type: "Dinner"})
const tgi = new Restaurant({title: "T.G.I", image:"something.url", cuisine:"American" })
menu2.addItem(pizza)
tgi.addMenu(menu2)





module.exports = {Item, Menu, Restaurant}