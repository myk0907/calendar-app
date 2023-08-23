import React from 'react';
import '@toast-ui/calendar/dist/toastui-calendar.css'; // Toast UI Calendar의 스타일시트
import Calendar from '@toast-ui/react-calendar';

class CalendarComponent extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   this.calendarRef = React.createRef();
  // }

  // // 다음 주로 이동하는 버튼
  // handleClickNextButton = () => {
  //   const calendarInstance = this.calendarRef.current.getInstance();

  //   calendarInstance.next();
  // };

  render() {
    const calendars = [
      {
        id: 'cal1',
        name: 'My Calendar',
        bgColor: '#9e5fff',
        borderColor: '#9e5fff',
      },
    ];

    const initialEvents = [
      {
        id: '1',
        calendarId: 'cal1',
        title: 'Lunch',
        category: 'time',
        start: '2023-08-28T12:00:00',
        end: '2023-08-28T13:30:00',
      },
      {
        id: '2',
        calendarId: 'cal1',
        title: 'Coffee Break',
        category: 'time',
        start: '2023-08-28T15:00:00',
        end: '2023-08-28T15:30:00',
      },
    ];

    return (
      <div className="CalendarComponent" style={{width: "90%"}}>
        {/* 캘린더 헤더 */}
        <div style={{height: "150px"}}>
          {/* <button onClick={this.handleClickNextButton}>다음</button> */}
        </div>

        {/* 캘린더 바디 */}
        <Calendar
          height="900px"
          view="month"
          month={{
            dayNames: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
            visibleWeeksCount: 4,
          }}
          timezones={[
            {
              timezoneOffset: 540,
              displayLabel: 'GMT+09:00',
              tooltip: 'Seoul'
            }
          ]}
          calendars={calendars}
          // schedules={schedules}
          events={initialEvents}
          // onAfterRenderEvent={onAfterRenderEvent}
        />
      </div>
    );
  }
}

export default CalendarComponent;