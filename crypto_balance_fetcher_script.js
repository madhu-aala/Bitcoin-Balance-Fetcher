function getAddressBalance() {
    var address = document.getElementById("addressInput").value.trim();
    var apiUrl = "https://blockchain.info/q/addressbalance/" + address;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to retrieve address balance. Response code: ' + response.status);
            }
            return response.text();
        })
        .then(balance => {
            var balanceBTC = parseFloat(balance) / 100000000.0;
            document.getElementById("balance").innerText = "Balance of address " + address + ": " + balanceBTC + " BTC";
        })
        .catch(error => {
            var errorMessage = "Error reading address balance: " + error.message;
            var balanceElement = document.getElementById("balance");
            balanceElement.innerText = errorMessage;
            balanceElement.style.color = "red";
        });
        
}