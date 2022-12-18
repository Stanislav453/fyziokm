import React from "react";
import "./Cennik.scss";

const Cennik = () => {
 
    return (
        <div className="cennik">
            <header className="text-header">
                <h2 id="cennik" >Cennik</h2>
                <div className="underline"></div>
            </header>
            <table className="my-tabs">
            <tr>
                <td><span>Vstupné fyzioterapeutické vyšetrenie a terapia</span></td>
                <td>60min.</td>
                <td>35€</td>
            </tr>
            <tr>
                <td> <span>Konzultácia s fyzioterapeutom</span> </td>
                <td>15min.</td>
                <td>10€</td>
            </tr>
            <tr>
                <td> <span>Fyzioterapia/Rehabilitácia</span> </td>
                <td>
                    <ul>
                        <li>30min.</li>
                        <li>45min.</li>
                        <li>60min.</li>
                        <li>90min.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>20€</li>
                        <li>30€</li>
                        <li>35€</li>
                        <li>45€</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td> <span>Fyzioterapia</span> </td>
                <td>5x60min.</td>
                <td>15€/20€</td>
            </tr>
            <tr>
                <td> <span>Fyziotréning</span> </td>
                <td>
                    <ul>
                        <li>30min.</li>
                        <li>60min.</li>
                    </ul>
                    </td>
                    <td>
                        <ul>
                            <li>15€</li>
                            <li>20€</li>
                        </ul>
                    </td>
            </tr>
            <tr>
                <td> <span>Fyziomasáž</span> </td>
                <td>
                    <ul>
                        <li>30min.</li>
                        <li>60min.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>20€</li>
                        <li>30€</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td> <span>Manuálna lymfodrenáž</span> </td>
                <td>
                    <ul>
                        <li>30min.</li>
                        <li>60min.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>25€</li>
                        <li>35€</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td> <span>Bankovanie</span> </td>
                <td>30min.</td>
                <td>15€</td>
            </tr>
            <tr>
                <td> <span>Oxygenoterapia (plus 1. terapia kanyla 2€- ostáva pacientovi)</span> </td>
                <td>30min.</td>
                <td>8€</td>
            </tr>
            <tr>
                <td> <span>Kinesiotaping (samostatne bez terapie)</span> </td>
                <td></td>
                <td>10€</td>
            </tr>       
            </table>
        </div>
    )
}

export default Cennik;