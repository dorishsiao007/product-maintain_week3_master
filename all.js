new Vue({
    el: "#product",
    data: {
        productData: [
            {
                id: 1,
                title: "Switch",
                category: "掌上主機",
                content: "Switch遊戲主機",
                description: "Switch遊戲主機",
                imageUrl: "",
                enabled: true,
                origin_price: 9870,
                price: 9800,
                unit: "台",
                imgUrl: "https://image.shutterstock.com/image-vector/video-game-console-gamepad-vector-260nw-1137618860.jpg"
            },
            {
                id: 2,
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
        updateProduct: function () {
            if(this.tempProduct.id){
                // Update Product Data
                const id = this.tempProduct.id;
                this.productData.forEach((item, index) => {
                    if (item.id === id) {
                        this.productData[index] = this.tempProduct;
                    }
                });
                this.tempProduct = {};
            }
            else{
                // Add Product Data
                const id = new Date().getTime();
                this.tempProduct.id = id;
                this.productData.push(this.tempProduct);
                this.tempProduct = {};
            }
        },

        deleteProduct: function () {
            const id = this.tempProduct.id;
            this.productData.forEach((item, index) => {
                if (item.id === id) {
                    this.productData.splice(index, 1);
                }
            });
            this.tempProduct = {};
        },

        openModal: function (action, data) {
            switch (action) {
                case "add": {
                    this.tempProduct = {};
                    break;
                }
                case "update": {
                    this.tempProduct = JSON.parse(JSON.stringify(data));
                    break;
                }
                case "delete": {
                    this.tempProduct = JSON.parse(JSON.stringify(data));
                    break;
                }
                default: {
                    break;
                }
            }
        }
    },
});