import React, { ReactElement } from 'react';
import { CalendarModel } from '../model/CalendarModel';
import '../stylesheets/CalendarComponent.css';
import {FullCalendar} from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import '@fullcalendar/core/main.min.css'
import '@fullcalendar/daygrid/main.min.css'
import '@fullcalendar/timegrid/main.min.css'
import CalendarEventModel from '../model/CalendarEventModel';
import GoogleCalendarService from '../services/GoogleCalendarService';

interface CalendarComponentProps {
    key?: number;
    model: CalendarModel;
    className?: string;
    style?: any
}

interface CalendarComponentState {
    events: CalendarEventModel[]
}

export class CalendarComponent extends React.Component<CalendarComponentProps, CalendarComponentState> {

    cachedStart: Date = new Date();
    cachedEnd: Date = new Date();

    public constructor(props: CalendarComponentProps){
        super(props);
        this.state = {
            events: []
        }        
        this.SetDates = this.SetDates.bind(this);
    }

    private SetDates(start: Date, end: Date){
        if(start.toISOString() == this.cachedStart.toISOString() && end.toISOString() == this.cachedEnd.toISOString()) return;
        this.cachedStart = start;
        this.cachedEnd = end;

        GoogleCalendarService.getInstance()
        .getEvents(this.props.model.calendarId, this.cachedStart, this.cachedEnd)
        .then((evts: CalendarEventModel[]) => {
            this.setState({
                events: evts
            });
        })
        .catch(ex => {
            console.log(ex);
        })
    }

    public render(): ReactElement {
        const options = {
            plugins: [dayGridPlugin, timeGridPlugin],
            defaultView: 'dayGridMonth',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: false,
            datesRender: (info: any) => {
                this.SetDates(info.view.activeStart as Date, info.view.activeEnd as Date)
            }
        }

        return <div style={{backgroundColor:"white"}}>
            <FullCalendar events={this.state.events} options={options}/>
        </div>
    }
}