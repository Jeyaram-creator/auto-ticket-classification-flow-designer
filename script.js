// script.js - Auto Ticket Classification Flow Designer

document.addEventListener('DOMContentLoaded', () => {
    console.log('Ticket Classification Flow Designer initialized.');

    // Initialize the flow designer canvas or UI
    const initDesigner = () => {
        // TODO: Add logic for setting up drag-and-drop, nodes, or forms
        console.log('Designer UI ready.');
    };

    initDesigner();
});

/**
 * Mock function to classify a ticket based on text input.
 * You can replace this with actual API calls to an ML model later.
 * 
 * @param {string} ticketDescription - The content of the support ticket
 * @returns {string} - The predicted category
 */
function classifyTicket(ticketDescription) {
    if (!ticketDescription) return 'Uncategorized';

    const text = ticketDescription.toLowerCase();

    if (text.includes('password') || text.includes('login') || text.includes('access')) {
        return 'Authentication';
    } else if (text.includes('server') || text.includes('down') || text.includes('crash')) {
        return 'Infrastructure';
    } else if (text.includes('bug') || text.includes('error') || text.includes('exception')) {
        return 'Software Bug';
    }

    return 'General Support';
}
