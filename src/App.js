import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import Nft from "./components/Nft";
import Payment from "./components/Payment";
import WalletConnect from "@walletconnect/client";

function App() {
  const uri = "wc:fdbcd080-f888-4939-91b2-eb7f1b4f0872@1?bridge=https%3A%2F%2Fopensea.bridge.walletconnect.org&key=836b1f894ceb9464bef2efe1563e8a10eedb9880fdb345e764e8567dfa790be1";
  const connector = new WalletConnect(  {
    // Required
    uri: uri,
    // Required
    clientMeta: {
      description: "WalletConnect Developer App",
      url: "https://walletconnect.org",
      icons: ["https://walletconnect.org/walletconnect-logo.png"],
      name: "WalletConnect",
    },
  },);
console.log(connector);

  const nftData = [
    {
      tokenid: "4452",
      address: "0x88c2b948749b13abc1e0ae4b50ebeb2131d283c1",
      name: "WolfGang",
      price: "46.55",
      image:
        "https://lh3.googleusercontent.com/RH-WcIPRzAxbn64yMufLmvbXYTB1vWPbeDpaU47CD_dY8fvpiWY5HJjt6HDREbCMzzyGEiUxKQzOgz7i7mYvnFykBceJxy4vhUtAIQ=w600",
    },
    {
      tokenid: "4452",
      address: "0x88c2b948749b13abc1e0ae4b50ebeb2131d283c1",
      name: "CryptoSharks",
      price: "15.5",
      image:
        "https://lh3.googleusercontent.com/_UU5lQqmqAWAaO1fHQrNat04_xpfFB31EqoKYckcVi2ZlGR1niD3drctf63JIMEvL3jgr62xnNYM53s0Mc_C1EvVqywrRQXizxMu2A=w600",
    },
    {
      tokenid: "4452",
      address: "0x88c2b948749b13abc1e0ae4b50ebeb2131d283c1",
      name: "Soccer Doge",
      price: "185",
      image:
        "https://lh3.googleusercontent.com/Hua4wMUJoHhADGcDwgpwecVKlVWXI31Xp5THgLlD7OOvLXtZyRcPVfo9pNAUF1JqOLTaTrIb9M8-xMlCXjldsnwxYwa3ko0voi2k3rc=w600",
    },
    {
      tokenid: "4452",
      address: "0x88c2b948749b13abc1e0ae4b50ebeb2131d283c1",
      name: "Dope Shiba",
      price: "110",
      image:
        "https://lh3.googleusercontent.com/q66GTlHQPVb2nYaTd38f_1VtmzqrUhXr2MlPcuuyGp3J2UKtnAZJPgLe1BR01JzJ8rSjpNpR2YHauhnK4dNwqTNr4pDnhkE69F_XRw=w600",
    },
  ];
  return (
    <div className="">
      {" "}
      <ChakraProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginForm />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard nftData={nftData} />
            </Route>
            <Route exact path="/dashboard/:tokenID">
              <Nft nftData={nftData} />
            </Route>
            <Route exact path="/payment">
              <Payment />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
