import React, { useState } from 'react';
import { ethers, Contract } from 'ethers';

import "./customFont.css";
import "./normalize.css";
import "./styles.css";

import TopBlock from "./TopBlock";
import Mint from "./Mint";



function App() {

  const [provider, setProvider] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(undefined);
  const [signer, setSigner] = useState(undefined);


  const login = async () => {
    try {
      let newProvider = new ethers.providers.Web3Provider(window.ethereum);
      if(newProvider != undefined) {
        let newAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
        let newSigner = await newProvider.getSigner();
        setProvider(newProvider);
        setAccount(newAccount);
        setSigner(newSigner);
        setConnected(true);
      } else {
        alert("Please Install Metamask.");
      }
    } catch (error) {
      console.log(error);
    }

  }

  
  return (
    <>
      <div className='lg-bg'>
        <div className='top'>
          <div className='top-nav'>
            <nav className='navbar navbar-expand-lg navbar-dark row container'>
              <a className="navbar-brand col-lg-2" href=''>Logo Here</a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse col-lg-8" id="navbarTogglerDemo02">

                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#footer">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">Roadmap</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#mint">Mint</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#cta">WhitePaper</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#cta">DApp</a>
                  </li>
                </ul>

              </div>

              <div className='col-lg-2'></div>

            </nav>
          </div>

          <TopBlock />

          </div>
      </div>

      <Mint login={ login } connected={ connected } />
      

    </>
  );
}

export default App;
