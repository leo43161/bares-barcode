import React from 'react';
import "../../css/Pages.css";

export default function Header() {
    return (
            <div className="px-2 mb-2">
                <div className="text-center text-menu-title mb-1" onClick={() => {
                    window.location.href = "/";
                }}>
                    <h1 className="mb-3 title-neon">Miamee</h1>
                </div>
            </div>
            
    );
}
