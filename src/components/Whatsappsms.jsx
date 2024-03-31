import React from 'react'

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
  return (
    <section className="whatsAppSms">

      <div className="image">
        <h1> Whatsapp CALL SMS</h1>
      </div>

      <div className="whatsAppContent">
        <h1>What is WhatsApp Marketing Software?</h1>
        <p>AARIKA SMS is a user-friendly Whatsapp marketing tool facilitating the dissemination of bulk messages to potential clientele. Additionally, it offers the functionality to append images, videos, and text messages. <br /> <br />
        WhatsApp Messenger prohibits the transmission of unsolicited messages, thus necessitating the utilization of creative and ethical advertising methods to engage with your consumer base. One effective approach involves employing software that leverages WhatsApp Web and automates processes through a browser.</p>
        <h1>BENEFITS OF WHATSAPP MARKETING SERVICES</h1>
        <h3>Facilitates global connectivity.</h3>
        <p>WhatsApp Marketing facilitates global connectivity with prospective customers worldwide.</p>
        <h3>Supports multimedia content.</h3>
        <p>Through WhatsApp marketing, you can deliver visually appealing messages and videos to capture the attention of viewers.</p>
        <h3>Streamlines marketing processes.</h3>
        <p>Utilizing WhatsApp marketing streamlines management tasks.</p>
        <h3>Cost-effective advertising.</h3>
        <p>WhatsApp marketing enables the promotion of products or services at a reasonable cost compared to alternative marketing methods.</p>
      </div>

      <div className="whatsAppSms">
        <h1>WhatsApp SMS</h1>
        <div className="bulkSmsRoute">
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
                        Rs/- 8000* <br />
                        50,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 15000* <br />
                        1,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 26000* <br />
                        2,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/- 60000* <br />
                        5,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                        <Th>
                        Rs/-  110000* <br />
                        10,00,000 SMS <br />
                        *Tax Extra <br />
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>0.20 Per <br /> Bulk SMS</Td>
                        <Td>0.16 Per <br /> Bulk SMS</Td>
                        <Td>0.15 Per <br /> Bulk SMS</Td>
                        <Td>0.13 Per <br /> Bulk SMS</Td>
                        <Td>0.12 Per <br /> Bulk SMS</Td>
                        <Td>0.11 Per <br /> Bulk SMS</Td>
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
                        <Td>Virtual Numerical <br />SENDER ID</Td>
                        <Td>Virtual Numerical <br />SENDER ID</Td>
                        <Td>Virtual Numerical <br />SENDER ID</Td>
                        <Td>Virtual Numerical <br />SENDER ID</Td>
                        <Td>Virtual Numerical <br />SENDER ID</Td>
                        <Td>Virtual Numerical <br />SENDER ID</Td>
                        
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
        </div>
      </div>
    </section>
  )
}

export default Whatsappsms