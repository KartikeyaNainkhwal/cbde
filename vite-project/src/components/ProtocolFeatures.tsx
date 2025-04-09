function ProtocolFeatures() {
    const features = [
      {
        icon: "$",
        title: "Instant Payments",
        description: "Payments settle in 400ms, USDC remains available and spendable in every transaction."
      },
      {
        icon: "⚡",
        title: "Instant Confirmations",
        description: "Payments are confirmed instantaneously in USDC, received in seconds."
      },
      {
        icon: "↗",
        title: "Split Settlements",
        description: "Automatic distribution of each transaction to issuer, protocol & acquirer wallets."
      },
      {
        icon: "↔",
        title: "Network Effect",
        description: "Issuers and acquirers utilize a existing digital dollar ecosystem."
      },
      {
        icon: "🔑",
        title: "Role Capability",
        description: "Roles can be self-custodied or handled by licensed payment providers."
      },
      {
        icon: "🔒",
        title: "Data Security",
        description: "All transaction data is encrypted on secured packets."
      }
    ];
  
    return (
      <section className="protocol-features">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Protocol Features</span>
            <h2 className="section-title">Stablepay Protocol</h2>
          </div>
  
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default ProtocolFeatures
