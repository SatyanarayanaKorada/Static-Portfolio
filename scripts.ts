document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form') as HTMLFormElement | null;
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('name') as HTMLInputElement | null;
            const emailInput = document.getElementById('email') as HTMLInputElement | null;
            const messageInput = document.getElementById('message') as HTMLTextAreaElement | null;

            const name = nameInput?.value || '';
            const email = emailInput?.value || '';
            const message = messageInput?.value || '';

            if (name && email && message) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
