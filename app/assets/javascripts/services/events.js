angular.module('docketApp')
.service('eventService', ['$http', function($http) {

  var that = this;
  
  that.searchEvents = [];
  that.calendarEvents = [];

  this.search = function(location, date) {
    that.searchDate = date;   // save for later.
    console.log('eventService.search called');
    return $http.get('/search.json', { params: { location: location, date: date }}).success(function(data) {
      that.searchEvents = data;
      console.log('eventService.search returning');
    });
  };

  var selected = {};
  
  this.setSelectedEvent = function(event) {
    selected = event;
  };

  this.getSelectedEvent = function() {
    return selected;
  };

  this.setFreeTimeDay = function(date) {
    that.freeTimeDay = date;
  };

  var combineDateTime = function(dateWithTime, newDate) {
    var result = moment(dateWithTime);
    newDate = moment(newDate);
    result.month(newDate.month());
    result.date(newDate.date());
    result.year(newDate.year());
    return result;
  };

  var createDate = function(strDate) {
    var result = null;
    if (strDate) {
      result = moment(strDate);
    }
    else {
      result = strDate;
    }
    console.log('createDate: ' + strDate + ' ==> ' + result);
    return result;
  };

  this.addEvent = function(event) {
    var calendarEvent = {};

    /*
    id  - String/Integer. Optional - Uniquely identifies the given event. Different instances of repeating events should all have the same id.
    title - String. Required. The text on an event's element
    allDay - true or false. Optional. 
             Whether an event occurs at a specific time-of-day. This property affects whether an event's time is shown. Also, in the agenda views, determines if it is displayed in the "all-day" section.
             If this value is not explicitly specified, allDayDefault will be used if it is defined.
             If all else fails, FullCalendar will try to guess. If either the start or end value has a "T" as part of the ISO8601 date string, allDay will become false. Otherwise, it will be true.
             Don't include quotes around your true/false. This value is a boolean, not a string!
    start - The date/time an event begins. Required. A Moment-ish input, like an ISO8601 string.
            Throughout the API this will become a real Moment object.
    end - The exclusive date/time an event ends. Optional. A Moment-ish input, like an ISO8601 string.
          Throughout the API this will become a real Moment object. 
          It is the moment immediately after the event has ended. For example, if the last full day of an event is Thursday, the exclusive end of the event will be 00:00:00 on Friday!
    url - String. Optional. A URL that will be visited when this event is clicked by the user. For more information on controlling this behavior, see the eventClick callback.
    className - String/Array. Optional.  A CSS class (or array of classes) that will be attached to this event's element.
    editable - true or false. Optional. Overrides the master editable option for this single event.
    startEditable - true or false. Optional. Overrides the master eventStartEditable option for this single event.
    durationEditable - true or false. Optional. Overrides the master eventDurationEditable option for this single event.
    rendering  - Allows alternate rendering of the event, like background events.  Can be empty, "background", or "inverse-background"
    overlap - true or false. Optional. Overrides the master eventOverlap option for this single event.
              If false, prevents this event from being dragged/resized over other events. Also prevents other events from being dragged/resized over this event.
    constraint - an event ID, "businessHours", object. Optional. Overrides the master eventConstraint option for this single event.
    source - Event Source Object. Automatically populated. A reference to the event source that this event came from.
    color - Sets an event's background and border color just like the calendar-wide eventColor option.
    backgroundColor - Sets an event's background color just like the calendar-wide eventBackgroundColor option.
    borderColor - Sets an event's border color just like the the calendar-wide eventBorderColor option.
    textColor - Sets an event's text color just like the calendar-wide eventTextColor option.
*/
    calendarEvent.title = event.title;
    calendarEvent.start = combineDateTime(event.start_time, that.searchDate); // event.start_time);
    calendarEvent.end   = createDate(event.end_time);
    
    console.log('adding calendarEvent: ' + JSON.stringify(calendarEvent));
    that.calendarEvents.push(calendarEvent);
  };

  var parseTime = function(day, timeStr) {
    var result = moment(day);
    var hourAndMinute = timeStr.split(":");
    result.hour(hourAndMinute[0]);
    result.minute(hourAndMinute[1]);
    result.second(0);
    return result;
  };

  this.addFreeTime = function(freeTimeDay, startTime, endTime) {
    
    var calendarEvent = {};
    calendarEvent.title = 'Free Time';
    calendarEvent.start = parseTime(freeTimeDay, startTime);
    calendarEvent.end   = parseTime(freeTimeDay, endTime);

    console.log('adding freeTime: ' + JSON.stringify(calendarEvent));
    that.calendarEvents.push(calendarEvent);
  };

}]);
