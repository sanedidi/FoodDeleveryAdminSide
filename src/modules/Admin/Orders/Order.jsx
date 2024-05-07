import useOrderProps from './useOrderProps';
import { Header } from 'components/Header';
import { TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import s from './styles.module.scss';
import TableComponent from 'components/Table/Table';

export const Order = () => {
  const { setSelectedTab, TableLinks, renderTable } = useOrderProps();

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <>
      <Header title={'Заказы'} />
      <div className={s.order}>
        <div className={s.order__wrapper}>
          <div className={s.order__tabel}>
            <TableComponent
              tabs={
                <TabList>
                  {TableLinks.map((link, index) => (
                    <Tab key={index} onClick={() => handleTabChange(index)}>
                      {link.tab}
                    </Tab>
                  ))}
                </TabList>
              }
              panels={
                <TabPanels>
                  {TableLinks.map((link, index) => (
                    <TabPanel key={index}>{renderTable(index)}</TabPanel>
                  ))}
                </TabPanels>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
