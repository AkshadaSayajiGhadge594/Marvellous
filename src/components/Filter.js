
import React, { Component } from 'react'; 

export default class filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                Order
                <select>
                <option >Latest</option>
                <option value="Lowest">Lowest</option>
                <option value="Higest">Higest</option>
                </select>
                </div>
                <div className="filter-price">
                Filter
                <select>
                    <option value="25000">25000 to 30000</option>  
                    <option value="32000">30000 to 35000</option>
                    <option value="35000">35000 to 40000</option>
                    <option value="40000">40000 to 55000</option>       
                </select>
                </div>                 
            </div>
        )
    }
}