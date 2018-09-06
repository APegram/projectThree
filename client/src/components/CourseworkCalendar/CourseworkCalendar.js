import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import API from "../../utils/db";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class CourseworkCalendar extends Component {
  state = {
    events: [],
    selectedEvent: null
  };

  componentWillMount() {
    API.getAllCoursework(data => {
      const events = [];
      data.forEach(assignment => {
        events.push({
          name: assignment.name,
          start: new Date(moment(`${assignment.dueDate} 23:59`)),
          end: new Date(moment(`${assignment.dueDate} 23:59`)),
          title: assignment.name
        });
      });
      this.setState({ events });
    });
  }

  render() {
    if (this.state.selectedEvent) {
      return (
        <Redirect push to={`coursework/${this.state.selectedEvent.name}`} />
      );
    }
    return (
      <div>
        <Calendar
          selectable
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "80vh" }}
          onSelectEvent={event => this.setState({ selectedEvent: event })}
        />
      </div>
    );
  }
}

export default CourseworkCalendar;
