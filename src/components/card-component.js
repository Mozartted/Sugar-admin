import React from "react"
import MasterCard from "../assets/img/master-card-logo.svg"
import Visa from "../assets/img/visa-logo.svg"
import { deleteCard } from "store/Actions/Card"
import {useSpring, animated} from "react-spring"

const blueCard = require("../assets/img/svgs/blue-card.svg")
// card components.

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Card = ({card, deleteable, deleteCard = (card) => {}, key=null}) => {


    const [animationProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const cardType =(type) => {
        switch (type) {
            case "MASTERCARD":
                return <img src={MasterCard}/>
            case "VISA":
                return <img src={Visa}/>
            default:
                break;
        }
    }
    let extraProps = {}
    if(key)
        extraProps.key = key
    return <> 
             <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: animationProps.xys.interpolate(trans) }}
            {...extraProps}
            >
                <div className="card debit-cards-view zoom bg-primary" style={{height: 150, background: `url(${blueCard})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                    <div className="row text-light p-3 mt-1">
                        <div className="col-auto">
                        {
                            deleteable ? <i onClick={() => deleteCard(card.id)}  className="fe fe-trash pointer"></i> : null
                        }
                        </div>
                        <div className="col"></div>
                        <div className="col-auto">
                            Expires {card.expiryyear} / {card.expirymonth}
                        </div>
                    </div>
                    <div className="row text-light p-3 mt-4">
                        <div className="col ">
                            <h3 className="font-weight-bolder">**** {card.last_number}</h3>
                        </div>
                        {
                            card.type ? 
                            <div className="col-auto">
                                {cardType(card.type)}
                            </div>: null
                        }
                    </div>
                </div>
            </animated.div>
    </>
}

export default Card;