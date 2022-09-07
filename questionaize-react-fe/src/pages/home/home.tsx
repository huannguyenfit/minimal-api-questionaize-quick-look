
import { Button, Modal } from 'antd';
import { Col, Row } from 'antd/lib/grid';
import { useEffect, useState } from 'react';
import './home.scss';
import { templateHtml } from './template';
export default function HomePage() {
  const [storeTemplate, setStoreTemplate] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handler = (event: any) => {
      setTimeout(() => {
        const frm: any = document.getElementById("previewContainer");
        const storeTemplate: any = getIframeHtml(frm);
        console.log(storeTemplate);
        setStoreTemplate(storeTemplate);
        setIsModalOpen(true);

      }, 2000)

    }

    window.addEventListener("message", handler)

    // clean up
    return () => window.removeEventListener("message", handler)
  }, []) // empty array => run only once


  const showModal = (event: any) => {
    const frm: any = document.getElementById("previewContainer");
    const message = JSON.stringify({
      message: 'Hello from iframe',
      date: Date.now(),
    });
    frm.contentWindow.postMessage(message, '*');



    // const frm: any = document.getElementById("previewContainer");
    // for (let element of frm.contentDocument.querySelectorAll('input[id]')) {
    //   console.log(element.id + ' - ', element.value)
    // }
    // const storeTemplate: any = $('#previewContainer').contents().find("html");
    // console.log($('#previewContainer').contents().find("input[id]"))
    // setStoreTemplate(storeTemplate);
    // setIsModalOpen(true);
  }

  const getIframeHtml = (iframe: any) => {
    const s = new XMLSerializer();
    let html = '';
    let e = iframe.contentDocument.firstChild;
    do {
      html += 'outerHTML' in e ? e.outerHTML : s.serializeToString(e);
      e = e.nextSibling;
    } while (e);
    return html;
  }
  return (
    <div className="home-page">
      <div className="welcome">
      </div>
      <div className="content">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 25 }}>
          <Col className="gutter-row" span={14}>
            <Button className='btn-clear' type='primary' onClick={showModal}>
              Save
            </Button>
            <iframe id="previewContainer" style={{ position: 'relative' }} width={1280} height={768} srcDoc={templateHtml} />
          </Col>

        </Row>

        <Modal title="Basic Modal" width={1280} onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)} visible={isModalOpen}  >
          <iframe style={{ position: 'relative' }} width={1280} height={768} srcDoc={storeTemplate} />

        </Modal>
      </div>
    </div>
  );
}
