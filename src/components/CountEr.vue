<template class="template">
  <div class="countView">
       <h1>{{ msg }}</h1>
       <h3>Count: {{ value }}</h3>
    <div class="btn-wrapper">
      <button class="btn btn-red" @click="decrement" id="minus-1">-1</button>
	  <button class="btn btn-red" id="minus-10" @click="decrementby10">-10</button>
      <button class="btn" @click="reset" id="reset">reset</button>
      <button class="btn btn-green" id="add-10" @click="incrementby10">+10</button>
      <button class="btn btn-green" id="add-1" @click="increment">+1</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "countEr",
  data() {
    return {
      msg: "Vue Counter App",
      value: 1,
    };
  },
  methods: {
    decrement() {
        if(this.value <= 0) {
            this.value
        } else {
            this.value -= 1
        }

	},

    increment() {
        this.value +=1
    },
		
    decrementby10() {
        this.value -= 10
	},
	incrementby10() {
         this.value += 10
	},
    
    reset() {
        this.value = 0
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%);
}
.countView {
  width: 100%;
  height: 80vh;
  display: flex;
  align-items:initial;
  justify-content: center;
  flex-direction:column
}
h1, h3 {
  font: 600 3.5em 'Raleway', sans-serif;
  color: rgba(112, 6, 11, 0.5);
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  padding: 30px;
}
.btn-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px 16px 16px 16px;
  background: rgb(217, 105, 170);
}
.btn {
  border-radius: 40px;
  background: linear-gradient(89deg, #D3E206 0%, #04C8DE 100%);
  border: none;
  padding: 40px 40px;
  cursor: pointer;
  margin: 80px;
  border-width: 2px;
  font: 500 2em sans-serif;
  color: rgba(96, 112, 6, 0.5);
}
.btn:hover {
   color: rgb(101, 9, 104);
}
.btn-green:hover {
   background: linear-gradient(89deg, #06E22B 0%, #011E0B 100%);
   color: white
}
.btn-red:hover {
   background: linear-gradient(89deg, #80213F 0%, #F70025 100%);
   color: white
}
</style>



