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
                        Rs/- 8000* <br />
                        50,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        RS/- 15000* <br />
                        1,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 28000* <br />
                        2,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 65000* <br />
                        5,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 120000* <br />
                        10,00,000 SMS <br />
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
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
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
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
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
                        Rs/- 2000* <br />
                        10,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 5000* <br />
                        50,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 8000* <br />
                        1,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 15000* <br />
                        2,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 25000* <br />
                        5,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 40000* <br />
                        10,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>0.20 Per <br /> Bulk SMS</Td>
                        <Td>0.10 Per <br /> Bulk SMS</Td>
                        <Td>0.08 Per <br /> Bulk SMS</Td>
                        <Td>0.075 Per <br /> Bulk SMS</Td>
                        <Td>0.05 Per <br /> Bulk SMS</Td>
                        <Td>0.04 Per <br /> Bulk SMS</Td>
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
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
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
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                      </Tr>
                      <Tr>
                        <Td>** Api With Extra <br /> cost</Td>
                        <Td>** Api With Extra <br /> cost</Td>
                        <Td>** Api With Extra <br /> cost</Td>
                        <Td>** Api With Extra <br /> cost</Td>
                        <Td>** Api With Extra <br /> cost</Td>
                        <Td>** Api With Extra <br /> cost</Td>
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
                    Rs/- 8000* <br />
                    50,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                    <Th>
                    RS/- 15000* <br />
                    1,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                    <Th>
                    Rs/- 28000* <br />
                    2,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                    <Th>
                    Rs/- 65000* <br />
                    5,00,000 SMS <br />
                    *Tax Extra <br />
                    </Th>
                    <Th>
                    Rs/- 120000* <br />
                    10,00,000 SMS <br />
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
                    <Td>Send SMS Multi <br /> Language Support</Td>
                    <Td>Send SMS Multi <br /> Language Support</Td>
                    <Td>Send SMS Multi <br /> Language Support</Td>
                    <Td>Send SMS Multi <br /> Language Support</Td>
                    <Td>Send SMS Multi <br /> Language Support</Td>
                    <Td>Send SMS Multi <br /> Language Support</Td>
                  </Tr>
                  <Tr>
                    <Td>Fixed 06 <br /> alphabets SMS<br />SENDER ID</Td>
                    <Td>Fixed 06 <br /> alphabets SMS<br />SENDER ID</Td>
                    <Td>Fixed 06 <br /> alphabets SMS<br />SENDER ID</Td>
                    <Td>Fixed 06 <br /> alphabets SMS<br />SENDER ID</Td>
                    <Td>Fixed 06 <br /> alphabets SMS<br />SENDER ID</Td>
                    <Td>Fixed 06 <br /> alphabets SMS<br />SENDER ID</Td>
                  </Tr>
                  <Tr>
                    <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                    <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                    <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                    <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                    <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                    <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
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
                        Rs/- 6000* <br />
                        50,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 9000* <br />
                        1,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 16,000* <br />
                        2,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 30,000* <br />
                        5,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 50000* <br />
                        10,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>0.21 Per <br /> Bulk SMS</Td>
                        <Td>0.12 Per <br /> Bulk SMS</Td>
                        <Td>0.09 Per <br /> Bulk SMS</Td>
                        <Td>0.08 Per <br /> Bulk SMS</Td>
                        <Td>0.06 Per <br /> Bulk SMS</Td>
                        <Td>0.05 Per <br /> Bulk SMS</Td>
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
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                        <Td>Send SMS Multi <br /> Language Support</Td>
                      </Tr>
                      <Tr>
                    <Td>Fixed 06 <br /> alphabets SMS<br />SENDER ID</Td>
                    <Td>Fixed 06 <br /> alphabets SMS<br />SENDER ID</Td>
                    <Td>Fixed 06 <br /> alphabets SMS<br />SENDER ID</Td>
                    <Td>Fixed 06 <br /> alphabets SMS<br />SENDER ID</Td>
                    <Td>Fixed 06 <br /> alphabets SMS<br />SENDER ID</Td>
                    <Td>Fixed 06 <br /> alphabets SMS<br />SENDER ID</Td>
                  </Tr>
                      <Tr>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                        <Td>100% Delivery <br /> with Instant delivery <br /> report</Td>
                      </Tr>
                      <Tr>
                        <Td>** Api With Extra <br /> cost</Td>
                        <Td>** Api With Extra <br /> cost</Td>
                        <Td>** Api With Extra <br /> cost</Td>
                        <Td>** Api With Extra <br /> cost</Td>
                        <Td>** Api With Extra <br /> cost</Td>
                        <Td>** Api With Extra <br /> cost</Td>
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