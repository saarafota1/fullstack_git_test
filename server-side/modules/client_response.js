module.exports = {
    success: Boolean,
    error: Boolean,
    message: String,
    data: [],
    setResponse: (success, error, message, data) => {
        this.success = success;
        this.error = error;
        this.message = message;
        this.data = data;
    },
    clear: () => {
        this.success = true;
        this.error = false;
        this.message = "";
        this.data = [];
    }
}