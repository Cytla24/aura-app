module.exports = {
    apps: [
        {
            name: 'FriendsInLanding',
            port: '3000',
            exec_mode: 'cluster',
            instances: 'max',
            args: 'start',
            script: 'node_modules/next/dist/bin/next',
            env: {
                NODE_ENV: 'production',
            },
        }
    ]
}