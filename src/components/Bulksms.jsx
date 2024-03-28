import React, { useState } from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import '../styles/bulksms.scss'
import { HashLink } from 'react-router-hash-link';

const Bulksms = () => {

  const [toggled, setToggled] = useState();

  return (
    <section className="bulkSms" id='bulkSms'>
      <h1>Try, Our SMS Platform To Promote Your Business & Guaranteed Results.</h1>
      <p>More than 35,000 happy customers are loving with sms all over world</p>
      <div className="promotionalSms">
        <h1>Promotional Sms</h1>
        <button id="normalPromotional" onClick={() => setToggled('normalPromotional')}>NORMAL ROUTE</button>/
        <button id="apiPromotional" onClick={() => setToggled('apiPromotional')}>API ROUTE</button>
        <div className="bulkSmsRoute">
              { toggled === 'apiPromotional' ? (
              <div className="apiRouteTable">
                <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 2500* <br />
                    10,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.25 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Numerical <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>With Api</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                  </Tr>
                </Tfoot>
              </Table>
                </TableContainer>
                <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 8000* <br />
                    50,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.16 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Numerical <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>With Api</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
                </TableContainer>
                <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 15000* <br />
                    1,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.15 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Numerical <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>With Api</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
                </TableContainer>
                <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 28000* <br />
                    2,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.14 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Numerical <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>With Api</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                  </Tr>
                </Tfoot>
              </Table>
                </TableContainer>
                <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 65000* <br />
                    5,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.13 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Numerical <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>With Api</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
                </TableContainer>
                <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 1,20,000* <br />
                    10,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.12 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Numerical <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>With Api</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
                </TableContainer>
              </div>
            ) : <div className="normalRouteTable">
              <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 2000* <br />
                    10,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.20 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Numerical <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>** Api cost</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Purchase</Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
              </TableContainer>
              <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 5000* <br />
                    50,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.10 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Numerical <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>** Api cost</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
              </TableContainer>
              <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 8000* <br />
                    1,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.08 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Numerical <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>** Api cost</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
              </TableContainer>
              <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 15000* <br />
                    2,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.075 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Numerical <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>** Api cost</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
              </TableContainer>
              <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 25000* <br />
                    5,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.05 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Numerical <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>** Api cost</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
              </TableContainer>
              <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 40000* <br />
                    10,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.04 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Numerical <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>** Api cost</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
              </TableContainer>
            </div> }
        </div>
      </div>
      <div className="transactionalSms">
      <h1>Transactional Sms</h1>
        <button id="normalTransactional" onClick={() => setToggled('normalTransactiona;')}>NORMAL ROUTE</button>/
        <button id="apiTransactional" onClick={() => setToggled('apiTransactional')}>API ROUTE</button>
        <div className="bulkSmsRoute">
          { toggled === 'apiTransactional' ? (
            <div className="apiRouteTable">
                <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>
                  Rs/- 2500* <br />
                  10,000 SMS <br />
                  *Tax Extra <br />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>0.25 Per Bulk SMS</Td>
                </Tr>
                <Tr>
                  <Td> Life Time Validity</Td>
                  
                </Tr>
                <Tr>
                  <Td>Send SMS</Td>
                  
                </Tr>
                <Tr>
                  <Td>Fixed <br />SENDER ID</Td>
                  
                </Tr>
                <Tr>
                  <Td>100% Delivery</Td>
                  
                </Tr>
                <Tr>
                  <Td>With Api</Td>
                  
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                </Tr>
              </Tfoot>
            </Table>
                </TableContainer>
                <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>
                  Rs/- 8000* <br />
                  50,000 SMS <br />
                  *Tax Extra <br />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>0.16 Per Bulk SMS</Td>
                </Tr>
                <Tr>
                  <Td> Life Time Validity</Td>
                  
                </Tr>
                <Tr>
                  <Td>Send SMS</Td>
                  
                </Tr>
                <Tr>
                  <Td>Fixed <br />SENDER ID</Td>
                  
                </Tr>
                <Tr>
                  <Td>100% Delivery</Td>
                  
                </Tr>
                <Tr>
                  <Td>With Api</Td>
                  
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                  
                </Tr>
              </Tfoot>
            </Table>
                </TableContainer>
                <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>
                  Rs/- 15000* <br />
                  1,00,000 SMS <br />
                  *Tax Extra <br />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>0.15 Per Bulk SMS</Td>
                </Tr>
                <Tr>
                  <Td> Life Time Validity</Td>
                  
                </Tr>
                <Tr>
                  <Td>Send SMS</Td>
                  
                </Tr>
                <Tr>
                  <Td>Fixed <br />SENDER ID</Td>
                  
                </Tr>
                <Tr>
                  <Td>100% Delivery</Td>
                  
                </Tr>
                <Tr>
                  <Td>With Api</Td>
                  
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                  
                </Tr>
              </Tfoot>
            </Table>
                </TableContainer>
                <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>
                  Rs/- 28000* <br />
                  2,00,000 SMS <br />
                  *Tax Extra <br />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>0.14 Per Bulk SMS</Td>
                </Tr>
                <Tr>
                  <Td> Life Time Validity</Td>
                  
                </Tr>
                <Tr>
                  <Td>Send SMS</Td>
                  
                </Tr>
                <Tr>
                  <Td>Fixed <br />SENDER ID</Td>
                  
                </Tr>
                <Tr>
                  <Td>100% Delivery</Td>
                  
                </Tr>
                <Tr>
                  <Td>With Api</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                </Tr>
              </Tfoot>
            </Table>
                </TableContainer>
                <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>
                  Rs/- 65000* <br />
                  5,00,000 SMS <br />
                  *Tax Extra <br />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>0.13 Per Bulk SMS</Td>
                </Tr>
                <Tr>
                  <Td> Life Time Validity</Td>
                  
                </Tr>
                <Tr>
                  <Td>Send SMS</Td>
                  
                </Tr>
                <Tr>
                  <Td>Fixed <br />SENDER ID</Td>
                  
                </Tr>
                <Tr>
                  <Td>100% Delivery</Td>
                  
                </Tr>
                <Tr>
                  <Td>With Api</Td>
                  
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                  
                </Tr>
              </Tfoot>
            </Table>
                </TableContainer>
                <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>
                  Rs/- 1,20,000* <br />
                  10,00,000 SMS <br />
                  *Tax Extra <br />
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>0.12 Per Bulk SMS</Td>
                </Tr>
                <Tr>
                  <Td> Life Time Validity</Td>
                  
                </Tr>
                <Tr>
                  <Td>Send SMS</Td>
                  
                </Tr>
                <Tr>
                  <Td>Fixed <br />SENDER ID</Td>
                  
                </Tr>
                <Tr>
                  <Td>100% Delivery</Td>
                  
                </Tr>
                <Tr>
                  <Td>With Api</Td>
                  
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                  
                </Tr>
              </Tfoot>
            </Table>
                </TableContainer>
            </div>
            ) : <div className="normalRouteTable">
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 2500* <br />
                    10,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.25 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Fixed <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>** Api cost</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 6000* <br />
                    50,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.12 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Fixed <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>** Api cost</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 9000* <br />
                    1,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.09 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Fixed <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>** Api cost</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 16000* <br />
                    2,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.08 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Fixed <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>** Api cost</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 30000* <br />
                    5,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.06 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Fixed <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>** Api cost</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
            <TableContainer>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>
                    Rs/- 50000* <br />
                    10,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0.05 Per Bulk SMS</Td>
                  </Tr>
                  <Tr>
                    <Td> Life Time Validity</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Send SMS</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>Fixed <br />SENDER ID</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>100% Delivery</Td>
                    
                  </Tr>
                  <Tr>
                    <Td>** Api cost</Td>
                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                    
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </div> }
        </div>
      </div>
    </section>
  )
}

export default Bulksms