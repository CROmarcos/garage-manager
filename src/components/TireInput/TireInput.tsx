import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import ICars from '../../interface/ICars'
import * as actionCreators from '../../state/actionCreators'
import './TireInput.scss'

const TireInput = ({ car }: { car: ICars["cars"] }) => {
    const { setTireSize } = bindActionCreators(actionCreators, useDispatch())

    const [selectedWidth, setWidth] = useState('195')
    const [selectedHeight, setHeight] = useState('65')
    const [selectedInch, setInch] = useState('15')
    const [performance, setPerformance] = useState("R")

    let width: string[] = []
    for (let i = 135; i <= 315; i += 10) {
        width.push(i.toString())
    }

    let height: string[] = []
    for (let i = 30; i <= 80; i += 5) {
        height.push(i.toString())
    }

    let inch: string[] = []
    for (let i = 11; i <= 22; i++) {
        inch.push(i.toString())
    }

    const selectWitdh = () => {
        let x = document.getElementById("chooseWidth") as HTMLSelectElement
        if (x) setWidth(x.value)
    }

    const selectHeight = () => {
        let x = document.getElementById("chooseHeight") as HTMLSelectElement
        if (x) setHeight(x.value)
    }

    const selectInch = () => {
        let x = document.getElementById("chooseInch") as HTMLSelectElement
        if (x) setInch(x.value)
    }

    const selectPerformance = () => {
        let x = document.getElementById("choosePerformance") as HTMLInputElement
        x.checked ? setPerformance("ZR") : setPerformance("R")
    }

    const closeForm = () => {
        let inputForm = document.getElementById(`input-${car.id}`)
        if (inputForm) {
            inputForm.style.display = "none"
            setWidth('195')
            setHeight('65')
            setInch('15')
            setPerformance("R")
        }
    }

    const saveTire = () => {
        let tire = selectedWidth + "/" + selectedHeight + " " + performance + selectedInch
        let tires = car.tires
        tires.push(tire)
        setTireSize({ car: car.id, tires })
        closeForm()
    }

    return (
        <div className="tire-form">
            <section className='tire-form__title'>
                <p className='tire-form__title--value'>Select tire size</p>
            </section>
            <section className='tire-form__set-values'>
                <div>
                    <select id="chooseWidth" className='tire-set width' onChange={selectWitdh} value={selectedWidth}>
                        {width.map(x => <option key={x}>{x}</option>)}
                    </select>
                    <label>Width</label>
                </div>
                <div>
                    <select id="chooseHeight" className='tire-set' onChange={selectHeight} value={selectedHeight}>
                        {height.map(x => <option key={x}>{x}</option>)}
                    </select>
                    <label>Height</label>
                </div>
                <div>
                    <select id="chooseInch" className='tire-set' onChange={selectInch} value={selectedInch}>
                        {inch.map(x => <option key={x}>{x}</option>)}
                    </select>
                    <label>Inches</label>
                </div>
            </section>
            <section className='tire-form__set-type'>
                <input type="checkbox" id="choosePerformance" className='zr-check' onChange={selectPerformance} /><label>ZR (high-speed tires)</label>
            </section>
            <section className='tire-form__actions'>
                <button className='complete-form' onClick={saveTire}>Save</button>
                <button className='complete-form' onClick={closeForm}>Cancel</button>
            </section>
        </div>
    )
}

export default TireInput