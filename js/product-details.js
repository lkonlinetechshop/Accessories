const products = [

{
id:1,

name:"RichAuto A11E 3 Axis CNC Controller",

category:"CNC parts",

image:"images/RichAuto_A11E.jpg",

oldPrice:126500,

price:115000,

discount:"10%",

rating:"★★★★★",

stock:"In Stock",

description:
"High performance gaming laptop with powerful processor, dedicated graphics card and fast SSD storage."

},


{
id:3,

name:"4 Axis CNC Breakout Board For Mach3",

category:"CNC parts",

image:"images/mach3.jpg",

oldPrice:5985,

price:5700,

discount:"5%",

rating:"★★★★☆",

stock:"In Stock",

description:
"Mechanical RGB gaming keyboard with anti-ghosting keys and durable switches."

},


{
id:2,

name:"Cloned RichAuto A11 3 Axis 0501 DSP CNC Controller",

category:"CNC parts",

image:"images/cloned_richauto_a11.jpg",

oldPrice:67200,

price:60000,

discount:"12%",

rating:"★★★★★",

stock:"In Stock",

description:
"High precision gaming mouse with adjustable DPI and RGB lighting."

},

{
id:4,

name:"Arduino UNO Original Development Board with USB Cable",

category:"Electronics",

image:"images/unooriginal.jpg",

oldPrice:2448,

price:2400,

discount:"2%",

rating:"★★★★★",

stock:"In Stock",

description:
"The Arduino UNO is the most widely used and documented development board in the Arduino ecosystem. Based on the ATmega328P microcontroller, it offers 14 digital I/O pins, 6 analog inputs, and USB connectivity for programming and serial communication. Ideal for beginners and professionals alike."

}


];



// Get Product ID from URL

const urlParams = new URLSearchParams(window.location.search);

const id = Number(urlParams.get("id"));


// Find Product

const product = products.find(
p => p.id === id
);



const container =
document.getElementById("product-details");



if(product){


container.innerHTML = `


<div class="product-details">


<div>

<img src="${product.image}">

</div>



<div class="product-info">


<span class="discount">

-${product.discount}

</span>


<h1>

${product.name}

</h1>



<p class="category">

${product.category}

</p>



<div class="rating">

${product.rating}

</div>



<p class="price">

<del>

Rs.${product.oldPrice.toLocaleString()}

</del>


<strong>

Rs.${product.price.toLocaleString()}

</strong>


</p>



<span class="stock">

${product.stock}

</span>



<p class="product-description">

${product.description}

</p>



<div class="quantity-box">

    <button
        type="button"
        onclick="changeQty(-1)">
        -
    </button>


    <input
        id="qty"
        type="number"
        value="1"
        min="1"
        readonly
    >


    <button
        type="button"
        onclick="changeQty(1)">
        +
    </button>

</div>


<button
    type="button"
    class="add-cart buy-btn"
    onclick="addToCart()">

    <i class="fa-solid fa-cart-shopping"></i>
    <a href="index.html">
    </a>

    Add To Cart

</button>

</div>

`;



}
else{


container.innerHTML =
"<h2>Product Not Found</h2>";


}




function changeQty(value) { 
    const qtyInput = document.getElementById("qty"); 
    
    if (!qtyInput) { 
        console.log("Quantity input not found!"); 
        return; 
    } 
    let currentQty = parseInt(qtyInput.value) || 1;
     currentQty = currentQty + value; 
     // Minimum quantity = 1 
      if (currentQty < 1) {
         currentQty = 1; 
        } 
        qtyInput.value = currentQty; 
        console.log("Quantity:", currentQty); 
    }

// ======== // ADD TO CART // ==================== 
function addToCart() {
     if (!product) {
         return; 
        } 
        // IMPORTANT: // Get the current quantity from input
         const qtyInput = document.getElementById("qty"); 
         const quantity = parseInt(qtyInput.value) || 1; 
         console.log("Adding quantity:", quantity); 
          window.location.href = "index.html";
         // Get existing cart 
         let cart = JSON.parse( 
            localStorage.getItem("cart") 
        ) || []; 
        // Check existing product 
        const existingProduct = cart.find( 
            item => item.id === product.id 
        ); 
        if (existingProduct) { 
            existingProduct.quantity += quantity; 
        } else { 
            cart.push({ 
                id: product.id,
                 name: product.name, 
                 price: product.price, 
                 image: product.image, 
                 quantity: quantity 
                }); 
            } 
            // Save cart 
            localStorage.setItem(
                 "cart",
                  JSON.stringify(cart) 
                ); 
                alert( 
                    product.name + 
                    " x " + 
                    quantity + 
                    " added to cart!" 
                ); 
            }
