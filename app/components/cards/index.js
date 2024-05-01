import { OffCanvas } from "../offcanvas";

export function CardComponents({ sourceImg = '', name = '', species = '' }) {
    return (
        <div className='bg-white border py-4 shadow-sm rounded-3 d-flex flex-column justify-content-center align-items-center' style={{ width: 250 }}>
            <img src={sourceImg} class="rounded-circle" alt="..." height={100} width={100} />
            <div className='text-center my-2'>
                <div className='fs-5 fw-semibold'>{name}</div>
                <div className='fs-6 text-body-tertiary'>{species}</div>
            </div>
            <OffCanvas />
        </div>
    );
}
