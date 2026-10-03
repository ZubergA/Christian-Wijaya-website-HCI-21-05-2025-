document.addEventListener('DOMContentLoaded', function() {
    // isi semua data produk disini
    const products = [
        {
            id: 1,
            name: "ORBIT STUDIO - Spencer Hand Bag",
            price: 599,
            category: "accessories",
            image: "/Assets/image 1.jpg",
            rating: 4.8
        },
        {
            id: 2,
            name: "VALEXTRA - Grain Leather Top Handle Bag",
            price: 1099,
            category: "accessories",
            image: "/Assets/image 2.jpg",
            rating: 4.9
        },
        {
            id: 3,
            name: "Brown Double Breasted Blazer Wide Pants Suit",
            price: 399,
            category: "apparel",
            image: "/Assets/image 3.jpg",
            rating: 4.7
        },
        {
            id: 4,
            name: "Huanzi spring women's long-sleeved black lace-up windbreaker midi coat- Lisud",
            price: 499,
            category: "apparel",
            image: "/Assets/image 4.jpg",
            rating: 4.5
        },
        {
            id: 5,
            name: "Charles & keith leslie Metalic-Accent Slingback Pumps",
            price: 599,
            category: "footwear",
            image: "/Assets/image 5.jpg",
            rating: 4.6
        },
        {
            id: 6,
            name: "Women's Shoes Fine Heel Pointed High Heels",
            price: 299,
            category: "footwear",
            image: "/Assets/image 6.jpg",
            rating: 4.9
        },
        {
            id: 7,
            name: "SANDRA'S BRIDAL COLLECTION - Bridal Wedding Heels",
            price: 349,
            category: "footwear",
            image: "/Assets/image 7.jpg",
            rating: 4.4
        },
        {
            id: 8,
            name: "Chanel Bags - CHL Bags - 875",
            price: 459,
            category: "accessories",
            image: "/Assets/image 8.jpg",
            rating: 4.7
        },
        {
            id: 9,
            name: "Rolex Day-Date 40",
            price: 43999,
            category: "accessories",
            image: "/Assets/image 9.jpg",
            rating: 4.8
        },
        {
            id: 10,
            name: "Rhinestone Watch",
            price: 259,
            category: "accessories",
            image: "/Assets/image 10.jpg",
            rating: 4.6
        }
    ];

    const productGrid = document.getElementById('productGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // menampilkan semua produk
    displayProducts(products);

    // Filter products by category
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;
            if (filter === 'all') {
                displayProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === filter);
                displayProducts(filteredProducts);
            }
        });
    });

    function displayProducts(productsToDisplay) {
        productGrid.innerHTML = '';
        
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="price-rating">
                        <span class="price">$${product.price.toLocaleString()}</span>
                        <span class="rating">${product.rating} ★</span>
                    </div>
                </div>
            `;
            
            productCard.addEventListener('click', function() {
                window.location.href = `detail.html?id=${product.id}`;
            });
            
            productGrid.appendChild(productCard);
        });
    }
});