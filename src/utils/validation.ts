

/**
 * Validates an email address using a standard regex pattern.
 */
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates a phone number to ensure it consists of exactly 10 digits.
 * This is suitable for standard Indian phone numbers.
 */
export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, "")); // Allow spaces but check for 10 digits
};