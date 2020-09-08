import axios from 'axios'

export function requestDefault(config) {
    //1.创建请求实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/z8',
        timeout: 5000,
    });
    //2.请求截器
    instance.interceptors.request.use(config => {
        //拦截后必须要返回
        return config;
    }, error => {

    })
    //3.返回拦截
    instance.interceptors.response.use(response => {
        let isSuccess = false;
        console.log('response before interceptors-------',response);
        if ("SUCCESS" === response.data.returnCode)
            isSuccess = true
        return {
            'isSuccess': isSuccess,
            'data': response.data.data,
            'msg': '成功'
        };
    }, error => {
        return {
            'isSuccess': false,
            'data': undefined,
            'msg': error
        };
    })
    //4.发送真正的请求
    return instance(config);
}