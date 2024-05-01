export function CardComponents({ sourceImg = '', name = '', gender = '' }) {
    return (
        <>
            <img src={sourceImg} class="rounded-circle" alt={name} loading="eager" height={80} width={80} />
            <div className='text-center my-2'>
                <div className='fs-5 fw-semibold'>{name}</div>
                <div className='fs-6 text-body-tertiary'>{gender}</div>
            </div>
        </>
    );
}
