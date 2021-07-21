<template>
  <div id="app" class="container w-81 mx-auto my-20 px-6 py-6 shadow">
    <div class="title">
        <h3 class="text-gray-600 font-bold font-sans text-4xl text-center">TO-DO</h3>
        <p class="text-black font-sans text-xs text-center m-1">Click on the to-do to switch between done and undone!</p>
    </div>
    
    <div id="app" class="grid justify-items-stretch">
        <div v-if="!index" class="justify-self-center">  
            <input type='text' v-model="newTodo" class="mt-1 mb-3 shadow-md border-none focus:ring-transparent rounded-sm bg-gray-100 text-green-900 font-bold mx-4">
            <button v-if="!newTodo.length" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-1 my-10">ADD</button>
            <button v-if="newTodo.length" v-on:click="addTodo" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-1 my-10">ADD</button>
         </div>
         <div v-else class="grid justify-items-stretch">
             <div class="justify-self-center">
             <input type="text" v-model="updatedTodo" class=" mt-1 mb-3 shadow-md border-none focus:ring-transparent rounded-sm bg-gray-100 text-green-900 font-bold mx-4">
             <button v-if="!updatedTodo.length" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-1 my-10" >UPDATE</button>
             <button v-if="updatedTodo.length" v-on:click="updateTodo" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-1 my-10" >UPDATE</button>
        </div>
        </div>
         
         
          <h1 class=" container w-80 mx-auto my-2 px-6 py-1 shadow text-white font-bold font-sans text-4x1 text-center bg-gray-600">UNDONE</h1>
         <div  class="grid justify-items-stretch container w-80 mx-auto my-2 px-6 py-6 shadow">
        <ul class="justify-self-center list-disc">
            <div v-for="(todo,index) in todosList" v-bind:key="index" class="">
                <div class="inline-flex m-1">
                <li v-on:click="completeTodo(index)" class="text-gray-600 font-bold font-sans text-1xl text-center mx-5 uppercase ">{{todo.name}}</li>
                <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-0 px-3 rounded-l" v-on:click="editTodo(index)">Edit</button>
                <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-0 px-3 rounded-r" v-on:click="removeTodo(index)">Delete</button>
                <!-- <button class="arrow" v-on:click="swapUp(index)">&#8593;</button>
                <button class="arrow" v-on:click="swapDown(index)">&#8595;</button> -->
            </div>  
            </div>
        
        </ul>
        <button v-if="todosList.length" v-on:click="removeAll" class="bg-gray-900 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full m-3">Remove All</button>
        </div>

        
            <h1 class=" container w-80 mx-auto my-2 px-6 py-1 shadow text-white font-bold font-sans text-4x1 text-center bg-gray-600">DONE</h1>
            <div  class="grid justify-items-stretch container w-80 mx-auto my-2 px-6 py-6 shadow">
               <ul class="justify-self-center list-disc">
            <div v-for="(todo,index) in completeList" v-bind:key="index" class="div">
                 <div class="inline-flex m-1">
                <li v-on:click="uncompleteTodo(index)" class="text-gray-600 font-bold font-sans text-1xl text-center mx-5 uppercase ">{{todo.name}}</li>
                <button v-on:click="removecompleteTodo(index)" class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-0 px-3 rounded">Delete</button>
            </div> 
            </div> 
        </ul>
        

        <button v-if="completeList.length" v-on:click="removecompleteAll" class="bg-gray-900 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full m-3">Remove All</button>
    </div> 
    </div>


  </div>
</template>

<script>

export default {
  name: 'App',
  data(){return{
        newTodo: '',
        index:null,
        updatedTodo:"",
        todosList:[],
        completeList:[]
  }
    },
    methods: {
        addTodo(){
            var todo={
                name:this.newTodo,
                completed: false
            }
            this.todosList.push(todo)
            this.newTodo = ''
        },
        editTodo(index){
            this.updatedTodo = this.todosList[index].name
            this.index = index + 1
        },
        updateTodo(){
            this.todosList[this.index-1].name = this.updatedTodo
            this.index=null
           // app.$set(app.todosList, (this.index-1), this.updatedTodo )
        },
        completeTodo(index){
            this.todosList[index].completed = !this.todosList[index].completed
            this.completeList.push(this.todosList[index])
            this.todosList.splice(index, 1)
        },
        uncompleteTodo(index){
            this.completeList[index].completed = !this.completeList[index].completed
            this.todosList.push(this.completeList[index])
            this.completeList.splice(index, 1)
        },
        removeTodo(index){
            this.todosList.splice(index, 1)
        },
        removecompleteTodo(index){
            this.completeList.splice(index, 1)
        },
        removeAll(){
            this.todosList=[]
        },
        removecompleteAll(){
            this.completeList=[]
        },
        swapUp(index){
            if(index==0) return null
            let preEl = this.todosList.splice(index -1, 1, this.todosList[index])
            this.todosList.splice(index, 1, preEl)
        },
        swapDown(index) {
            if (index == this.todosList.length - 1) return null
            let nextEl = this.todosList[index + 1]
            this.todosList.splice(index + 1, 1, this.todosList[index])
            this.todosList.splice(index, 1, nextEl)
        }

        }
}
</script>

<style scoped>
/* .body {
    text-align: center;
}

.title{
    height: 200px;
}

input {
    width: 300px;
    height: 30px;
    border-radius: 10px;
}

.button{
    height: 35px;
    border-radius: 6pc;
    background-color: aquamarine;
    font-size: 16px;
}

button:hover{
    color: rebeccapurple;
    cursor: pointer;
}

li{
    text-align:center;
}
li:hover{
    cursor: pointer;

}
.completed{
    text-decoration: line-through;
    color:blue;

}

.div{
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    flex-direction: row;

}

.container{
    justify-content: center;
}
 */


</style>
