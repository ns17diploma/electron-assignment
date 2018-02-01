const Seeder = require('./managers/Seeder')
const JsonFileManager = require('./managers/JsonFileManager')
const ViewManager = require('./managers/ViewManager')
const Member = require('./models/Member')
const Validator = require('./managers/Validator')
const $ = require('jquery')
const jQuery = $
require('./semantic/dist/semantic.js')


$(function(){

  var seeder = new Seeder()
  if (true) {
    seeder.seed()
  }
  var vm = new ViewManager()
  var jfm = new JsonFileManager()
  var validator = new Validator(vm)


  // save button
  $('#btn-save').click(function(){

    var member = new Member(
      $('#member-number').val(),
      $('#member-type').val(),
      $('#member-join-date').val(),
      $('#member-sub-due-month').val(),
      $('#member-first-name').val(),
      $('#member-last-name').val(),
      $('#member-sex').val(),
      $('#member-dob').val(),
      $('#member-address01').val(),
      $('#member-address02').val(),
      $('#member-address03').val(),
      $('#member-postalcode').val()
    );


    if (validator.validateMember(member)) {

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