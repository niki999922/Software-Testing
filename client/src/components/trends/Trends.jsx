import * as React from "react";
import "./Trends.css"

function trendsCount(trends) {
    if (trends === null || trends === undefined) {
        return null;
    }
    return trends.length;
}

class Trends extends React.Component {
    constructor(props) {
        super(props);
        this.fetchTrends = this.fetchTrends.bind(this);
        this.trends = [];
    }

    fetchTrends() {
        fetch("http://localhost:8080/trends/trends")
            .then(res => res.json())
            .then(result => {
                if (result.body === "OK") {
                    this.trends = result.trends;
                } else {
                    alert(result.body)
                }
            })
            .catch(error => {
                console.log("ERROR");
                console.log(error.toString());
            })
    }

    render() {
        let user = localStorage.getItem('user');

        this.fetchTrends();

        const listDiv = this.trends.map((el) =>
            <div className="list-style">
                <p className="list-style-title">{el.name}</p>
                <p className="list-style-description">{el.description}</p>
            </div>
        )

        if (user !== undefined && user !== null) {
            return (
                <div className="trends trends-list__height">
                    <div className="home-p-k">Trends</div>
                    <div className="list-style-block">
                        {listDiv}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="trends trends-default__height">
                    <div className="home-p-k">You have to be login</div>
                </div>

            );
        }

    }
}

export default Trends;