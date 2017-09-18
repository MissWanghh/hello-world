<template>
    <div>
        <h2>let & const 的语法</h2>
        <p>let, const与var的用途类似，是用来声明变量的，但是在实际运用中有差别，var没有块级作用域的功能，let有块级作用域的功能。
            const是用来声明常量的，一旦声明不能再修改。当我们引用第三方库的时候声明的变量，用const来声明可以避免未来不小心重命名而导致出现bug:
            <code>const monent = require("monent")</code>
        </p>
        <div>{{msg}}</div>
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
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
