createListPrem.minio = (serverName, userID) => ({
    name: serverName,
    user: userID,
    nest: 22,
    egg: 82,
    docker_image: "ghcr.io/parkervcp/yolks:debian",
    startup: "./minio.sh",
    limits: {
        memory: 0,
        swap: -1,
        disk: 0,
        io: 500,
        cpu: 0,
    },
    environment: {
        STARTUP_TYPE: "normal",
    },
    feature_limits: {
        databases: 2,
        allocations: 1,
        backups: 10,
    },
    deploy: {
        locations: botswebdbPREM,
        dedicated_ip: false,
        port_range: [],
    },
    start_on_completion: false,
    oom_disabled: false,
});
