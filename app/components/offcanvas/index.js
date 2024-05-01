import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function OffCanvas({ data }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const backgroundColor = data?.status == "Alive" ? '#C2F5E9' : data?.status == "Dead" ? '#FFDCE5' : '#D0F0FD';
    const color = data?.status == "Alive" ? '#06A09B' : data?.status == "Dead" ? '#BA1E45' : '#01A9DB';

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Detail
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement='end' >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Detail {data?.name}
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img src={data?.image} alt={data?.name} loading="eager" className='rounded-circle' width={40} height={40} />
                            <div className='ms-3'>
                                <div className='fw-semibold' style={{ fontSize: 14, color: '#333333' }}>{data?.name}</div>
                                <div className='mt-1' style={{ fontSize: 12, color: '#757575' }}>{data?.gender}</div>
                            </div>
                        </div>
                        <div style={{ width: 109, height: 24, backgroundColor: backgroundColor, border: `1px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, borderRadius: 25, color: color }}>
                            {data?.status}
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}