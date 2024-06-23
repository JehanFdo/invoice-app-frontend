import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {FaEdit, FaTrashAlt} from "react-icons/fa";
import InvoiceService from "../../service/InvoiceService";

const ViewInvoice = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        loadInvoices();
    }, []);

    const loadInvoices = async () => {
        const loadRes = await InvoiceService.getInvoices();
        // const loadRes = await axios.get(
        //     "http://localhost:8082/invoices",
        //     {
        //         validateStatus: () => {
        //             return true;
        //         }
        //     }
        // );
        console.log(loadRes.data.status);
        if (loadRes.data.status === "00") {
            setInvoices(loadRes.data.data)
        }else{
            setInvoices([]);
        }
    }

    const handleDelete = async (id) => {

        let deleteRes = await InvoiceService.deleteInvoice(id);
        // let deleteRes = await axios.delete(
        //     `http://localhost:8082/invoices/${id}`
        // );
        console.log(deleteRes.data.status);
        if (deleteRes.data.status === "00"){
            loadInvoices();
        }

    }
    return (
        <section>
            <table className="table table-bordered table-hover shadow">
                <thead>
                <tr className="text-center">
                    <th>Invoice No</th>
                    <th>Customer</th>
                    <th>Email</th>
                    <th>Invoice Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th colSpan="2">Actions</th>
                </tr>
                </thead>

                <tbody className="text-center">
                {invoices
                    .map((invoice, index) => (
                        <tr key={invoice.id}>
                            <td>{invoice.invoiceNo}</td>
                            <td>{invoice.customer}</td>
                            <td>{invoice.email}</td>
                            <td>{invoice.invoiceDate}</td>
                            <td>{invoice.amount}</td>
                            <td>{invoice.status}</td>
                            <td className="mx-2">
                                <Link
                                    to={`/edit-invoice/${invoice.id}`}
                                    className="btn btn-warning">
                                    <FaEdit/>
                                </Link>
                            </td>
                            <td className="mx-2">
                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        handleDelete(invoice.id)
                                    }>
                                    <FaTrashAlt/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default ViewInvoice;
