const {Item, Menu,  Restaurant} = require("./module")

describe("Item", () => {
    test("item has name", () =>{
        steak = new Item({name: "Chicken"})
        expect(steak.name).toEqual("Chicken")
    })

    test("item must have name", () =>{
        expect(() => {new Item({})}).toThrow()
    })

    test("item has price", () =>{
        salmon = new Item({name: "Salmon", price: 40})
        expect(salmon.price).toBe(40)
    })

})

describe("Menu", ()=>{
    test("Menu has title", () =>{
        menu1 = new Menu({title: "Menu1"})
        expect(menu1.title).toEqual("Menu1")
    })

    test("Menu must have title", () =>{
        expect(() => {new Menu({})}).toThrow()
    })
  
    test("Menu has type", () =>{
        menu1 = new Menu({title: "Menu1", type: "Drinks"})
        expect(menu1.type).toEqual("Drinks")
    })


    test("items is added to Menu", () =>{
        pizza = new Item({name: "Pizza", price: 40})
        menu2 = new Menu({title: "Menu2", type: "Dinner"})
        menu2.addItem(pizza)
        expect(menu2.items[0].name).toEqual("Pizza")
    })

})


describe("Restaurant", ()=>{
    test("Restaurant has name", () =>{
        wagamama = new Restaurant({name:"Wagamama"})
        expect(wagamama.name).toEqual("Wagamama")
    })

    test("Restaurant must have name", () =>{
        expect(() => {new Restaurant({})}).toThrow()
    })

    test("Restaurant has image", () =>{
        nandos = new Restaurant({name: "Nandos", image:"something.url"})
        expect(nandos.image).toEqual("something.url")
    })

    test("Restaurant has cuisine", () =>{
        wagamama = new Restaurant({name: "Wagamama", image:"something.url", cuisine: "Italian"})
        expect(wagamama.cuisine).toEqual("Italian")
    })

    test("Restaraunt has menus", ()=>{
        pizza = new Item({name: "Pizza", price: 40})
        menu2 = new Menu({title: "Menu2", type: "Dinner"})
        tgi = new Restaurant({name: "T.G.I", image:"something.url", cuisine:"American" })
        tgi.addMenu(menu2)
        expect(tgi.menus[0].title).toEqual("Menu2")
        
    })

    test("Capcity", ()=>{

    })

})