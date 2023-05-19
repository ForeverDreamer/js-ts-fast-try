import './vue.js'

new Vue({
    el: '#app',
    data: {
        title: 'Hello VueJS!',
        link: 'http://www.baidu.com',
        finishedLink: '<a href="http://www.baidu.com">百度</a>',
        counter: 0,
        x: 0,
        y: 0,
        name: 'lsl',
    },
    methods: {
        changeTitle: function (e) {
            this.title = e.target.value;
        },
        sayHello: function () {
            return this.title;
        },
        increase: function (step, e) {
            this.counter += step;
            console.log(e);
        },
        updateCoordinate: function (e) {
            this.x = e.clientX;
            this.y = e.clientY;
        },
        dummy: function (e) {
            e.stopPropagation();
            e.preventDefault();
        },
        alertMe: function () {
            alert('Alert!');
        }
    }
})
