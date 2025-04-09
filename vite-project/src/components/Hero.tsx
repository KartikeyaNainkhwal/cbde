function Hero() {
    return (
      <section className="hero">
        <div className="container">
          <div className="tagline">a new digital dollar payment method</div>
          
          <h1 className="hero-title">
            <span>Enabling </span>
            <span className="text-primary">seamless onchain payments</span>
            <span> between wallet issuers and merchant acquirers.</span>
          </h1>
  
          <p className="hero-text">
            Built on Solana technology and leveraging Circle USDC infrastructure, Stablepay is a new payment method
            protocol for instant and cost-effective transactions.
          </p>
  
          <div className="hero-actions">
            <button className="btn btn-primary">
              Request Access <span className="icon">↗</span>
            </button>
            <button className="btn btn-outline">Ecosystem</button>
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero
