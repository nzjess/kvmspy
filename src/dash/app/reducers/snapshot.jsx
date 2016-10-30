const initialSnapshot = {
    "id": 1,
    "physicalMachines": [
        {
            "id": 1,
            "snapshotId": 1,
            "domain": "search1.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.156",
            "hostname": "search1.kvm.prod.loveholidays.com",
            "memory": 131816108,
            "error": false,
            "kvmDomains": [
                {
                    "id": 54,
                    "snapshotId": 1,
                    "memory": 62012416,
                    "virtualMachine": {
                        "id": 95,
                        "snapshotId": 1,
                        "domain": "solr-a00.prod.loveholidays.com",
                        "ipv4": "192.168.200.100",
                        "hostname": "solr-a00.prod.loveholidays.com",
                        "memory": 60789832,
                        "error": false
                    },
                    "state": "running",
                    "error": false
                },
                {
                    "id": 43,
                    "snapshotId": 1,
                    "memory": 62012416,
                    "virtualMachine": {
                        "id": 82,
                        "snapshotId": 1,
                        "domain": "solr-a01.prod.loveholidays.com",
                        "ipv4": "192.168.200.101",
                        "hostname": "solr-a01.prod.loveholidays.com",
                        "memory": 60789832,
                        "error": false
                    },
                    "state": "running",
                    "error": false
                }
            ]
        }
    ],
    "archived": false
}

const snapshot = (state = initialSnapshot, action) => {
    return state
}

export default snapshot
