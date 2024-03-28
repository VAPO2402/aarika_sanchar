import React, { useState } from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Td,
  TableContainer,
  Th,
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
                <TableContainer className='table'>
                  <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                      </Tr>
                      <Tr>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                      </Tr>
                      <Tr>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                      </Tr>
                      <Tr>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        
                      </Tr>
                      <Tr>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        
                      </Tr>
                      <Tr>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        
                      </Tr>
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
              </div>
            ) : <div className="normalRouteTable">
              <TableContainer className='table'>
                <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                      </Tr>
                      <Tr>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                      </Tr>
                      <Tr>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                      </Tr>
                      <Tr>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        
                      </Tr>
                      <Tr>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        
                      </Tr>
                      <Tr>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        
                      </Tr>
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
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
              <TableContainer className='table'>
                  <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                      </Tr>
                      <Tr>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                      </Tr>
                      <Tr>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                      </Tr>
                      <Tr>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        
                      </Tr>
                      <Tr>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        
                      </Tr>
                      <Tr>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        
                      </Tr>
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                      </Tr>
                    </Tfoot>
                  </Table>
              </TableContainer>
            </div>
            ) : <div className="normalRouteTable">
            <TableContainer className='table'>
              <Table variant='simple'>
                    <Thead>
                      <Tr>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 2500* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                        <Td>0.25 Per <br /> Bulk SMS</Td>
                      </Tr>
                      <Tr>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                        <Td> Life Time <br /> Validity</Td>
                      </Tr>
                      <Tr>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                        <Td>Send SMS</Td>
                      </Tr>
                      <Tr>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        <Td>Numerical <br />SENDER ID</Td>
                        
                      </Tr>
                      <Tr>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        <Td>100% Delivery</Td>
                        
                      </Tr>
                      <Tr>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        <Td>With Api</Td>
                        
                      </Tr>
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
                        <Th><HashLink to={"/#contactUs"}>Purchase</HashLink></Th>
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