import {Modal} from "react-bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";

export default function BasketModal ({buttonClick, onHide}) {
    return (
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Подтвердите удаление</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Вы действительно хотите очистить корзину?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => onHide()}>Нет!</Button>
                <Button variant="primary" onClick={()=> buttonClick()}>Да!</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}