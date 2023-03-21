import HeaderCard from "../components/HeaderCard"
import ItemsContainer from "../components/ItemsContainer"
import Navbar from "../components/Navbar/Navbar"

export const Home =()=>{
  return (
    <main style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: "1440px", paddingBottom: '100px' }}>
      <Navbar />
      <HeaderCard />
      <ItemsContainer />
      </div>
    </main>
  )
}