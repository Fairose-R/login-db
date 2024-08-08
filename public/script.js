document.getElementById('dataForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const transaction = document.getElementById('transaction').value;
    const amount = document.getElementById('amount').value;

    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, transaction, amount })
    });

    const result = await response.json();
    document.getElementById('response').textContent = result.message;
});
