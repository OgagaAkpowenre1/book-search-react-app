import Header from "../../components/Header/header"
import { Outlet } from "react-router-dom"

const Home = () => {
    return (
        <main>
            <Header />
            <Outlet />
            
        </main>
    )
}

export default Home