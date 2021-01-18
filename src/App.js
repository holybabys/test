import React, {useEffect, useRef, useState} from 'react';

import 'normalize.css';
import './App.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import search from "./images/search_ico.png";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import pen from "./images/pen_ico.png";
import arrow from "./images/arrowup_ico.png";
import info from "./images/info_ico.png";
import update from "./images/update_ico.png";
import trash from "./images/delete_ico.png";
import files from "./images/files_ico.png";
import eye from "./images/eye_ico.png";
import list from "./images/list_ico.png";
import axios from 'axios';
import DataForm from "./components/Form";


function App() {
    const inputName = useRef(null);
    const inputTitle = useRef(null);
    const inputPath = useRef(null);
    const {SearchBar} = Search;
    const [appState, setAppState] = useState(
        {
            data: []


        }
    )
    useEffect(() => {
        getData()

    }, [setAppState]);

    function getData() {
        const apiUrl = 'http://localhost:4000/pages';
        axios.get(apiUrl).then((resp) => {
            const data = resp.data;
            setAppState({

                data: data
            });

        });
    }


    function nameFormatter(cell, row) {
        return (
            <div className="name_row">
                <div>
                    {cell} <img src={pen} alt=""/>
                </div>
                <div>
                    <img src={arrow} alt=""/>
                </div>
            </div>
        );
    }

    function workshopFormatter(cell, row) {
        return (
            <div className="control_buttons">
                <button><img src={info} alt=""/></button>
                <button><img src={update} alt=""/></button>
                <button onClick={(e) => deleteRow(row.id, e)}><img src={trash} alt=""/></button>
                <button><img src={files} alt=""/></button>
                <button><img src={eye} alt=""/></button>
                <div>{row.id}</div>
                <button><img src={list} alt=""/></button>
            </div>
        );
    }

    function priceFormatter(cell, row) {
        if (row.type == "Страница") {
            return (
                <div className="type-page">
                    {cell}
                </div>
            );
        }

        return (
            <div className="type-section">
                {cell}
            </div>
        );
    }

    function deleteRow(id) {
        const apiUrl = 'http://localhost:4000/pages/' + id;
        axios.delete(apiUrl).then((resp) => {
            getData()

        });
    }


    const columns = [{
        dataField: 'name',
        text: 'Название',
        formatter: nameFormatter,
        filterValue: (cell, row) => cell

    }, {
        dataField: 'type',
        text: 'Тип',
        formatter: priceFormatter

    }, {
        dataField: 'template',
        text: 'Шаблон'
    }, {

        text: 'Управление',
        formatter: workshopFormatter
    }];
    const selectRow = {
        mode: 'checkbox',
        clickToSelect: true,
        clickToExpand: true
    };

    const expandRow = {
        onlyOneExpanding: true,
        renderer: (row, rowIndex) => (
            <DataForm row={row}/>
        ),

    };
    const options = {
        paginationSize: 3,
        pageStartIndex: 1,
        alwaysShowAllBtns: true,
        withFirstAndLast: false,
        prePageText: '<<',
        nextPageText: '>>',
        disablePageTitle: true,
        sizePerPageList: [{
            text: '12', value: 12
        }]
    };

    return (
        <div className="wrapper">
            <Breadcrumb>
                <Breadcrumb.Item href="#">Главная</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Страницы
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Список страниц</Breadcrumb.Item>
            </Breadcrumb>
            <div className="headline">
                <h1 className="title">Страницы</h1>
                <div className="headline_buttons">
                    <button className="export-btn">Экспорт</button>
                    <button className="create-btn">Создать</button>
                </div>

            </div>


            <ToolkitProvider
                keyField="id"
                data={appState.data}
                columns={columns}
                search={{searchFormatted: true}}
            >
                {
                    props => (
                        <div>

                            <div className="searchbar">

                                <button>
                                    Поиск
                                    <img src={search} alt=""/>
                                </button>

                                <SearchBar {...props.searchProps}
                                           placeholder="Поиск"
                                />

                            </div>

                            <Nav variant="tabs" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/home">Все</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Активные (10) </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Архив
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <BootstrapTable
                                expandRow={expandRow}
                                bordered={false}
                                selectRow={selectRow}
                                pagination={paginationFactory(options)}
                                deleteRow={true}
                                {...props.baseProps}

                            />

                        </div>
                    )
                }
            </ToolkitProvider>


        </div>
    );
}

export default App;
