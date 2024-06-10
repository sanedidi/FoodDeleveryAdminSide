import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

const useOrderProps = () => {
  const orders = [
    [
      {
        number: 1,
        orderId: 'ID12345',
        timer: '12:00',
        clientName: 'Иван Иванов',
        courier: 'Курьер №1',
        branch: 'Филиал 1',
        deliveryType: 'Самовывоз',
        orderPrice: '500 руб.',
        paymentType: 'Наличными',
        clientAddress: 'улица. Ленина, д. 10',
      },
      {
        number: 2,
        orderId: 'ID54321',
        timer: '13:30',
        clientName: 'Петр Петров',
        courier: 'Курьер №2',
        branch: 'Филиал 2',
        deliveryType: 'Доставка',
        orderPrice: '700 руб.',
        paymentType: 'Картой',
        clientAddress: 'пр. Победы, д. 20',
      },
      {
        number: 3,
        orderId: 'ID98765',
        timer: '15:45',
        clientName: 'Мария Сидорова',
        courier: 'Курьер №3',
        branch: 'Филиал 3',
        deliveryType: 'Доставка',
        orderPrice: '900 руб.',
        paymentType: 'Картой',
        clientAddress: 'ул. Пушкина, д. 5',
      },
      {
        number: 4,
        orderId: 'ID12345',
        timer: '12:00',
        clientName: 'Иван Иванов',
        courier: 'Курьер №1',
        branch: 'Филиал 1',
        deliveryType: 'Самовывоз',
        orderPrice: '500 руб.',
        paymentType: 'Наличными',
        clientAddress: 'улица. Ленина, д. 10',
      },
      {
        number: 5,
        orderId: 'ID54321',
        timer: '13:30',
        clientName: 'Петр Петров',
        courier: 'Курьер №2',
        branch: 'Филиал 2',
        deliveryType: 'Доставка',
        orderPrice: '700 руб.',
        paymentType: 'Картой',
        clientAddress: 'пр. Победы, д. 20',
      },
      {
        number: 6,
        orderId: 'ID98765',
        timer: '15:45',
        clientName: 'Мария Сидорова',
        courier: 'Курьер №3',
        branch: 'Филиал 3',
        deliveryType: 'Доставка',
        orderPrice: '900 руб.',
        paymentType: 'Картой',
        clientAddress: 'ул. Пушкина, д. 5',
      },
      {
        number: 7,
        orderId: 'ID12345',
        timer: '12:00',
        clientName: 'Иван Иванов',
        courier: 'Курьер №1',
        branch: 'Филиал 1',
        deliveryType: 'Самовывоз',
        orderPrice: '500 руб.',
        paymentType: 'Наличными',
        clientAddress: 'улица. Ленина, д. 10',
      },
      {
        number: 8,
        orderId: 'ID54321',
        timer: '13:30',
        clientName: 'Петр Петров',
        courier: 'Курьер №2',
        branch: 'Филиал 2',
        deliveryType: 'Доставка',
        orderPrice: '700 руб.',
        paymentType: 'Картой',
        clientAddress: 'пр. Победы, д. 20',
      },
      {
        number: 9,
        orderId: 'ID98765',
        timer: '15:45',
        clientName: 'Мария Сидорова',
        courier: 'Курьер №3',
        branch: 'Филиал 3',
        deliveryType: 'Доставка',
        orderPrice: '900 руб.',
        paymentType: 'Картой',
        clientAddress: 'ул. Пушкина, д. 5',
      },
    ],
    [
      {
        number: 1,
        orderId: 'ID12345',
        timer: '12:00',
        clientName: 'Иван Иванов',
        courier: 'Курьер №1',
        branch: 'Филиал 1',
        deliveryType: 'Самовывоз',
        orderPrice: '500 руб.',
        paymentType: 'Наличными',
        clientAddress: 'улица. Ленина, д. 10',
      },
      {
        number: 2,
        orderId: 'ID54321',
        timer: '13:30',
        clientName: 'Петр Петров',
        courier: 'Курьер №2',
        branch: 'Филиал 2',
        deliveryType: 'Доставка',
        orderPrice: '700 руб.',
        paymentType: 'Картой',
        clientAddress: 'пр. Победы, д. 20',
      },
      {
        number: 3,
        orderId: 'ID98765',
        timer: '15:45',
        clientName: 'Мария Сидорова',
        courier: 'Курьер №3',
        branch: 'Филиал 3',
        deliveryType: 'Доставка',
        orderPrice: '900 руб.',
        paymentType: 'Картой',
        clientAddress: 'ул. Пушкина, д. 5',
      },
      {
        number: 4,
        orderId: 'ID12345',
        timer: '12:00',
        clientName: 'Иван Иванов',
        courier: 'Курьер №1',
        branch: 'Филиал 1',
        deliveryType: 'Самовывоз',
        orderPrice: '500 руб.',
        paymentType: 'Наличными',
        clientAddress: 'улица. Ленина, д. 10',
      },
      {
        number: 5,
        orderId: 'ID54321',
        timer: '13:30',
        clientName: 'Петр Петров',
        courier: 'Курьер №2',
        branch: 'Филиал 2',
        deliveryType: 'Доставка',
        orderPrice: '700 руб.',
        paymentType: 'Картой',
        clientAddress: 'пр. Победы, д. 20',
      },
      {
        number: 6,
        orderId: 'ID98765',
        timer: '15:45',
        clientName: 'Мария Сидорова',
        courier: 'Курьер №3',
        branch: 'Филиал 3',
        deliveryType: 'Доставка',
        orderPrice: '900 руб.',
        paymentType: 'Картой',
        clientAddress: 'ул. Пушкина, д. 5',
      },
      {
        number: 7,
        orderId: 'ID12345',
        timer: '12:00',
        clientName: 'Иван Иванов',
        courier: 'Курьер №1',
        branch: 'Филиал 1',
        deliveryType: 'Самовывоз',
        orderPrice: '500 руб.',
        paymentType: 'Наличными',
        clientAddress: 'улица. Ленина, д. 10',
      },
      {
        number: 8,
        orderId: 'ID54321',
        timer: '13:30',
        clientName: 'Петр Петров',
        courier: 'Курьер №2',
        branch: 'Филиал 2',
        deliveryType: 'Доставка',
        orderPrice: '700 руб.',
        paymentType: 'Картой',
        clientAddress: 'пр. Победы, д. 20',
      },
      {
        number: 9,
        orderId: 'ID98765',
        timer: '15:45',
        clientName: 'Мария Сидорова',
        courier: 'Курьер №3',
        branch: 'Филиал 3',
        deliveryType: 'Доставка',
        orderPrice: '900 руб.',
        paymentType: 'Картой',
        clientAddress: 'ул. Пушкина, д. 5',
      },
    ],
    [
      {
        number: 1,
        orderId: 'ID12345',
        timer: '12:00',
        clientName: 'Иван Иванов',
        courier: 'Курьер №1',
        branch: 'Филиал 1',
        deliveryType: 'Самовывоз',
        orderPrice: '500 руб.',
        paymentType: 'Наличными',
        clientAddress: 'улица. Ленина, д. 10',
      },
      {
        number: 2,
        orderId: 'ID54321',
        timer: '13:30',
        clientName: 'Петр Петров',
        courier: 'Курьер №2',
        branch: 'Филиал 2',
        deliveryType: 'Доставка',
        orderPrice: '700 руб.',
        paymentType: 'Картой',
        clientAddress: 'пр. Победы, д. 20',
      },
      {
        number: 3,
        orderId: 'ID98765',
        timer: '15:45',
        clientName: 'Мария Сидорова',
        courier: 'Курьер №3',
        branch: 'Филиал 3',
        deliveryType: 'Доставка',
        orderPrice: '900 руб.',
        paymentType: 'Картой',
        clientAddress: 'ул. Пушкина, д. 5',
      },
      {
        number: 4,
        orderId: 'ID12345',
        timer: '12:00',
        clientName: 'Иван Иванов',
        courier: 'Курьер №1',
        branch: 'Филиал 1',
        deliveryType: 'Самовывоз',
        orderPrice: '500 руб.',
        paymentType: 'Наличными',
        clientAddress: 'улица. Ленина, д. 10',
      },
      {
        number: 5,
        orderId: 'ID54321',
        timer: '13:30',
        clientName: 'Петр Петров',
        courier: 'Курьер №2',
        branch: 'Филиал 2',
        deliveryType: 'Доставка',
        orderPrice: '700 руб.',
        paymentType: 'Картой',
        clientAddress: 'пр. Победы, д. 20',
      },
      {
        number: 6,
        orderId: 'ID98765',
        timer: '15:45',
        clientName: 'Мария Сидорова',
        courier: 'Курьер №3',
        branch: 'Филиал 3',
        deliveryType: 'Доставка',
        orderPrice: '900 руб.',
        paymentType: 'Картой',
        clientAddress: 'ул. Пушкина, д. 5',
      },
      {
        number: 7,
        orderId: 'ID12345',
        timer: '12:00',
        clientName: 'Иван Иванов',
        courier: 'Курьер №1',
        branch: 'Филиал 1',
        deliveryType: 'Самовывоз',
        orderPrice: '500 руб.',
        paymentType: 'Наличными',
        clientAddress: 'улица. Ленина, д. 10',
      },
      {
        number: 8,
        orderId: 'ID54321',
        timer: '13:30',
        clientName: 'Петр Петров',
        courier: 'Курьер №2',
        branch: 'Филиал 2',
        deliveryType: 'Доставка',
        orderPrice: '700 руб.',
        paymentType: 'Картой',
        clientAddress: 'пр. Победы, д. 20',
      },
      {
        number: 9,
        orderId: 'ID98765',
        timer: '15:45',
        clientName: 'Мария Сидорова',
        courier: 'Курьер №3',
        branch: 'Филиал 3',
        deliveryType: 'Доставка',
        orderPrice: '900 руб.',
        paymentType: 'Картой',
        clientAddress: 'ул. Пушкина, д. 5',
      },
    ],
    [
      {
        number: 1,
        orderId: 'ID12345',
        timer: '12:00',
        clientName: 'Иван Иванов',
        courier: 'Курьер №1',
        branch: 'Филиал 1',
        deliveryType: 'Самовывоз',
        orderPrice: '500 руб.',
        paymentType: 'Наличными',
        clientAddress: 'улица. Ленина, д. 10',
      },
      {
        number: 2,
        orderId: 'ID54321',
        timer: '13:30',
        clientName: 'Петр Петров',
        courier: 'Курьер №2',
        branch: 'Филиал 2',
        deliveryType: 'Доставка',
        orderPrice: '700 руб.',
        paymentType: 'Картой',
        clientAddress: 'пр. Победы, д. 20',
      },
      {
        number: 3,
        orderId: 'ID98765',
        timer: '15:45',
        clientName: 'Мария Сидорова',
        courier: 'Курьер №3',
        branch: 'Филиал 3',
        deliveryType: 'Доставка',
        orderPrice: '900 руб.',
        paymentType: 'Картой',
        clientAddress: 'ул. Пушкина, д. 5',
      },
    ],
  ];
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
