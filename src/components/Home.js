import React, {Component} from 'react';
import '../App.css';
import AutoTable from "./AutoTable";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h2>Прокат машин в Австрии - аренда автомобилей в Вене + аэропорт.</h2>
                <h3>Добро пожаловать на сайт аренды авто в Вене и аэропорту!</h3>
                <h4>Преимущества аренды машин у нас</h4>
                <p>«Прокат Вена» предлагает услуги по прокату автомобилей в Вене и по Австрии за самые низкие цены.
                    Наша компания гарантирует <b>самые низкие цены за аренду машин</b> любых классов,- это не
                    голословное утверждение,
                    - достаточно сделать поисковой запрос «Аренда автомобилей в Вене (или Австрии)», зайти на несколько
                    сайтов наших конкурентов и убедиться в этом.</p>
                <p>
                    <b>Цены</b> на наши услуги <b>являются конечными</b> включая все необходимые налоги, сборы,
                    комплексное
                    cтрахование машин (<b>с франшизой всего 300 евро</b>), оплату австрийских магистралей. При этом,
                    мы предоставляем машины без ограничения пробега и количества водителей.
                </p>
                <p>

                    Не смотря на лучшие цены, наш прокат машин в Вене (Австрии) предоставляет только высококачественные
                    услуги. Выбирая наши авто, Вы можете быть уверены в их надежности, т.к. каждый автомобиль проходит
                    регулярную диагностику и сервисное обслуживание в фирменном сервисе. С марта 2015 года мы
                    предоставляем
                    в аренду только <b>новые автомобили на заводской гарантии,</b> обновление автопарка идет постоянно,
                    а потому 90% наших машин не старше 2 лет (из них половина до года). Наибольший возраст авто 3 года.
                </p>
                <p>Следующий наш принцип — комфорт наших Клиентов, а потому вся <strong>процедура
                    оформления</strong> документов и передачи машины происходит <strong>за 10-15 минут на русском
                    языке</strong>. Оформить аренду автомобилей можно <strong>без банковской карты</strong> и без
                    предоплат за резервацию авто.</p>
                <p>
                    Следующий наш принцип — комфорт наших Клиентов, а потому вся <b>процедура оформления</b> документов
                    и
                    передачи машины происходит <b>за 10-15 минут на русском языке.</b> Оформить аренду автомобилей
                    можно <b>без банковской карты</b> и без предоплат за резервацию авто.
                </p>

                <h4><b>Резервирование автомобиля бесплатно!</b></h4>

                <p>Все, что нужно от Клиента, чтобы взять машину напрокат, это:</p>
                <li>зарезервировать автомобиль онлайн или по телефону</li>
                <li>водительское удостоверение с указанием фамилии и имени водителя латиницей</li>
                <li>паспорт — для физического лица, либо свидетельство о регистрации фирмы — для юридического лица</li>

                <h3>Стоимость и условия аренды авто в Вене и в аэропорту.</h3>
                <p><a href="/index.php/uslugi.html"> Здесь указан перечень бесплатных и дополнительных услуг</a>, такие
                    как предоставление детских кресел, GPS навигации и т.п. Возможна аренда машин с водителем - 20 EUR в
                    час + стоимость авто.</p>
                <p>Доставка и возврат автомобиля в аэропорту Вены бесплатна.</p>
                <p>При заказе автомобиля на срок свыше трех дней <strong>доставка</strong> в любую точку
                    Вены <strong>бесплатна</strong>.</p>
                <p><strong>Внимание!</strong> Цены указаны за один день в евро. Указанные в таблице <strong>цены —
                    конечные, включая</strong>: <a href="/index.php/strahovanie.html"> полную страховку</a>(<strong>с
                    франшизой всего 300 евро!</strong>), <a href="/index.php/peresechenie-granic.html" target="_self">пересечение
                    границ</a>, оплату австрийских магистралей (виньетка), дополнительных водителей.</p>
                <AutoTable/>

            </div>
        );
    }
}

export default Home;
