import React from 'react';

// 3. create customers table component
const Customers = ({ customers }) => {
    // table header
    const TableHeader = (
        <thead className='bgvi'>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Postcode</th>
            </tr>
        </thead>
    );

    // table row construction
    const CustomerRow = (customer, index) => (
        <tr key={index} className='even'>
            <td>{index + 1}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
            <td>{customer.address}</td>
            <td>{customer.postcode}</td>
        </tr>
    );

    // render customers's items
    const CustomerTable = customers.map((cust, index) =>
        CustomerRow(cust, index),
    );

    return (
        <table>
            {TableHeader}
            <tbody>{CustomerTable}</tbody>
        </table>
    );
};

export default Customers;
