class MeetingRoom {
  
  constructor(name) {
    this.name = name;
    this.available = true;
    this.currentMeeting = null;
  }

  enterRoom(meetingName, teamName) {
    this.currentMeeting = new Meeting(meetingName, teamName);
    this.available = false;
  }

  leaveRoom() {
    this.currentMeeting = null;
    this.available = true;
  }
}