document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    //Data produk
    const products = [
        {
            id: 1,
            name: "ORBIT STUDIO - Spencer Hand Bag",
            price: 599,
            category: "Accessories",
            description: "Spencer hand bag is made of premium vegan leather. The design is chic and timeless, perfect for your casual to formal look every day.",
            features: [
                "Magnet & Two Locks Closure",
                "Inner Zipper Pocket",
                "Made of Premium Vegan Leather",
                "Top Handle"
            ],
            images: [
                "/Assets/image 1.jpg",
                "/Assets/image 1a.jpg"
            ],
            rating: 4.8,
            availability: "In Stock"
        },
        {
            id: 2,
            name: "VALEXTRA - Grain Leather Top Handle Bag",
            price: 1099,
            category: "accessories",
            description: "The Valextra Micro Iside is a luxurious, compact crossbody bag crafted from fine pebbled leather.",
            features: [
                "Front Flap With Turn Lock Closure",
                "Single top Handle and Adjustable",
                "Gold-tone Metal hardware",
                "Adjustable shoulder strap",
                "Spacious interior with pockets"
            ],
            images: [
                "/Assets/image 2.jpg",
                "/Assets/image 2a.jpg"
            ],
            rating: 4.9,
            availability: "In Stock"
        },
        {
            id: 3,
            name: "Brown Double Breasted Blazer Wide Pants Suit",
            price: 399,
            category: "apparel",
            description: "Elevate your wardrobe with our Harley Brown Double Breasted Blazer Wide Pants Suit Two-Piece Set. This sophisticated and exclusive ensemble exudes luxury and style, perfect for the tasteful and elegant woman. The rich brown color and wide-leg pants make a statement of confidence and professionalism, perfect for any occasion.",
            features: [
                "Double Breasted closure",
                "Notched lapels",
                "Long sleeves",
                "Front flap pockets",
                "Zip fly with button closure",
                "Front flap pockets",
                "Side slant pockets"
            ],
            images: [
                "/Assets/image 3.jpg",
                "/Assets/image 3a.jpg"
            ],
            rating: 4.9,
            availability: "In Stock"
        },
        {
            id: 4,
            name: "Huanzi spring women's long-sleeved black lace-up windbreaker midi coat- Lisud",
            price: 499,
            category: "accessories",
            description: "The Huanzi Spring Women's Black Lace-Up Windbreaker Midi Coat is a stylish, lightweight jacket featuring a trendy lace-up design, long sleeves, and a versatile midi length—perfect for a chic casual or semi-formal look in cool weather.",
            features: [
                "Chic lace-up detail",
                "Lightweight windbreaker",
                "Versatile midi length",
                "Effortless cool-weather style"
            ],
            images: [
                "/Assets/image 4.jpg",
                "/Assets/image 4a.jpg"
            ],
            rating: 4.9,
            availability: "In Stock"
        },
        {
            id: 5,
            name: "Charles & keith leslie Metalic-Accent Slingback Pumps",
            price: 599,
            category: "accessories",
            description: "This is a pair of pumps that will slot right into your existing wardrobe with ease. From the sleek and polished pointed-toed silhouette to the clean and classic design embellished with a simple metallic accent on the front, these pumps are a great foundational piece to build your outfits upon. Made from recycled faux leather, they are a great eco-conscious choice.",
            features: [
                "Closed pointed toe",
                "Elasticised slingback straps",
                "Breathable lining",
                "Kitten heels"
            ],
            images: [
                "/Assets/image 5.jpg",
                "/Assets/image 5a.jpg"
            ],
            rating: 4.9,
            availability: "In Stock"
        },
        {
            id: 6,
            name: "Women's Shoes Fine Heel Pointed High Heels",
            price: 299,
            category: "accessories",
            description: "ine heel design, combining sophistication and modern style. Perfect for both formal occasions and chic everyday wear, these heels offer a sleek silhouette with a comfortable fit.",
            features: [
                "Pointed-Toe Design",
                "Fine Heel",
                "Korean Fashion Influence",
            ],
            images: [
                "/Assets/image 6.jpg",
                "/Assets/image 6a.jpg"
            ],
            rating: 4.9,
            availability: "In Stock"
        },
        {
            id: 7,
            name: "SANDRA'S BRIDAL COLLECTION - Bridal Wedding Heels",
            price: 349,
            category: "accessories",
            description: "Heels designed for special occasions like weddings and evening events. Featuring dazzling rhinestone details and a sleek silhouette, these sexy high heels combine elegance with bold femininity.",
            features: [
                "Rhinestone Embellishments",
                "Stiletto Heel",
                "Wedding & Evening Wear"
            ],
            images: [
                "/Assets/image 7.jpg",
                "/Assets/image 7a.jpg"
            ],
            rating: 4.9,
            availability: "In Stock"
        },
        {
            id: 8,
            name: "Chanel Bags - CHL Bags - 875",
            price: 459,
            category: "accessories",
            description: "Timeless and luxurious handbag that embodies the iconic elegance of the Chanel brand. Crafted with exquisite attention to detail, this bag features the signature quilted pattern, premium leather, and the iconic CC logo, making it a must-have for fashion enthusiasts.",
            features: [
                "Iconic Quilted Design",
                "Premium Materials:",
                "Signature CC Logo",
                "Timeless Appeal"
            ],
            images: [
                "/Assets/image 8.jpg",
                "/Assets/image 8a.jpg"
            ],
            rating: 4.9,
            availability: "In Stock"
        },
        {
            id: 9,
            name: "Rolex Day-Date 40",
            price: 43999,
            category: "accessories",
            description: "The Rolex Day-Date 40 is the ultimate symbol of prestige and precision, crafted exclusively in 18 ct gold or platinum. Known as the President's watch, it features a self-winding chronometer movement, a distinctive day display at 12 o'clock, and date function at 3 o'clock. With its iconic fluted bezel, President bracelet, and unparalleled craftsmanship, this timepiece exudes luxury and authority, making it a favorite among world leaders and watch connoisseurs.",
            features: [
                "Exclusive Materials",
                "Day-Date Complication",
                "Superlative Chronometer",
                "Iconic Design"
            ],
            images: [
                "/Assets/image 9.jpg",
                "/Assets/image 9a.jpg"
            ],
            rating: 4.9,
            availability: "In Stock"
        },
        {
            id: 10,
            name: "Rhinestone Watch",
            price: 259,
            category: "accessories",
            description: "This sleek Buckle women's watch features a taupe rose gold stainless steel case with a three-hand quartz movement for precise timekeeping. The minimalist design includes subtle graphics and a stylish metal/plastic-coated link bracelet, perfect for everyday wear.",
            features: [
                "Elegant rose gold finish",
                "Minimalist design",
                "Perfect proportions"
            ],
            images: [
                "/Assets/image 10.jpg",
                "/Assets/image 10a.jpg"
            ],
            rating: 4.9,
            availability: "In Stock"
        },
    ];

    const product = products.find(p => p.id == productId);

    if (product) {
        //breadcrumb
        document.getElementById('productNameBreadcrumb').textContent = product.name;

        //Untuk gambar produk
        const mainImage = document.getElementById('mainProductImage');
        mainImage.src = product.images[0];
        mainImage.alt = product.name;

        //Untuk thumbnail produk
        const thumbnails = document.querySelectorAll('.thumbnail');
        product.images.forEach((image, index) => {
            if (thumbnails[index]) {
                thumbnails[index].src = image;
                thumbnails[index].alt = `${product.name} - View ${index + 1}`;
                
                
                thumbnails[index].addEventListener('click', function() {
                    mainImage.src = image;
                });
            }
        });

        document.getElementById('productName').textContent = product.name;
        document.getElementById('productPrice').textContent = `$${product.price.toLocaleString()}`;
        document.getElementById('productDescription').textContent = product.description;
        
        const featuresList = document.getElementById('productFeatures');
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        document.getElementById('productCategory').textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
        document.getElementById('productAvailability').textContent = product.availability;

        document.querySelector('.add-to-cart').addEventListener('click', function() {
            const quantity = parseInt(document.getElementById('quantity').value);
            alert(`Added ${quantity} ${product.name}(s) to your cart`);
        });

        document.querySelector('.order-now').addEventListener('click', function() {
            const quantity = parseInt(document.getElementById('quantity').value);
            alert(`Ordering ${quantity} ${product.name}(s)`);

        });
    } else {
        // not found
        document.querySelector('.product-detail').innerHTML = `
            <div class="container">
                <h1>Product Not Found</h1>
                <p>The product you're looking for doesn't exist.</p>
                <a href="product.html" class="btn">Back to Products</a>
            </div>
        `;
    }
});