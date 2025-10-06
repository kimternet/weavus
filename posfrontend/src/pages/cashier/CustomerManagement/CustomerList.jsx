import React from 'react'
import CustomerCard from './CustomerCard'

const customers = [
    {
        id: 1, fullName: "キム", email: "kim@gmail.com", phone: "010-1234-5678",
        loyaltyPoints: 150, totalOrders: 5, totalSpent: 300, averageOrderValue: 2360,
    },
    {
        id: 2, fullName: "田中", email: "tanaka@gmail.com", phone: "080-1234-5678",
        loyaltyPoints: 100, totalOrders: 3, totalSpent: 100, averageOrderValue: 1300,
    },
    {
        id: 3, fullName: "山田", email: "yamada@gmail.com", phone: "090-1234-5678",
        loyaltyPoints: 250, totalOrders: 10, totalSpent: 700, averageOrderValue: 4590,
    },
]

const CustomerList = ({ setSelectedCustomer }) => {
    return (
        <div className="flex-1 overflow-auto">
            <div className="divide-y">
                {customers.map((customer) => (
                    <CustomerCard
                        setSelectedCustomer={setSelectedCustomer}
                        key={customer.id} customer={customer}
                    />
                ))}
            </div>
        </div>
    )
}

export default CustomerList