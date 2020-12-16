import React from 'react';

export const RequestObject = 
{
    "RequestObjects": [
        {
            "Post": {
                "OperationType": "Read",                
                "Privacy": {
                    "SearchValues": ["Public"],
                    "Return": true
                },      
                "UserId": {
                    "SearchValues": ["assign"],
                    "Return": false
                },               
                "id": {
                    "Return": true
                },
                
                "IsCalendarEntry": {
                    "SearchValues": [true],
                    "Return": true
                },
                "Images": { 
                    "Return": true
                },								
								 "Text": {
                    "Return": true 
                },
								"Rating": {
                    "Return": true                    
                },
                "TypeOfDay":{
                     "Return": true
                },    
				"MaxItemCount": "5",          
                "CalendarDateTime": { 
                    "Return": true,
                    "Sort": "Descending"
                },                                
                "ContinuationToken": null                
            }
        }
    ]    
}

export const Legends = [{name: "Hair Cut", value: React.createElement("div", {className: "legends-style", style: {background: "orange"}}, "Cu")}, {name: "Protein Treatment", value: React.createElement("div", {className: "legends-style", style: {background: "black"}}, "Pr")}, {name: "Hair Color", value: React.createElement("div", {className: "legends-style", style: {background: "yellow"}}, "HC")}, { name: "Deep Conditioning", value: React.createElement("div", {className: "legends-style", style: {background: "green"}}, "DC")}, {name: "Clarifying", value: React.createElement("div", {className: "legends-style", style: {background: "blue"}}, "C")}, ]