// Validators Utils
export const Validators = {
  isEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },
  isRequired: (value) => {
    return value !== null && value !== undefined && value !== '';
  }
};
