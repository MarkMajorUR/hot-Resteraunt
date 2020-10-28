class Customer {
    constructor(customerName, customerEmail, phoneNumber, customerId) {
        this.customerName = customerName;
        this.customerId = customerId;
        this.customerEmail = customerEmail;
        this.phoneNumber = phoneNumber;
    }
    

    //returns object's name
    getCustomerName() {
        return this.customerName;
    }

    //returns object's id
    getCustomerId() {
        return this.customerId;
    }

    //returns object's email
    getCustomerEmail() {
        return this.customerEmail;
    }

    //returns object's role
    getPhoneNumber() {
        return this.phoneNumber;
    }
}
module.exports = Customer;