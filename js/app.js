var result = new Vue ({
    el: "#app",
    data: {
       name: "Md. Sazzad Ali Shakh",
       desig: "Front End Developer",
       websiteName: "Google.com",
       websiteUrl: "https://www.google.com",
       titleName: "Google Website",
       isclass: false,
       textname: "Sazzad",
       emailname: "sazzadshakhbd@gmail.com",
       htmlContentBind: "<div class='col-md-12'><h1 class='text-success'>Html Content Binding</h1></div>",
       counter: 0,
       counters: 0
    },
    methods: {
        abcd: function(value){
            return value
        },
        addNumber: function(num1,num2){
            return num1+num2;
        },
        keyName: function(){
            return this.name + " " + this.desig;
        },
        increment: function(){
            this.counter++;
        },
        decrement: function(){
            this.counter--;
        },
        incrementss: function(value){
            this.counters = this.counters + value;
        },
        decrementss: function(value){
            this.counters = this.counters - value;
        },
        mouseOver:function(){
            console.log("On Mouse hover show this message")
        },
        mouseMove:function(){
            console.log("On Mouse Move show this message")
        },
        mouseOut:function(){
            console.log("On Mouse Out show this message")
        },
        keyPress:function(even){
            console.log(even.key)
        }
    }
});