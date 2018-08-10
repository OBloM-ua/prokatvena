import React, {Component} from 'react';
import {Col, Table, Thumbnail} from "react-bootstrap";
import fabia3 from '../img/fabia3.jpg';
import fabiacombi3 from '../img/fabiacombi3.png';

class AutoTable extends Component {
    render() {
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Фото</th>
                    <th>Эконом-класс. Залог-франшиза 300 евро.</th>
                    <th>Тип кузова</th>
                    <th>Вид т/с</th>
                    <th>Тип КПП</th>
                    <th>2 дня</th>
                    <th>3-5 дней</th>
                    <th>6 дней</th>
                    <th>7-12 дней</th>
                    <th>13 дней</th>
                    <th>14-19 дней</th>
                    <th>20 дней</th>
                    <th>21-26 дней</th>
                    <th>За месяц</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <img src={fabia3}/>
                    <td> Skoda Fabia</td>
                    <td>х/б 5</td>
                    <td>бенз.</td>
                    <td>мех.</td>
                    <td>43</td>
                    <td>36</td>
                    <td>33</td>
                    <td>30</td>
                    <td>29</td>
                    <td>28</td>
                    <td>28</td>
                    <td>27</td>
                    <td>780</td>
                </tr>
                <tr>
                    <img src={fabiacombi3}/>
                    <td>Skoda Fabia</td>
                    <td>унив.</td>
                    <td>бенз.</td>
                    <td>мех.</td>
                    <td>47</td>
                    <td>39</td>
                    <td>36</td>
                    <td>33</td>
                    <td>32</td>
                    <td>31</td>
                    <td>30</td>
                    <td>29</td>
                    <td>840</td>
                </tr>
                <tr>
                    <img src={fabia3}/>
                    <td>Volkswagen Polo</td>
                    <td>х/б 5</td>
                    <td>ДТ</td>
                    <td>мех.</td>
                    <td>47</td>
                    <td>40</td>
                    <td>37</td>
                    <td>34</td>
                    <td>32</td>
                    <td>31</td>
                    <td>30</td>
                    <td>29</td>
                    <td>840</td>
                </tr>
                </tbody>


            </Table>
        );
    }
}

export default AutoTable;
