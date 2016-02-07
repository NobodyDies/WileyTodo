import Vue from "vue";

new Vue({
  el: "#app",
  data: {
    tasks: [],
    newTask: '',
    order: -1
  },
  methods: {
    addTask() {
      this.tasks.push({
        uid: this.tasks.length,
        title: this.newTask,
        complited: false
      });
      this.newTask = '';
    },
    toggleComplition(task) {
      task.complited = !task.complited;
    },
    deleteTask(task) {
      var index = this.tasks.indexOf(task);
      if (index > -1) {
        this.tasks.splice(index, 1);
      }
    }
  }
})
