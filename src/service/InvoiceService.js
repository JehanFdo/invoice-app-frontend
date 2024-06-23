import axios from "axios";

const BASE_URL = "http://localhost:8082/api/v1"

class InvoiceService {
    createInvoice(invoice) {
        return axios.post(
            BASE_URL + "/invoices",
            invoice
        );
    }

    getInvoice(id) {
        return axios.get(
            BASE_URL + `/invoices/${id}`
        );
    }

    updateInvoice(id, invoice) {
        return axios.put(
            BASE_URL + `/invoices/${id}`,
            invoice
        );
    }

    getInvoices() {
        return axios.get(
            BASE_URL + "/invoices",
            {
                validateStatus: () => {
                    return true;
                }
            }
        );
    }

    deleteInvoice(id) {
        return axios.delete(
            BASE_URL + `/invoices/${id}`
        );
    }

}

const invoiceService = new InvoiceService();
export default invoiceService;
