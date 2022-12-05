import React from "react";
import {data} from "./data";

export const school = () =>{

    return(
        <>
        <HomePage />
        <div className="schoolDB">
        { data.map((data,key) => {

            return(

                <div key={key}>
                    <school
                    key={key}
                    id={data.id}
                    name={data.name}
                    since={data.since}
                    />
                </div>
            );
        })}
        </div>
        </>
    );

};

const  HomePage = () => {
    return(
        <header className="header">
            <h2>School Database</h2>
        </header>
    )
}

const school = ({id,name,since}) => {
    if(!name) return <div />;
    return(
        <table>
            <tbody>
                <tr>
                    <td>
                        <h5>{id}</h5>
                    </td>
                    <td>
                        <h5>{name}</h5>
                    </td>
                    <td>
                        <h5>{since}</h5>
                    </td>
                </tr>
            </tbody>
        </table>
    )
} 