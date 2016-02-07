import Vue from "vue";
import Lockr from "lockr";

new Vue({
  el: "#app",
  data: {
    tasks: Lockr.get('tasks')?Lockr.get('tasks'):[],
    newTask: '',
    order: Lockr.get('order')?Lockr.get('order'):-1
  },
  computed: {
    allComplited() {
      var uncomplited = this.tasks.filter((task)=>{
        return task.complited == false;
      });
      console.log(uncomplited);
      if(uncomplited.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    orderIcon() {
      if(this.order < 0) {
        return 'keyboard_arrow_up'
      } else {
        return 'keyboard_arrow_down'
      }
    }
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
    },
    toggleAllComplited() {
      var length = this.tasks.length;
      var allComplited = !this.allComplited;
      for (var i = 0; i < length; i++) {
        this.tasks[i].complited = allComplited;
      }
      Lockr.set('tasks', this.tasks);
    },
    toggleOrder() {
      this.order = this.order<0?1:-1;
      Lockr.set('order', this.order);
    }
  }
})
