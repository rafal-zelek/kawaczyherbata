import styled, {createGlobalStyle} from "styled-components";
import {BiSolidCoffeeBean, BiSolidLemon} from "react-icons/bi";
import {GiTeapot} from "react-icons/gi";

const GlobalStyle = createGlobalStyle`
  body {

    background-color: #FFFBC1;
  }
`

const Layout = styled.div`
  display: flex;
  padding: 50px 50px;
  
  gap: 50px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Card = styled.div`
  width: 150px;
  height: 200px;
  padding: 25px;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  
  cursor: pointer;
  user-select: none;
  
  &:hover {
    transform: translateY(+10px);
  }
`

const CoffeeCard = styled(Card)`
  background-color: #febe8c;
  border-bottom: 1vw solid #987254;
  
  &:active {
    background-color: #e5a97d;
  }
`

const CoffeeIcon = styled(BiSolidCoffeeBean)`
  font-size: 100px;
  color: #664c38
`;

const GreenTeaIcon = styled(GiTeapot)`
  font-size: 100px;
  color: #6d8861
`

const GreenTeaCard = styled(Card)`
  border-bottom: 1vw solid #7f9e71;
  background-color: #B6E2A1;
  
  &:active {
    background-color: #a4cb91;
  }
`

const CoffeeDescription = styled.p`
    //font-size: 30px;
    font-weight: bold;
    color: #664c38;
    `
const GreenTeaDescription = styled.p`
    //font-size: 30px;
    font-weight: bold;
    color: #6d8861;
    `
function App() {
    return (
        <Layout>
            <GlobalStyle/>
            <CoffeeCard>
                <CoffeeIcon/>
                <CoffeeDescription>Kawa</CoffeeDescription>
            </CoffeeCard>
            <GreenTeaCard>
                <GreenTeaIcon/>
                <GreenTeaDescription>Zielona herbata</GreenTeaDescription>
            </GreenTeaCard>
            <GreenTeaCard>
                <GreenTeaIcon/>
                <GreenTeaDescription>Zielona herbata z cytryną</GreenTeaDescription>
            </GreenTeaCard>
        </Layout>
    );
}

export default App;
