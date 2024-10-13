document.getElementById('amount').addEventListener('change', function() {
    const customAmount = document.getElementById('custom-amount');
    customAmount.style.display = this.value === 'custom' ? 'block' : 'none';
});

document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('amount').value === 'custom' ? document.getElementById('custom-amount').value : document.getElementById('amount').value;
    alert(`Thank you for your donation of $${amount}!`);
    // Here you would integrate the payment processing.
});
