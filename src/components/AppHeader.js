import React, {Component} from 'react';
import '../App.css';
import Button from "./Button";

class AppHeader extends Component {
    render() {
        return (
            <div className="AppHeader">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                    <p className="App-intro">
                        <Button title={"Главная"} />
                        <Button title={"Доп. услуги"} />
                        <Button title={"Наши преимущества"} />
                        <Button title={"Страхование"} />
                        <Button title={"Пересечение границ"} />
                        <Button title={"Оценка повреждений"} />
                        <Button title={"Страхование"} />

                    </p>

                    <p>

                        <Button title={"О штрафах"} />
                        <Button title={"Отличия ПДД"} />
                        <Button title={"Особенности парковки"} />
                        <Button title={"О платных дорогах"} />
                        <Button title={"Контакты"} />
                        <Button title={"РЕЗЕРВИРОВАНИЕ АВТО"} />
                    </p>

                </header>

            </div>
        );
    }
}

export default AppHeader;
