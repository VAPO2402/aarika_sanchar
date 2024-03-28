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
import { HashLink } from 'react-router-hash-link';
import "../styles/whatsappcallsms.scss"

const Whatsappsms = () => {

  const [toggled, setToggled] = useState();

  return (
    <section className="whatsAppSms">

      <div className="image">
        <h1> Whatsapp CALL SMS</h1>
      </div>

      <div className="whatsAppContent">
        <h1>What is WhatsApp Marketing Software?</h1>
        <p>PWASMS is one of the most easy to use Whatsapp showcasing instruments that permits you to send mass messages to possible customers. The apparatus likewise gives a choice to append pictures, recordings, and instant messages. <br /> <br />
        WhatsApp Messenger doesn't uphold sending spontaneous messages. So it is savvy to be inventive and utilize moral techniques for publicizing to connect with your purchaser base. One such technique is utilizing programming that utilizes the WhatsApp Web and mechanizes it through a program.</p>
        <h1>BENEFITS OF WHATSAPP MARKETING SERVICES</h1>
        <h3>Assists with associating worldwide</h3>
        <p>Whatsapp Marketing assists with associating worldwide with the objective client present on the planet.</p>
        <h3>Multimedia support</h3>
        <p>With the assistance of WhatsApp promoting you can send alluring and eye-getting messages and recordings to command the notice of the watchers.</p>
        <h3>Automated marketing</h3>
        <p>By utilizing WhatsApp advertising we will assist you with overseeing it.</p>
        <h3>Affordable marketing</h3>
        <p>By utilizing WhatsApp advertising you can advance your items or administrations at a sensible value contrasted with the other showcasing methods.</p>
      </div>

      <div className="whatsAppSms">
        <h1>WhatsApp Sms</h1>
        <button id="normalWhatsApp" onClick={() => setToggled('normalWhatsApp')}>NORMAL ROUTE</button>/
        <button id="apiWhatsApp" onClick={() => setToggled('apiWhatsApp')}>API ROUTE</button>
        <div className="bulkSmsRoute">
              { toggled === 'apiWhatsApp' ? (
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

export default Whatsappsms