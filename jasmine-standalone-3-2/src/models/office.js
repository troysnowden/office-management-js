class Office {
  
  constructor() {
    this.meetingRooms = [];
  }

  addMeetingRoom(roomName) {
    this.meetingRooms.push(new MeetingRoom(roomName));
  }

  availableMeetingRooms() {
    return this.meetingRooms.filter(room => room.available);
  }
}