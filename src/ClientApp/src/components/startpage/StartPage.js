import React, { Component } from 'react';

export class StartPage extends Component {

    constructor() {
        super();
        this.state = { studentName: '', studentCourseId: '', trainerName: '', trainerCourseName: '' };
        this.handleStudentNameChange = this.handleStudentNameChange.bind(this);
        this.handleStudentCourseId = this.handleStudentCourseId.bind(this);
        this.handleTrainerName = this.handleTrainerName.bind(this);
        this.handleTrainerCourseName = this.handleTrainerCourseName.bind(this);
        this.joinTraining = this.joinTraining.bind(this);
        this.createTraining = this.createTraining.bind(this);
    }

    displayName = StartPage.name

    render() {
        return (
            <div className='row spacer50'>
                <div className=" col-md-offset-3 col-md-6 text-center">
                    <h3>Join a running training session (Student)</h3>
                    <div className='input-group col-xs-12 spacer20'>
                        <span className='input-group-addon login-label'>Name: </span>
                        <input type='text' value={this.state.studentName}
                            onChange={this.handleStudentNameChange}
                            className='form-control'
                            id='studentName'
                            placeholder='Your name' />
                    </div>
                    <div className='input-group col-xs-12 spacer20'>
                        <span className='input-group-addon login-label'>Course Id: </span>
                        <input type='text' value={this.state.studentCourseId}
                            onChange={this.handleStudentCourseId}
                            className='form-control'
                            id='studentCourseId'
                            placeholder='Id of the course you want to participate' />
                    </div>
                    <button className="btn btn-primary spacer50" onClick={this.joinTraining}>Join training!</button>
                    <hr />
                    <h3 className="spacer50">OR</h3>
                    <h3>Start a new training session (Trainer)</h3>
                    <div className='input-group col-xs-12 spacer20'>
                        <span className='input-group-addon login-label'>Your name: </span>
                        <input type='text' value={this.state.trainerName}
                            onChange={this.handleTrainerName}
                            className='form-control'
                            id='trainerName'
                            placeholder='Your name' />
                    </div>
                    <div className='input-group col-xs-12 spacer20'>
                        <span className='input-group-addon login-label'>Course: </span>
                        <input type='text' value={this.state.trainerCourseName}
                            onChange={this.handleTrainerCourseName}
                            className='form-control'
                            id='trainerCourseName'
                            placeholder='Name of your course' />
                    </div>
                    <button className="btn btn-primary spacer50" onClick={this.createTraining}>Create training!</button>
                </div>
            </div>);
    }

    handleStudentNameChange(event) {
        this.setState({ studentName: event.target.value });
    }
    handleStudentCourseId(event) {
        this.setState({ studentCourseId: event.target.value });
    }
    handleTrainerName(event) {
        this.setState({ trainerName: event.target.value });
    }
    handleTrainerCourseName(event) {
        this.setState({ trainerCourseName: event.target.value });
    }
    joinTraining(event) {
        this.setState({ studentName: "Click" });
    }
    createTraining(event) {
        this.setState({ trainerName: "Click" });
    }

}
