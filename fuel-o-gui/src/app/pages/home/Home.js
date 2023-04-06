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
           {/* <h3 className="homepage-para-header">Abstract</h3> */}
            <p className="homepage-para">
            The pregnancy period is one of the most important periods in the life of a woman.
            The health of the baby is the most crucial factor in that period.
            <br/>
            PregRed will help you to detect
            how the pre-pregnancy factors affect the baby’s health,
            get knowledge about pre-pregnancy health impacts and can meet health
            professionals.
            </p>

{/* Form 1 */}
        <div className="home-main-div-models">
            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible1(true)}>
                Why ladies should aware of prepregnancy health care?
              </Button>
              <Modal
                title="Why ladies should aware of prepregnancy health care?"
                centered
                visible={visible}
                onOk={() => setVisible1(false)}
                onCancel={() => setVisible1(false)}
                width={800}
              >
                <ol>
                  <li>Prevent stillbirths, preterm birth and low birth weight </li>
                  <li>Prevent birth defects</li>
                  <li>Prevent neonatal infections</li>
                  <li>Prevent underweight and stunting</li>
                  <li>Prevent vertical transmission of HIV/STIs</li>
                  <li>Lower the risk of some forms of childhood cancers </li>
                  <li>Lower the risk of type 2 diabetes and cardiovascular
                    disease later in life.</li>
                </ol>
              </Modal>
            </div>
{/* Form 2 */}
            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible2(true)}>
                What are the factors you should be aware of to have a healthy baby?
              </Button>
              <Modal
                title="What are the factors you should be aware of to have a healthy baby?"
                centered
                visible={visible2}
                onOk={() => setVisible2(false)}
                onCancel={() => setVisible2(false)}
                width={800}
              >
                <ol>
                  <li>Age</li>
                  <li>Subfertility</li>
                  <li>Oral health</li>
                  <li>Mental health</li>
                  <li>Gravidity</li>
                  <li>Iron</li>
                  <li>Nutrition and Supplements</li>
                  <li>Calcium</li>
                  <li>Folate (Folic Acid)</li>
                </ol>

              </Modal>
            </div>
{/* Form 3 */}
            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible3(true)}>
                What are the challenges you may face while achieving the goals to have a baby?
              </Button>
              <Modal
                title="What are the challenges you may face
                 while achieving the goals to have a baby?"
                centered
                visible={visible3}
                onOk={() => setVisible3(false)}
                onCancel={() => setVisible3(false)}
                width={800}
              >
                <ol>
                  <li>Time</li>
                  <li>Poverty</li>
                  <li>Facilities</li>
                  <li>Family conditions</li>
                </ol>
              </Modal>
            </div>
{/* Form 4 */}
            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible4(true)}>
                Do you need consultancy?
              </Button>
              <Modal
                title="Do you need consultancy?"
                centered
                visible={visible4}
                onOk={() => setVisible4(false)}
                onCancel={() => setVisible4(false)}
                width={800}
              >
                <ol>
                  <li>
                    <a
                      href="https://www.webmd.com/baby/considering-pregnancy-see-your-doctor-first"
                      target="blank">
                      Your Pre-Pregnancy Checkup
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.indiamart.com/proddetail/
                      pre-pregnancy-counseling-19345211830.html"
                      target="blank">
                      Pre Pregnancy Counseling
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.marchofdimes.org/pregnancy/
                      your-checkup-before-pregnancy.aspx"
                      target="blank">
                      Your checkup before pregnancy
                    </a>
                  </li>
                </ol>
              </Modal>
            </div>
{/* Form 5 */}
            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible5(true)}>
                Do you need to read more about prepregnancy health care?
              </Button>
              <Modal
                title="Do you need to read more about prepregnancy health care?"
                centered
                visible={visible5}
                onOk={() => setVisible5(false)}
                onCancel={() => setVisible5(false)}
                width={800}
              >
                <ol>
                  <li>
                    <a
                      href="https://www.cdc.gov/preconception/planning.html"
                      target="blank">
                      Planning for Pregnancy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.plannedparenthood.org/
                      learn/pregnancy/pre-pregnancy-health"
                      target="blank">
                      How do I plan for a pregnancy?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.parents.com/getting-pregnant/pre-pregnancy-health/"
                      target="blank">
                      Pre-Pregnancy Health
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.womenshealth.gov/pregnancy/you-get-pregnant/
                      preconception-health" target="blank">
                      Preconception health
                    </a>
                  </li>
                </ol>
              </Modal>
            </div>
{/* Form 6 */}

            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible6(true)}>
                What are the apps to track your pregnancy period?
              </Button>
              <Modal
                title="What are the apps to track your pregnancy period?"
                centered
                visible={visible6}
                onOk={() => setVisible6(false)}
                onCancel={() => setVisible6(false)}
                width={800}
              >
                <ol>
                  <li>Clue Period Tracker, Ovulation</li>
                  <li>Flo Period & Ovulation Tracker</li>
                  <li>Glow Cycle & Fertility Tracker</li>
                  <li>Fertility Friend FF App</li>
                  <li>Ovia Fertility & Cycle Tracker</li>
                  <li>Natural Cycles – Birth Control</li>
                  <li>Period Tracker by GP Apps</li>
                  <li>Period Tracker Health Calendar</li>
                  <li>Ovulation Calendar & Fertility</li>
                  <li>Eve Period Tracker</li>
                  <li>Bellabeat Period Diary</li>
                </ol>
              </Modal>
            </div>
{/* Form 7 */}
            <div className="home-div-models">
              <Button type="primary" shape="round" onClick={() => setVisible7(true)}>
                Planning for pregnancy
              </Button>
              <Modal
                title="Planning for pregnancy"
                centered
                visible={visible7}
                onOk={() => setVisible7(false)}
                onCancel={() => setVisible7(false)}
                width={800}
              >
                <ol>
                  <li>Make a Plan and Take Action</li>
                  <li>See Your Doctor</li>
                  <li>Take 400 Micrograms of Folic Acid Every Day</li>
                  <li>Stop Drinking Alcohol, Smoking, and Using Certain Drugs</li>
                  <li>Avoid Toxic Substances and Environmental Contaminants</li>
                  <li>Reach and Maintain a Healthy Weight</li>
                  <li>Get Help for Violence</li>
                  <li>Learn Your Family History</li>
                  <li>Get Mentally Healthy</li>
                </ol>
              </Modal>
            </div>

          </div>


         </div>

         <div className="container-home-div2">
             {/* <img className="homepageBgImg" alt=""/> */}
         </div>

    </div>
  )


}

export default Home;
