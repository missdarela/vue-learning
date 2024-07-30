const app = Vue.createApp({
    data() {
        return {
            url:"https://www.coloors.com",
            showBooks:true,
            books: [
               {title:"The darkness", author:"Sanderman", img:'images/3.jpg', isFav:true},
               {title:"Midnight", author:"Carlton", img:'images/1.jpg', isFav:false},
               {title:"The Horror", author:"Brandon", img:'images/2.jpg', isFav:true}
           ]
        }
    },
    methods: {
        handleClick(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
             
        }
    }    
})




app.mount("#app")