import React from "react";

import nft from './nft1.jpeg';

export default () => {

    return(

        <>
        
            <div className="mint-block">

                <h2>Mint</h2>

                <div className="nft-box container">
                    <div className="nft-image">
                        <div className="img-nft">
                            <img src={nft} />

                            <div className="nft-number">
                                <p>NFT Name #0</p>
                            </div>
                        </div>

                        <div className="nft-buy">
                            <div className="nft-cost">
                                <p>Price</p>
                                <p>1 Ether</p>
                            </div>
                            <button className="btn btn-mint">Mint NFT</button>
                        </div>
                    </div>

                    <div className="nft-info">
                        <button className="btn btn-primary btn-connect">Connect Wallet</button>
                        <div className="nft-info-text">
                            <h3>NFT Name</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo expedita temporibus dignissimos sint quam eaque ipsum illum.</p>
                        </div>
                    </div>

                    
                </div>

            </div>
        
        </>

    );

}