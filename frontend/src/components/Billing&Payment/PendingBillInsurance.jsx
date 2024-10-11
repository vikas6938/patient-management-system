import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock data for dynamic details based on bill number, if needed
const invoiceData = {
  5654: {
    doctorName: 'Dr. Bharat Patel',
    hospitalName: 'Hospital Name',
    patientName: 'Miracle Kenter',
    gender: 'Male',
    age: 36,
    phoneNumber: '9957 96557',
    address: 'B-105 Vinit Bungalows, Pune',
    paymentType: 'Online',
    billDate: '20 June, 2020',
    billTime: '10:45 PM',
    items: [
      { description: 'Neuromuscular blockers', amount: '₹12,000.00', qty: 2, total: '₹24,000.00' },
      { description: 'Neuromuscular blockers', amount: '₹800.00', qty: 2, total: '₹1,600.00' },
      { description: 'Leucovorin with high dose methotrexate [HDMTX]', amount: '₹1,000.00', qty: 1, total: '₹1,000.00' },
      { description: 'Hydroxyurea for sickle cell disease', amount: '₹20.00', qty: 2, total: '₹40.00' }
    ],
    subtotal: '₹26,640.00',
    discount: '5%',
    discountAmount: '₹1,332.00',
    tax: '₹120.00',
    totalAmount: '₹24,668.00',
    insurance: {
      plan: 'HDFC Life Insurance',
      claimAmount: '₹20,000.00',
      approvedAmount: '₹2,500.00'
    }
  }
};

const PendingBillInsurance = () => {
  const { billNo } = useParams();
  const invoice = invoiceData[billNo];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-2/3 p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Invoice</h2>
          <Link to="/PendingBills" className="text-blue-500 hover:underline">
            Back to Pending Bills
          </Link>
        </div>
        
        <div className="flex justify-between mb-8">
          <div>
            <h3 className="text-xl font-semibold">{invoice ? invoice.hospitalName : 'Hospital Name'}</h3>
            <p className="text-gray-500">Tagline or Address</p>
            <p className="text-gray-500 mt-2">{invoice ? invoice.doctorName : 'Dr. Bharat Patel'}</p>
          </div>
          <div>
            <p><span className="font-semibold">Bill No:</span> {billNo}</p>
            <p><span className="font-semibold">Bill Date:</span> {invoice ? invoice.billDate : 'N/A'}</p>
            <p><span className="font-semibold">Bill Time:</span> {invoice ? invoice.billTime : 'N/A'}</p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md mb-8">
          <p><span className="font-semibold">Patient Name:</span> {invoice ? invoice.patientName : 'N/A'}</p>
          <p><span className="font-semibold">Gender:</span> {invoice ? invoice.gender : 'N/A'}</p>
          <p><span className="font-semibold">Age:</span> {invoice ? invoice.age : 'N/A'}</p>
          <p><span className="font-semibold">Phone Number:</span> {invoice ? invoice.phoneNumber : 'N/A'}</p>
          <p><span className="font-semibold">Address:</span> {invoice ? invoice.address : 'N/A'}</p>
          <p><span className="font-semibold">Payment Type:</span> {invoice ? invoice.paymentType : 'N/A'}</p>
        </div>

        <table className="w-full mb-6 text-left border border-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 font-semibold text-gray-700">Description</th>
              <th className="p-2 font-semibold text-gray-700">Amount</th>
              <th className="p-2 font-semibold text-gray-700">Qty</th>
              <th className="p-2 font-semibold text-gray-700">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice ? invoice.items.map((item, index) => (
              <tr key={index}>
                <td className="p-2">{item.description}</td>
                <td className="p-2">{item.amount}</td>
                <td className="p-2">{item.qty}</td>
                <td className="p-2">{item.total}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="p-2 text-center text-gray-500">No items available</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="bg-gray-50 p-4 rounded-md mb-8">
          <h4 className="text-lg font-semibold mb-2">Insurance Details</h4>
          <p><span className="font-semibold">Insurance Plan:</span> {invoice?.insurance?.plan || 'N/A'}</p>
          <p><span className="font-semibold">Claim Amount:</span> {invoice?.insurance?.claimAmount || 'N/A'}</p>
          <p><span className="font-semibold">Approved Amount:</span> {invoice?.insurance?.approvedAmount || 'N/A'}</p>
        </div>

        <div className="flex justify-between items-center text-lg font-semibold mb-4">
          <p>Subtotal:</p>
          <p>{invoice ? invoice.subtotal : 'N/A'}</p>
        </div>
        <div className="flex justify-between items-center text-lg font-semibold mb-4">
          <p>Discount ({invoice ? invoice.discount : 'N/A'}):</p>
          <p>-{invoice ? invoice.discountAmount : 'N/A'}</p>
        </div>
        <div className="flex justify-between items-center text-lg font-semibold mb-4">
          <p>Tax:</p>
          <p>{invoice ? invoice.tax : 'N/A'}</p>
        </div>
        <div className="flex justify-between items-center text-lg font-semibold border-t pt-4">
          <p>Total Amount:</p>
          <p>{invoice ? invoice.totalAmount : 'N/A'}</p>
        </div>

        <div className="mt-8 flex justify-between items-center border-t border-gray-200 pt-4 text-sm text-gray-500">
          <p>Call: +90854 22354</p>
          <p>Email: Hello@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default PendingBillInsurance;
