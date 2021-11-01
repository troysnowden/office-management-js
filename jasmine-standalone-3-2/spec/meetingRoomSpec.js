describe('MeetingRoom', () => {
  
  beforeEach(function() {
    meetingRoom = new MeetingRoom("meetingRoomName");
  })

  describe('constructor', () => {
    it('should set properties of name and available and currentMeeting', () => {
      expect(meetingRoom.name).toEqual("meetingRoomName");
      expect(meetingRoom.available).toBeTruthy();
      expect(meetingRoom.currentMeeting).toEqual(null);
    })
  })

  describe('enterRoom', () => {
    it('should set available to false and currentMeeting property to a new meeting object if room is available', () => {
      meetingRoom.enterRoom("meetingName", "teamName");
      expect(meetingRoom.available).toBeFalsy();
      expect(meetingRoom.currentMeeting).toBeInstanceOf(Meeting);
      expect(meetingRoom.currentMeeting.name).toEqual("meetingName");
      expect(meetingRoom.currentMeeting.team).toEqual("teamName");
    })
  })

  // leave room function that sets available to true and sets current meeting property to null
  describe('leaveRoom', () => {
    it('should set available to true and currentMeeting property to nil if meeting is in room', () => {
      meetingRoom.enterRoom("meetingName", "teamName");
      meetingRoom.leaveRoom();
      expect(meetingRoom.available).toBeTruthy();
      expect(meetingRoom.currentMeeting).toEqual(null);
    })
  })
})