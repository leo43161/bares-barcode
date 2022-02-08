import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { fetchAlert } from '../helpers/crudHelpers';
import "../css/Pages.css";

export default function Alerts({ mesa }) {
    const [alert, setAlert] = useState(false);
    const [showAdvert, setShowAdvert] = useState(false);
    const [showButtons, setShowButtons] = useState(false);

    const handleAlert = async (state) => {
        if (alert) {
            setShowAdvert(true);
            setTimeout(() => {
                setShowAdvert(false);
            }, 3500);
        } else {
            const result = await fetchAlert(true, mesa, state);
            if (result.status === 200) {
                setAlert(true);
                handleHidde();
                setTimeout(() => {
                    setAlert(false);
                }, 30000);
            }
        }
    }

    const handleShow = () => {
        setShowButtons(true);
    }

    const handleHidde = () => {
        setShowButtons(false);
    }

    return (
        <>
            {showAdvert && <Alert className="mb-0 position-fixed top-0 start-50 translate-middle-x col-11 mt-3 msj-error" onClose={() => setShowAdvert(false)} dismissible>
                <p className="mb-0">
                    Se debe esperar 30 segundos antes de volver a llamar.
                </p>
            </Alert>}
            <div className={`justify-content-center justify-content-lg-end d-flex w-100 align-items-center btn-position ${alert ? "disabled" : ""}`}>
                {!showButtons ? <div className={`btn-alert d-flex flex-column justify-content-center align-items-center ${alert ? "disabled" : ""} mb-lg-3 mb-2 me-lg-3`} onClick={handleShow} disabled>
                    <img src={process.env.PUBLIC_URL + '/icons/concierge-bell-solid.png'} className="text-dark" style={{ width: "23px" }} alt="" />
                </div> : null}

                {showButtons ?
                    <div className="d-flex justify-content-evenly mb-2 col-12 col-lg-2 btn-mesa position-relative">
                        <div className={`btn-cuenta d-flex flex-column justify-content-between align-items-center p-2 text-center ${alert ? "disabled" : null}`} onClick={() => handleAlert("cuenta")}>
                            <img src={process.env.PUBLIC_URL + '/icons/receipt-solid.svg'} className="text-dark" style={{ width: "17px" }} alt="cuenta-icono" />
                            <span>Pedir cuenta</span>
                        </div>
                        <div className="position-absolute top-0 start-50 translate-middle pb-lg-3" onClick={handleHidde} style={{ width: "17px" }}>
                            <div className="btn-close-mesa">
                                <img src={process.env.PUBLIC_URL + '/icons/angle-down-solid.svg'} className="text-dark" style={{ cursor: "pointer", width: "15px" }} alt="close" />
                            </div>
                        </div>
                        <div className={`btn-mozo d-flex flex-column justify-content-between align-items-center p-2 text-center ${alert ? "disabled" : null}`} onClick={() => handleAlert("alert")}>
                            <img src={process.env.PUBLIC_URL + '/icons/hand-paper-solid.png'} className="text-light" style={{ width: "20px" }} alt="llamar-mozo" />
                            <span>Llamar</span>
                        </div>
                    </div> : null}
            </div>
        </>
    );
}
