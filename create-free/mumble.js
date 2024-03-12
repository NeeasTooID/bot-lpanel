createList.mumble = (serverName, userID) => ({
    name: serverName,
    user: userID,
    nest: 3,
    egg: 12,
    docker_image: "ghcr.io/parkervcp/yolks:voice_mumble",
    startup: `mumble-server -fg -ini murmur.ini`,
    limits: {
        memory: 0,
        swap: -1,
        disk: 10240,
        io: 500,
        cpu: 0,
    },
    environment: {
        MAX_USERS: "100",
    },
    feature_limits: {
        databases: 2,
        allocations: 1,
        backups: 10,
    },
    deploy: {
        locations: botswebdbFREE,
        dedicated_ip: false,
        port_range: [],
    },
    start_on_completion: false,
    oom_disabled: false,
});
