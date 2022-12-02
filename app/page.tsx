"use client";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useMemo, useState } from "react";
import Cell from "../components/Cell";
import ALL_EVENTS from "../data/uselessEvents";
import getRandomInt from "../utils/getRandomInt";

export default function Page() {
    const [pos, setPos] = useState<number>(0);
    const allUselessEvents = useState<UselessEvent[]>(ALL_EVENTS);
    const allCells = useMemo<CellType[]>(() => {
        return [
            "dick",
            "female-condom",
            "surprise",
            "surprise",
            "car-koit",
            "male-condom",
            "nothing-interesting",
            "koit",
            "surprise",
            "bed",

            "surprise",
            "trash",
            "female-condom",
            "surprise",
            "bed",
            "surprise",
            "koit",
            "male-condom",
            "koit-toilet",
            "surprise",
            "surprise",
            "female-condom",
            "nothing-interesting",
            "car-koit",

            "surprise",
            "female-condom",
            "surprise",
            "male-condom",
            "car-koit",
            "koit-toilet",
            "surprise",
            "surprise",
            "surprise",
            
            "bed",
            "surprise",
            "nothing-interesting",
            "female-condom",
            "surprise",
            "car-koit",
            "female-condom",
            "surprise",
            "surprise",
            "surprise",
            "time-travel",
            "koit-toilet",
            
            "female-condom",
            "trash",
            "death",
            "surprise",
            "trash",
            "car-koit",
            "koit",
            
            "surprise",
            "surprise",
            "nothing-interesting",
            "nothing-interesting",
            "female-condom",
            "surprise",
            "male-condom",
            "koit",
            "male-condom",
            "surprise",
            
            "surprise",
            "car-koit",
            "surprise",
            "death",
            "time-travel",

            "male-condom",
            "surprise",
            "nothing-interesting",
            "trash",
            "female-condom",
            "surprise",
            "male-condom",
            "surprise",
            
            "surprise",
            "bed",
            "male-condom",
            
            "surprise",
            "nothing-interesting",
            "car-koit",
            "koit-toilet",
            "surprise",
            "trash",
            "kitten"
        ];
    }, []);

    const handlePlay = useCallback(() => {
        const randomInteger = getRandomInt(1, 6);
        const valueOfCell = allCells[pos + randomInteger];
        switch (valueOfCell) {
            case "death":
                setPos(0);
                return;
            case "nothing-interesting":
                console.log("yo");
                break;
        }
        setPos(currentPos => currentPos + randomInteger);
    }, [pos, allCells]);

    return <main>
        <div className="gameboard">
            <Cell type="dick" index={0} playerPos={pos} />
            <div />
            <Cell type="koit-toilet" index={44} playerPos={pos} />
            <Cell type="time-travel" index={43} playerPos={pos} />
            <Cell type="surprise" index={42} playerPos={pos} />
            <Cell type="surprise" index={41} playerPos={pos} />
            <Cell type="surprise" index={40} playerPos={pos} />
            <Cell type="male-condom" index={39} playerPos={pos} />
            <Cell type="car-koit" index={38} playerPos={pos} />
            <Cell type="surprise" index={37} playerPos={pos} />
            <Cell type="female-condom" index={36} playerPos={pos} />
            <Cell type="nothing-interesting" index={35} playerPos={pos} />
            <Cell type="surprise" index={34} playerPos={pos} />
            <Cell type="bed" index={33} playerPos={pos} />
            <Cell type="surprise" index={32} playerPos={pos} />

            <Cell type="female-condom" index={1} playerPos={pos} />
            <div />
            <Cell type="female-condom" index={45} playerPos={pos} />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <Cell type="surprise" index={31} playerPos={pos} />

            <Cell type="surprise" index={2} playerPos={pos} />
            <div />
            <Cell type="trash" index={46} playerPos={pos} />
            <div />
            <Cell type="surprise" index={74} playerPos={pos} />
            <Cell type="male-condom" index={73} playerPos={pos} />
            <Cell type="surprise" index={72} playerPos={pos} />
            <Cell type="female-condom" index={71} playerPos={pos} />
            <Cell type="trash" index={70} playerPos={pos} />
            <Cell type="nothing-interesting" index={69} playerPos={pos} />
            <Cell type="surprise" index={68} playerPos={pos} />
            <Cell type="male-condom" index={67} playerPos={pos} />
            <Cell type="time-travel" index={66} playerPos={pos} />
            <div />
            <Cell type="surprise" index={30} playerPos={pos} />

            <Cell type="surprise" index={3} playerPos={pos} />
            <div />
            <Cell type="death" index={47} playerPos={pos} />
            <div />
            <Cell type="surprise" index={75} playerPos={pos} />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <Cell type="death" index={65} playerPos={pos} />
            <div />
            <Cell type="koit-toilet" index={29} playerPos={pos} />

            <Cell type="car-koit" index={4} playerPos={pos} />
            <div />
            <Cell type="surprise" index={48} playerPos={pos} />
            <div />
            <Cell type="bed" index={76} playerPos={pos} />
            <div />
            <div />
            <div />
            <div />
            <div />
            <Cell type="kitten" index={84} playerPos={pos} />
            <div />
            <Cell type="surprise" index={64} playerPos={pos} />
            <div />
            <Cell type="car-koit" index={28} playerPos={pos} />

            <Cell type="male-condom" index={5} playerPos={pos} />
            <div />
            <Cell type="trash" index={49} playerPos={pos} />
            <div />
            <Cell type="male-condom" index={77} playerPos={pos} />
            <Cell type="surprise" index={78} playerPos={pos} />
            <Cell type="nothing-interesting" index={79} playerPos={pos} />
            <Cell type="car-koit" index={80} playerPos={pos} />
            <Cell type="koit-toilet" index={81} playerPos={pos} />
            <Cell type="surprise" index={82} playerPos={pos} />
            <Cell type="trash" index={83} playerPos={pos} />
            <div />
            <Cell type="car-koit" index={63} playerPos={pos} />
            <div />
            <Cell type="male-condom" index={27} playerPos={pos} />

            <Cell type="nothing-interesting" index={6} playerPos={pos} />
            <div />
            <Cell type="car-koit" index={50} playerPos={pos} />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <Cell type="surprise" index={62} playerPos={pos} />
            <div />
            <Cell type="surprise" index={26} playerPos={pos} />

            <Cell type="koit" index={7} playerPos={pos} />
            <div />
            <Cell type="koit" index={51} playerPos={pos} />
            <Cell type="surprise" index={52} playerPos={pos} />
            <Cell type="surprise" index={53} playerPos={pos} />
            <Cell type="nothing-interesting" index={54} playerPos={pos} />
            <Cell type="nothing-interesting" index={55} playerPos={pos} />
            <Cell type="female-condom" index={56} playerPos={pos} />
            <Cell type="surprise" index={57} playerPos={pos} />
            <Cell type="male-condom" index={58} playerPos={pos} />
            <Cell type="koit" index={59} playerPos={pos} />
            <Cell type="male-condom" index={60} playerPos={pos} />
            <Cell type="surprise" index={61} playerPos={pos} />
            <div />
            <Cell type="female-condom" index={25} playerPos={pos} />

            <Cell type="surprise" index={8} playerPos={pos} />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <Cell type="surprise" index={24} playerPos={pos} />

            <Cell type="bed" index={9} playerPos={pos} />
            <Cell type="surprise" index={10} playerPos={pos} />
            <Cell type="trash" index={11} playerPos={pos} />
            <Cell type="female-condom" index={12} playerPos={pos} />
            <Cell type="surprise" index={13} playerPos={pos} />
            <Cell type="bed" index={14} playerPos={pos} />
            <Cell type="surprise" index={15} playerPos={pos} />
            <Cell type="koit" index={16} playerPos={pos} />
            <Cell type="male-condom" index={17} playerPos={pos} />
            <Cell type="koit-toilet" index={18} playerPos={pos} />
            <Cell type="surprise" index={19} playerPos={pos} />
            <Cell type="surprise" index={20} playerPos={pos} />
            <Cell type="female-condom" index={21} playerPos={pos} />
            <Cell type="nothing-interesting" index={22} playerPos={pos} />
            <Cell type="car-koit" index={23} playerPos={pos} />
        </div>
        <div className="controls">
            <button type="button" className="play-button" onClick={handlePlay}>
                <FontAwesomeIcon icon={faPlay} />
            </button>
        </div>
        <div className="chat">
        	<div className="msg_area">
        		<div className="msg">
        			<p className="identite"><span className="author">Fabien Delecroix</span><span className="date">01/01/1942</span></p>
        			<p className="msg_body">Salut bg</p>
        		</div>
        		<div className="msg">
        			<p className="identite"><span className="author">Yann Secq</span><span className="date">01/01/1943</span></p>
        			<p className="msg_body">Salut turbo bg</p>
        		</div>
        		<div className="msg">
        			<p className="identite"><span className="author">Fabien Delecroix</span><span className="date">01/01/1943</span></p>
        			<p className="msg_body">1 an le vu</p>
        		</div>
        		<div className="msg">
        			<p className="identite"><span className="author">Yann Secq</span><span className="date">01/01/2042</span></p>
        			<p className="msg_body">Hein ?</p>
        		</div>
        	</div>
        	<div className="txt_area">
        		<button type="button" className="send-button">
        			Envoyer
        		</button>
        		<textarea autoComplete="on">
        			Le chat
       			</textarea>
        	</div>
        </div>
    </main>
}
