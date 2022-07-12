const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "yjzks84p4k8c3tcc",
  publicKey: "c9xfmnhz87hnnxpr",
  privateKey: "1f0e6556113af8d25ea418b13d784aea"
});


exports.getToken = (req, res) => {
    gateway.clientToken.generate({}, function(err, response) {
        if (err) {
            res.status(500).send(err);
        }else {
            res.send(response);
        }
    });
};

exports.processPayment = (req, res) => {

    let nonceFromTheClient = req.body.paymentMethodNonce

    let amountFromTheClient = req.body.amount

    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, 
      function(err, result) {
        if (err) {
            res.status(500).send(err);
        }else {
            res.send(result);
        }
      });
};