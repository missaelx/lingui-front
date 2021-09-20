/* eslint-disable react-hooks/exhaustive-deps */
import {useDispatch, useSelector} from "react-redux";
import  * as actions from '../../store/Actions';
import {useEffect} from "react";
import * as modalTypes from '../../store/reducers/modal/modalTypes';
import {ModalVerbCardCompleted} from "./ModalVerbCardCompleted";


const createModalContent = (modalType, additionalData) => {
    switch(modalType){
        case modalTypes.VerbsCards:
            return <ModalVerbCardCompleted wrongVerbs={additionalData ?? []}/>
        default:
            return null;
    }
}

export const ModalContainer = () => {
    const dispatch = useDispatch();

    const isActive = useSelector(state => state.modal.active);
    const title = useSelector(state => state.modal.title);
    const type = useSelector(state => state.modal.type);
    const additionalData = useSelector(state => state.modal.additionalData);
    const buttons = useSelector(state => state.modal.buttons);


    const onHideClick = (event) => {
        event.preventDefault()
        dispatch({type: actions.HIDE_MODAL})
    }
    return (

            <div className={"modal " + (isActive ? "is-active": "")}>
                <div className="modal-background"/>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{title}</p>
                        <button className="delete" aria-label="close" onClick={onHideClick}/>
                    </header>
                    <section className="modal-card-body">
                        {createModalContent(type, additionalData)}
                    </section>
                    <footer className="modal-card-foot">
                        {buttons.map( (button, i) => (
                            <button key={i} onClick={button.handler} className={button.classes}>{button.label}</button>
                        ))}
                    </footer>
                </div>
            </div>

    )
}