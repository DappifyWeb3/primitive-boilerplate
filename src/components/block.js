const block = {
  id: `section-${process.env.MODULE_ID}`,
  label: "Connect Wallet",
  category: "Web3",
  attributes: {
    class: "fa fa-address-card-o",
  },
  content: `
            <section id="${process.env.MODULE_ID}">
              <button id="btn-login" type="button" class="btn">Connect wallet</button>
              <button id="btn-logout" type="button" class="btn" style="display:none;">Disconnect</button>
            </section>
            <style>
          .coin-price-component img {
            display: inline-block;
          }
          </style>`,
};

export default block;
