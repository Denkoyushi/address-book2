describe('Contact', function() {
  describe('fullName', function() {
      it('will ouput the first and last name with a space in between', function() {
        var testContact = Object.create(Contact);
        testContact.firstName = 'Steve';
        testContact.lastName = 'Irwin'
        testContact.fullName().should.equal('Steve Irwin');
      });

  });

});
