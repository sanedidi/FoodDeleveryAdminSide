// import React, { useState } from 'react';
// import { CustomTable } from 'components/CustomTable';
// import { Header } from 'components/Header';
// import UseFillialsProps from './UseFillialsProps';
// import { Box, Skeleton } from '@chakra-ui/react';
// import { Stack } from 'react-bootstrap';
// import { IoMdRefresh } from 'react-icons/io';
// import { FaPlus } from 'react-icons/fa6';
// import s from './Fillials.module.scss';
// import { Button, ButtonGroup } from '@chakra-ui/react';

// export const Fillials = () => {
//   const [reloadKey, setReloadKey] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const { data, isError, error, column } = UseFillialsProps(reloadKey); // Передаем ключ в хук для обновления данных

//   const handleReload = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//     setReloadKey((prevKey) => prevKey + 1);
//   };

//   if (isLoading)
//     return (
//       <>
//         <div>
//           <Header
//             headerBtn1={
//               <Stack style={{ height: '0' }} direction="row" spacing={1}>
//                 <Button
//                   isLoading
//                   loadingText="Обновление"
//                   colorScheme="teal"
//                   variant="outline"
//                   className={s.header__lodaing}
//                 >
//                   Обновление
//                 </Button>
//               </Stack>
//             }
//             headerBtn2={
//               <div className={s.header__btn_add}>
//                 <FaPlus className={s.header__plus} />
//                 <span className={s.header__add}>Добавить </span>
//               </div>
//             }
//             title={'Филлиалы'}
//           />
//           <Stack style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//             <Skeleton height="40px" />
//             <Skeleton height="40px" />
//             <Skeleton height="40px" />
//           </Stack>
//         </div>
//       </>
//     );

//   if (isError) return <div>Error: {error.message}</div>;

//   return (
//     <>
//       <Header
//         headerBtn1={
//           <div onClick={handleReload} className={s.header__btn_fill}>
//             <IoMdRefresh className={s.header__refresh} />
//             <span className={s.header__fill}>Обновить</span>
//           </div>
//         }
//         headerBtn2={
//           <div className={s.header__btn_add}>
//             <FaPlus className={s.header__plus} />
//             <span className={s.header__add}>Добавить </span>
//           </div>
//         }
//         title={'Филлиалы'}
//         path2={'/admin/fillials/create'}
//       />
//       <Box>
//         {!setIsLoading ? ( 
//           <Stack style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//             <Skeleton height="40px" />
//             <Skeleton height="40px" />
//             <Skeleton height="40px" />
//           </Stack>
//         ) : (
//           <CustomTable columns={column} data={data} />
//         )}
//       </Box>
//     </>
//   );
// };

// export default Fillials;
