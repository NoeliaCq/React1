import React from 'react';

const Footer = (props) => {
    //const fecha = new Date().getFullYear()
    return ( 
        <h2>Año {props.anio}{/* {fecha} */} Copyright©</h2>
     );
}
 
export default Footer;

//pueden pasarse los props así también como parámetro.
//si son más de uno se pasan entre comas
{/*

const Footer = ({anio}) => {
    return (
        <h2>Año{anio}</h2>
    );
} 

*/}