import React from "react"
import Building from "../assets/img/bank-building.svg"
import {momentInThePast, momentInTimeDate} from "../utils/helpers"
import {useSpring, animated} from "react-spring"

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const grayCard = require("../assets/img/svgs/gray-card.svg")

const Bank = ({bankaccount, deleteable = null, deleteBank = (bank) => {}}) => {

    const [animationProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return <>
            <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: animationProps.xys.interpolate(trans) }}
            >
                <div className="card debit-cards-view zoom bg-light" style={{height: 150, background: `url(${grayCard})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                    <div className="row text-primary p-3 mt-1">
                        <div className="col-auto text-secondary">
                            <>
                                {
                                    bankaccount.expiry ? <span className="text-primary">
                                        {momentInTimeDate(bankaccount.expiry)}
                                    </span>: null
                                }
                            </>
                            {
                                deleteable ? <i onClick={() => deleteBank(bankaccount.id)} className="fe fe-trash pointer text-primary"></i> : null
                            }
                        </div>
                        <div className="col text-right">
                            {bankaccount.bank_name}
                        </div>
                    </div>
                    <div className="row text-primary p-3 mt-4">
                        <div className="col">
                            <h3 className="font-weight-bolder">{bankaccount.account_number}</h3>
                            <p className="small">{bankaccount.account_name}</p>
                        </div>
                        <div className="col-auto">
                            {/* <img src={require('')}/> */}
                            <img src={Building}/>
                        </div>
                    </div>
                </div>
            </animated.div>
    </>
}

export default Bank;