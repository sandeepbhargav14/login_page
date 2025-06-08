submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    if (emailValid && checkboxEl.checked && nameValid && sprayRepeatCounter > 1) {
        const formData = {
            name: nameEl.value,
            email: emailEl.value,
            subscribe: checkboxEl.checked
        };

        try {
            const response = await fetch('http://localhost:3000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            alert(result.message);
        } catch (err) {
            alert('Something went wrong. Try again.');
        }
    }
});
