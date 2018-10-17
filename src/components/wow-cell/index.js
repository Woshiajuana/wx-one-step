Component({
    properties: {
        button_txt: {
            type: String,
            value: '',
        }
    },
    data: {
        // 这里是一些组件内部数据
        someData: {}
    },
    methods: {
        // 这里是一个自定义方法
        customMethod: function(){}
    },
    externalClasses: ['button-wrap', 'my-class']
});