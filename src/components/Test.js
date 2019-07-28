import React, {Component} from 'react';
import * as _ from "lodash";

// 1111
// //1 создать в стейте пустой масив
// 2 создать кнопку
// 3 на клик кнопке вызывается функция которая добавляет в масив васю
// 4 когда вась в масиве 3 штуки, пусть добавляет пети
// 2222
// 1 создать тег П,
//     2 добавить в него фразу - в масиве уже 6 элементов!.
// 3 сделать проверку, что в масиве уже есть 6 элементов, фраза покажется
class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            massive: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            evenNumber: []
        }
    }

    plusEvenNumber = () => {
        let massive2 = _.cloneDeep(this.state.massive);
        for (let i = 0; i < massive2.length; i++) {
            if (massive2[i] % 2 === 0) {
                this.state.evenNumber.push(massive2[i]);
            }
        }

        let evenNumber2 = _.cloneDeep(this.state.evenNumber);
        this.setState({evenNumber: evenNumber2})

    };

    func() {
        console.log(123)
    }


    render() {
        //создать в стейте пустой масив, назови его как угодно.
        // на нажатие кнопки в функции, из massive надо достать все чётные числа и добавить в тот масив, который создала. и вывести новый масив

        return (
            <div>
                <button onClick={this.func}>123</button>

                <div>
                    {this.state.massive.map(name =>
                        <p>{name}</p>)}
                    {this.state.evenNumber.map(number =>
                        <p>{number}</p>)}
                    <button onClick={this.plusEvenNumber}>Жми</button>
                </div>
            </div>
        );
    }
}

export default Test;