//去除字符串开头和结尾的空白字符

function trim(str, next) {
    const trimmedStr = str.replace(/\s+/g, '')
    next(trimmedStr)
}

let email = '无'
let copyRight = '无'

//将字符串转化为小写
function toLowerCase(str, next) {
    const lowerCaswStr = str.toLowerCase();
    next(lowerCaswStr)
}

function addEmail(str, next) {
    str += `@${email}`
    next(str)
}

function EmailAnd(str, next) {
    str += `<br/>${copyRight}`
    next(str)
}

let fns = [];

document.querySelectorAll('.item input[type="checkbox"]')
    .forEach((checkbox) => {
        checkbox.addEventListener('change', (e) => {
            const ischecked = e.target.checked
            const action = e.target.nextElementSibling.textContent.trim();
            console.log(action)
            if (ischecked) {
                switch (action) {
                    case "去空格":
                        fns.push(trim);
                        break
                    case "转化为小写":
                        fns.push(toLowerCase);
                        break;
                    case "添加邮箱后缀":
                        fns.push(addEmail)
                        break
                    case "添加版权信息":
                        fns.push(EmailAnd)
                        break
                }
            } else {
                switch (action) {
                    case "去空格":
                        fns = fns.filter((fn) => fn !== trim);
                        break;
                    case "转化为小写":
                        fns = fns.filter((fn) => fn !== toLowerCase);
                        break;
                    case "添加邮箱后缀":
                        fns = fns.filter((fn) => fn !== addEmail);
                        break;
                    case "添加版权信息":
                        fns = fns.filter((fn) => fn !== EmailAnd);
                        break;
                }
            }

            const processEmail = compose(...fns)

            const emailInput = document.getElementById('emailInput')
            const validateButton = document.getElementById('validateButton')
            const result = document.getElementById('result')

            validateButton.addEventListener('click', function () {
                const inputValue = emailInput.value
                processEmail(inputValue, (finalValue) => {
                    result.innerHTML = finalValue
                })
            })
        })
    })

const change = document.getElementById('change')
const define = document.getElementById('define')
const submit = document.getElementById('submit')
change.addEventListener('click', function () {
    define.classList.toggle('active')
})
submit.addEventListener('click', function () {
    document.getElementById('result').innerHTML = ''
    email = document.getElementById('changeEmail').value
    copyRight = document.getElementById('changeCopyRight').value
    define.classList.remove('active')
})
