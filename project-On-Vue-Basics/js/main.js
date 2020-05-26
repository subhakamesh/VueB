new Vue({
  el: '#app',
  data: {
    state: true,
    inputname: '',
    names: [],
    errormessage: false,
    Limit: false,
    result: '',
  },
  methods: {
    addNameToList() {
      if (this.checkInputName(this.inputname)) {
      } else {
        this.errormessage = true;
      }
    },
    checkInputName(value) {
      if (this.names.length <= 1) {
        this.Limit = false;
        this.bindData(value);
      } else {
        this.Limit = true;
      }
    },

    bindData(value) {
      if (value !== '') {
        if (value === 'boy' || value === 'girl') {
          this.names.push(this.inputname);
          this.inputname = '';
          this.errormessage = false;
          return true;
        } else {
          this.inputname = '';
          return false;
        }
        return true;
      } else {
        return false;
      }
    },
    checkLooser() {
      let rand = this.names[Math.floor(Math.random() * this.names.length)];
      this.result = rand;
      this.state = false;
    },
    resetUp() {
      this.state = true;
      this.names = [];
      this.result = '';
    },
    removeName(index) {
      this.names.splice(index, 1);
    },
  },
});
