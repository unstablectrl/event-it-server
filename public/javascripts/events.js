$(() => {
  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    // $.post( "/view/code-101", function( data ) {
    //     $('#myModal .modal-body').html( data );
    // });
    var modal = $(this)
    modal.find('.modal-title').text('Create new ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })

  $('#create-event').click(() => {
    // let params = {
    //   name: $('#event-name').val(),
    //   start: $('#start-datetime').val(),
    //   uid: firebase.auth().currentUser.uid
    // }
    let name = $('#event-name').val()
    let start = $('#start-datetime').val()
    let uid = firebase.auth().currentUser.uid
    // console.log(params)
    firebase.database().ref('users/'+uid+'/events').push({
      "eventname": name,
      "start": start
    }).then(() => {
      location.reload()
    })
    // $.post('/dashboard', params, (data)=>{
    //   alert('create event success')
    //   location.reload();
    // })
    //   .fail(()=>console.log('create event failed'))
    // $.ajax({
    //    url:  '/dashboard/new',
    //    type: 'POST',
    //    data: {
    //     name: $('#event-name').val(),
    //     start: $('#start-datetime').val(),
    //     uuid: firebase.auth().currentUser.uid
    //   },
    //    success: function(html){
    //      location.reload()
    //    },
    //    error: function(){
    //      alert("error");
    //    }
    // })
  })

      
})

