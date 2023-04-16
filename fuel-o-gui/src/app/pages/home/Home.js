import React,{useState} from 'react';

import './Home.css';
import { Modal, Button } from 'antd';

function Home() {
  const [visible, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  return(
    <div className="container-home">

         <div className="container-home-div1">
            <p className="homepage-para">
            Our fuel comsumption controlling tips can help you reduce the amount of fuel you use. <br/>
            If you are already following these tips, you are probably getting the best fuel usage your vehicle can deliver.
            </p>

{/* Form 1 */}
        <div className="home-main-div-models">
            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible1(true)}>
                Driving More Efficiently
              </Button>
              <Modal
                title="Driving More Efficiently"
                centered
                open={visible}
                onOk={() => setVisible1(false)}
                onCancel={() => setVisible1(false)}
                width={800}
              >
                <ol>
                  <li>Drive Sensibly</li>
                  <li>Observe the Speed Limit</li>
                  <li>Avoid Hauling Cargo on Your Roof</li>
                  <li>Remove Excess Weight</li>
                  <li>Avoid Excessive Idling</li>
                  <li>Use Cruise Control</li>
                </ol>
              </Modal>
            </div>
{/* Form 2 */}
            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible2(true)}>
              Keeping Your Vehicle in Shape
              </Button>
              <Modal
                title="Keeping Your Vehicle in Shape"
                centered
                open={visible2}
                onOk={() => setVisible2(false)}
                onCancel={() => setVisible2(false)}
                width={800}
              >
                <ol>
                  <li>Address Engine Issues Promptly</li>
                  <li>Keep Tires Properly Inflated</li>
                  <li>Use the Recommended Grade of Motor Oil</li>
                  <li>Replacing a Clogged Air Filter on Modern Cars Improves Performance but Not MPG</li>
                </ol>

              </Modal>
            </div>
{/* Form 3 */}
            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible3(true)}>
              Planning and Combining Trips
              </Button>
              <Modal
                title="Planning and Combining Trips"
                centered
                open={visible3}
                onOk={() => setVisible3(false)}
                onCancel={() => setVisible3(false)}
                width={800}
              >
                <ol>
                  <li>Stagger your work hours to avoid peak rush hours.</li>
                  <li>Drive your most fuel-efficient vehicle.</li>
                  <li>Consider telecommuting (working from home) if your employer permits it.</li>
                  <li>Take advantage of carpools and ride-share programs.</li>
                  <li>Consider using public transit if it is available and convenient for you.</li>
                </ol>
              </Modal>
            </div>
{/* Form 4 */}
            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible4(true)}>
              Other Solutions
              </Button>
              <Modal
                title="Other Solutions"
                centered
                open={visible4}
                onOk={() => setVisible4(false)}
                onCancel={() => setVisible4(false)}
                width={800}
              >
                <ol>
                  <li>
                  A warmed-up engine is more fuel-efficient than a cold one. <br/>
                  <b>Note:</b> Letting your car idle to warm up doesn’t help your fuel economy: it actually uses more fuel and creates more pollution.
                  </li>
                  <li>
                  Use the “economy mode” feature if your vehicle has one.
                  </li>
                </ol>
              </Modal>
            </div>
{/* Form 5 */}
            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible5(true)}>
              Tips for Electric and Hybrid Vehicles
              </Button>
              <Modal
                title="Tips for Electric and Hybrid Vehicles"
                centered
                open={visible5}
                onOk={() => setVisible5(false)}
                onCancel={() => setVisible5(false)}
                width={800}
              >
                <ol>
                  <li>
                  Read the Owner's Manual
                  </li>
                  <li>
                  Use the Economy Mode
                  </li>
                  <li>
                  Avoid Hard Braking
                  </li>
                  <li>
                  Keep the Battery Charged (EVs and Plug-in Hybrids Only)
                  </li>
                  <li>
                  Use Accessories Wisely (such as heating, air conditioning, and entertainment systems)
                  </li>
                </ol>
              </Modal>
            </div>
{/* Form 6 */}

            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible6(true)}>
              What can I do to improve my fuel economy in cold weather?
              </Button>
              <Modal
                title="What can I do to improve my fuel economy in cold weather?"
                centered
                open={visible6}
                onOk={() => setVisible6(false)}
                onCancel={() => setVisible6(false)}
                width={800}
              >
                <ol>
                  <li>Park your car in a warmer place</li>
                  <li>Combine trips when possible</li>
                  <li>Minimize idling your car to warm it up.</li>
                  <li>Don't use seat warmers or defrosters more than necessary.</li>
                  <li>Check your tire pressure regularly.</li>
                  <li>Use the type of oil recommended by your manufacturer for cold weather driving.</li>
                  <li>Remove accessories that increase wind resistance, like roof racks, when not in use.</li>
                  <li>If you drive a plug-in hybrid or electric vehicle, preheating the cabin while plugged into the charger can extend your vehicle's range.</li>
                  <li>If you drive a plug-in hybrid or electric vehicle, using the seat warmers instead of the cabin heater can save energy and extend range.</li>
                </ol>
              </Modal>
            </div>
{/* Form 7 */}
            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible7(true)}>
              What can I do to improve my fuel economy in hot weather?
              </Button>
              <Modal
                title="What can I do to improve my fuel economy in hot weather?"
                centered
                open={visible7}
                onOk={() => setVisible7(false)}
                onCancel={() => setVisible7(false)}
                width={800}
              >
                <ol>
                  <li>Roll the windows down at lower speeds; use the AC at highway speeds.</li>
                  <li>Don't use the AC more than needed or set the temperature lower than needed.</li>
                  <li>Park in the shade or use a sunshade so that the cabin doesn't get as hot.</li>
                  <li>Drive with the windows open for a short time before using the AC.</li>
                  <li>Don't idle with the AC running before driving.</li>
                  <li>Read your owner's manual.</li>
                  <li>For plug-in hybrids and electric vehicles, pre-cooling the cabin while plugged into the charger can extend your vehicle's range. Also, using a warmer temperature setting for the AC will use less battery power.</li>
                </ol>
              </Modal>
            </div>

          </div>


         </div>

         <div className="container-home-div2" />

    </div>
  )


}

export default Home;
