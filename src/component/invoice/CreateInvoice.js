import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import InvoiceService from "../../service/InvoiceService";

const CreateInvoice = () => {
    let navigate = useNavigate();
    const [invoice, setInvoice] = useState({
        invoiceNo: "",
        customer: "",
        email: "",
        invoiceDate: "",
        amount: "",
        status: ""
    });

    const {
        invoiceNo,
        customer,
        email,
        invoiceDate,
        amount,
        status,
    } = invoice;

    const [invoiceStatus] = useState([
        "Paid",
        "UnPaid",
        "Pending"
    ])

    const handleInputChange = (e) => {
        setInvoice({
            ...invoice,
            [e.target.name]: e.target.value
        });
    };

    const createInvoice = async (e) => {
        e.preventDefault()
        let createRes = await InvoiceService.createInvoice(invoice);
        // let createRes = await axios.post(
        //     "http://localhost:8082/invoices",
        //     invoice
        // );
        if (createRes.data.status === "00") {
            navigate("/view-invoice");
        } else {
            console.log(createRes.data.message);
        }
    }
    return (
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5"> Create Invoice</h2>
            <form onSubmit={(e) => createInvoice(e)}>
                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="invoiceNo">
                        Invoice No
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="invoiceNo"
                        id="invoiceNo"
                        required
                        value={invoiceNo}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="customer">
                        Customer
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="customer"
                        id="customer"
                        required
                        value={customer}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="email">
                        Your Email
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="invoiceDate">
                        Invoice Date
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="invoiceDate"
                        id="invoiceDate"
                        required
                        value={invoiceDate}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="amount">
                        Amount
                    </label>
                    <input
                        className="form-control col-sm-6"
                        type="text"
                        name="amount"
                        id="amount"
                        required
                        value={amount}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>

                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor="status">
                        Status
                    </label>
                    {/*<input*/}
                    {/*    className="form-control col-sm-6"*/}
                    {/*    type="text"*/}
                    {/*    name="status"*/}
                    {/*    id="status"*/}
                    {/*    required*/}
                    {/*    value={status}*/}
                    {/*    onChange={(e) => handleInputChange(e)}*/}
                    {/*/>*/}
                    <select className="form-control col-sm-6"
                            aria-label="Default select example"
                            name="status"
                            id="status"
                            value={status}
                            onChange={(e) => handleInputChange(e)}
                    >
                        <option>Open this select menu</option>
                        {invoiceStatus.map(
                            s => (
                                <option key={s} value={s}>
                                    {s}
                                </option>

                            )
                        )}
                    </select>
                </div>

                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button
                            type="submit"
                            className="btn btn-outline-success btn-lg">
                            Save
                        </button>
                    </div>

                    <div className="col-sm-2">
                        <Link
                            to={"/view-invoice"}
                            type="submit"
                            className="btn btn-outline-warning btn-lg">
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateInvoice;
