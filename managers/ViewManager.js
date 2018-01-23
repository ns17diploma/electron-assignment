class ViewManager{

  constructor()
  {
    $('#member-number').val('132743')
  }

  clearInput(){
    $('.input-save').val('')
    $('error-message').remove()
    $('.error.field').removeClass('error')
  }

  error_label_html(input_id, message)
  {
    let message_html = '<div class="ui pointing basic red label error-message">' +
      message +
    '</div>'
    $(input_id).after(message_html);
    $(input_id).closest('.field').addClass('error')

  }

}

module.exports = ViewManager