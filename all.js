new Vue({
    el: "#product",
    data: {
        productData: [{
                title: "Switch",
                category: "掌上主機",
                content: "Switch遊戲主機",
                description: "Switch遊戲主機",
                imageUrl: "",
                enabled: true,
                origin_price: 9870,
                price: 9800,
                unit: "台",
                imgUrl: ""
            },
            {
                title: "PlayStation 4",
                category: "主機",
                content: "PlayStation 4主機",
                description: "PlayStation 4主機",
                imageUrl: "",
                enabled: true,
                origin_price: 10980,
                price: 10900,
                unit: "台",
                imgUrl: "https://www.us3c.com.tw/wp-content/uploads/2017/01/PS4-PRO-1-US3C.jpg"
            },
        ],
        tempProduct: {}
    },
    methods: {
        addProduct() {
            const id = new Date().getTime();
            this.tempProduct.id = id;
            console.log(id);
            console.log(this.tempProduct);
            this.productData.push(this.tempProduct);
        }
    },
});