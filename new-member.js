const Seeder = require('./managers/Seeder')
const JsonFileManager = require('./managers/JsonFileManager')
const ViewManager = require('./managers/ViewManager')
const Member = require('./models/Member')
const Validator = require('./managers/Validator')

var fs = require('fs')

$(function(){

  const seeder = new Seeder()
  if (true) {
    seeder.seed()
  }
  const vm = new ViewManager()
  const jfm = new JsonFileManager()
  const validator = new Validator(vm)


  // save button
  $('#btn-save').click(function(){

    // TODO input all input val(
    var member = new Member(
      $('#member-number').val(),
      $('#member-type').val(),
      $('#member-join-date').val()
    );


    if (validator.validate(member)) {

      jfm.saveMember(member)

      vm.clearInput()
      console.log('saved')

    } else {

      console.log('error')
      let error_message_html = `
      <div class="ui negative message error-message">
        <i class="close icon"></i>
        <div class="header">
          There is errors in the form
        </div>
        <p>Validations did not passed, please check your input and submit again</p>
      </div>
      `
      $('#message-box').html(error_message_html)
    }
  })

  // clear button
  $('#btn-clear').click(function(){
    vm.clearInput()
  })
})