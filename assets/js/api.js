window.api = {}
window.api = {}
window.api.APIendpoint      = "https://dzvc0bq1f1.execute-api.us-east-2.amazonaws.com/dev";
window.api.healow = "https://healow.com/apps/practice/eugene-gu-md-inc-ps-26055?v=2&t=1";
//basic api query PROMISE
window.api.API = function (data, method, endpoint) {
    return new Promise((success, fail) => {
        api.APIExe(
            data,
            method,
            endpoint,
            res => {
                success(res)
            },
            err => {
                fail(err)
            });
    });
}
//basic api query EXECUTOR
window.api.APIExe = function(data, method, endpoint, success, fail) {
    let params = {
        url: endpoint,
        method: method,
        headers: {
            "content-type": "application/json"
        },
        data: data
    };
    axios(params)
        .then((result)=>{
            success(result);
        })
        .catch((err)=>{
            fail(err);
        });
}
//basic api query PROMISE
window.api.call = function (params) {
    return new Promise((success, fail) => {
        api.callExe(
            params,
            res => {
                success(res);
            },
            err => {
                fail(err);
            });
    });
}
//general API call executor
window.api.callExe = function (params, success, fail) {
    let endpoint = api.APIendpoint + params.endpointAction;
    delete (params.endpointAction);
    params.noCache = Date.now();
    window.api.API(
        params,
        'post',
        endpoint
    )
        .then((data) => {
            if (data.error) {
                fail(data.error);
            } else {
                success(data.data);
            }
        })
        .catch((err) => () => {
            print_r(err);
        });
}