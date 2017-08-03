const queryDB = require('../utils/Database');

class Bill {
    constructor(idbill, idcustomer, bill_address, bill_date, bill_delivery_date, bill_phone, bill_status, bill_total) {
        this.idbill = idbill;
        this.idcustomer = idcustomer;
        this.bill_address = bill_address;
        this.bill_date = bill_date;
        this.bill_delivery_date = bill_delivery_date;
        this.bill_phone = bill_phone;
        this.bill_status = bill_status;
        this.bill_total = bill_total;
    }

}