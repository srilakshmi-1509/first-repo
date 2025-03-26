import React from "react";

const

function MyCustomComponent({company, name}){
    // const name = props.name
    // const company = props.company

    const myStyle = {color:'red',fontSize:'25px'} ;
    return(
        <div>
            <h1 style={myStyle} className="my-custom-class">This Is Custom Component. My name is {name} And Company is {company}</h1>
            <div>
                <h1>List Of Items</h1>
                <ul>
                   <li>P1, SAP</li>
                   <li>P2, WEB DEVELOPER</li>
                   <li>P3, PYTHON PROGRAMMER</li>
                </ul>
                <table border='1'>
                    <tr>
                        <th>Persons</th>
                        <th>Domains</th>
                    </tr>
                    <tr>
                        <td>P1</td>
                        <td>SAP</td>
                    </tr>
                    <tr>
                        <td>P2</td>
                        <td>WEB DEVELOPER</td>
                    </tr>
                    <tr>
                        <td>P3</td>
                        <td>PYTHON PROGRAMMER</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default MyCustomComponent;