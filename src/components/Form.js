import {Button, Col, Form, FormControl, InputGroup} from "react-bootstrap";
import React, {useRef, useState} from "react";
import axios from 'axios';
import style from "./Form.module.css"


function DataForm(props) {
    const [formState, setFormState] = useState(
        {
            name: props.row.name,
            title: props.row.title,
            path: props.row.path,
        }
    )

    const inputName = useRef(null);
    const inputTitle = useRef(null);
    const inputPath = useRef(null);
    const inputHandler = () => {
        setFormState(
            {
                name: inputName.current.value,
                title: inputTitle.current.value,
                path: inputPath.current.value,
            }
        )
    }

    function sendData(payload) {
        const apiUrl = 'http://localhost:4000/pages/' + payload.id;
        axios.put(apiUrl, payload).then((resp) => {


        });
    }

    return (
        <div>
            <Form>

                <Form.Row>
                    <Col xs="8">
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Название</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" ref={inputName} value={formState.name}
                                         onChange={inputHandler}/>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Заголовок H1</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" ref={inputTitle} value={formState.title}
                                         onChange={inputHandler}/>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Путь</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" ref={inputPath} value={formState.path}
                                         onChange={inputHandler}/>
                        </InputGroup>

                    </Col>
                    <Col xs="4">
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Шаблон</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                as="select"
                                className="mr"
                                id="inlineFormCustomSelect"
                                custom
                            >
                                <option >Список акций</option>
                                <option value="1">Главная</option>
                                <option value="2">Целевая страница</option>
                                <option value="3">Страница шоу-рума</option>
                            </Form.Control>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Раздел</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                as="select"
                                className="mr"
                                id="inlineFormCustomSelect"
                                custom
                            >
                                <option disabled>Список акций</option>
                                <option value="1">Акционая страница</option>
                                <option value="2">Сервес и помощь</option>
                                <option value="3">Страница шоу-рума</option>
                            </Form.Control>
                        </InputGroup>

                    </Col>


                </Form.Row>
                <Form.Row>
                    <Col xs="auto">
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Порядок</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" className="tested"/>
                            <Form.Check
                                type="checkbox"
                                id="autoSizingCheck"
                                className="mb-2"
                                label="Видимость"
                            />
                        </InputGroup>
                    </Col>

                    <Col>
                        <div className={style.btnGroup}>
                            <button className={style.update} onClick={sendData({
                                id: props.row.id, name: formState.name, title: formState.title,
                                template: props.row.template, path: formState.path, type: props.row.type
                            })}>Обновить
                            </button>
                           <button className={style.cancel}>Отмена</button>
                        </div>
                    </Col>
                </Form.Row>
            </Form>
        </div>

    )
}

export default DataForm;



