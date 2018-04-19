// 计算屏幕宽度，设置根节点font-size大小
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName("html")[0];
htmlDom.style.fontSize = (htmlWidth / 10) + "px";
window.addEventListener("resize", function () {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = (htmlWidth / 10) + "px";
});

// 发送ajax请求
function ajax(type, url, data, fn, fn2) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        fn(xhr);
    };
    xhr.onerror = function () {
        fn2();
    }
    if(type=="POST"){
        xhr.open(type, url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }else if(type=="GET"){
        xhr.open(type, url+"?"+data, true);
        xhr.send();
    }
}

// 检验是否为合法的手机号码
function checkPhone(str, message="请输入正确格式的手机号码！") {
    var re = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
    if (re.test(str)) {
        return {
            state: true
        };
    }
    return {
        state: false,
        message
    };
    
}

// 检验是否为合法的电子邮箱地址
function checkEmail(str, message ="请输入正确格式的电子邮箱地址！") {
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if (re.test(str)) {
        return {
            state: true
        };
    }
    return {
        state: false,
        message
    };
}

// 检验是否为合法的电话号码
function checkTel(str, message ="请输入正确格式的电话号码！") {
    var re = /^0\d{2,3}-?\d{7,8}$/;
    if (re.test(str)) {
        return {
            state: true
        };
    }
    return {
        state: false,
        message
    };
}

// 过滤非法字符
function filterEChar(str, message ="您提交的信息含有非法字符！") {
    var re = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    if (!re.test(str)) {
        return {
            state: true
        };
    }
    return {
        state: false,
        message
    };
}
