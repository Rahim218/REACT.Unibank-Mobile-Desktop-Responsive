import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function DebetCardList({ updateCartCount }) {
    const debetCards = [
        {
            id: 1,
            card_url: '	https://unibank.az/uploads/items/o_1fvf8egoctbh2n41il1sbd1crdi.jpg',
            card_name: "Visa Platinum",
            description: 'Bu kartla hər zaman və hər yerdə yüksək statusunu vurğula! Böyük imkanlar vədd edən kartı həyatının əvəzolunmaz bir hissəsinə çevir',
            itemCount: 1,
            price: 9.99
        },
        {
            id: 2,
            card_url: 'https://unibank.az/uploads/items/o_1fdhl5q9u2if7531bln1o1f68a.jpg',
            card_name: "Visa Infinite",
            description: 'Bu kartın sahibi olaraq, hər yerdə ən yaxşı xidmət və eksklüziv imkanlar səni gözləyir. Visa növündə olan bu kartdan olduqca fərqli faydalan. ',
            itemCount: 1,
            price: 7.99
        },
        {
            id: 3,
            card_url: '	https://unibank.az/uploads/items/o_1fl3rf8fd1cfrl7d10js1vg81jd4a.jpg',
            card_name: "Unimiles",
            description: 'Uçuşa hazır ol! UniMiles kartı ilə nağdsız ödənişlər et, millər topla və milləri istənilən hava yollarının aviabiletinə dəyiş. ',
            itemCount: 1,
            price: 5.99
        },
        {
            id: 4,
            card_url: '	https://unibank.az/uploads/items/o_1eqk202no1jcg2j11qivr8javla.jpg',
            card_name: "Mastercard Black Edition",
            description: 'Bu kartı əldə etməklə geniş səyahət, sığorta və xidmət imkanlarına malik olursan. Sənin yüksək statusunu MasterCard-ın ən nüfuzlu kartlarından biri vurğulayır! ',
            itemCount: 1,
            price: 8.99
        },
        {
            id: 5,
            card_url: 'https://unibank.az/uploads/items/o_1eqk20gao1app1l531oa285ffdta.jpg',
            card_name: "Mastercard World Elite",
            description: 'Dünyanın istənilən yerində eksklüziv imkanlar və yüksək xidmət səni gözləyir!Arzularını bu karta həvalə et! ',
            itemCount: 1,
            price: 4.99
        },


    ]

    const addToBasket = (event) => {


        let id = event.target.getAttribute('data-id');
        var data = debetCards.find(pr => pr.id == id);
        console.log(data);
        let wishlistLocal = JSON.parse(localStorage.getItem('basket'))
        console.log(wishlistLocal);
        if (wishlistLocal != null) {
            if (wishlistLocal.find(pr => pr.id == id) == undefined) {
                wishlistLocal.push(data);
                updateCartCount((prevCount) => prevCount + 1);
                toast.success("Kart  səbətə əlavə olundu...", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });


            }

            else {
                let elem = wishlistLocal.find(pr => pr.id == id)
                elem.itemCount = Number(elem.itemCount) + 1
                toast.success("Kart artıq səbətə əlavə olunub...", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });


            }

            localStorage.setItem("basket", JSON.stringify(wishlistLocal));


        } else {

            localStorage.setItem("basket", JSON.stringify([data]));
            updateCartCount((prevCount) => prevCount + 1);
            toast.success("Kart  səbətə əlavə olundu...", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });





        }


    }


    return (
        <div>
            <div className="debetcards ">

                <div className="debetcard-content row align-items-center  g-4">
                    {
                        debetCards.map((item) => {
                            return (

                                <div className="col-lg-6 col-12">
                                    <div className="card-box">
                                        <div className="card-photo">
                                            <img src={item.card_url} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h2>{item.card_name}</h2>
                                            <p>{item.description}</p>
                                            <button onClick={addToBasket} data-id={item.id} >Add basket</button>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

            </div>

        </div>
    )
}

export default DebetCardList
