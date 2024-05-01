import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { fetchData } from '@/app/library/api';

export function OffCanvas({ data }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const backgroundColor = data?.status == "Alive" ? '#C2F5E9' : data?.status == "Dead" ? '#FFDCE5' : '#D0F0FD';
    const color = data?.status == "Alive" ? '#06A09B' : data?.status == "Dead" ? '#BA1E45' : '#01A9DB';

    const [locations, setLocations] = useState();

    const [dataAllListLocations, setDataAllListLocations] = useState([]);
    const [listLocations, setListLocations] = useState([]);

    useEffect(() => {
        if (show) {
            fetchData('https://rickandmortyapi.com/api/location', (value) => {
                setDataAllListLocations(value.results);

                let arr = [];
                for (let i = 0; i < value?.results?.length; i++) {
                    arr.push({
                        value: value?.results?.[i]?.url,
                        name: value?.results?.[i]?.name
                    });
                }

                if (arr.length > 0) {
                    setListLocations(arr);
                }
            });
        }
    }, [show])

    const findListLocations = locations ? dataAllListLocations.find(val => val.url == locations) : null;

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
                    <div className='mt-4'>
                        <Form.Select aria-placeholder='Pilih Lokasi' value={locations} onChange={(e) => setLocations(e.target.value)}>
                            {Array.isArray(listLocations) && listLocations.length == 0 ? null : listLocations?.map((items, index) => {
                                if (index == 0) {
                                    return <option key={index}>Pilih Lokasi</option>
                                } else {
                                    return <option key={index} value={items?.value}>{items?.name}</option>
                                }
                            })}
                        </Form.Select>
                    </div>
                    {locations == undefined || locations == "Pilih Lokasi" ? null :
                        <div className='mt-4'>
                            <div className='text-center fw-semibold' style={{ fontSize: 14 }}>List Lokasi & Karakter</div>
                            <div className='mt-3 fw-medium' style={{ fontSize: 12, textAlign: 'justify' }}>
                                Sebelumnya mohon maaf, saya kurang mengerti dengan penjelasan Poin Nomor 5 dari PDF yang dilampirkan. Mungkin hanya ini saja yg dapat saya kerjakan. <br /> <br /> Atas perhatian Bapak/Ibu, saya ucapkan terimakasih. <br /> <br /> Salam, <br /> Wisnu Trenggono Wirayuda
                            </div>
                        </div>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}