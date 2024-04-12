import { CiLogout } from "react-icons/ci";
import { MdLeaderboard } from "react-icons/md";
import Logo from "../../components/Logo";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 80px;
    padding: 1.5rem;
    background-color: #6b8f84;
`;

const StyledUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledUserInfo = styled.div`
    display: flex;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: center;
`;

const Header = () => {
    return(
        <StyledHeader>
            <Logo />
            <StyledUser>
                <h1>Teste</h1>
                <StyledUserInfo>
                    <p>bla bla bla</p>
                    <p>bli bli bli</p>
                </StyledUserInfo>
            </StyledUser>
            <StyledNav>
                <CiLogout />
                <MdLeaderboard />
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;