module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                // '@':'src', 已经不需要自己配置src
                'assets':'@/assets',
                'components':'@/components',
                'utils':'@/Utils',
                'vies':'@/views',
                'network':'@network',
            }
        }
    }
}