let obj = {
  a: 10,
  b: 20,

  add: function () {
    console.log(this.a + this.b);
  },
  mul: () => {
    console.log(this.a * this.b);
    console.log(this)
  },
};
obj.add();
obj.mul()
