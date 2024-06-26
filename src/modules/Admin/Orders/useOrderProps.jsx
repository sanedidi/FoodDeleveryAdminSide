import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

const useOrderProps = () => {

  const TableLinks = [
    { tab: 'Самовызов' },
    { tab: 'Новый' },
    { tab: 'Оператор принял' },
    { tab: 'Заготовка' },
    { tab: 'Курьер в пути' },
    { tab: 'Завершен' },
    { tab: 'Все заказы' },
  ];

  const topTableHeaders = [
    '№',
    'ID ЗАКАЗА',
    'ТАЙМЕР',
    'ИМЯ КЛИЕНТА',
    'КУРЬЕР',
    'ФИЛИАЛ',
    'ТИП ДОСТАВКИ',
    'ЦЕНА ЗАКАЗА',
    'ТИП ОПЛАТЫ',
    'АДРЕС КЛИЕНТА',
  ];
  const renderTable = (tabIndex) => {
    const ordersForTab = orders && orders[tabIndex];
    if (ordersForTab) {
      return (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                {topTableHeaders.map((header, index) => (
                  <Th key={index}>{header}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {ordersForTab.map((order, index) => (
                <Tr key={index}>
                  <Td>{order.number}</Td>
                  <Td>{order.orderId}</Td>
                  <Td>{order.timer}</Td>
                  <Td>{order.clientName}</Td>
                  <Td>{order.courier}</Td>
                  <Td>{order.branch}</Td>
                  <Td>{order.deliveryType}</Td>
                  <Td>{order.orderPrice}</Td>
                  <Td>{order.paymentType}</Td>
                  <Td>{order.clientAddress}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      );
    } else {
      return <div>No data available</div>;
    }
  };
  const [selectedTab, setSelectedTab] = useState(0);

  return { orders, selectedTab, setSelectedTab, TableLinks, topTableHeaders, renderTable };
};

export default useOrderProps;
