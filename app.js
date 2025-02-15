const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech",
        img: "https://img.drz.lazcdn.com/static/pk/p/81899d7cf8f37b4b4f259e820f8128c0.jpg_960x960q80.jpg_.web"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7qjAnQXspd-QWkp0iehs3Gso84rGGnDRPA&s"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell",
        img: "https://static3.webx.pk/files/78721/Images/dell-se2222h-22-fhd-led-monitor-1-78721-2192815-110924060623173.jpg"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqoUQf2A0Qm6Ca6cEkS81EOT4Q8oCpj-45og&s"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple",
        img: "https://i.rtings.com/assets/pages/IxCXzynA/best-apple-laptops-20241009-medium.jpg?format=auto"

    },
    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike",
        img: "https://hips.hearstapps.com/hmg-prod/images/run-nike-shoes-66db0a2eabc2f.jpg?crop=0.569xw:0.853xh;0.208xw,0&resize=1120:*"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas",
        img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f8a8e692966748f4a493eb756649ff87_9366/Handball_Spezial_Shoes_Green_IG6192_01_standard.jpg"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva",
        img: "https://m.media-amazon.com/images/I/71I55gvAVcL._AC_SL1500_.jpg"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks",
        img: "https://cdn.shopify.com/s/files/1/0451/8661/3403/files/26174925_1_2048x.jpg?v=1738223030"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland",
        img: "https://www.allsole.com/images?url=https://blogscdn.thehut.net/app/uploads/sites/6/2021/04/timberland-1_1636037412.jpg&auto=avif&width=1200&fit=crop"
    },

    // Home
    {
        name: "Blender",
        price: 34.99,
        category: "Home",
        brand: "Oster",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFz1P2tgBptC52-d49zdDrrdeWt4gshAwVQ&s"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home",
        brand: "Panasonic",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvNGcbbrO-_PAQJ5-BWdnSHkUvfjr2ZYJig&s"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home",
        brand: "LG",
        img: "https://bakar.pk/cdn/shop/products/lg18cghside_640x.jpg?v=1691414368"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home",
        brand: "Dyson",
        img: "https://cdn.mos.cms.futurecdn.net/tomE6gL6ZFyGasaL46kCEa.jpg"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home",
        brand: "Breville",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJPEaXIzcedryoB5IauylnDm8OY8v_5puR-g&s"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine",
        img: "https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/2/1235297-1.jpg"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker",
        img: "https://www.penheaven.com/media/catalog/product/p/a/parker-im-black-gold-trim-rollerball-and-ballpoint-leather-pen-case-set.jpg?width=670&height=545&canvas=670,545&quality=80&bg-color=255,255,255&fit=bounds"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie",
        img: "https://stationers.pk/cdn/shop/files/SharpieLiquidChiselTipHighlightersPackof10.jpg?v=1698914416"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline",
        img: "https://i.ytimg.com/vi/_HRZ4YJG-aA/maxresdefault.jpg"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren",
        img: "https://images.erincondren.com/Inspiration_Center_Media/Create_My_Own_Agenda_Planner/Create_My_Own_Agenda_Planner_-_header.jpg"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea",
        img: "https://www.ikea.com/gb/en/images/products/loberget-malskaer-swivel-chair-white__1078458_pe857202_s5.jpg?f=s"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu37HPByKC4SNG-1LQPGN0fo-vfWsS1kQlWQ&s"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture",
        img: "https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/52003-38?fit=fit&wid=1200&hei=900"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder",
        img: "https://m.media-amazon.com/images/I/81PiPeq6r8L._AC_UF894,1000_QL80_.jpg"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBma91tKqdQ1Ai5jObmoATmJfe4hZNJTcTQ&s"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQbtJyZJXveb1EMfa4fYTE9xX7xiH228xSlA&s"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSehG4ru3JdE6GJzf5Zdvkr2oitoj32tdv05Q&s"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack",
        img: "https://m.media-amazon.com/images/I/718TY-EAkuL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Y9qOJyuzzyyFU3ngKlgbTM4LCznbZgZtKg&s"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton",
        img: "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.6,f_auto,q_auto:good,w_iw/https://images.ctfassets.net/7vk8puwnesgc/TGSYQxP9ySuXMx9RS1jW8/1e34ee520187fe6afa3627add460526f/240091_WEB_PLP-Highlights-EOY24_2024_Bike_002_Still001.jpg"
    },

    // Kitchen
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen",
        brand: "Keurig",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYk6wTagO0kJKtafFYTlH6lQ6OXPQwBLn3Q&s"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen",
        brand: "Ninja",
        img: "https://static.wixstatic.com/media/e6e3ae_7288311711db482abfdfde25f9b4df1b~mv2.jpg/v1/fill/w_480,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e6e3ae_7288311711db482abfdfde25f9b4df1b~mv2.jpg"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen",
        brand: "KitchenAid",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0puPLGDPSffA3ENZ0vqyfmDFvddxaZm2Zmw&s"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen",
        brand: "Whirlpool",
        img: "https://www.whirlpool.com/is/image/content/dam/business-unit/whirlpool/en-us/marketing-content/site-assets/page-content/landing-pages/kitchen/refrigerators/refer-sclp-side-by-side-shop-set1.jpg?fit=constrain&fmt=png-alpha&wid=2875"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen",
        brand: "Bosch",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlE6WSQVOPH2Z2uZ8YtkxqLrYTuz5Z_Tl5SA&s"
    }
];

const div = document.getElementById("container");

        function renderItems(arr) {
            div.innerHTML = ""; // Clear previous items
            arr.forEach(item => {
                div.innerHTML += `
                    <div class="card" id = "child" style="width: 18rem;">
                        <img class="card-img-top p-1" style = "width: 18rem; height: 18rem; border: 1px white solid; border-radius: 2px" src = "${item.img}" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title">Name: ${item.name}</h5>
                            <h5 class="card-subtitle">Category: ${item.category}</h5>
                            <p class="card-text">Price: $${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                `;
            });
        }

        function filteredItem(element) {
            const selectedCategory = element.id;
            const filteredProducts = products.filter(item => item.category === selectedCategory);
            renderItems(filteredProducts);
        }

        // Initial display of all products
        renderItems(products);