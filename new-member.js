var jsf = require('jsonfile')
var fs = require('fs')
var filename = 'members.json'

$(function(){

  // init_value()

  // save button
  $('#btn-save').click(function(){

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
    clearInput()
  })
})

function validate()
{
  $result = true
  
  // accept 6 digits only
  if (!/^\d{6}$/.test($('#member-number').val())) {
    error_label_html('#member-number', 'member number accept 6 digits only')
    $result = false
  }


  // modulus 11
  let mn = $('#member-number').val();

  let totalmn = 0;
  for(var i = 0; i<$('#member-number').val().length; i++){
    let x = 6 - i;
    totalmn += $('#member-number').val()[i] * x;
  }

  if ((totalmn % 11) !== 0) {
    error_label_html('#member-number', 'member number must follow modulus 11 check rules')
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
  $('.input-save').val('')
  $('.error-message').remove()
  $('.error.field').removeClass('error')
}

function error_label_html(input_id, message)
{
  let message_html = '<div class="ui pointing basic red label error-message">' +
    message +
  '</div>'
  $(input_id).after(message_html);
  $(input_id).closest('.field').addClass('error')

}

function init_value()
{
  $('#member-number').val('132743')

}