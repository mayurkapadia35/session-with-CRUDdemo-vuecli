<template>
  <div class="container">
    <br>
    <!-- Nav pills -->
    <ul class="nav nav-pills" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="pill" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#menu1">User</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#menu2">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="pill" href="#menu2">Contact</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">

      <div id="home" class="container tab-pane active"><br>
        <h3>HOME</h3>
        <p>This site is created by Mayur Kapadia. All rights reserved © 2018 Copyright:</p>
      </div>

      <div id="menu1" class="container tab-pane fade"><br>
        <button class="btn btn-outline-info" data-toggle="modal" data-target="#myModal">Add User</button>

        <div class="modal fade" id="myModal">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">

              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">Adding User</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>

              <!-- Modal body -->
              <div class="modal-body">
                <table align="center">
                  <tr>
                    <td>Name : </td>
                    <td><input type="text" name="firstname" class="form-control"/></td>
                  </tr>
                  <tr>
                    <td>Address : </td>
                    <td><input type="text" name="lastname" class="form-control"/></td>
                  </tr>
                  <tr>
                    <td>Phone : </td>
                    <td><input type="text" name="phone" class="form-control"/></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><button class="btn btn-outline-primary">Save</button>
                        <button class="btn btn-outline-warning">Reset</button></td>
                  </tr>
                </table>
              </div>

              <!-- Modal footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div id="menu2" class="container tab-pane fade"><br>
        <h3>Menu 2</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      </div>
    </div>

    <!--<ul>-->
      <!--<li v-for="u in users">{{u.name}} - {{u.address}} - {{u.phone}}</li>-->
    <!--</ul>-->

    <div>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    columns: [
      {title: 'ID', field: 'id', sortable: true},
      {title: 'Name', field: 'name'},
      {title: 'Address', field: 'address', sortable: true},
      {title: 'Phone', field: 'phone'}
    ],
    return {
      userdata: {
        name: '',
        address: '',
        phone: ''
      },
    },
    users: []
  },
  methods: {
    getall () {
      this.$http.get('http://localhost:9000/vuecliapi/insert.php')
        .then(res => {
          return res.json()
        })
        .then(data => {
          let resultArray = []
          for (let key in data) {
            resultArray.push(data[key])
          }
          this.users = resultArray
        })
    }
  },
  beforeMount () {
    this.getall()
  }
}
</script>

<style scoped>

</style>
