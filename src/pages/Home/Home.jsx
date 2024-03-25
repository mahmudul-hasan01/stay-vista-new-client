import { Helmet } from "react-helmet-async"
import Categories from "../../components/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Container>

        {/* Categories Section */}
        <Categories> </Categories>
        {/* Rooms Section */}
        <Rooms></Rooms>

      </Container>
    </div>
  )
}

export default Home
