import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import API from "../../utils/db";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class SessionsEventsCalendar extends Component {
  state = {
    events: [],
    selectedEvent: null
  };

  componentWillMount() {
    API.getAllSessions(data => {
      const events = [];
      data.forEach(session => {
        events.push({
          name: session.name,
          start: new Date(moment(`${session.date} 10:00`)),
          end: new Date(moment(`${session.date} 14:30`)),
          title: session.name
        });
      });
      this.setState({ events });
    });
  }

  render() {
    if (this.state.selectedEvent) {
      return (
        <Redirect push to={`sessions/${this.state.selectedEvent.name}`} />
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

export default SessionsEventsCalendar;
