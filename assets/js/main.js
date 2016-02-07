import Vue from "vue";
import Lockr from "lockr";

new Vue({
  el: "#app",
  data: {
    tasks: Lockr.get('tasks')?Lockr.get('tasks'):[],
    newTask: '',
    order: -1
  },
  created() {
  },
  methods: {
    addTask() {
      this.tasks.push({
        uid: this.tasks.length,
        title: this.newTask,
        complited: false
      });
      Lockr.set('tasks', this.tasks);
      this.newTask = '';
    },
    toggleComplition(task) {
      task.complited = !task.complited;
      Lockr.set('tasks', this.tasks);
    },
    deleteTask(task) {
      var index = this.tasks.indexOf(task);
      if (index > -1) {
        this.tasks.splice(index, 1);
      }
      Lockr.set('tasks', this.tasks);
    }
  }
})
