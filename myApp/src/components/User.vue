<template>
    <div class="user">
        <b-form v-on:keypress.enter="createOrUpdateUser()"  v-on:submit="createOrUpdateUser()" v-on:reset="resetUser()" class="userform">
            <b-row>
                <b-col>
                    <b-form-group id="input-group-2" label="Last Name" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="user.last_name"
                        required
                        placeholder="Enter last name"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="input-group-2" label="First Name" label-for="input-3">
                        <b-form-input
                        id="input-3"
                        v-model="user.first_name"
                        required
                        placeholder="Enter first name"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="input-group-2" label="age" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="user.age"
                        required
                        placeholder="Enter age"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="input-group-2" label="IsActive" label-for="input-2">
                    <b-form-checkbox
                    id="checkbox-1"
                    v-model="user.isActive"
                    name="checkbox-1"
                    >
                    </b-form-checkbox>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-button type="submit" variant="info" class="m-t-10">Submit</b-button>
                </b-col>
                <b-col>
                    <b-button type="reset" variant="light" class="m-t-10">Reset</b-button>
                </b-col>
            </b-row>   
        </b-form>
        <!-- <b-button v-on:click="toggleBusy()">Toggle Busy State</b-button> -->
        <b-table
            striped hover
            :items="items"
            :fields="fields"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :busy="isBusy"
            :per-page="perPage"
            :current-page="currentPage"
            outlined
        >
    <template slot="edit" slot-scope="row">
        <b-button variant="outline-primary" size="sm" v-on:click="editUser(row)" class="mr-2 editBtn">
          <i class="fas fa-pen"/>
        </b-button>
    </template>

    <template slot="remove" slot-scope="row">
        <b-button variant="outline-primary" size="sm" v-on:click="removeUser(row)" class="mr-2 removeBtn">
          <i class="fas fa-trash-alt"></i>
        </b-button>
    </template>


    <div slot="table-busy" class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Loading...</strong>
      </div>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      class="mt-4"
    >
      <span class="text-success" slot="first-text">First</span>
      <span class="text-danger" slot="prev-text">Prev</span>
      <span class="text-warning" slot="next-text">Next</span>
      <span class="text-info" slot="last-text">Last</span>
      <div slot="ellipsis-text">
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
        <b-spinner small type="grow"></b-spinner>
      </div>
      <span slot="page" slot-scope="{ page, active }">
        <b v-if="active">{{ page }}</b>
        <i v-else>{{ page }}</i>
      </span>
    </b-pagination>
    </div>
     
</template>


<script>
import { Script } from 'vm';
export default {
  name: 'User',
  data () {
    return {
        isBusy: false,
        sortBy: 'age',
        sortDesc: false,
        id:4,
        perPage: 2,
        currentPage: 1,
        user:{},
        rows: 100,
        fields: [
          { key: 'last_name', sortable: true },
          { key: 'first_name', sortable: true },
          { key: 'age', sortable: true },
          { key: 'isActive', sortable: false },
          { key: 'edit', class:'slot'},
          { key: 'remove', class:'slot'}
        ],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald',id:2},
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' ,id:3},
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson',id:4 },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney',id:1 }
        ]
    }
  },
  methods: {
      toggleBusy() {
        this.isBusy = !this.isBusy;
      },
      editUser(row) {
          this.user = Object.assign({}, row.item);
      },
      resetUser() {
          this.user = {};
      },
      createOrUpdateUser() {
          this.toggleBusy();
          if(this.user.id) {
              let user = this.items.find(a => a.id === this.user.id);
              Object.assign(user, this.user);
              this.user = {}; 
          } else {
              this.user.id = this.counter++;
              this.items.push(this.user);
              this.user = {};
          }
          this.toggleBusy();
      },
      removeUser(row) {
          this.user={};
          let users = this.items.filter(a => a.id !== row.item.id);
          this.items = users;
      }
    }
}
</script>

<style>
.slot {
    width: 12px;
}
.removeBtn .editBtn {
    background-color: white;
    border-color: #dee2e6;
}

.removeBtn:hover {
    background-color: white !important;
    color: red;
}
.editBtn:hover {
    background-color: white !important;
    color: blue;
}
.removeBtn {
    color: red;
}
.editBtn {
    color: blue;
}
.userform {
    width: 75%;
    margin: auto;
}
.m-t-10 {
    margin-top:20px;
}
input {
    font-size: 12px !important;
    padding: 1em !important;
}
btn {
    font-size: 12px !important;
}
</style>




