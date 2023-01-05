import React from "react";
import { EnergyData } from "./EnergyData"; //importing entryItem

export function EnergyList(props) {

    //functional component used to mp and get data from Energy data component 

    //will use built in map to display entrys
    return props.eList.map((entry) => {
        //returning entry by id
        return <EnergyData entry={entry} key={entry._id}> </EnergyData>
    }
    );
}