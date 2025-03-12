"use client";
export default function OrdersPage() {
  const orders = [
    {
      id: "WO-7263",
      date: "July 12, 2023",
      status: "Delivered",
      amount: "Rs. 2,300",
      items: [
        {
          name: "Shalimar",
          quantity: 1,
          price: "Rs. 2,300",
          image: "https://elyscents.pk/cdn/shop/files/royaloud.jpg?v=1720595888&width=360"
        }
      ]
    },
    {
      id: "WO-7264",
      date: "July 14, 2023",
      status: "Processing",
      amount: "Rs. 1,500",
      items: [
        {
          name: "Poison",
          quantity: 1,
          price: "Rs. 1,500",
          image: "https://elyscents.pk/cdn/shop/files/exoticplus.jpg?v=1720592826&width=360"
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Page Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h1 className="text-2xl font-medium text-gray-900">Your Orders</h1>
        <p className="mt-1 text-sm text-gray-500">
          Track and manage your orders
        </p>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white shadow rounded-lg overflow-hidden">
            {/* Order Header */}
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Order {order.id}
                  </p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
                <div>
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Items */}
            {order.items.map((item, index) => (
              <div key={index} className="px-6 py-4 flex items-center">
                <div className="flex-shrink-0 w-16 h-16">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-900">
                      {item.price}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
            ))}

            {/* Order Footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-gray-900">
                  Total: {order.amount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
