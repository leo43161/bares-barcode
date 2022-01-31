import React from 'react';

export default function CardCategorias() {
    return (
        <div>
            <div className="card card-category">
                <div className="card-body d-flex flex-column align-items-center justify-content-between">
                    <div className="p-4 p-lg-2">
                        <img className="img-fluid" src="https://img-barcode.s3.sa-east-1.amazonaws.com/barcode/1642772485811-580219257-cerveza-2.png" alt="" />
                    </div>
                    <div className="text-center my-2 menu-bold h5 text-center my-2 menu-bold">Happy Hours</div>
                </div>
            </div>

        </div>
    );
}
