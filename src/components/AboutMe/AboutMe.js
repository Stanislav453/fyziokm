import "./AboutMe.scss";
import kristian from "../../img/kristian.jpg"


const AboutMe = () => {
    return (
        <div className="about-me">
            <header className="text-header">
                <h2 id="omne" >O mne</h2>
                <div className="underline"></div>
            </header>
            <div className="aboutme-me-text">
                <img src={kristian} alt="foto"  />
                <p className="about-me-paragraph">
                    Som absolventom Univerzity sv. Cyrila a Metoda v Trnave (Fakulta zdravotníckych vied), kde som bakalárske aj magisterské štúdium absolvoval s červeným diplomom. Získal som cenu rektora za bakalársku prácu (Možnosti fyzioterapie v prevencii zranení v športovom karate) a cenu dekana za mimoriadne výsledky v magisterskom štúdiu. Pôsobím ako fyzioterapeut pri ženách v Slovenskej hádzanárskej reprezentácii. Som aktívny športovec, ktorý sa venuje rôznym športom, vrcholovo karate, kde som pretekal za reprezentáciu Slovenska. Teraz pôsobím pri juniorskej aj seniorskej karate reprezentácii Slovenska ako fyzioterapeut na vrcholových podujatiach (MS, ME). Spolupracujem ako externý fyzioterapeut aj s karate klubom AC uniza Žilina a karate klub ZZO Čadca. Ako športový fyzioterapeut sa venujem v mojom súkromnom zdravotníckom zariadení športovcom na rôznych výkonnostných úrovniach od amatérskych až po vrcholových športovcov. Pracujem taktiež s ortopedickými pacientmi s problémami pohybového aparátu, po operáciach a jednoduchšími neurologickými diagnózami. Absolvoval som prax v rôznych nemocničných oddeleniach a v rehabilitačných zariadeniach, taktiež odbornú stáž v Sanatóriu Klimkovice, kde som sa venoval neurologickým a ambulantným pacientom. Pracoval som aj v súkromnom rehabilitačnom zariadení Rehamed v Piešťanoch, kde som pracoval s ortopedickými a ambulantnými pacientami. Spolupracujem so súkromnou rehabilitáciou Rehasport v Bratislave, kde som viedol aj praktickú výučbu 
                </p>
            </div>

        </div>
    )
}

export default AboutMe