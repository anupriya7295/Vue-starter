<template>
<div>
    <!-- <div class="orange-strike">
        Spaghetti Billing
    </div> -->
    <span class="notify">
        <span>Notification</span>
        <span>3</span>
    </span>
    </div>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.notify {
    margin-top: 12px;
}
.btn {
    padding: 12px;
    border-radius: 3px;
    width: 200px;
}
.orange-strike {
    background-color:#ffd486;
    height: 0.5em;
    width: 8em;
    opacity: 0.5;
    font-size: 24px;
}
.text {
    /* padding-left: 12px; */
        font-weight: bold;
    color: black;
   
}
</style>
