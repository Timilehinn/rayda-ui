import { useGetAllProductsQuery } from "../features/apiSlice"

export const Data =()=>{
  const { data: allProducts, refetch, isLoading, isError, isFetching } = useGetAllProductsQuery("productsApi")
  console.log(allProducts)
  return <div></div>
}