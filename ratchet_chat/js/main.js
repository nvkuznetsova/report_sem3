(()=> {
  let user;
  let msgs = [];

  let msgs_template = Handlebars.compile($('#messages-template').html());

  const updateMsgs = (msg) => {
    msgs.push(msg);
    let msgs_html = msgs_template({'messages' : msgs});
    $('#messages').html(msgs_html);
    $("#messages").animate({ scrollTop: $('#messages')[0].scrollHeight}, 1000);
  }

  let conn = new WebSocket('ws://localhost:4321');
  conn.onopen = (ev) => console.log('Connected!');

  conn.onmessage = (ev) => {
    let msg = JSON.parse(ev.data);
    updateMsgs(msg);
  }

  $('#join-chat').click(() => {
        user = $('#user').val();
        $('#user-container').addClass('hidden');
        $('#main-container').removeClass('hidden');

        let msg = {
            'user': user,
            'text': user + ' entered the room',
        };

        updateMsgs(msg);
        conn.send(JSON.stringify(msg));

        $('#user').val('');
    });

    $('#send-msg').click(() => {
       var text = $('#msg').val();
       let msg = {
           'user': user,
           'text': text,
       };
       updateMsgs(msg);
       conn.send(JSON.stringify(msg));

       $('#msg').val('');
   });

   $('#leave-room').click(() => {
        let msg = {
            'user': user,
            'text': user + ' has left the room',
        };
        updateMsgs(msg);
        conn.send(JSON.stringify(msg));

        $('#messages').html('');
        msgs = [];
        $('#main-container').addClass('hidden');
        $('#user-container').removeClass('hidden');
        conn.close();
    });

})();
