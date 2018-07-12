import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                    <p className="App-intro">
                        <button>Главная</button>
                        <button>Доп. услуги</button>
                        <button>Наши преимущества</button>
                        <button>Страхование</button>
                        <button>Пересечение границ</button>
                        <button>Оценка повреждений</button>
                    </p>

                    <p>
                        <button>О штрафах</button>
                        <button>Отличия ПДД</button>
                        <button>Особенности парковки</button>
                        <button>О платных дорогах</button>
                        <button>Контакты</button>
                        <button>РЕЗЕРВИРОВАНИЕ АВТО</button>
                    </p>
                </header>

            </div>
        );
    }
}

export default App;
