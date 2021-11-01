describe('Meeting', () => {
  let meeting = new Meeting("meetingName", "teamName");
  describe('constructor', () => {
    it('should have two properties of name and team', () => {
      expect(meeting.name).toEqual("meetingName");
      expect(meeting.team).toEqual("teamName");
    })
  })
})