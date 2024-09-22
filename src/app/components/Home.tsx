"use client";
import "../styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="marketSize-TVL-container">
        {/* Market Size Section */}
        <div className="marketSize">
          <p>Market Size</p>
          <div className="duration">
            <button className="active">1h</button>
            <button>1d</button>
            <button>1w</button>
          </div>
        </div>

        {/* Total Value Locked section */}
        <div className="tvl">
          <p>Total Value Locked</p>
        </div>
      </div>

      {/* Crypto Derivatives Platform Data from Defillama */}
      <div className="crypto-derivatives-container">
        <div className="tableHeader">
          <p>#</p>
          <p>Name</p>
          <p>Total Value Locked</p>
          <p>Chain</p>
          <p>24h volume</p>
          <p>Open Interest</p>
          <p>Last 7d volume</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
