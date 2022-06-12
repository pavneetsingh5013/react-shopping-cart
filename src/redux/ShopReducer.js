import iphone13 from './iphone13.jpg'
import macbook from './macbook.jpg'
import asustuf from './asustuf.jpg'
import * as actionTypes from './Actions'

const intialState={
    products:[
        {
        id: 1,
        title: "iPhone 13 (128 GB) (RED)",
        description:
          `iPhone 13 boasts super-fast performance and power efficiency with A15 Bionic, longer battery life, a brighter Super Retina XDR display that brings content to life, incredible durability with the Ceramic Shield front cover, double the entry-level storage at 128GB, an industry-leading IP68 rating for water resistance, and an advanced 5G experience.
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