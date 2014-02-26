var Task = {
  createList: function() {
    return this.listName;
  },
  addTask: function() {
    return this.taskMessage;
  },
  createListId: function() {
    return this.listName.replace(/\s+/g, '');
  }
}




$(document).ready(function() {

  $('#displayLists').on('click','li ul li', function() {
    

    
    if ($(this).hasClass('completed')) {
      $(this).prependTo($(this).parent());
      $(this).removeClass('completed');
    } else {
      $(this).appendTo($(this).parent());
      $(this).addClass('completed');
    }
    

  })


  $('#newListBtn').click(function() {
    $('#newTaskContainer').hide();
    $('#newListContainer').show();
  });

  $('#newListForm').submit(function(event) {
    event.preventDefault();
    var myNewList = $(".listInput").val();

    if (myNewList !== '') {
      var newList = Object.create(Task);
      var listArray = [];

      newList.listName = myNewList;
      listArray.push(newList);
      
      $('#newListContainer').hide();

      $('#displayLists').append('<li>' + newList.createList() + '<ul id="' + newList.createListId() + '"></ul></li>');
      $('#listSelect').append('<option value=' + newList.createListId() + '>' + newList.createListId() + '</option>')

      this.reset();
    } else {
      alert('Give your list a name')
    }
  })

  
    $('#newTaskBtn').click(function() {
      if ($('#displayLists li').length > 0) {
        $('#newListContainer').hide();
        $('#newTaskContainer').show();
      } else {
        alert('Create a new list first')
      }
    });

    $('#addMoreTasks').click(function() {
      $(this).prev().clone().val('').insertBefore($(this));
    });

    $("#newTaskForm").submit(function(event) {
      event.preventDefault();
      
      var mySelectVal = $('#listSelect').val();
      
      var newTask = Object.create(Task)
      newTask.taskArray = [];

      $('.taskMessageInput').each(function() {
        var myNewTask = $(this).val();
        newTask.taskMessage = myNewTask;
        newTask.taskArray.push(newTask.addTask());
      });

      newTask.taskArray.forEach(function(curTask) {
        $('#' + mySelectVal).append('<li>' + curTask +'</li>');
      });

      this.reset();
      $('#newTaskContainer').hide();

      $('.taskMessageInput').each(function(index) {
        if(index !== 0) {
          $(this).remove();
        }
      });


    });

  

});

// https://github.com/hoghug/ToDoList.git
