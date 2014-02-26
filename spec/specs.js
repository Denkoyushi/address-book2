describe('Task', function() {
  describe('createList', function() {
    it('will create a list out of the inputting string', function() {
    var newList = Object.create(Task);
    newList.listName = "Groceries";
    newList.createList().should.equal('Groceries')

    });
  });

  describe('addTask', function() {
    it('will add the inputted string as a task to the list', function() {
      var newTask = Object.create(Task);
      newTask.taskMessage = "apples";
      newTask.addTask().should.equal('apples');
    });
  });

  describe('creatListId', function() {
    it('will return the list name but without spaces', function() {
      var newList = Object.create(Task);
      newList.listName = "Grocery Shopping";
      newList.creatListId().should.equal('GroceryShopping');
    });
  });
});
