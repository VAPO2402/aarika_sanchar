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

// import network from "../assets/voice1.jpg"
import "../styles/voicecallsms.scss"

const Voicecallsms = () => {

  const [toggled, setToggled] = useState();

  return (
    <section className="voiceCallSms">

      <div className="image">
        <h1> VOICE CALL SMS</h1>
      </div>

      <div className="voiceContent">
        <h1>Voice SMS and Bulk Voice Call Services in India</h1>
        <p>Record a voice note in your own voice and convert it text to speech, upload a clip into the software & transmit as phone calls to your contacts or groups. <br /> <br /> Bulk Voice SMS Service is the easiest and simplest way of communicating and interacting large set of audience. This is the best deal that one can make to advertise, promote and build the business purpose interaction with the public. Voice SMS service in India has named for being on top as the most effective marketing tool to bring more business & building business brand. It has a great effect in attracting more visitors and generates quality leads. Thus, Bulk Voice SMS is the only option for the businesses who want to build on robust marketing strategy for achieving all their business objectives. In the current market trend of serving effective marketing services, we offer voice SMS solutions in India that are specifically designed to make communication personalized & effective. We mention some of the important reasons here is help you in choosing our Voice SMS Service in India.</p>
        <ul>
          <li>Stability</li> <br />
          <li>Reasonable Pricing</li>  <br />
          <li>Security</li>  <br />
          <li>100% Delivery Rate</li>  <br />
          <li>Excellent Customer Support</li>  <br />
        </ul>
        <p>
        Bulk Voice SMS Service in India allows businesses, organizations, and firms to simultaneously interact with the large set of audience. Many people have made great use of voice broadcasting for business deed purposes. The marketing strategy can make bulk outbound calls at a single click. <br /> <br />
        With an aim of implementing effective marketing strategy, we serve people to make a great reach on customers or public. This helps in making an impact on building business growth and development. Thus, in adhering to that we reach to provide very cheap and affordable Voice SMS Package in Dehradun India that broadcast a recorded voice SMS to various different call recipients in a very short period of time. Generally, it has often used for notifications, community alerts for business promotion purposes.
        </p>

        <h1>Benefits of Voice SMS Service:</h1>
        <ul>
          <li>Personal Touch of Communicate and Connection- Voice message has greater impact compared to text.</li> <br />
          <li>More personal way of connect people.</li> <br />
          <li>Reach large number of customers which is be well versed in regional language.</li> <br />
          <li>Real-time reporting- Measures response of the campaign.</li> <br />
          <li>Bulk Voice SMS can be used universally or can be sending to all kind of users (mobile and landline users).</li> <br />
          <li>Effective marketing tool as to promote their product, services or brand.</li> <br />
        </ul>

        <h1>Voice SMS features</h1>
        <ul>
          <li>Reports your voice messages in an instant mode</li>
          <li>Connects people to your Mobile marketing Campaign.</li>
          <li>Instant response with the use of interactive feature.</li>
          <li>Real-time reporting to measure the response of the campaign</li>
          <li>Your voice campaigns can schedule at the preferred date & time.</li>
          <li>You need to pay only for delivered calls.</li>
        </ul>=
      </div>

      <div className="voiceSms">
        <h1>VoiceCall Sms</h1>
        <button id="normalVoiceCall" onClick={() => setToggled('normalVoiceCall')}>NORMAL ROUTE</button>/
        <button id="apiVoiceCall" onClick={() => setToggled('apiVoiceCall')}>API ROUTE</button>
        <div className="bulkSmsRoute">
              { toggled === 'apiVoiceCall' ? (
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

export default Voicecallsms