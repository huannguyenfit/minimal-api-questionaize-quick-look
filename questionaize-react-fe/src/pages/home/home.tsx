
// import { useEffect, useState } from 'react';
// import './home.scss';
// import { templateHtml } from './template';
// export default function HomePage() {
//   const [storeTemplate, setStoreTemplate] = useState('')
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const handler = (event: any) => {
//       setTimeout(() => {
//         const frm: any = document.getElementById("previewContainer");
//         const storeTemplate: any = getIframeHtml(frm);
//         console.log(storeTemplate);
//         setStoreTemplate(storeTemplate);
//         setIsModalOpen(true);

//       }, 2000)

//     }

//     window.addEventListener("message", handler)

//     // clean up
//     return () => window.removeEventListener("message", handler)
//   }, []) // empty array => run only once


//   const showModal = (event: any) => {
//     const frm: any = document.getElementById("previewContainer");
//     const message = JSON.stringify({
//       message: 'Hello from iframe',
//       date: Date.now(),
//     });
//     frm.contentWindow.postMessage(message, '*');



//     // const frm: any = document.getElementById("previewContainer");
//     // for (let element of frm.contentDocument.querySelectorAll('input[id]')) {
//     //   console.log(element.id + ' - ', element.value)
//     // }
//     // const storeTemplate: any = $('#previewContainer').contents().find("html");
//     // console.log($('#previewContainer').contents().find("input[id]"))
//     // setStoreTemplate(storeTemplate);
//     // setIsModalOpen(true);
//   }

//   const getIframeHtml = (iframe: any) => {
//     const s = new XMLSerializer();
//     let html = '';
//     let e = iframe.contentDocument.firstChild;
//     do {
//       html += 'outerHTML' in e ? e.outerHTML : s.serializeToString(e);
//       e = e.nextSibling;
//     } while (e);
//     return html;
//   }
//   return (
//     <div className="home-page">
//       <div className="welcome">
//       </div>
//       <div className="content">
//         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 25 }}>
//           <Col className="gutter-row" span={14}>
//             <Button className='btn-clear' type='primary' onClick={showModal}>
//               Save
//             </Button>
//             <iframe id="previewContainer" style={{ position: 'relative' }} width={1280} height={768} srcDoc={templateHtml} />
//           </Col>

//         </Row>

//         <Modal title="Basic Modal" width={1280} onOk={() => setIsModalOpen(false)}
//           onCancel={() => setIsModalOpen(false)} visible={isModalOpen}  >
//           <iframe style={{ position: 'relative' }} width={1280} height={768} srcDoc={storeTemplate} />

//         </Modal>
//       </div>
//     </div>
//   );
// }

export const Home = () => {
  return (
    <>
      <div className="row pd-ltr-20">
        <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
          <div className="card-box height-100-p widget-style3">
            <div className="d-flex flex-wrap">
              <div className="widget-data">
                <div className="weight-700 font-24 text-dark">75</div>
                <div className="font-14 text-secondary weight-500">
                  Appointment
                </div>
              </div>
              <div className="widget-icon">
                <div className="icon" style={{ color: '#00eccf' }}>
                  <i className="icon-copy dw dw-calendar1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
          <div className="card-box height-100-p widget-style3">
            <div className="d-flex flex-wrap">
              <div className="widget-data">
                <div className="weight-700 font-24 text-dark">124,551</div>
                <div className="font-14 text-secondary weight-500">
                  Total Patient
                </div>
              </div>
              <div className="widget-icon">
                <div className="icon" style={{ color: '#ff5b5b' }}>
                  <span className="icon-copy ti-heart"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
          <div className="card-box height-100-p widget-style3">
            <div className="d-flex flex-wrap">
              <div className="widget-data">
                <div className="weight-700 font-24 text-dark">400+</div>
                <div className="font-14 text-secondary weight-500">
                  Total Doctor
                </div>
              </div>
              <div className="widget-icon">
                <div className="icon">
                  <i
                    className="icon-copy fa fa-stethoscope"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
          <div className="card-box height-100-p widget-style3">
            <div className="d-flex flex-wrap">
              <div className="widget-data">
                <div className="weight-700 font-24 text-dark">$50,000</div>
                <div className="font-14 text-secondary weight-500">Earning</div>
              </div>
              <div className="widget-icon">
                <div className="icon" data-color="#09cc06">
                  <i className="icon-copy fa fa-money" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pd-ltr-20">
        <div className="card-box pd-20 height-100-p mb-30 medical-about" style={{ backgroundImage: 'url(http://promo-theme.com/medina-wp/wp-content/uploads/2016/10/team-carousel.jpg)' }}>
          <div className="row align-items-center">
            <div className="col-md-4">
              <img src="vendors/images/test.png" alt="" />
            </div>
            <div className="col-md-8">
              <div className="medical-about_content">
                <h4 className="font-20 weight-500 mb-10 text-capitalize">
                  Welcome back
                  <div className="weight-600 font-30 text-blue">TD Medical company!</div>
                </h4>
                <p className="font-18 max-width-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  hic non repellendus debitis iure, doloremque assumenda. Autem
                  modi, corrupti, nobis ea iure fugiat, veniam non quaerat
                  mollitia animi error corporis.
                </p>
                <p className="font-18 max-width-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  hic non repellendus debitis iure, doloremque assumenda. Autem
                  modi, corrupti, nobis ea iure fugiat, veniam non quaerat
                  mollitia animi error corporis.
                </p>
                <p className="font-18 max-width-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                  hic non repellendus debitis iure, doloremque assumenda. Autem
                  modi, corrupti, nobis ea iure fugiat, veniam non quaerat
                  mollitia animi error corporis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}