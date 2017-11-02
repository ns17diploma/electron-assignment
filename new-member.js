var jsf = require('jsonfile')
var fs = require('fs')
var filename = 'members.json'

$(function(){

  // save button
  $('#btn-save').click(function(){

    $('.error-message').remove()
    if (validate()) {
      let member = {}
      $('.input-save').each(function(){
        let $this = $(this)
        member[$this.attr('name')] = $this.val();
      })
      appendMember(member)
      clearInput()
      console.log('saved')
    } else {
      console.log('error')
      let error_message_html = `
      <div class="ui negative message">
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
    clearInput()
  })
})

function validate()
{
  $result = true
  console.log('validate')
  if (true) {
    $result = false
  }
  return $result
}

function appendMember(member)
{
  if (!fs.existsSync(filename)) {
    jsf.writeFileSync(filename, [])
  }
  var members = jsf.readFileSync(filename)
  members.push(member)
  jsf.writeFileSync(filename, members)
}

function clearInput(){
  $('.input-save').val('');
}