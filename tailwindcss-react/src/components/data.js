import Img1 from '../assets/pngtree-grilled-round4.png'
import Img2 from '../assets/pngtree-grilled-round.png'
import Img3 from '../assets/pngtree-fresh-rpind.png'
import Img4 from '../assets/pngtree-cheese-pizza-gourmet-fast-food-decoration-three-round.png'
import Img5 from '../assets/pngtree-testy-fast-food-round.png'
const MenueData=[
    {
        id:1,
        name:'Salad',
        price:278,
        img: Img1
    },
    {
        id:2,
        name:'Cheese Sandwich',
        price:450,
        img: Img2
    },
    {
        id:3,
        name:'Fish Bowl',
        price:978,
        img: Img3
    },
    {
        id:4,
        name:'Pizza',
        price:567,
        img: Img4
    },
    {
        id:5,
        name:'Burger',
        price:209,
        img: Img5
    },
   
]

function getProductData(id){
    let productData= MenueData.find((item)=> item.id === id)
 
    return productData
 }

 export{MenueData,getProductData}