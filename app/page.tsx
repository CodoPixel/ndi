"use client";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import Cell from "../components/Cell";
import ALL_EVENTS from "../data/uselessEvents";
import getRandomInt from "../utils/getRandomInt";
import { getSwal } from "../utils/getSwal";
import getDeepCopyOf from "../utils/getDeepCopyOf";
import QUESTIONS from "../data/questions";
import Image from "next/image";

export default function Page() {
    const [allPositions, setAllPositions] = useState<number[]>([0,0,0]);
    const [allUselessEvents, setAllUselessEvents] = useState<UselessEvent[]>(ALL_EVENTS);
    const [allQuestions, setAllQuestions] = useState<Question[]>(QUESTIONS);
    const [STIChance, setSTIChance] = useState<number[]>([0.6,0.6,0.6]);
    const [hasSTI, setHasSTI] = useState<boolean[]>([false, false, false]);
    const [condomsCount, setCondomnsCount] = useState<number[]>([0,0,0]);
    const [finishedPlayers, setFinishedPlayers] = useState<number[]>([]);
    const [previousDice, setPreviousDice] = useState<number>(0); // of the real player only
    const swal = getSwal();
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
            "treatment",
            "surprise",
            "treatment",
            "koit-toilet",
            
            "female-condom",
            "trash",
            "death",
            "surprise",
            "trash",
            "car-koit",
            "koit",
            
            "treatment",
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
            "male-condom",

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

    const handlePlay = async () => {
        const randomInteger = getRandomInt(1, 6);
        let move = true;
        let indexOfCell = allPositions[0] + randomInteger;
        if (indexOfCell >= allCells.length) {
            indexOfCell = allCells.length - 1;
        }
        const valueOfCell = allCells[allPositions[0] + randomInteger];
        setPreviousDice(randomInteger);
        switch (valueOfCell) {
            case "death":
                swal.fire({
                    title: "Vous êtes mort",
                    text: "Rip, la vie est injuste et vous êtes mort, pas de bol. Heureusement la réincarnation c'est fun donc vous revenez à la case départ."
                }).then(() => {
                    setAllPositions(c => { c[0] = 0; return c; });
                    setHasSTI(c => { c[0] = false; return c; });
                    setCondomnsCount(c => { c[0] = 0; return c; });
                    setAllQuestions(QUESTIONS);
                    setAllUselessEvents(ALL_EVENTS);
                });
                move = false;
                break;
            case "nothing-interesting":
                const randomEventIndex = getRandomInt(0, allUselessEvents.length - 1);
                const randomEvent = allUselessEvents[randomEventIndex];
                setAllUselessEvents(currentEvents => {
                    if (currentEvents.length === 1) {
                        return ALL_EVENTS; // we go back to the original events because there is no more
                    }
                    currentEvents.splice(randomEventIndex, 1);
                    return getDeepCopyOf(currentEvents);
                });
                swal.fire({
                    title: randomEvent.title,
                    text: randomEvent.content,
                });
                break;
            case "car-koit":
            case "koit-toilet":
            case "trash":
                if (condomsCount[0] === 0 && Math.random() <= STIChance[0]) {
                    swal.fire({
                        title: "Infecté !",
                        text: "Vous avez eu un rapport non protégé et donc avez été infecté ! Vous avez cependant toujours une chance de vous faire soigner avec quelques traitements possibles. Sachez que vous pouvez vivre avec !"
                    }).then(() => setHasSTI(c => { c[0] = true; return c; }));
                } else {
                    swal.fire({
                        title: "Vous n'avez pas été infecté",
                        text: "Malgré ce rapport non protégé, tous les rapports n'entraînent pas forcément une infection, mais il y aura toujours un risque si les deux personnes ne se sont pas faites testées !"
                    }).then(() => setCondomnsCount(c => { c[0] -= 1; return c; }));
                }
                break;
            case "koit":
            case "bed":
                if (hasSTI[0]) {
                    swal.fire({
                        title: "Pas de baise ! Tu as une IST",
                        text: "Il y a un haut risque que tu transmettes ta maladie à ton partenaire, alors évite le rapport."
                    });
                } else {
                    swal.fire({
                        title: "Rapport avec personne testée",
                        text: "Bien joué ! Tu as eu un rapport avec quelqu'un qui s'est fait testé négatif récemment, et évidemment tu t'es déjà fait testé donc tu ne lui as rien refilé !"
                    });
                }
                break;
            case "surprise":
                const randomIndex = getRandomInt(0, allQuestions.length - 1);
                const randomQuestion = allQuestions[randomIndex];
                setAllQuestions(currentQuestions => {
                    if (currentQuestions.length === 1) {
                        return QUESTIONS; // we go back to the original list of questions because we don't have any more questions
                    }
                    currentQuestions.splice(randomIndex, 1);
                    return getDeepCopyOf(currentQuestions);
                });
                const { isConfirmed, isDenied } = await swal.fire({
                    icon: "question",
                    title: "Question !",
                    text: randomQuestion.text,
                    showConfirmButton: true,
                    showDenyButton: true,
                    showCancelButton: randomQuestion.answerC !== undefined,
                    confirmButtonText: randomQuestion.answerA,
                    denyButtonText: randomQuestion.answerB,
                    cancelButtonText: randomQuestion.answerC,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                });
                if (
                    (isConfirmed && randomQuestion.goodAnswer === "A") ||
                    (isDenied && randomQuestion.goodAnswer === "B") ||
                    (!isDenied && !isConfirmed && randomQuestion.goodAnswer === "C")
                ) {
                    swal.fire({
                        icon: "success",
                        title: "Bonne réponse !",
                    }).then(() => {
                        setSTIChance(c => { c[0] = c[0] - (c[0] / 100 * 10); return c; });
                    });
                } else {
                    swal.fire({
                        icon: "error",
                        title: "Mauvaise réponse",
                        text: randomQuestion.explanation
                    }).then(() => {
                        // Increase the chance to get a STI by 10%
                        setSTIChance(c => { c[0] = c[0] + (c[0] / 100 * 10); return c; });
                    });
                }
                break;
            case "male-condom":
            case "female-condom":
                setCondomnsCount(c => { c[0] += 1; return c; });
                break;
            case "treatment":
                if (Math.random() <= 0.2) {
                    swal.fire({
                        title: "Incroyable !!!",
                        text: "Vous avez été guéri de votre maladie !"
                    });
                }
                break;
            case "kitten":
                if (hasSTI[0]) {
                    swal.fire({
                        title: "Bravo !",
                        text: "Vous avez réussi à grandir sans avoir d'IST !"
                    });
                } else {
                    swal.fire({
                        title: "noooo",
                        text: "Tu as une IST ! Sois plus prudent."
                    });
                }
            default:
                console.error("you forgot a case, idiot");
        }
        if (move) {
            setAllPositions(currentPositions => {
                currentPositions[0] += randomInteger;
                return getDeepCopyOf(currentPositions);
            });
        }
        if (!finishedPlayers.includes(1)) playTurnForAI(1); // player 2
        if (!finishedPlayers.includes(2)) playTurnForAI(2); // player 3
    }

    function playTurnForAI(player:number) {
        const randomDice = getRandomInt(1, 6);
        let cellIndex = allPositions[player] + randomDice;
        if (cellIndex >= allCells.length) {
            cellIndex = allCells.length - 1;
        }
        const randomCell = allCells[cellIndex];
        switch (randomCell) {
            case "death":
                setAllPositions(c => { c[player] = 0; return c; });
                setHasSTI(c => { c[player] = false; return c; });
                setCondomnsCount(c => { c[player] = 0; return c; });
                setAllQuestions(QUESTIONS);
                setAllUselessEvents(ALL_EVENTS);
                return;
            case "car-koit":
            case "koit-toilet":
            case "trash":
                if (condomsCount[player] === 0 && Math.random() <= STIChance[player]) {
                    setHasSTI(c => { c[player] = true; return c; })
                } else {
                    setCondomnsCount(c => { c[player] -= 1; return c; })
                }
                break;
            case "surprise":
                // The AI can have several times the same question
                // as the answer will always be random (it doesn't learn).
                const randomIndex = getRandomInt(0, QUESTIONS.length - 1);
                const randomQuestion = QUESTIONS[randomIndex];
                const answer = Math.random();
                const isConfirmed = answer >= 0 && answer <= 0.33;
                const isDenied = answer > 0.33 && answer <= 0.66;
                if (
                    (isConfirmed && randomQuestion.goodAnswer === "A") ||
                    (isDenied && randomQuestion.goodAnswer === "B") ||
                    (!isDenied && !isConfirmed && randomQuestion.goodAnswer === "C")
                ) {
                    setSTIChance(c => { c[player] = c[player] - (c[player] / 100 * 10); return c; });
                } else {
                    // Increase the chance to get a STI by 10%
                    setSTIChance(c => { c[player] = c[player] + (c[player] / 100 * 10); return c; });
                }
                break;
            case "male-condom":
            case "female-condom":
                setCondomnsCount(c => { c[player] += 1; return c; });
                break;
            case "kitten":
                setFinishedPlayers(c => ([...c, player]));
                break;
        }
        setAllPositions(currentPositions => { currentPositions[player] = cellIndex; return getDeepCopyOf(currentPositions); });
    }

    return <main>
        <div className="gameboard">
            <Cell type="dick" index={0} playersPositions={allPositions} />
            <div />
            <Cell type="koit-toilet" index={44} playersPositions={allPositions} />
            <Cell type="treatment" index={43} playersPositions={allPositions} />
            <Cell type="surprise" index={42} playersPositions={allPositions} />
            <Cell type="treatment" index={41} playersPositions={allPositions} />
            <Cell type="surprise" index={40} playersPositions={allPositions} />
            <Cell type="male-condom" index={39} playersPositions={allPositions} />
            <Cell type="car-koit" index={38} playersPositions={allPositions} />
            <Cell type="surprise" index={37} playersPositions={allPositions} />
            <Cell type="female-condom" index={36} playersPositions={allPositions} />
            <Cell type="nothing-interesting" index={35} playersPositions={allPositions} />
            <Cell type="surprise" index={34} playersPositions={allPositions} />
            <Cell type="bed" index={33} playersPositions={allPositions} />
            <Cell type="surprise" index={32} playersPositions={allPositions} />

            <Cell type="female-condom" index={1} playersPositions={allPositions} />
            <div />
            <Cell type="female-condom" index={45} playersPositions={allPositions} />
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
            <Cell type="surprise" index={31} playersPositions={allPositions} />

            <Cell type="surprise" index={2} playersPositions={allPositions} />
            <div />
            <Cell type="trash" index={46} playersPositions={allPositions} />
            <div />
            <Cell type="surprise" index={74} playersPositions={allPositions} />
            <Cell type="male-condom" index={73} playersPositions={allPositions} />
            <Cell type="surprise" index={72} playersPositions={allPositions} />
            <Cell type="female-condom" index={71} playersPositions={allPositions} />
            <Cell type="trash" index={70} playersPositions={allPositions} />
            <Cell type="nothing-interesting" index={69} playersPositions={allPositions} />
            <Cell type="surprise" index={68} playersPositions={allPositions} />
            <Cell type="male-condom" index={67} playersPositions={allPositions} />
            <Cell type="male-condom" index={66} playersPositions={allPositions} />
            <div />
            <Cell type="surprise" index={30} playersPositions={allPositions} />

            <Cell type="surprise" index={3} playersPositions={allPositions} />
            <div />
            <Cell type="death" index={47} playersPositions={allPositions} />
            <div />
            <Cell type="surprise" index={75} playersPositions={allPositions} />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <Cell type="death" index={65} playersPositions={allPositions} />
            <div />
            <Cell type="koit-toilet" index={29} playersPositions={allPositions} />

            <Cell type="car-koit" index={4} playersPositions={allPositions} />
            <div />
            <Cell type="surprise" index={48} playersPositions={allPositions} />
            <div />
            <Cell type="bed" index={76} playersPositions={allPositions} />
            <div />
            <div />
            <div />
            <div />
            <div />
            <Cell type="kitten" index={84} playersPositions={allPositions} />
            <div />
            <Cell type="surprise" index={64} playersPositions={allPositions} />
            <div />
            <Cell type="car-koit" index={28} playersPositions={allPositions} />

            <Cell type="male-condom" index={5} playersPositions={allPositions} />
            <div />
            <Cell type="trash" index={49} playersPositions={allPositions} />
            <div />
            <Cell type="male-condom" index={77} playersPositions={allPositions} />
            <Cell type="surprise" index={78} playersPositions={allPositions} />
            <Cell type="nothing-interesting" index={79} playersPositions={allPositions} />
            <Cell type="car-koit" index={80} playersPositions={allPositions} />
            <Cell type="koit-toilet" index={81} playersPositions={allPositions} />
            <Cell type="surprise" index={82} playersPositions={allPositions} />
            <Cell type="trash" index={83} playersPositions={allPositions} />
            <div />
            <Cell type="car-koit" index={63} playersPositions={allPositions} />
            <div />
            <Cell type="male-condom" index={27} playersPositions={allPositions} />

            <Cell type="nothing-interesting" index={6} playersPositions={allPositions} />
            <div />
            <Cell type="car-koit" index={50} playersPositions={allPositions} />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <Cell type="surprise" index={62} playersPositions={allPositions} />
            <div />
            <Cell type="surprise" index={26} playersPositions={allPositions} />

            <Cell type="koit" index={7} playersPositions={allPositions} />
            <div />
            <Cell type="koit" index={51} playersPositions={allPositions} />
            <Cell type="treatment" index={52} playersPositions={allPositions} />
            <Cell type="surprise" index={53} playersPositions={allPositions} />
            <Cell type="nothing-interesting" index={54} playersPositions={allPositions} />
            <Cell type="nothing-interesting" index={55} playersPositions={allPositions} />
            <Cell type="female-condom" index={56} playersPositions={allPositions} />
            <Cell type="surprise" index={57} playersPositions={allPositions} />
            <Cell type="male-condom" index={58} playersPositions={allPositions} />
            <Cell type="koit" index={59} playersPositions={allPositions} />
            <Cell type="male-condom" index={60} playersPositions={allPositions} />
            <Cell type="surprise" index={61} playersPositions={allPositions} />
            <div />
            <Cell type="female-condom" index={25} playersPositions={allPositions} />

            <Cell type="surprise" index={8} playersPositions={allPositions} />
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
            <Cell type="surprise" index={24} playersPositions={allPositions} />

            <Cell type="bed" index={9} playersPositions={allPositions} />
            <Cell type="surprise" index={10} playersPositions={allPositions} />
            <Cell type="trash" index={11} playersPositions={allPositions} />
            <Cell type="female-condom" index={12} playersPositions={allPositions} />
            <Cell type="surprise" index={13} playersPositions={allPositions} />
            <Cell type="bed" index={14} playersPositions={allPositions} />
            <Cell type="surprise" index={15} playersPositions={allPositions} />
            <Cell type="koit" index={16} playersPositions={allPositions} />
            <Cell type="male-condom" index={17} playersPositions={allPositions} />
            <Cell type="koit-toilet" index={18} playersPositions={allPositions} />
            <Cell type="surprise" index={19} playersPositions={allPositions} />
            <Cell type="surprise" index={20} playersPositions={allPositions} />
            <Cell type="female-condom" index={21} playersPositions={allPositions} />
            <Cell type="nothing-interesting" index={22} playersPositions={allPositions} />
            <Cell type="car-koit" index={23} playersPositions={allPositions} />
        </div>
        <div className="controls">
            <button type="button" className="play-button" onClick={handlePlay}>
                <FontAwesomeIcon icon={faPlay} />
            </button>
            {previousDice !== 0
                ? <Dice dice={previousDice} />
                : null
            }
            <ul>
                <li>Joueur 1 : {allPositions[0]}</li>
                <li>Joueur 2 : {allPositions[1]}</li>
                <li>Joueur 3 : {allPositions[2]}</li>
            </ul>
        </div>
    </main>
}

interface DiceProps {
    dice: number;
}

const Dice: React.FC<DiceProps> = ({dice}) => {
    return <div className="dice">
        <Image src={"/assets/cells/dice-" + dice + ".png"} alt={"dice " + dice} width={50} height={50} />
    </div>
};