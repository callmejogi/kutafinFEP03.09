     // Список категорій та продуктів для кожної категорії
     let categories = {
        1: [{name:"BMW X5",price:100000, description:'Classic dream of little boy'}, 
        {name:"Volkswagen Tiguan",price:50000, description:'Practical decision'}, 
        {name:"Porsche Cayenne",price:2500000, description:'Really Rich guy'}],
        2: [{name:"JBL",price:100, description:'HipHop'}, {name:"AirPods",price:250, description:'AllPurpose'}, {name:"Marshall",price:150, description:'Fancy'}],
        3: [{name:"AppleWatch", price:300, description:'Good perks'}, {name:"Tissot",price:400, description:'Premium'}, {name:"Rollex",price:10000, description:'Luxury'}]
    };

    // Функція для виведення списку товарів для обраної категорії
    function showProducts(categoryId) {
        let productList = document.getElementById("product-list");
        productList.innerHTML = "";

        let products = categories[categoryId];
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            let listItem = document.createElement("li");
            listItem.className = "product";
            listItem.textContent = product.name;
            listItem.onclick = function() {
                showProductDetails(this.textContent);
            };
            productList.appendChild(listItem);
        }
    }

    // Функція для виведення інформації про товар
    function showProductDetails(productName) {
        let productDetails = document.getElementById("product-details");
        let buyButton = document.getElementById("buy-button");
    
        // Знаходимо товар за його назвою
        for (var categoryId in categories) {
            var products = categories[categoryId];
            for (let i = 0; i < products.length; i++) {
                let product = products[i];
                if (product.name === productName) {
                    // Виводимо інформацію про товар
                    productDetails.innerHTML = `
                        <h3>${product.name}</h3>
                        <p>Ціна: ${product.price} $</p>
                        <p>${product.description}</p>
                    `;
                    // Показуємо кнопку "Купити"
                    buyButton.style.display = "block";
                    return;
                }
            }
        }
    }

    // Функція для покупки товару
    function buyProduct() {
        alert("Товар куплено");
        resetPage();
    }

    // Функція для скидання сторінки до вихідного стану
    function resetPage() {
        let productList = document.getElementById("product-list");
        productList.innerHTML = "";

        let productDetails = document.getElementById("product-details");
        productDetails.textContent = "";

        let buyButton = document.getElementById("buy-button");
        buyButton.style.display = "none";
    }
