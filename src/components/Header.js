import { useContext } from "react";
import DataContext from "../context/Datacontext";
import { HeaderContainer } from "./component-styles/header-style";


function Header() {
  const { states, requests } = useContext(DataContext);
  
    return (
        <HeaderContainer>
            <h1 onClick={requests.goToHome}>X Solar Tech</h1>
            {states.page === 0 && <button onClick={requests.nextPage}>ADICIONAR CLIENTE</button>}
        </HeaderContainer>
  );
}

export default Header;
