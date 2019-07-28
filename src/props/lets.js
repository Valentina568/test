import React from "react";
import products from '../pictures/product'
import '../components/Market/marketPage.css'

export let marketProduct = [
    {id: 1, label: 'Пиджак', discription: 'Пиджак с изящным бантом', img: <img  className='img' src={products.firstProduct}/>, price: 3500, currency: 'руб',  productCounter: 0,},
    {id: 2, label: 'Узкие брюки', discription: 'Узкие брюки отлично подчеркнут ваши ноги', img: <img  className='img' alt={'Узкие брюки отлично подчеркнут ваши ноги'} src={products.secondProduct}/>, price: 3000, currency: 'руб',  productCounter: 0},
    {id: 3, label: 'Синее платье', discription: 'Платье с белой оборочной вставкой', img: <img  className='img' src={products.thirdProduct}/>, price: 2500, currency: 'руб' , productCounter: 0,},
    {id: 4, label: 'Платье без бретелек', discription: 'Обтягивающее платье без бретелек', img: <img  className='img' src={products.fourthProduct}/>, price: 3000, currency: 'руб' , productCounter: 0,},
    {id: 5, label: 'Блузка', discription: 'Атласная блузка с принтом', img: <img  className='img' src={products.fifthProduct}/>, price: 2500, currency: 'руб' , productCounter: 0,},
    {id: 6, label: 'Костюм', discription: 'Костюм из мятных брюк и желтого пиджака', img: <img  className='img' src={products.sixthProduct}/>, price: 5500, currency: 'руб' , productCounter: 0,},
    {id: 7, label: 'Оранжевый костюм', discription: 'Яркий костюм из пиджака и юбки выше колена', img: <img  className='img' src={products.seventhProduct}/>, price: 5000, currency: 'руб',  productCounter: 0,},
    {id: 8, label: 'Платье', discription: 'Платье без рукавов, с широкими синими полосами', img: <img  className='img' src={products.eighthProduct}/>, price: 2500, currency: 'руб' , productCounter: 0,},
    {id: 9, label: 'Платье с поясом', discription: 'Легкое платье с кожаным пояском', img: <img  className='img' src={products.ninthProduct}/>, price: 2800, currency: 'руб' , productCounter: 0,},
    {id: 10, label: 'Платье с рукавами', discription: 'Зеленое платье с ракавами 3/4 с кожаным поясом', img: <img  className='img' src={products.tenthProduct}/>, price: 3000, currency: 'руб', productCounter: 0,},
];