import iphone13 from './iphone13.jpg'
import macbook from './macbook.jpg'
import asustuf from './asustuf.jpg'
import airm1 from './airm1.jpg'
import smasungf22 from './smasungf22.jpg'
import redmi10s from './redmi10s.jpg'
import * as actionTypes from './Actions'

const intialState={
    products:[
        {
        id: 1,
        title: "iPhone 13 (128 GB) (RED)",
        description:
          `iPhone 13 boasts super-fast performance and power efficiency with A15 Bionic, longer battery life, a brighter Super Retina XDR display that brings content to life, incredible durability with the Ceramic Shield front cover, double the entry-level storage at 128GB.
          `,
        price: 68000,
        image:iphone13,
      },
      {
        id: 2,
        title: "ASUS TUF F15",
        description:
            `Geared for serious gaming and real-world durability, the TUF Gaming F15 is a fully-loaded Windows 10 gaming laptop that can carry you to victory. Powered by the latest 10th Gen Intel Core CPU and GeForce GTX 1650 GPU, action-packed gameplay is fast, fluid, and fully saturates speedy IPS-level displays up to 144Hz.

            `,
        price: 57000.0,
        image:asustuf,
      },
      {
        id: 3,
        title: "MACBOOK AIR M2",
        description:
          `Apple MacBook Air (M2, 2022) is a macOS laptop with a 13.60-inch display.
           It is powered by a Apple M2 processor and it comes with 8GB of RAM.
           The Apple MacBook Air (M2, 2022) packs 256GB of SSD storage.`,
        price: 119000.0,
        image:macbook
      },
      {
        id:4,
        title:`MacBook Air 13" - Space Grey - M1 Chip (2020, 33.74cm)`,
        description:`
        Apple MacBook Air (M1, 2020) is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Apple M1 processor and it comes with 8GB of RAM. The Apple MacBook Air (M1, 2020) packs 512GB of SSD storage.
        
        `,
        price: 92000.0,
        image:airm1

      },
      {
        id:5,
        title:`SAMSUNG Galaxy F22 (Denim Blue, 64 GB)  (4 GB RAM)
        `,
        description:`
        Bid goodbye to screen stuttering, poor display quality, and low-resolution photos by getting your hands on the Samsung Galaxy F22 smartphone. Featuring a 90 Hz refresh rate, HD+ sAMOLED display, and True 48 MP quad-rear camera. 
        
        `,
        price: 10500.0,
        image:smasungf22

      },
      {
        id:6,
        title:`REDMI Note 10S (Deep Sea Blue, 64 GB)  (6 GB RAM)`,
        description:`
        Unleash the gaming enthusiasm in you with the powerful Redmi Note 10s smartphone. This mobile phone features a 16.33 cm (6.42) Super AMOLED display to ensure a smooth viewing and gaming experience. Also, it is driven by an efficient Helio G95 processor .`,
        price: 12000.0,
        image:redmi10s

      }
    ],
    currentItem:null,
    cart:[]
}
const ShopReducer=(state=intialState,action)=>{
    switch(action.type)
    {
    case actionTypes.ADD_TO_CART:
        const item=state.products.find((product)=>product.id==action.payload.id)
        const inCart=state.cart.find((product)=>product.id==action.payload.id?true:false)
        return {
          ...state,
          cart: inCart?
          state.cart.map((product)=>product.id==action.payload.id?{...product,qty:product.qty+1}:product):
          [...state.cart,{...item,qty:1}]
        }
      case actionTypes.LOAD_CURRENT_ITEM:
        return {
          ...state,
          currentItem:action.payload.item
        }
        case actionTypes.UPDATE_QTY:
          return {
            ...state,
            cart: 
            state.cart.map((product)=>product.id==action.payload.id?{...product,qty:action.payload.qty}:product)
          }
          case actionTypes.REMOVE_FROM_CART:
            return{
              ...state,
              cart:state.cart.filter((product)=>product.id!=action.payload.id)
            }
          

        default : return state

      }
    return state;
}
export default ShopReducer;