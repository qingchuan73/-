function compose(...middlewares) {

    return async function (initialValue, callback) {
        let current = initialValue

        for (const item of middlewares) {
            await new Promise((resolve, reject) => {
                try {
                    item(current, (finalValue) => {
                        current = finalValue
                        resolve()
                    })
                } catch (err) {
                    reject(err)
                }
            })



        }
        callback(current)
    }

}