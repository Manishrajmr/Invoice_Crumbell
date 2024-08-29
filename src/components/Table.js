import React from 'react';

const InvoiceTable = () => {
    // Dummy data for products
    const products = [
        { name: 'Chocolate Cake', quantity: 2, unitPrice: 350.00 },
        { name: 'Croissant', quantity: 10, unitPrice: 50.00 },
        { name: 'Muffin', quantity: 5, unitPrice: 40.00 },
        { name: 'Baguette', quantity: 3, unitPrice: 100.00 },
    ];
    const taxRate = 0.08; // 8% tax rate
    const shippingCost = 10.00;

    // Calculate subtotal
    const subtotal = products.reduce((total, product) => total + (product.quantity * product.unitPrice), 0);

    // Calculate tax
    const taxAmount = subtotal * taxRate;

    // Calculate total amount
    const totalAmount = subtotal + taxAmount + shippingCost;

    // Function to format currency in INR
    const formatCurrency = (amount) => {
        return `₹${amount.toFixed(2)}`;
    };

    return (
        <div className="bg-white overflow-x-auto">
            <table className="w-full border-collapse">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border px-4 py-2 text-left">Product Name</th>
                        <th className="border px-4 py-2 text-left">Quantity</th>
                        <th className="border px-4 py-2 text-left">Unit Price</th>
                        <th className="border px-4 py-2 text-left">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{product.name}</td>
                            <td className="border px-4 py-2 text-center">{product.quantity}</td>
                            <td className="border px-4 py-2 text-right">{formatCurrency(product.unitPrice)}</td>
                            <td className="border px-4 py-2 text-right">
                                {formatCurrency(product.quantity * product.unitPrice)}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="border px-4 py-2 text-right font-semibold">Subtotal</td>
                        <td className="border px-4 py-2 text-right font-semibold">{formatCurrency(subtotal)}</td>
                    </tr>
                    <tr>
                        <td colSpan="3" className="border px-4 py-2 text-right font-semibold">Tax ({(taxRate * 100).toFixed(0)}%)</td>
                        <td className="border px-4 py-2 text-right font-semibold">{formatCurrency(taxAmount)}</td>
                    </tr>
                    <tr>
                        <td colSpan="3" className="border px-4 py-2 text-right font-semibold">Shipping</td>
                        <td className="border px-4 py-2 text-right font-semibold">{formatCurrency(shippingCost)}</td>
                    </tr>
                    <tr>
                        <td colSpan="3" className="border px-4 py-2 text-right font-bold">Total Amount</td>
                        <td className="border px-4 py-2 text-right font-bold">{formatCurrency(totalAmount)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default InvoiceTable;
