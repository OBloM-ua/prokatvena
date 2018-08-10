import React, {Component} from 'react';
import 'rc-datepicker/lib/style.css';
import 'rc-time-picker/assets/index.css';
import {Button, Checkbox, ControlLabel, FormControl, FormGroup, HelpBlock} from "react-bootstrap";
import {DatePickerInput } from 'rc-datepicker';
import moment from 'moment';
import TimePicker from 'rc-time-picker';


class CarReservation extends Component {


    render() {
        function FieldGroup({id, label, help, ...props}) {
            return (
                <FormGroup controlId={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl {...props} />
                    {help && <HelpBlock>{help}</HelpBlock>}
                </FormGroup>
            );
        }


        return (
            <div className="CarReservation">
                <h1>Резервирование автомобилей</h1>


                <form>
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Имя (латиницей) "
                        placeholder="Vasiliy"
                    />
                    <FieldGroup
                        id="formControlsText"
                        type="text"
                        label="Фамилия (латиницей) "
                        placeholder="Pupkin"
                    />


                    <FieldGroup
                        id="formControlsEmail"
                        type="email"
                        label="Email address"
                        placeholder="Enter email"
                    />

                    <FieldGroup
                        id="formControlsText"
                        type="number"
                        label="Возраст водителя"
                    />



                    <Checkbox checked readOnly>
                        GPS навигатор
                    </Checkbox>
                    <DatePickerInput
                        className='my-custom-datepicker-component'
                    />
                    <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} />
                    <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} />

                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Автомобиль</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <optgroup label="Автомобили эконом-класса">
                                <option value="Skoda Fabia (хэтчбэк 5дв., бензин, механика)">Skoda Fabia (хэтчбэк
                                    5дв., бензин, механика)
                                </option>
                                <option value="Skoda Fabia (универсал, бензин, механика)">Skoda Fabia (универсал,
                                    бензин, механика)
                                </option>
                                <option value="Volkswagen Polo (хэтчбэк 5дв., дизель, механика)">Volkswagen Polo
                                    (хэтчбэк 5дв., дизель, механика)
                                </option>
                                <option value="Skoda Fabia (универсал, дизель, механика)">Skoda Fabia (универсал,
                                    дизель, механика)
                                </option>
                                <option value="Hyundai i20 (автомат, хэтчбэк 5дв., бензин)">Hyundai i20 (автомат,
                                    хэтчбэк 5дв., бензин)
                                </option>
                            </optgroup>
                            <optgroup label="Автомобили 'бюджетного' компакт-класса">
                                <option value="Citroen C-Elysee (седан, дизель, механика)">Citroen C-Elysee (седан,
                                    дизель, механика)
                                </option>
                                <option value="Citroen C-Elysee (автомат, седан, бензин)">Citroen C-Elysee (автомат,
                                    седан, бензин)
                                </option>
                            </optgroup>
                            <optgroup label="Автомобили компакт-класса">
                                <option value="Ford Focus (хэтчбэк 5дв., бензин, механика)">Ford Focus (хэтчбэк
                                    5дв., бензин, механика)
                                </option>
                                <option value="Hyundai i30 (универсал, бензин, механика)">Hyundai i30 (универсал,
                                    бензин, механика)
                                </option>
                                <option value="Volkswagen Golf (хэтчбэк 5дв., дизель, механика)">Volkswagen Golf
                                    (хэтчбэк 5дв., дизель, механика)
                                </option>
                                <option value="Ford Focus (универсал, дизель, механика)">Ford Focus (универсал,
                                    дизель, механика)
                                </option>
                                <option value="Volkswagen Golf (автомат, хэтчбэк 5дв., бензин)">Volkswagen Golf
                                    (автомат, хэтчбэк 5дв., бензин)
                                </option>
                                <option value="Hyundai i30 (автомат, универсал, бензин)">Hyundai i30 (автомат,
                                    универсал, бензин)
                                </option>
                            </optgroup>
                            <optgroup label="Автомобили среднего класса     (прокрутка)  =>">
                                <option value="Skoda Octavia (универсал, дизель, механика)">Skoda Octavia
                                    (универсал, дизель, механика)
                                </option>
                                <option value="Skoda Octavia (автомат, универсал, дизель)">Skoda Octavia (автомат,
                                    универсал, дизель)
                                </option>
                            </optgroup>
                            <optgroup label="Микроавтобусы">
                                <option value="Opel Vivaro (8+1, дизель, механика)">Opel Vivaro (8+1, дизель,
                                    механика)
                                </option>
                                <option value="Chrysler Voyager (автомат, 6+1, дизель)">Chrysler Voyager (автомат,
                                    6+1, дизель)
                                </option>
                                <option value="Renault Trafic (автомат, 7+1, дизель)">Renault Trafic (автомат, 7+1,
                                    дизель)
                                </option>
                            </optgroup>
                        </FormControl>
                    </FormGroup>


                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Комментарий</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Я хотел бы"/>
                    </FormGroup>


                    <Button bsStyle="primary" bsSize="large">
                        Зарезервировать автомобиль
                    </Button>

                    <FormGroup>
                        <ControlLabel>
                            <br/>Если по каким-либо причинам отправка формы резервирования не удалась, свяжитесь с нами
                            по e-mail: info@prokatvena.ru,<br/>
                            укажите выбранный автомобиль и сроки аренды - мы зарезервируем для Вас автомобиль по e-mail.</ControlLabel>
                        <FormControl.Static>info@prokatvena.ru</FormControl.Static>
                    </FormGroup>


                </form>

            </div>
        );
    }
}

export default CarReservation;
