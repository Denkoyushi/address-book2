var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  update: function(newFirst, newLast, newAddress) {
    this.firstName = newFirst;
    this.lastName = newLast;
    this.address = newAddress;
  }
}

$(document).ready(function() {

  var clickedToEdit;

  var showEditForm = function(myObj) {
    $('#show-contact').show();
    $('#show-contact h2').show();
    $('#show-contact h2').text(myObj.fullName());
    $('.first-name').val(myObj.firstName);
    $('.last-name').val(myObj.lastName);
    $('.address').val(myObj.address);
  }

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $('input#new-first-name').val();
    var inputtedLastName = $('input#new-last-name').val();
    var inputtedAddress = $('input#new-address').val();
    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;
    newContact.address = inputtedAddress;

    $('ul#contacts').append('<li><span class="contact">' + newContact.fullName() + '</span></li>')

    $('.contact').last().click(function() {
      showEditForm(newContact);
      clickedToEdit = $(this);
    });

    this.reset();

    $(".edit-btn").click(function() {

        var newContact = Object.create(Contact);
        newContact.firstName =  $('.first-name').val();
        newContact.lastName = $('.last-name').val();
        newContact.address = $('.address').val();

        newContact.update($('.first-name').val(), $('.last-name').val(), $('.address').val());
        
        clickedToEdit.html(newContact.fullName());
        clickedToEdit.click(function() {
          showEditForm(newContact);
        });
      });
  });

})
