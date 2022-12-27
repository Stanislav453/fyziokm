import "./Method.scss";

const Method = () => {
    return (
        <div className="method">
            <header className="text-header">
                <h2 id="metody" >Metódy</h2>
                <div className="underline"></div>
            </header>
            <div className="method-container">
                <div className="method-one">
                    <ul>
                        <li>Fasciálna manipulácia (Stecco)</li>
                        <li>Dynamická neuromuskulárna stabilizácia (DNS)</li>
                        <li>Mulligan koncept</li>
                        <li>Mobilizácia rebier podľa Mojžíšovej</li>
                        <li>Senzomotorická stimulácia</li>
                        <li>SM systém</li>
                    </ul>
                </div>
                <div className="method-two">
                    <ul>
                        <li>Kaltenbornova metóda</li>
                        <li>Nordic walking</li>
                        <li>Cvičenie s fitloptou</li>
                        <li>Cvičenie v tehotenstve</li>
                        <li>Mobilizácie a trakcie</li>
                        <li>Fasciálne techniky (manuálne, IASTM, dynamické bankovanie)</li>
                    </ul>
                </div>
                <div className="method-three">
                    <ul>
                        <li>Theragun</li>
                        <li>Suchá ihla</li>
                        <li>Flossband</li>
                        <li>Kinesiotaping</li>
                        <li>Liečebné masáže</li>
                        <li>Bankovanie</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Method;