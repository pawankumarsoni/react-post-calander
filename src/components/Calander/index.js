import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import axios from 'axios';
import { RequestObject, Legends } from './config';


class CalanderTask extends React.Component {

    state = {
        response: []
    }

    componentDidMount() {
        // fetching the initial posts
        this.fetchData(RequestObject);
    }

    callApi = (token) => {
        let req_obj = Object.assign({}, RequestObject);
        if (token) {
            token = localStorage.getItem("continuationToken");
            if (token && token != null && token != "null") {
                req_obj.RequestObjects[0].Post.ContinuationToken = token;
                this.fetchData(req_obj);
            }
        }
    }

    fetchData = (RequestObject) => {
        axios.post(process.env.API_URL, RequestObject)
            .then(({ data }) => {
                const response = data.ResponseObjects && data.ResponseObjects[0] || {};
                let posts = response.Posts || [];
                for (let i = 0; i < posts.length; i++) {
                    let legends = []
                    for (let p = 0; p < posts[i].TypeOfDay.length; p++) {
                        let legend = Legends.find(e => e.name == posts[i].TypeOfDay[p]).value;
                        legends.push(legend);
                    }
                    posts[i].legends = legends;
                }
                localStorage.setItem("continuationToken", response.ContinuationToken)
                this.setState({ response: this.state.response.concat(response.Posts) })
            });
    }

    render() {
        let { response } = this.state;

        return (
            <>
                <InfiniteCalendar height={1450} overscanMonthCount={1} data={response} rowHeight={290} callApi={() => this.callApi(true)}
                />
            </>
        )
    }
}


export default CalanderTask;