<template>
    <div class="about">
        <h1>This is an about page</h1>
        <input type="text" v-model="numInputText"  @input="changeValue">
        <button @click="resetC">重置</button>
        <br>
        <span>计算结果 {{getResult}}</span>
    </div>
</template>

<script>

    export default {
        name: 'About',
        data() {
            return {
                numInputText: '',
                numArray: new Array(),
                num1: 0, //用来记录当前运算符之前的数值 （这个数值有可能是输入的 也有可能是计算过的例如 2*3 则这时候记录的就是2  如果2*3*4 则记录的是2*3的结果6）在碰到乘 和除的时候才用到
                c_num: '', //运算符之间当前输入的数值
                lastOperator: '', //最后的运算符号
                getResult: 0,
            }
        },
        computed: {
        },
        methods: {
            //这个方法 是再每次输入值的时候调用
            changeValue(event) {
                //每次碰到输入了符号 则 将c_num清空
                if (event.data === '+') {
                    //获取到当前输入的符号
                    this.lastOperator = event.data;
                    //每次碰到输入了符号 则 将c_num清空
                    this.c_num = '';
                } else if (event.data === '-') {
                    //获取到当前输入的符号
                    this.lastOperator = event.data;
                    //每次碰到输入了符号 则 将c_num清空
                    this.c_num = '';
                } else if (event.data === '*') {
                    //碰到*或者/的时候获取到数组中存储的最后一个值单独存储，并将其从数组中移走
                    this.num1 = this.numArray.pop();
                    //获取到当前输入的符号
                    this.lastOperator = event.data;
                    //每次碰到输入了符号 则 将c_num清空
                    this.c_num = '';
                } else if (event.data === '/') {
                    //碰到*或者/的时候获取到数组中存储的最后一个值单独存储，并将其从数组中移走
                    this.num1 = this.numArray.pop();
                    //获取到当前输入的符号
                    this.lastOperator = event.data;
                    //每次碰到输入了符号 则 将c_num清空
                    this.c_num = '';
                } else {
                    //判断符号之间当前已经输入数值 则移除已存储的 此处的意思是在输入一个数字还要继续输入数字时 需要将当前的数字从数组中移除
                    if (this.c_num != '') {
                        this.numArray.pop();
                    }
                    this.c_num = this.c_num + event.data;
                    if (this.lastOperator === '+') {
                        //parseFloat 这个意思是将c_num 转为float类型的数据
                        this.numArray.push(parseFloat(this.c_num));
                    } else if (this.lastOperator === '-') {
                        //如果当前是减 则 以负数的方式存到数组中
                        this.numArray.push(parseFloat(this.c_num) * -1);
                    } else if (this.lastOperator === '*') {
                        //乘或者除的时候 用它符号前面的数值计算后存储到数组中
                        this.numArray.push(this.num1 * parseFloat(this.c_num));
                    } else if (this.lastOperator === '/') {
                        //乘或者除的时候 用它符号前面的数值计算后存储到数组中
                        this.numArray.push(this.num1 / parseFloat(this.c_num));
                    } else {
                        //将当前输入的数值存储到数组中
                        this.numArray.push(parseFloat(this.c_num));
                    }
                }
                //最终计算 将数组中的值都相加起来
                let sum = 0;
                for (let index in this.numArray) {
                    sum = sum + this.numArray[index];
                }
                console.log(this.numArray)
                this.getResult = sum;
            },
            resetC() {
                this.numArray = [];
                this.getResult = 0;
                this.c_num = '';
                this.num1 = 0;
                this.lastOperator = '';
                this.numInputText = '';
            }
        }
    }
</script>