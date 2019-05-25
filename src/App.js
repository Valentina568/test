import React from 'react';
import "./test.css"
import Class from "./class/Class";

const vasa = ["vasa", "petyia", "kola", "dasha", 12];
const petia = {id: 555, junaary: "январь", age: 11111};
const ivan = [{id: 100, name: "vasilii", age: 20, time: 18056561315464},
    {
        id: 101,
        name: "vasilii1",
        age: 23
    },
    {
        id: 102,
        name: "vasilii2",
        age: 27
    }];


function App() {
    return (
        <div>
        <Class petia={petia}/>


            <table className={"position"}>
                <tr>
                    <th>текст заголовка1</th>
                    <th>текст заголовка2</th>
                </tr>
                <tr>
                    <td className={"color-td"}>данные1</td>
                    <td className={"color-td"}>данные2</td>
                </tr>
            </table>
            <table className={"position2"}>
                <tr>
                    <th className={"col-th"}>текст заголовка1</th>
                    <th className={"col-th"}>текст заголовка2</th>
                </tr>
                <tr>
                    <td className={"col-td"}>данные1</td>
                    <td className={"col-td"}>данные2</td>
                </tr>
            </table>
            <div/><p/>
            <div className={"opacity"}>
                <p className={"misha"}>Миша какаха.</p>
                <p className={"da"}>!!!!</p>
            </div>

            <div>{petia.junaary}</div>
            {
                ivan
                    .map(chelovek =>
                    chelovek.age === 23 &&
                    <div key={chelovek.id}>
                        <div><h1>{chelovek.id}</h1></div>
                        <div><h1>{chelovek.age + ' это возраст человека'}</h1></div>
                        <div><h1>{chelovek.name + ' рррррррррррр'}</h1></div>
                        {console.log(chelovek.name.includes('1'))}
                    </div>
                )
            }
        </div>
    );
}


// if (чтото = чемуто) {
//     sdcds
//     dscsd
//     dsvsdvs
//     svddsv
// }
// if (чтото = другому) {
//     делаем другое
// }
// else {
//     asdsad
// asdasd
// }
//
// чтото === чемуто ? делаем код : делаем другой;



export default App;
