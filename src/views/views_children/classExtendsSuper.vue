<template>
    <div @load="eload()">
        <h2>class , extends , super  的语法</h2>
        <p>
            ES6提供了更接近传统语言的写法，引入了class(类)这个概念，新的class写法让对象原型的写法更加清晰，更像面向对象变成的语法。

            {{data}}

        </p>
    </div>
</template>
<style lang="scss">
    $gray:#e3e4e5;
    $dark333:#333;
    $fontsize12:12px;
    code{
        background: $gray;
        font-size: $fontsize12;
        color:$dark333;
    }
    p{
        color: $dark333;
    }

</style>
<script>
    export default{
        name:"class",
        data(){
            return{
                data:""
            }
        },
         methods:{
            eload(){
                class Animal{
                    constructor(){
                        this.type = "animal";
                    }
                    says(say){
                        data = this.type + 'says'+ say;
                    }
                }
                let animal  = new Animal()
                animal.says('hello')
            }
           }
    }
</script>
