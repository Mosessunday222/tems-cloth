// import { useParams } from "react-router-dom"
// import { useEffect, useState } from "react"
// import { ProductData } from "./Trending/ProductData"

// import { useDispatch } from '@reduxjs/toolkit';
// import { addToCart } from "../store/Cart";
// function Details() {
//     const {slug} = useParams();
//     const {detail, setDetail} =useState([])
//     const [quantity, setQuqntity] = useState(1)
//     const dispatch = useDispatch( )
//     useEffect(() => {
// const findDetail = ProductData.filter(product => product => product.slug === slug)
// if(findDetail.length > 0) {
//     setDetail(findDetail[0])
// } else{
//     window.location.href ='/'
// }
//     }, [slug])
//     const handleMinusQuanty = () => {
//         setQuqntity(quantity - 1 < 1 ? 1 : quantity -1)
//     }

//     const handlePlusQuanty = () => {
//         setQuqntity(quantity + 1)
//     }
//     const handleAddToCart = () => {
//         dispatch(addToCart({
//             productId: detail.id,
//             quantity:quantity
//         }))

//     }
//     return (
//         <div>
//             <h2 className="text-3xl text-center">Product Details</h2>
//             <div className="grid grid-col2 gap-5 mt-5">
//                <img src={detail.photoName} alt="img" className="w-full"/>
//             </div>
//             <div className="flex flex-col gap-5">
//             <h1 className="text-4xl uppercase font-bold ">{detail.name}</h1>
//             <p className=" font-bold text-3xl">
//          {detail.price}
//             </p>
//             <div className="flex gap-5">
//                 <div className="flex gap-2 justify-center ">
//                     <button className="bg-gray-100 font-bold text-xl flex justify-center items-center" onClick={handleMinusQuanty}>-</button>
//                     <span className="bg-gray-100 font-bold text-xl flex justify-center items-center">{quantity}</span>
//                     <button className="bg-gray-100 font-bold text-xl flex justify-center items-center" onClick={handlePlusQuanty}>+</button>
//                 </div>
//                 <button className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl" onClick={handleAddToCart}>add to cart</button>

//             </div>
//             {detail.description}
//             </div>
//         </div>
//     )
// }

// export default Details