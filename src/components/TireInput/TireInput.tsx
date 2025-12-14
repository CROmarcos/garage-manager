import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import ICars from '../../interface/ICars'
import * as actionCreators from '../../state/actionCreators'
import './TireInput.scss'

const TireInput = ({ car }: { car: ICars["cars"] }) => {
    const { setTireSize } = bindActionCreators(actionCreators, useDispatch())

    const [selectedWidth, setSelectedWidth] = useState('195')
    const [selectedHeight, setSelectedHeight] = useState('65')
    const [selectedInch, setSelectedInch] = useState('15')
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

    const selectWidth = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedWidth(e.target.value)
    }

    const selectHeight = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedHeight(e.target.value)
    }

    const selectInch = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedInch(e.target.value)
    }

    const selectPerformance = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPerformance(e.target.checked ? "ZR" : "R")
    }

    const closeForm = () => {
        let inputForm = document.getElementById(`input-${car.id}`)
        if (inputForm) {
            inputForm.style.display = "none"
            setSelectedWidth('195')
            setSelectedHeight('65')
            setSelectedInch('15')
            setPerformance("R")
        }
    }

    const saveTire = () => {
        const tire = `${selectedWidth}/${selectedHeight} ${performance}${selectedInch}`
        const tires = [...car.tires, tire]
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
                    <select className='tire-set width' onChange={selectWidth} value={selectedWidth}>
                        {width.map(x => <option key={x}>{x}</option>)}
                    </select>
                    <label>{" "}Width</label>
                </div>
                <div>
                    <select className='tire-set' onChange={selectHeight} value={selectedHeight}>
                        {height.map(x => <option key={x}>{x}</option>)}
                    </select>
                    <label>{" "}Height</label>
                </div>
                <div>
                    <select className='tire-set' onChange={selectInch} value={selectedInch}>
                        {inch.map(x => <option key={x}>{x}</option>)}
                    </select>
                    <label>{" "}Inches</label>
                </div>
            </section>
            <section className='tire-form__set-type'>
                <input type="checkbox" className='zr-check' onChange={selectPerformance} /><label>{" "}ZR (high-speed tires)</label>
            </section>
            <section className='tire-form__actions'>
                <button className='complete-form' onClick={saveTire}>Save</button>
                <button className='complete-form' onClick={closeForm}>Cancel</button>
            </section>
        </div>
    )
}

export default TireInput