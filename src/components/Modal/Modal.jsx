import React, {Component} from "react";
import { ModalBackDrop, ModalContent, CloseBtn } from "./Modal.styled";
import { IoMdClose } from 'react-icons/io';


export class Modal extends Component {


    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = evt => {
        if(evt.code === "Escape") {
            this.props.onClose()
        }
    }

    handleBackDropClick = evt => {
        if(evt.target === evt.currentTarget) {
            this.props.onClose()
        }
    }

    render() {
        return (
            <ModalBackDrop onClick={this.handleBackDropClick}>
                <ModalContent>
                    <CloseBtn type="button" onClick={() =>this.props.onClose()}>
                        <IoMdClose size={25}/>
                    </CloseBtn>
                    {this.props.children}
                </ModalContent>
            </ModalBackDrop>
        )
    }
}