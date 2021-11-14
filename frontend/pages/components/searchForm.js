import React, { Component } from 'react'
import style from '../../styles/ClassInfo.module.css'

function testElements(stringJSON, string2) {
    let json = JSON.parse(stringJSON);
    let json2 = JSON.parse(string2)
    console.log("createElements Called")
    // console.log(json);
    // console.log(json2);
    

        let a1 = Number(json["grades"]['A+']) || 0;
        let a2 = Number(json["grades"]['A']) || 0;
        let a3 = Number(json["grades"]['A-']) || 0;

        let b1 = Number(json["grades"]['B+']) || 0;
        let b2 = Number(json["grades"]['B']) || 0;
        let b3 = Number(json["grades"]['B-']) || 0;

        let c1 = Number(json["grades"]['C+']) || 0;
        let c2 = Number(json["grades"]['C']) || 0;
        let c3 = Number(json["grades"]['C-']) || 0;

        let d1 = Number(json["grades"]['D+']) || 0;
        let d2 = Number(json["grades"]['D']) || 0;
        let d3 = Number(json["grades"]['D-']) || 0;


        let elements = (
            // <div className={style.courseCard}>
            //     <ul>
            //         <li>Course: {json["subj"]} {json["num"]}</li>
            //         <li>Instructor: {json["prof"]}</li>
            //         <li>A: {a1 + a2 + a3}</li>
            //         <li>B: {b1 + b2 + b3}</li>
            //         <li>C: {c1 + c2 + c3}</li>
            //         <li>D: {d1 + d2 + d3}</li>
            //         <li>F: {Number(json["grades"]['F']) || 0}</li>
            //         <li>Rating: {json2["rating"]}</li>
            //         <li># of Ratings: {json2["numberOfRatings"]}</li>
            //         <li>Difficulty: {json2["difficulty"]}</li>
            //         <li>% Would Take Again: {json2["wouldTakeAgain"]}</li>
            //     </ul>
            // </div>

            <div class="container-fluid">

                <div class="row organizationRow">

                    <div class="col-sm-8">

                        <h3>Course: {json["subj"]} {json["num"]}</h3>
                        <b>Instructor: {json["prof"]}</b>

                    </div>
                    <div class="col-sm-2">

                        <b>A: {a1 + a2 + a3}</b><br/>
                        <b>B: {b1 + b2 + b3}</b><br/>
                        <b>C: {c1 + c2 + c3}</b><br/>
                        <b>D: {d1 + d2 + d3}</b><br/>
                        <b>F: {Number(json["grades"]['F']) || 0}</b><br/>

                    </div>

                    <div class="col-sm-2">

                        <b>Rating: {json2["rating"]}</b><br/>
                        <b># of Ratings: {json2["numberOfRatings"]}</b><br/>
                        <b>Difficulty: {json2["difficulty"]}</b><br/>
                        <b>% Would Take Again: {json2["wouldTakeAgain"]}</b><br/>

                    </div>

                </div>

            </div>


        )
    console.log('Returning Elements = ' + elements);
    return elements;
}

export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { semester: 'fall', year: '2017', subject: '', course: '', professor: '', best: false, itemCount: 0, returnedJSON: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.elements = [];
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.elements = [];
        this.forceUpdate();


        if (this.state.subject == '' && this.state.course == '' && this.state.professor == '') {
            fetch('http://localhost:3001/grades/' + this.state.semester + '/' + this.state.year)
                .then(res => res.json())
                .then(json => {
                    this.setState({ returnedJSON: JSON.stringify(json) });
                    for (var i = 0; i < json.length; i++) {

                        fetch('http://localhost:3001/rating/' + json[i]["prof"])
                        .then(res2 => res2.json())
                        .then(json2 => {
                            try {
                                this.elements.push(testElements(JSON.stringify(json[i]), JSON.stringify(json2[0])));
                                console.log('Elements = ' + this.elements)
                            } catch (error) {
                                
                            }
                            this.forceUpdate();
                        })
                    }
                    this.forceUpdate();
                })

        }
        else if (this.state.professor != '' && this.state.subject == '' && this.state.course == '') {
            fetch('http://localhost:3001/grades/' + this.state.semester + '/' + this.state.year + '/' + this.state.professor)
                .then(res => res.json())
                .then(json => {
                    this.setState({ returnedJSON: JSON.stringify(json) });
                    for (var i = 0; i < json.length; i++) {

                        fetch('http://localhost:3001/rating/' + json[i]["prof"])
                        .then(res2 => res2.json())
                        .then(json2 => {
                            try {
                                this.elements.push(testElements(JSON.stringify(json[i]), JSON.stringify(json2[0])));
                                console.log('Elements = ' + this.elements)
                            } catch (error) {
                                
                            }
                            this.forceUpdate();
                        })
                    }
                    this.forceUpdate();
                })
        }
        else if (this.state.professor == '' && this.state.subject != '' && this.state.course != '' && !this.state.best) {
            fetch('http://localhost:3001/grades/' + this.state.semester + '/' + this.state.year + '/' + this.state.subject + '/' + this.state.course)
                .then(res => res.json())
                .then(json => {
                    this.setState({ returnedJSON: JSON.stringify(json) });
                    for (var i = 0; i < json.length; i++) {

                        fetch('http://localhost:3001/rating/' + json[i]["prof"])
                        .then(res2 => res2.json())
                        .then(json2 => {
                            try {
                                this.elements.push(testElements(JSON.stringify(json[i]), JSON.stringify(json2[0])));
                                console.log('Elements = ' + this.elements)
                            } catch (error) {
                                
                            }
                            this.forceUpdate();
                        })
                    }
                    this.forceUpdate();
                })

        }
        else if (this.state.professor == '' && this.state.subject != '' && this.state.course != '' && this.state.best) {
            fetch('http://localhost:3001/grades/best/' + this.state.semester + '/' + this.state.year + '/' + this.state.subject + '/' + this.state.course)
                .then(res => res.json())
                .then(json => {
                    this.setState({ returnedJSON: JSON.stringify(json) });
                    for (var i = 0; i < json.length; i++) {

                        fetch('http://localhost:3001/rating/' + json[i]["prof"])
                        .then(res2 => res2.json())
                        .then(json2 => {
                            try {
                                this.elements.push(testElements(JSON.stringify(json[i]), JSON.stringify(json2[0])));
                                console.log('Elements = ' + this.elements)
                            } catch (error) {
                                
                            }
                            this.forceUpdate();
                        })
                    }
                    this.forceUpdate();
                })

        }
        else {
            alert("Invalid search, please ensure all items are lowercase!")
        }
    }

    render() {
        return (
            <div className="search-form">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span class="inputField">Semester: </span>
                        <select name='semester' value={this.state.value} onChange={this.handleChange} required>
                            <option value="fall">Fall</option>
                            <option value="spring">Spring</option>
                        </select>
                    </label>

                    <label>
                        <span class="inputField">Year: </span>
                        <select name='year' value={this.state.value} onChange={this.handleChange} required>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                        </select>
                    </label><br/><br/>

                    <label>
                    <span class="inputField">Subject: </span>
                        <input type="text" name='subject' value={this.state.subject} onChange={this.handleChange} />
                    </label>

                    <label>
                    <span class="inputField">Course: </span>
                        <input type="text" name='course' value={this.state.course} onChange={this.handleChange} />
                    </label><br/><br/>

                    <label>
                    <span class="inputField">Professor: </span>
                        <input type="text" name='professor' value={this.state.professor} onChange={this.handleChange} />
                    </label>

                    <label>
                        <span class="inputField">Best: </span>
                        <input type="checkbox" name="best" value={this.state.best} onChange={this.handleChange} />
                    </label><br/><br/>

                    <input type="submit" value="Search" />
                </form>
                <div className='returnedElements'>
                    {this.elements}
                </div>

            </div>
        )
    }

}