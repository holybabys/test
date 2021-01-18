import info from "./images/info_ico.png";
import update from "./images/update_ico.png";
import trash from "./images/delete_ico.png";
import files from "./images/files_ico.png";
import eye from "./images/eye_ico.png";
import list from "./images/list_ico.png";
import pen from "./images/pen_ico.png";
import arrow from "./images/arrowup_ico.png";

import React from "react";

let data = [{
    id: '1',
    name: "Главная страница",
    type: "Страница",
    template: "Главная",



},
    {
        id: '2',
        name: "Главные каталогов",
        type: "Раздел",
        template: ""

    },
    {
        id: '3',
        name: "Акции",
        type: "Страница",
        template: "Список акций"

    },
    {
        id: '4',
        name: "Новогодняя распродажа",
        type: "Страница",
        template: "Целевая страница",

    },
    {
        id: '5',
        name: "Предзаказ 2020",
        type: "Страница",
        template: "Целевая страница",

    },
    {
        id: '6',
        name:"Целевые страницы",
        type: "Раздел",
        template: "",

    },
    {
        id: '7',
        name: "Сервис и помощь",
        type: "Раздел",
        template: "",

    },
    {
        id: '8',
        name: "Шоу-рум",
        type: "Страница",
        template: "Страница шоу-рума",

    },
    {
        id: '9',
        name: "Подарочные сертификаты",
        type: "Раздел",
        template: "",

    },
    {
        id: '10',
        name: "Оформление корзины",
        type: "Раздел",
        template: "",

    },
    {
        id: '11',
        name: "Архивные страницы",
        type: "Раздел",
        template: "",

    },
    {
        id: '12',
        name: "Материалы для диллеров",
        type: "Страница",
        template: "",

    },
    {
        id: '13',
        name: "Главные каталогов",
        type: "Раздел",
        template: ""

    },
    {
        id: '14',
        name: "Акции",
        type: "Страница",
        template: "Список акций"

    },
    {
        id: '15',
        name: "Новогодняя распродажа",
        type: <div className="type-page">
            Страница
        </div>,
        template: "Целевая страница",

    },
    {
        id: '16',
        name: "Предзаказ 2020",
        type: <div className="type-page">
            Страница
        </div>,
        template: "Целевая страница",

    },
    {
        id: '17',
        name:"Целевые страницы",
        type: <div className="type-section">
            Раздел
        </div>,
        template: "",

    },
    {
        id: '18',
        name: "Сервис и помощь",
        type: <div className="type-section">
            Раздел
        </div>,
        template: "",

    },
    {
        id: '19',
        name: "Шоу-рум",
        type: <div className="type-page">
            Страница
        </div>,
        template: "Страница шоу-рума",

    },
    {
        id: '20',
        name: "Подарочные сертификаты",
        type: <div className="type-section">
            Раздел
        </div>,
        template: "",

    },
    {
        id: '21',
        name: "Оформление корзины",
        type: <div className="type-section">
            Раздел
        </div>,
        template: "",

    },
    {
        id: '22',
        name: "Архивные страницы",
        type: <div className="type-section">
            Раздел
        </div>,
        template: "",

    },
    {
        id: '23',
        name: "Материалы для диллеров",
        type: <div className="type-page">
            Страница
        </div>,
        template: "",

    },




]
export default data;