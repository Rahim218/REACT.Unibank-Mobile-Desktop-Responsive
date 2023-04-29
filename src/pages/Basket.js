import React, { useState, useEffect } from 'react'

function Basket() {

    const [basketItems, setBasketItems] = useState([]);






    const basketHandler = () => {
        let wishlist = localStorage.getItem("basket");

        if (wishlist != undefined) {
            setBasketItems(JSON.parse(wishlist));
        } else {
            setBasketItems([]);
        }
    }

    const DeleteHandler = (event) => {
        let id = event.target.getAttribute('data-id');
        let wishlists = JSON.parse(localStorage.getItem("basket"));
        const index = wishlists.indexOf(wishlists.find(c => c.id == id));
        wishlists.splice(index, 1);
        if (JSON.stringify(wishlists) == "[]") {
            localStorage.removeItem("basket");
        } else {
            localStorage.setItem("basket", JSON.stringify(wishlists));
        }
        basketHandler();
    }

    const handleCountChange = (itemId, newCount) => {
        let productList = JSON.parse(localStorage.getItem('basket'));
        if (newCount >= 0) {
            productList.forEach(element => {
                if (element.id === itemId) {
                    element.itemCount = newCount;
                    element.totalPrice = element.price * newCount;
                }
            });
            localStorage.setItem('basket', JSON.stringify(productList));

            let totalPrice = productList.reduce((total, item) => total + item.totalPrice, 0);

            setBasketItems(productList);

            localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
        }
        else {
            alert("Minimum değer 0 olabilir.")
        }
    }

    useEffect(() => {
        basketHandler();
    }, [])


    return (
        <section class="shopping-cart dark">
            <div class="container">
                <div class="block-heading">
                    <h2>Your Items</h2>

                </div>
                <div class="conten">
                    <div class="row">
                        <div class="col-md-12 col-lg-12 ">
                            <div class="items">
                                {JSON.parse(localStorage.getItem('basket')) != undefined ?


                                    basketItems.map((item) => {
                                        return (
                                            <div class="product">
                                                <div class="row align-items-center justify-content-center">
                                                    <div class="col-md-3">
                                                        <img class="card-url" src={item.card_url} />
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="info">
                                                            <div class="row align-items-center">
                                                                <div class="col-md-5 product-name">
                                                                    <div class="product-name">
                                                                        <a href="/#">{item.card_name}</a>
                                                                        <div class="product-info">
                                                                            <div><span>Price : {item.price * item.itemCount}$</span></div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 quantity">
                                                                    <label for="quantity">Quantity:</label>
                                                                    <input id={item.id} type="number" value={item.itemCount} onChange={(e) => handleCountChange(item.id, e.target.value)} class="form-control quantity-input" />
                                                                </div>
                                                                <div class="col-md-3 price">

                                                                    <i onClick={DeleteHandler} className="fa-solid fa-trash-can"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                    : <h1 className='text-center'>Empty</h1>



                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Basket

