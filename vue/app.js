// creating a vue app
const app = Vue.createApp({
    // data, functions
    // template:"<h2>I am the template</h2>"
    // shorthand fr a function name inside an obj
    data() { 
        return {
            showBooks:"true",
            title: "The Final Empire",
            author: "Sarah Fierce",
            age: 22,
            x: 0,
            y: 0,
            itemName:'',
            itemNumber: 0,
            shoppingList:[
                { name: 'Tomatoes', number: 5 }

            ],
            
            foods: [
                { name: "rice" },
                { name: "beans" },
                { name: "fish" },
                { name: "garri" },
            ], 
            count:0,
            inputC:0,
            
            text: '',
            
           counting:0,
           bgColor:0,
        }
        
    },
    methods: {
        addItem() {
            let item={
                name:this.itemName,
                number:this.itemNumber,
            }
            this.shoppingList.push(item)
            this.itemName = null
            this.itemNumber=null
        },
        changeTitle(title) {
            console.log("clicked")
            this.title = title
        },
        
        toggleShowBooks() {
         this.showBooks = !this.showBooks
            
        },

        handleEvent(e) {
            console.log(e, e.type)
        },

        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        writeHere(e) {
        this.text = e.target.value
        },
        countIt(c) {
            this.counting += c  
        },
        clickMe() {
            alert("Hey Handsome😎!")
        },
        save() {
            alert("document saved")
        },
        changeColor() {
            this.bgColor += 20;
        },
    }
    
})
// telling the vue app which part of the websitrit shud control
app.mount("#app")

// console.log("hello vue")
