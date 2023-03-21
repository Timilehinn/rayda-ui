import { useGetAllProductsQuery } from "../features/apiSlice"

export const Data =()=>{
  const { data: allProducts } = useGetAllProductsQuery("productsApi")
  return <div></div>
}