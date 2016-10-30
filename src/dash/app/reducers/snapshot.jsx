const initialSnapshot = {
    "id": 1,
    "startedAt": [
        2016,
        10,
        12,
        10,
        18,
        22,
        279000000
    ],
    "finishedAt": [
        2016,
        10,
        12,
        10,
        19,
        35,
        865000000
    ],
    "physicalMachines": [
        {
            "id": 13,
            "snapshotId": 1,
            "domain": "build1.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.155",
            "hostname": "build1.kvm.prod.loveholidays.com",
            "memory": 32732128,
            "swap": 16457724,
            "cpus": null,
            "timezone": null,
            "uname": "Linux build1.kvm.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 208,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-home",
                    "mount": "/var/lib/libvirt/images",
                    "size": 515188960,
                    "used": 135624148
                },
                {
                    "id": 187,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-root",
                    "mount": "/",
                    "size": 52403200,
                    "used": 4973996
                },
                {
                    "id": 189,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 508588,
                    "used": 310704
                }
            ],
            "networkInterfaces": [
                {
                    "id": 116,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:07:7f:40",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                },
                {
                    "id": 74,
                    "snapshotId": 1,
                    "name": "br0",
                    "inet": "192.168.200.155",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.200.255",
                    "ether": "b8:ca:3a:71:3c:05",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 42,
                    "snapshotId": 1,
                    "name": "em1",
                    "inet": "192.168.100.155",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "b8:ca:3a:71:3c:04",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 16,
                    "snapshotId": 1,
                    "memory": 1048576,
                    "cpus": 2,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 53,
                        "snapshotId": 1,
                        "domain": "pxe.prod.loveholidays.com",
                        "ipv4": "192.168.201.123",
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": true
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 17,
                    "snapshotId": 1,
                    "memory": 262144,
                    "cpus": 1,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 64,
                        "snapshotId": 1,
                        "domain": "git01.prod.loveholidays.com",
                        "ipv4": "192.168.200.52",
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": false
                    },
                    "state": "shut off",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 55,
                    "snapshotId": 1,
                    "memory": 2097152,
                    "cpus": 2,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 15,
                        "snapshotId": 1,
                        "domain": "supply-dashboard.prod.loveholidays.com",
                        "ipv4": "192.168.201.54",
                        "hostname": "supply-dashboard.prod.loveholidays.com",
                        "memory": 1884120,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux supply-dashboard.prod.loveholidays.com 3.10.0-327.22.2.el7.x86_64 #1 SMP Thu Jun 23 17:05:11 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 37,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 144056
                            },
                            {
                                "id": 160,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 9682020,
                                "used": 1873748
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 125,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.54",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:44:0e:b9",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 3,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 90,
                        "snapshotId": 1,
                        "domain": "search02.prod.loveholidays.com",
                        "ipv4": "192.168.201.25",
                        "hostname": "search02.prod.loveholidays.com",
                        "memory": 3882196,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux search02.prod.loveholidays.com 3.10.0-327.3.1.el7.x86_64 #1 SMP Wed Dec 9 14:09:15 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 198,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 156612
                            },
                            {
                                "id": 128,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 18348032,
                                "used": 3388000
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 48,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.25",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:78:56:5b",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 5,
                    "snapshotId": 1,
                    "memory": 10485760,
                    "cpus": 12,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 81,
                        "snapshotId": 1,
                        "domain": "build01.prod.loveholidays.com",
                        "ipv4": "192.168.200.50",
                        "hostname": "build01.prod.loveholidays.com",
                        "memory": 10074768,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux build01.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 61,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-var_lib_jenkins",
                                "mount": "/var/lib/jenkins",
                                "size": 87453736,
                                "used": 52098940
                            },
                            {
                                "id": 180,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14987616,
                                "used": 7507196
                            },
                            {
                                "id": 60,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 190654
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 61,
                                "snapshotId": 1,
                                "name": "ens3",
                                "inet": "192.168.200.50",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:52:19:06",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 67,
                    "snapshotId": 1,
                    "memory": 524288,
                    "cpus": 1,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 75,
                        "snapshotId": 1,
                        "domain": "rpm01.prod.loveholidays.com",
                        "ipv4": "192.168.200.54",
                        "hostname": "rpm01.prod.loveholidays.com",
                        "memory": 501136,
                        "swap": 2113532,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux rpm01.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 199,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-var_www_html_repo",
                                "mount": "/var/www/html/repo",
                                "size": 13125100,
                                "used": 831636
                            },
                            {
                                "id": 87,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14987616,
                                "used": 1534648
                            },
                            {
                                "id": 156,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 146102
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 92,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.54",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:41:eb:8d",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 38,
                    "snapshotId": 1,
                    "memory": 2097152,
                    "cpus": 2,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 46,
                        "snapshotId": 1,
                        "domain": "booking-dashboard.prod.loveholidays.com",
                        "ipv4": "192.168.201.51",
                        "hostname": "booking-dashboard.prod.loveholidays.com",
                        "memory": 1884120,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux booking-dashboard.prod.loveholidays.com 3.10.0-327.18.2.el7.x86_64 #1 SMP Thu May 12 11:03:55 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 186,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 143980
                            },
                            {
                                "id": 23,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos_booking--dashboard-root",
                                "mount": "/",
                                "size": 9682020,
                                "used": 1968776
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 63,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.51",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:5a:2c:14",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 12,
            "snapshotId": 1,
            "domain": "search2.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.157",
            "hostname": "search2.kvm.prod.loveholidays.com",
            "memory": 131816108,
            "swap": 4194300,
            "cpus": null,
            "timezone": null,
            "uname": "Linux search2.kvm.prod.loveholidays.com 3.10.0-229.14.1.el7.x86_64 #1 SMP Tue Sep 15 15:05:51 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 130,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vgdata00-lvdata00",
                    "mount": "/var/lib/libvirt/imagesSSDRAID1",
                    "size": 383813184,
                    "used": 377558140
                },
                {
                    "id": 229,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-home",
                    "mount": "/var/lib/libvirt/images",
                    "size": 235167548,
                    "used": 64144572
                },
                {
                    "id": 110,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 508588,
                    "used": 253452
                },
                {
                    "id": 215,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-root",
                    "mount": "/",
                    "size": 52403200,
                    "used": 6368808
                }
            ],
            "networkInterfaces": [
                {
                    "id": 65,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.157",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.200.255",
                    "ether": "ec:f4:bb:c1:0d:c5",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 22,
                    "snapshotId": 1,
                    "name": "em1",
                    "inet": "192.168.100.157",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "ec:f4:bb:c1:0d:c4",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 98,
                    "snapshotId": 1,
                    "name": "repl0",
                    "inet": "10.231.145.68",
                    "netmask": "255.255.255.192",
                    "broadcast": "10.231.145.127",
                    "ether": "ec:f4:bb:c1:0d:c7",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 67,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:61:4a:e8",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 18,
                    "snapshotId": 1,
                    "memory": 62012416,
                    "cpus": 24,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 73,
                        "snapshotId": 1,
                        "domain": "solr-a02.prod.loveholidays.com",
                        "ipv4": "192.168.200.102",
                        "hostname": "solr-a02.prod.loveholidays.com",
                        "memory": 60789832,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux solr-a02.prod.loveholidays.com 3.10.0-123.9.2.el7.x86_64 #1 SMP Tue Oct 28 18:05:26 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 52,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 30324516,
                                "used": 16651848
                            },
                            {
                                "id": 166,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 118347
                            },
                            {
                                "id": 139,
                                "snapshotId": 1,
                                "name": "/dev/mapper/solr-var_solr",
                                "mount": "/var/solr",
                                "size": 185646432,
                                "used": 91607508
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 110,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.102",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:ab:3f:6c",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            },
                            {
                                "id": 57,
                                "snapshotId": 1,
                                "name": "eth1",
                                "inet": "10.231.145.73",
                                "netmask": "255.255.255.192",
                                "broadcast": "10.231.145.127",
                                "ether": "52:54:00:c7:95:ab",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 7,
                    "snapshotId": 1,
                    "memory": 62012416,
                    "cpus": 24,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 89,
                        "snapshotId": 1,
                        "domain": "solr-a03.prod.loveholidays.com",
                        "ipv4": "192.168.200.103",
                        "hostname": "solr-a03.prod.loveholidays.com",
                        "memory": 60789832,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux solr-a03.prod.loveholidays.com 3.10.0-123.9.2.el7.x86_64 #1 SMP Tue Oct 28 18:05:26 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 21,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 118288
                            },
                            {
                                "id": 152,
                                "snapshotId": 1,
                                "name": "/dev/mapper/solr-var_solr",
                                "mount": "/var/solr",
                                "size": 185646432,
                                "used": 89395056
                            },
                            {
                                "id": 124,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 30324516,
                                "used": 4737420
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 31,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.103",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:97:f8:bf",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            },
                            {
                                "id": 46,
                                "snapshotId": 1,
                                "name": "eth1",
                                "inet": "10.231.145.74",
                                "netmask": "255.255.255.192",
                                "broadcast": "10.231.145.127",
                                "ether": "52:54:00:ee:ec:ac",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 10,
            "snapshotId": 1,
            "domain": "itl1.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.226",
            "hostname": "itl1.kvm.prod.loveholidays.com",
            "memory": 131737280,
            "swap": 16383996,
            "cpus": null,
            "timezone": null,
            "uname": "Linux itl1.kvm.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 114,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal02-imagesSSD",
                    "mount": "/var/lib/libvirt/imagesSSDDB",
                    "size": 1538096024,
                    "used": 1438582640
                },
                {
                    "id": 179,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 487634,
                    "used": 124987
                },
                {
                    "id": 133,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal00-var_lib_libvirt_images",
                    "mount": "/var/lib/libvirt/images",
                    "size": 496070232,
                    "used": 459705732
                },
                {
                    "id": 169,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal00-root",
                    "mount": "/",
                    "size": 49257116,
                    "used": 2535940
                }
            ],
            "networkInterfaces": [
                {
                    "id": 86,
                    "snapshotId": 1,
                    "name": "eno1",
                    "inet": "192.168.100.226",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "3c:a8:2a:1f:b7:78",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 25,
                    "snapshotId": 1,
                    "name": "eno3",
                    "inet": "192.168.210.226",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.210.255",
                    "ether": "3c:a8:2a:1f:b7:7a",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 96,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.226",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.200.255",
                    "ether": "3c:a8:2a:1f:b7:79",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 77,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:30:0c:de",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 64,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 33,
                        "snapshotId": 1,
                        "domain": "mmb02.prod.loveholidays.com",
                        "ipv4": "192.168.200.73",
                        "hostname": "mmb02.prod.loveholidays.com",
                        "memory": 3882532,
                        "swap": 1572860,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux mmb02.prod.loveholidays.com 3.10.0-229.20.1.el7.x86_64 #1 SMP Tue Nov 3 19:10:07 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 22,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 165272
                            },
                            {
                                "id": 181,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 13588480,
                                "used": 3155736
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 102,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.73",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:ba:4e:84",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 62,
                    "snapshotId": 1,
                    "memory": 33554432,
                    "cpus": 8,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 43,
                        "snapshotId": 1,
                        "domain": "fetchloader01.prod.loveholidays.com",
                        "ipv4": "192.168.201.18",
                        "hostname": "fetchloader01.prod.loveholidays.com",
                        "memory": 32782316,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux fetchloader01.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 207,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 10190100,
                                "used": 7580700
                            },
                            {
                                "id": 33,
                                "snapshotId": 1,
                                "name": "/dev/sda1",
                                "mount": "/var/lib/db-data",
                                "size": 30831524,
                                "used": 9504728
                            },
                            {
                                "id": 163,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-home",
                                "mount": "/var/lib/fetcher",
                                "size": 247067860,
                                "used": 56667100
                            },
                            {
                                "id": 209,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168048
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 83,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.18",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:76:86:66",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 39,
                    "snapshotId": 1,
                    "memory": 50331648,
                    "cpus": 16,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 45,
                        "snapshotId": 1,
                        "domain": "pipeline01.prod.loveholidays.com",
                        "ipv4": "192.168.201.17",
                        "hostname": "pipeline01.prod.loveholidays.com",
                        "memory": 49295392,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux pipeline01.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 28,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 138783
                            },
                            {
                                "id": 218,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 9480384,
                                "used": 3199672
                            },
                            {
                                "id": 83,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 10391432,
                                "used": 7326596
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 112,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.17",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:1b:41:49",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 10,
                    "snapshotId": 1,
                    "memory": 1048576,
                    "cpus": 2,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 49,
                        "snapshotId": 1,
                        "domain": "lowcost.prod.loveholidays.com",
                        "ipv4": "192.168.201.55",
                        "hostname": "lowcost.prod.loveholidays.com",
                        "memory": 1016792,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux lowcost.prod.loveholidays.com 3.10.0-327.el7.x86_64 #1 SMP Thu Nov 19 22:10:57 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 204,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 7809024,
                                "used": 1502128
                            },
                            {
                                "id": 210,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 520876,
                                "used": 110580
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 2,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.55",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:da:71:c2",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 48,
                    "snapshotId": 1,
                    "memory": 8388608,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 26,
                        "snapshotId": 1,
                        "domain": "itl2-backup.prod.loveholidays.com",
                        "ipv4": "192.168.201.20",
                        "hostname": "itl2-backup.prod.loveholidays.com",
                        "memory": 8011292,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux itl2-backup.prod.loveholidays.com 3.10.0-229.20.1.el7.x86_64 #1 SMP Tue Nov 3 19:10:07 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 117,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 140368
                            },
                            {
                                "id": 56,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 123213400,
                                "used": 97451272
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 16,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.20",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:bf:02:d3",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 33,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 4,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 44,
                        "snapshotId": 1,
                        "domain": "hb-contracts-fetcher01.prod.loveholidays.com",
                        "ipv4": null,
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": true
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 71,
                    "snapshotId": 1,
                    "memory": 41943040,
                    "cpus": 8,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 74,
                        "snapshotId": 1,
                        "domain": "itl-db01.prod.loveholidays.com",
                        "ipv4": null,
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": true
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 14,
            "snapshotId": 1,
            "domain": "web1.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.152",
            "hostname": "web1.kvm.prod.loveholidays.com",
            "memory": 131816108,
            "swap": 29241340,
            "cpus": null,
            "timezone": null,
            "uname": "Linux web1.kvm.prod.loveholidays.com 3.10.0-229.4.2.el7.x86_64 #1 SMP Wed May 13 10:06:09 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 164,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-home",
                    "mount": "/var/lib/libvirt/images",
                    "size": 210132740,
                    "used": 168851532
                },
                {
                    "id": 200,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 508588,
                    "used": 276252
                },
                {
                    "id": 108,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-root",
                    "mount": "/",
                    "size": 52403200,
                    "used": 6953416
                }
            ],
            "networkInterfaces": [
                {
                    "id": 36,
                    "snapshotId": 1,
                    "name": "em1",
                    "inet": "192.168.100.152",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "b8:ca:3a:65:cf:90",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 93,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:7e:db:f5",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                },
                {
                    "id": 59,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.152",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.200.255",
                    "ether": "b8:ca:3a:65:cf:91",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 15,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 2,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 60,
                        "snapshotId": 1,
                        "domain": "payment-service01.prod.loveholidays.com",
                        "ipv4": "192.168.201.47",
                        "hostname": "payment-service01.prod.loveholidays.com",
                        "memory": 3882444,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux payment-service01.prod.loveholidays.com 3.10.0-327.18.2.el7.x86_64 #1 SMP Thu May 12 11:03:55 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 71,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14842672,
                                "used": 3498560
                            },
                            {
                                "id": 78,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 143987
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 80,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.47",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:89:d6:1d",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 69,
                    "snapshotId": 1,
                    "memory": 3145728,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 28,
                        "snapshotId": 1,
                        "domain": "es01.prod.loveholidays.com",
                        "ipv4": "192.168.200.40",
                        "hostname": "es01.prod.loveholidays.com",
                        "memory": 2917152,
                        "swap": 1048572,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux es01.prod.loveholidays.com 3.10.0-123.9.3.el7.x86_64 #1 SMP Thu Nov 6 15:06:03 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 211,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-var_lib_elasticsearch",
                                "mount": "/var/lib/elasticsearch",
                                "size": 4908544,
                                "used": 87604
                            },
                            {
                                "id": 159,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 118342
                            },
                            {
                                "id": 103,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 9803052,
                                "used": 4319644
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 5,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.40",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:0b:34:e2",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 36,
                    "snapshotId": 1,
                    "memory": 20971520,
                    "cpus": 12,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 56,
                        "snapshotId": 1,
                        "domain": "web07.prod.loveholidays.com",
                        "ipv4": "192.168.200.16",
                        "hostname": "web07.prod.loveholidays.com",
                        "memory": 20395616,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux web07.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 54,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 15350728,
                                "used": 5040588
                            },
                            {
                                "id": 4,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168076
                            },
                            {
                                "id": 106,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 9682020,
                                "used": 6191800
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 89,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.16",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:40:e5:5d",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 44,
                    "snapshotId": 1,
                    "memory": 20971520,
                    "cpus": 12,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 50,
                        "snapshotId": 1,
                        "domain": "web01.prod.loveholidays.com",
                        "ipv4": "192.168.200.10",
                        "hostname": "web01.prod.loveholidays.com",
                        "memory": 20395616,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux web01.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 122,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 9682020,
                                "used": 6992676
                            },
                            {
                                "id": 100,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 15350728,
                                "used": 5189820
                            },
                            {
                                "id": 225,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168076
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 33,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.10",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:e4:89:a9",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 2,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 2,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 97,
                        "snapshotId": 1,
                        "domain": "booking-service01.prod.loveholidays.com",
                        "ipv4": "192.168.201.48",
                        "hostname": "booking-service01.prod.loveholidays.com",
                        "memory": 3882444,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux booking-service01.prod.loveholidays.com 3.10.0-327.18.2.el7.x86_64 #1 SMP Thu May 12 11:03:55 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 30,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14842672,
                                "used": 2913760
                            },
                            {
                                "id": 134,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 143982
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 43,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.48",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:9b:a7:0d",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 27,
                    "snapshotId": 1,
                    "memory": 20971520,
                    "cpus": 12,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 38,
                        "snapshotId": 1,
                        "domain": "web09.prod.loveholidays.com",
                        "ipv4": "192.168.200.18",
                        "hostname": "web09.prod.loveholidays.com",
                        "memory": 20395616,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux web09.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 12,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 9682020,
                                "used": 6389712
                            },
                            {
                                "id": 10,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168076
                            },
                            {
                                "id": 121,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 15350728,
                                "used": 4954112
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 75,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.18",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:68:a1:27",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 9,
                    "snapshotId": 1,
                    "memory": 20971520,
                    "cpus": 12,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 88,
                        "snapshotId": 1,
                        "domain": "web02.prod.loveholidays.com",
                        "ipv4": "192.168.200.11",
                        "hostname": "web02.prod.loveholidays.com",
                        "memory": 20395616,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux web02.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 131,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168076
                            },
                            {
                                "id": 173,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 9682020,
                                "used": 6408528
                            },
                            {
                                "id": 9,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 15350728,
                                "used": 5043808
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 41,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.11",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:d7:7a:fa",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 25,
                    "snapshotId": 1,
                    "memory": 3145728,
                    "cpus": 2,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 92,
                        "snapshotId": 1,
                        "domain": "markup-service01.prod.loveholidays.com",
                        "ipv4": "192.168.201.52",
                        "hostname": "markup-service01.prod.loveholidays.com",
                        "memory": 2916312,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux markup-service01.prod.loveholidays.com 3.10.0-327.22.2.el7.x86_64 #1 SMP Thu Jun 23 17:05:11 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 137,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 144074
                            },
                            {
                                "id": 148,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 9682020,
                                "used": 1940892
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 10,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.52",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:2e:07:d2",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 34,
                    "snapshotId": 1,
                    "memory": 20971520,
                    "cpus": 12,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 24,
                        "snapshotId": 1,
                        "domain": "web05.prod.loveholidays.com",
                        "ipv4": "192.168.200.14",
                        "hostname": "web05.prod.loveholidays.com",
                        "memory": 20395616,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux web05.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 68,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 9682020,
                                "used": 6227540
                            },
                            {
                                "id": 63,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 15350728,
                                "used": 4963232
                            },
                            {
                                "id": 104,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168076
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 11,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.14",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:41:1b:dd",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 6,
            "snapshotId": 1,
            "domain": "data1.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.204",
            "hostname": "690699-app402.want2bthere.com",
            "memory": 131737280,
            "swap": 16777212,
            "cpus": null,
            "timezone": null,
            "uname": "Linux 690699-app402.want2bthere.com 3.10.0-229.7.2.el7.x86_64 #1 SMP Tue Jun 23 22:06:11 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 138,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal00-imagesSSDRAID1",
                    "mount": "/var/lib/libvirt/imagesSSDRAID1",
                    "size": 384413208,
                    "used": 284718664
                },
                {
                    "id": 88,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-images",
                    "mount": "/var/lib/libvirt/images",
                    "size": 507917112,
                    "used": 253706120
                },
                {
                    "id": 102,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal_Raid10-data00",
                    "mount": "/var/lib/libvirt/imagesSSDRAID10",
                    "size": 1153525420,
                    "used": 500900008
                },
                {
                    "id": 127,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 503040,
                    "used": 150080
                },
                {
                    "id": 72,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-root",
                    "mount": "/",
                    "size": 52399104,
                    "used": 2795024
                }
            ],
            "networkInterfaces": [
                {
                    "id": 15,
                    "snapshotId": 1,
                    "name": "eno1",
                    "inet": "192.168.100.204",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "38:63:bb:33:94:7c",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 4,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:30:80:6c",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                },
                {
                    "id": 120,
                    "snapshotId": 1,
                    "name": "eno3",
                    "inet": "192.168.210.204",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.210.255",
                    "ether": "38:63:bb:33:94:7e",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 101,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.204",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.200.255",
                    "ether": "38:63:bb:33:94:7d",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 23,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 66,
                        "snapshotId": 1,
                        "domain": "mmb01.prod.loveholidays.com",
                        "ipv4": "192.168.200.72",
                        "hostname": "mmb01.prod.loveholidays.com",
                        "memory": 3882532,
                        "swap": 1572860,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux mmb01.prod.loveholidays.com 3.10.0-229.20.1.el7.x86_64 #1 SMP Tue Nov 3 19:10:07 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 154,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 13588480,
                                "used": 2960956
                            },
                            {
                                "id": 123,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 165272
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 104,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.72",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:06:22:69",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 45,
                    "snapshotId": 1,
                    "memory": 6291456,
                    "cpus": 8,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 40,
                        "snapshotId": 1,
                        "domain": "web02.travelmatch.co.uk",
                        "ipv4": null,
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": true
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 41,
                    "snapshotId": 1,
                    "memory": 2097152,
                    "cpus": 2,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 72,
                        "snapshotId": 1,
                        "domain": "ftp01.prod.loveholidays.com",
                        "ipv4": "192.168.200.51",
                        "hostname": "ftp01.prod.loveholidays.com",
                        "memory": 1885192,
                        "swap": 2113532,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux ftp01.prod.loveholidays.com 3.10.0-123.9.2.el7.x86_64 #1 SMP Tue Oct 28 18:05:26 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 228,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14987616,
                                "used": 1398704
                            },
                            {
                                "id": 112,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-home",
                                "mount": "/home",
                                "size": 136979088,
                                "used": 86753140
                            },
                            {
                                "id": 109,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 103279
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 134,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.51",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:67:8a:e8",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 28,
                    "snapshotId": 1,
                    "memory": 33554432,
                    "cpus": 16,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 63,
                        "snapshotId": 1,
                        "domain": "mongo01.prod.loveholidays.com",
                        "ipv4": "192.168.200.69",
                        "hostname": "mongo01.prod.loveholidays.com",
                        "memory": 32781416,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux mongo01.prod.loveholidays.com 3.10.0-229.el7.x86_64 #1 SMP Fri Mar 6 11:36:42 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 157,
                                "snapshotId": 1,
                                "name": "/dev/mapper/mongo-var_lib_mongo",
                                "mount": "/var/lib/mongo",
                                "size": 206284776,
                                "used": 92380576
                            },
                            {
                                "id": 2,
                                "snapshotId": 1,
                                "name": "/dev/sdd1",
                                "mount": "/mnt/backup",
                                "size": 103078840,
                                "used": 37261404
                            },
                            {
                                "id": 192,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 15202304,
                                "used": 1774664
                            },
                            {
                                "id": 94,
                                "snapshotId": 1,
                                "name": "/dev/sdc1",
                                "mount": "/var/lib/lowcost_mongodump",
                                "size": 103078840,
                                "used": 64775584
                            },
                            {
                                "id": 36,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 165272
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 91,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.69",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:cb:16:e0",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 35,
                    "snapshotId": 1,
                    "memory": 6291456,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 65,
                        "snapshotId": 1,
                        "domain": "lfs-slave01.prod.loveholidays.com",
                        "ipv4": "192.168.201.26",
                        "hostname": "lfs-slave01.prod.loveholidays.com",
                        "memory": 5946580,
                        "swap": 6160380,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux lfs-slave01.prod.loveholidays.com 3.10.0-327.3.1.el7.x86_64 #1 SMP Wed Dec 9 14:09:15 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 193,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-home",
                                "mount": "/var/lib/mongo",
                                "size": 255277276,
                                "used": 72008780
                            },
                            {
                                "id": 13,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 166936
                            },
                            {
                                "id": 222,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 52403200,
                                "used": 2374860
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 27,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.26",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:33:0e:65",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 77,
                    "snapshotId": 1,
                    "memory": 1048576,
                    "cpus": 2,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 59,
                        "snapshotId": 1,
                        "domain": "filestore.prod.loveholidays.com",
                        "ipv4": "192.168.201.56",
                        "hostname": "filestore.prod.loveholidays.com",
                        "memory": 1016792,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux filestore.prod.loveholidays.com 3.10.0-327.el7.x86_64 #1 SMP Thu Nov 19 22:10:57 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 89,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/",
                                "size": 20510288,
                                "used": 1438672
                            },
                            {
                                "id": 26,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-lvol001",
                                "mount": "/srv",
                                "size": 104802308,
                                "used": 29657048
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 73,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.56",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:99:1e:83",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 57,
                    "snapshotId": 1,
                    "memory": 15624192,
                    "cpus": 6,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 25,
                        "snapshotId": 1,
                        "domain": "analytics-dataloader01.prod.loveholidays.com",
                        "ipv4": "192.168.201.28",
                        "hostname": "analytics-dataloader01.prod.loveholidays.com",
                        "memory": 15131576,
                        "swap": 3145724,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux analytics-dataloader01.prod.loveholidays.com 3.10.0-327.13.1.el7.x86_64 #1 SMP Thu Mar 31 16:04:38 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 45,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 16906596,
                                "used": 11480728
                            },
                            {
                                "id": 90,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 171708
                            },
                            {
                                "id": 145,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 10190100,
                                "used": 3159732
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 37,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.28",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:a5:7a:4a",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 68,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 58,
                        "snapshotId": 1,
                        "domain": "search01.prod.loveholidays.com",
                        "ipv4": "192.168.201.24",
                        "hostname": "search01.prod.loveholidays.com",
                        "memory": 3882196,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux search01.prod.loveholidays.com 3.10.0-327.3.1.el7.x86_64 #1 SMP Wed Dec 9 14:09:15 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 113,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 166940
                            },
                            {
                                "id": 216,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 18307072,
                                "used": 3392124
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 121,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.24",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:76:68:f3",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 53,
                    "snapshotId": 1,
                    "memory": 20971520,
                    "cpus": 16,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 36,
                        "snapshotId": 1,
                        "domain": "analytics",
                        "ipv4": "192.168.51.35",
                        "hostname": "analytics.dev.loveholidays.com",
                        "memory": 20395616,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux analytics.dev.loveholidays.com 3.10.0-229.el7.x86_64 #1 SMP Fri Mar 6 11:36:42 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 77,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 123213400,
                                "used": 30276596
                            },
                            {
                                "id": 27,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 10190100,
                                "used": 3691060
                            },
                            {
                                "id": 38,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-var_lib_mongo",
                                "mount": "/var/lib/mongo",
                                "size": 123723328,
                                "used": 266572
                            },
                            {
                                "id": 40,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 151898
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 103,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.51.35",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.51.255",
                                "ether": "52:54:00:d9:a6:8b",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 21,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 2,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 80,
                        "snapshotId": 1,
                        "domain": "booking-service01.stage.loveholidays.com",
                        "ipv4": "192.168.200.32",
                        "hostname": "booking-service01.stage.loveholidays.com",
                        "memory": 3882444,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux booking-service01.stage.loveholidays.com 3.10.0-327.el7.x86_64 #1 SMP Thu Nov 19 22:10:57 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 221,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14290376,
                                "used": 2525044
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 18,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.32",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:e0:1c:ae",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 30,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 17,
                        "snapshotId": 1,
                        "domain": "cache01.prod.loveholidays.com",
                        "ipv4": "192.168.200.70",
                        "hostname": "cache01.prod.loveholidays.com",
                        "memory": 3882532,
                        "swap": 1572860,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux cache01.prod.loveholidays.com 3.10.0-229.el7.x86_64 #1 SMP Fri Mar 6 11:36:42 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 158,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 122124
                            },
                            {
                                "id": 86,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 13588480,
                                "used": 1525516
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 56,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.70",
                                "netmask": "255.255.255.0",
                                "broadcast": "192.168.200.255",
                                "ether": "52:54:00:7a:69:2e",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 4,
            "snapshotId": 1,
            "domain": "search4.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.159",
            "hostname": "search4.kvm.prod.loveholidays.com",
            "memory": 131816108,
            "swap": 4194300,
            "cpus": null,
            "timezone": null,
            "uname": "Linux search4.kvm.prod.loveholidays.com 3.10.0-229.14.1.el7.x86_64 #1 SMP Tue Sep 15 15:05:51 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 32,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-home",
                    "mount": "/var/lib/libvirt/images",
                    "size": 235167548,
                    "used": 64144584
                },
                {
                    "id": 212,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-root",
                    "mount": "/",
                    "size": 52403200,
                    "used": 6693032
                },
                {
                    "id": 107,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vgdata00-lvdata00",
                    "mount": "/var/lib/libvirt/imagesSSDRAID1",
                    "size": 383813184,
                    "used": 377558140
                },
                {
                    "id": 190,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 508588,
                    "used": 253456
                }
            ],
            "networkInterfaces": [
                {
                    "id": 84,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:03:ea:c7",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                },
                {
                    "id": 58,
                    "snapshotId": 1,
                    "name": "repl0",
                    "inet": "10.231.145.70",
                    "netmask": "255.255.255.192",
                    "broadcast": "10.231.145.127",
                    "ether": "ec:f4:bb:bf:5e:cb",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 115,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.159",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.200.255",
                    "ether": "ec:f4:bb:bf:5e:c9",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 85,
                    "snapshotId": 1,
                    "name": "em1",
                    "inet": "192.168.100.159",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "ec:f4:bb:bf:5e:c8",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 58,
                    "snapshotId": 1,
                    "memory": 62012416,
                    "cpus": 24,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 76,
                        "snapshotId": 1,
                        "domain": "solr-b03.prod.loveholidays.com",
                        "ipv4": "192.168.200.107",
                        "hostname": "solr-b03.prod.loveholidays.com",
                        "memory": 60789832,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux solr-b03.prod.loveholidays.com 3.10.0-123.9.2.el7.x86_64 #1 SMP Tue Oct 28 18:05:26 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 64,
                                "snapshotId": 1,
                                "name": "/dev/mapper/solr-var_solr",
                                "mount": "/var/solr",
                                "size": 185646432,
                                "used": 89395064
                            },
                            {
                                "id": 219,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 30324516,
                                "used": 4791256
                            },
                            {
                                "id": 75,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 118341
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 105,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.107",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:67:4d:6e",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            },
                            {
                                "id": 72,
                                "snapshotId": 1,
                                "name": "eth1",
                                "inet": "10.231.145.77",
                                "netmask": "255.255.255.192",
                                "broadcast": "10.231.145.127",
                                "ether": "52:54:00:65:2f:14",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 51,
                    "snapshotId": 1,
                    "memory": 62012416,
                    "cpus": 24,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 22,
                        "snapshotId": 1,
                        "domain": "solr-b02.prod.loveholidays.com",
                        "ipv4": "192.168.200.106",
                        "hostname": "solr-b02.prod.loveholidays.com",
                        "memory": 60789832,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux solr-b02.prod.loveholidays.com 3.10.0-123.9.3.el7.x86_64 #1 SMP Thu Nov 6 15:06:03 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 25,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 157807
                            },
                            {
                                "id": 161,
                                "snapshotId": 1,
                                "name": "/dev/mapper/solr-var_solr",
                                "mount": "/var/solr",
                                "size": 185642336,
                                "used": 91607512
                            },
                            {
                                "id": 170,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 30324516,
                                "used": 4912008
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 28,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.106",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:e0:b0:5a",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            },
                            {
                                "id": 19,
                                "snapshotId": 1,
                                "name": "eth1",
                                "inet": "10.231.145.76",
                                "netmask": "255.255.255.192",
                                "broadcast": "10.231.145.127",
                                "ether": "52:54:00:70:e8:c9",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 5,
            "snapshotId": 1,
            "domain": "bo02.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.160",
            "hostname": "bo02.kvm.prod.loveholidays.com",
            "memory": 65682556,
            "swap": 2097148,
            "cpus": null,
            "timezone": null,
            "uname": "Linux bo02.kvm.prod.loveholidays.com 3.10.0-327.28.3.el7.x86_64 #1 SMP Thu Aug 18 19:05:49 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 69,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal20160908-root00",
                    "mount": "/",
                    "size": 572058432,
                    "used": 23224216
                },
                {
                    "id": 50,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal20160908-tmp00",
                    "mount": "/tmp",
                    "size": 1998672,
                    "used": 3128
                },
                {
                    "id": 224,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 487652,
                    "used": 237360
                }
            ],
            "networkInterfaces": [
                {
                    "id": 94,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.160",
                    "netmask": "255.255.252.0",
                    "broadcast": "192.168.203.255",
                    "ether": "3c:a8:2a:1e:91:1c",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 127,
                    "snapshotId": 1,
                    "name": "em4",
                    "inet": "192.168.210.160",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.210.255",
                    "ether": "3c:a8:2a:1e:91:1f",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                },
                {
                    "id": 113,
                    "snapshotId": 1,
                    "name": "bond0.777",
                    "inet": "192.168.100.160",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "3c:a8:2a:1e:91:1c",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 49,
                    "snapshotId": 1,
                    "memory": 1048576,
                    "cpus": 2,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 29,
                        "snapshotId": 1,
                        "domain": "lb02.prod.loveholidays.com",
                        "ipv4": "192.168.201.179",
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": true
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 60,
                    "snapshotId": 1,
                    "memory": 16777216,
                    "cpus": 4,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 71,
                        "snapshotId": 1,
                        "domain": "backoffice02.prod.loveholidays.com",
                        "ipv4": "192.168.201.45",
                        "hostname": "backoffice02.prod.loveholidays.com",
                        "memory": 16268420,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux backoffice02.prod.loveholidays.com 3.10.0-327.28.3.el7.x86_64 #1 SMP Thu Aug 18 19:05:49 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 46,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 7617660,
                                "used": 335968
                            },
                            {
                                "id": 167,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 216320
                            },
                            {
                                "id": 74,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 10190100,
                                "used": 1966900
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 66,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.45",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:ad:2a:c3",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 8,
            "snapshotId": 1,
            "domain": "itl3.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.228",
            "hostname": "itl3.kvm.prod.loveholidays.com",
            "memory": 131737280,
            "swap": 16383996,
            "cpus": null,
            "timezone": null,
            "uname": "Linux itl3.kvm.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 235,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal00-var_lib_libvirt_images",
                    "mount": "/var/lib/libvirt/images",
                    "size": 496070232,
                    "used": 413293540
                },
                {
                    "id": 57,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal00-root",
                    "mount": "/",
                    "size": 49257116,
                    "used": 2199400
                },
                {
                    "id": 7,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal01-var_lib_libvirt_imagesSSDRAID0",
                    "mount": "/var/lib/libvirt/imagesSSDRAID0",
                    "size": 750835768,
                    "used": 492810716
                },
                {
                    "id": 15,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 487634,
                    "used": 125238
                }
            ],
            "networkInterfaces": [
                {
                    "id": 17,
                    "snapshotId": 1,
                    "name": "repl0",
                    "inet": "10.231.145.66",
                    "netmask": "255.255.255.192",
                    "broadcast": "10.231.145.127",
                    "ether": "3c:a8:2a:1f:e3:93",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 49,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.228",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.200.255",
                    "ether": "3c:a8:2a:1f:e3:91",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 87,
                    "snapshotId": 1,
                    "name": "eth0",
                    "inet": "192.168.100.228",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "3c:a8:2a:1f:e3:90",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 78,
                    "snapshotId": 1,
                    "name": "eno3",
                    "inet": "192.168.210.228",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.210.255",
                    "ether": "3c:a8:2a:1f:e3:92",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 32,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:03:a1:4d",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 52,
                    "snapshotId": 1,
                    "memory": 13631488,
                    "cpus": 16,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 34,
                        "snapshotId": 1,
                        "domain": "pipeline01.prod.travelmatch.co.uk",
                        "ipv4": "192.168.201.19",
                        "hostname": "pipeline01.prod.travelmatch.co.uk",
                        "memory": 13170880,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux pipeline01.prod.travelmatch.co.uk 3.10.0-229.20.1.el7.x86_64 #1 SMP Tue Nov 3 19:10:07 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 116,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 18307072,
                                "used": 3613348
                            },
                            {
                                "id": 129,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 165272
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 130,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.19",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:72:83:fd",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 82,
                    "snapshotId": 1,
                    "memory": 25165824,
                    "cpus": 12,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 51,
                        "snapshotId": 1,
                        "domain": "solr-master02.prod.loveholidays.com",
                        "ipv4": "192.168.201.11",
                        "hostname": "solr-master02.prod.loveholidays.com",
                        "memory": 24524368,
                        "swap": 4194300,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux solr-master02.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 119,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14842672,
                                "used": 6730872
                            },
                            {
                                "id": 230,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168104
                            },
                            {
                                "id": 101,
                                "snapshotId": 1,
                                "name": "/dev/mapper/solr-var_solr",
                                "mount": "/var/solr",
                                "size": 361102476,
                                "used": 116975384
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 14,
                                "snapshotId": 1,
                                "name": "eth1",
                                "inet": "10.231.145.81",
                                "netmask": "255.255.255.192",
                                "broadcast": "10.231.145.127",
                                "ether": "52:54:00:27:79:78",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            },
                            {
                                "id": 79,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.11",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:42:5e:28",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 63,
                    "snapshotId": 1,
                    "memory": 1048576,
                    "cpus": 2,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 39,
                        "snapshotId": 1,
                        "domain": "load-balancer02.prod.loveholidays.com",
                        "ipv4": "192.168.201.35",
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": false
                    },
                    "state": "shut off",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 83,
                    "snapshotId": 1,
                    "memory": 6291456,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 68,
                        "snapshotId": 1,
                        "domain": "assisted-booking01.prod.loveholidays.com",
                        "ipv4": "192.168.201.31",
                        "hostname": "assisted-booking01.prod.loveholidays.com",
                        "memory": 5946916,
                        "swap": 1572860,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux assisted-booking01.prod.loveholidays.com 3.10.0-229.14.1.el7.x86_64 #1 SMP Tue Sep 15 15:05:51 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 14,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 13588480,
                                "used": 8209684
                            },
                            {
                                "id": 146,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 165276
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 34,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.31",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:9d:78:79",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 79,
                    "snapshotId": 1,
                    "memory": 6291456,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 55,
                        "snapshotId": 1,
                        "domain": "images01.prod.loveholidays.com",
                        "ipv4": null,
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": true
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 74,
                    "snapshotId": 1,
                    "memory": 6291456,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 69,
                        "snapshotId": 1,
                        "domain": "solr-auxiliary-slave01.prod.loveholidays.com",
                        "ipv4": null,
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": true
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 4,
                    "snapshotId": 1,
                    "memory": 6291456,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 16,
                        "snapshotId": 1,
                        "domain": "solr-master01.prod.travelmatch.co.uk",
                        "ipv4": "192.168.201.16",
                        "hostname": "solr-master01.prod.travelmatch.co.uk",
                        "memory": 5946916,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux solr-master01.prod.travelmatch.co.uk 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 41,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14842672,
                                "used": 4304716
                            },
                            {
                                "id": 99,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168056
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 26,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.16",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:90:34:c6",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 1,
            "snapshotId": 1,
            "domain": "search1.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.156",
            "hostname": "search1.kvm.prod.loveholidays.com",
            "memory": 131816108,
            "swap": 4194300,
            "cpus": null,
            "timezone": null,
            "uname": "Linux search1.kvm.prod.loveholidays.com 3.10.0-229.14.1.el7.x86_64 #1 SMP Tue Sep 15 15:05:51 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 141,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vgdata00-lvdata00",
                    "mount": "/var/lib/libvirt/imagesSSDRAID1",
                    "size": 383813184,
                    "used": 377558132
                },
                {
                    "id": 95,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-home",
                    "mount": "/var/lib/libvirt/images",
                    "size": 235167548,
                    "used": 64144576
                },
                {
                    "id": 184,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 508588,
                    "used": 259868
                },
                {
                    "id": 49,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-root",
                    "mount": "/",
                    "size": 52403200,
                    "used": 4621836
                }
            ],
            "networkInterfaces": [
                {
                    "id": 117,
                    "snapshotId": 1,
                    "name": "em1",
                    "inet": "192.168.100.156",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "ec:f4:bb:bf:d6:ec",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 108,
                    "snapshotId": 1,
                    "name": "repl0",
                    "inet": "10.231.145.67",
                    "netmask": "255.255.255.192",
                    "broadcast": "10.231.145.127",
                    "ether": "ec:f4:bb:bf:d6:ef",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 128,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:82:66:52",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                },
                {
                    "id": 54,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.156",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.200.255",
                    "ether": "ec:f4:bb:bf:d6:ed",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 43,
                    "snapshotId": 1,
                    "memory": 62012416,
                    "cpus": 24,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 82,
                        "snapshotId": 1,
                        "domain": "solr-a01.prod.loveholidays.com",
                        "ipv4": "192.168.200.101",
                        "hostname": "solr-a01.prod.loveholidays.com",
                        "memory": 60789832,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux solr-a01.prod.loveholidays.com 3.10.0-123.9.2.el7.x86_64 #1 SMP Tue Oct 28 18:05:26 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 16,
                                "snapshotId": 1,
                                "name": "/dev/mapper/solr-var_solr",
                                "mount": "/var/solr",
                                "size": 185646432,
                                "used": 89202264
                            },
                            {
                                "id": 85,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 30106488,
                                "used": 4802232
                            },
                            {
                                "id": 197,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 118336
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 68,
                                "snapshotId": 1,
                                "name": "eth1",
                                "inet": "10.231.145.72",
                                "netmask": "255.255.255.192",
                                "broadcast": "10.231.145.127",
                                "ether": "52:54:00:8b:e3:80",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            },
                            {
                                "id": 60,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.101",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:b6:0f:05",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 54,
                    "snapshotId": 1,
                    "memory": 62012416,
                    "cpus": 24,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 95,
                        "snapshotId": 1,
                        "domain": "solr-a00.prod.loveholidays.com",
                        "ipv4": "192.168.200.100",
                        "hostname": "solr-a00.prod.loveholidays.com",
                        "memory": 60789832,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux solr-a00.prod.loveholidays.com 3.10.0-123.9.2.el7.x86_64 #1 SMP Tue Oct 28 18:05:26 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 66,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 118324
                            },
                            {
                                "id": 182,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 30324516,
                                "used": 4876908
                            },
                            {
                                "id": 227,
                                "snapshotId": 1,
                                "name": "/dev/mapper/solr-var_solr",
                                "mount": "/var/solr",
                                "size": 185646432,
                                "used": 88143960
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 132,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.100",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:c2:cf:05",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            },
                            {
                                "id": 6,
                                "snapshotId": 1,
                                "name": "eth1",
                                "inet": "10.231.145.71",
                                "netmask": "255.255.255.192",
                                "broadcast": "10.231.145.127",
                                "ether": "52:54:00:b2:52:0c",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 3,
            "snapshotId": 1,
            "domain": "search3.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.158",
            "hostname": "search3.kvm.prod.loveholidays.com",
            "memory": 131816108,
            "swap": 4194300,
            "cpus": null,
            "timezone": null,
            "uname": "Linux search3.kvm.prod.loveholidays.com 3.10.0-229.14.1.el7.x86_64 #1 SMP Tue Sep 15 15:05:51 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 82,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-home",
                    "mount": "/var/lib/libvirt/images",
                    "size": 235167548,
                    "used": 63527104
                },
                {
                    "id": 234,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 508588,
                    "used": 235484
                },
                {
                    "id": 232,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-root",
                    "mount": "/",
                    "size": 52403200,
                    "used": 52052620
                },
                {
                    "id": 39,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vgdata00-lvdata00",
                    "mount": "/var/lib/libvirt/imagesSSDRAID1",
                    "size": 383813184,
                    "used": 377558140
                }
            ],
            "networkInterfaces": [
                {
                    "id": 21,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:e8:4e:be",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                },
                {
                    "id": 118,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.158",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.200.255",
                    "ether": "ec:f4:bb:bf:3b:4d",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 119,
                    "snapshotId": 1,
                    "name": "repl0",
                    "inet": "10.231.145.69",
                    "netmask": "255.255.255.192",
                    "broadcast": "10.231.145.127",
                    "ether": "ec:f4:bb:bf:3b:4f",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 106,
                    "snapshotId": 1,
                    "name": "em1",
                    "inet": "192.168.100.158",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "ec:f4:bb:bf:3b:4c",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 50,
                    "snapshotId": 1,
                    "memory": 62012416,
                    "cpus": 24,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 70,
                        "snapshotId": 1,
                        "domain": "solr-b01.prod.loveholidays.com",
                        "ipv4": "192.168.200.105",
                        "hostname": "solr-b01.prod.loveholidays.com",
                        "memory": 60789832,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux solr-b01.prod.loveholidays.com 3.10.0-123.9.3.el7.x86_64 #1 SMP Thu Nov 6 15:06:03 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 29,
                                "snapshotId": 1,
                                "name": "/dev/mapper/solr-var_solr",
                                "mount": "/var/solr",
                                "size": 185646432,
                                "used": 89202256
                            },
                            {
                                "id": 202,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 30324516,
                                "used": 13024248
                            },
                            {
                                "id": 183,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 157799
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 39,
                                "snapshotId": 1,
                                "name": "eth1",
                                "inet": "10.231.145.75",
                                "netmask": "255.255.255.192",
                                "broadcast": "10.231.145.127",
                                "ether": "52:54:00:c9:6a:8a",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            },
                            {
                                "id": 107,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.105",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:5e:20:fe",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 61,
                    "snapshotId": 1,
                    "memory": 62012416,
                    "cpus": 24,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 62,
                        "snapshotId": 1,
                        "domain": "solr-b00.prod.loveholidays.com",
                        "ipv4": "192.168.200.104",
                        "hostname": "solr-b00.prod.loveholidays.com",
                        "memory": 60789832,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux solr-b00.prod.loveholidays.com 3.10.0-123.9.3.el7.x86_64 #1 SMP Thu Nov 6 15:06:03 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 47,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 157714
                            },
                            {
                                "id": 6,
                                "snapshotId": 1,
                                "name": "/dev/mapper/solr-var_solr",
                                "mount": "/var/solr",
                                "size": 185646432,
                                "used": 88143924
                            },
                            {
                                "id": 153,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 30324516,
                                "used": 4954044
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 55,
                                "snapshotId": 1,
                                "name": "eth1",
                                "inet": "10.231.145.78",
                                "netmask": "255.255.255.192",
                                "broadcast": "10.231.145.127",
                                "ether": "52:54:00:74:1d:1d",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            },
                            {
                                "id": 69,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.104",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:71:e9:eb",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 2,
            "snapshotId": 1,
            "domain": "web2.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.153",
            "hostname": "web2.kvm.prod.loveholidays.com",
            "memory": 131816108,
            "swap": 29241340,
            "cpus": null,
            "timezone": null,
            "uname": "Linux web2.kvm.prod.loveholidays.com 3.10.0-229.4.2.el7.x86_64 #1 SMP Wed May 13 10:06:09 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 111,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-root",
                    "mount": "/",
                    "size": 52403200,
                    "used": 5633760
                },
                {
                    "id": 172,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-home",
                    "mount": "/var/lib/libvirt/images",
                    "size": 210132740,
                    "used": 194207924
                },
                {
                    "id": 214,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 508588,
                    "used": 275996
                }
            ],
            "networkInterfaces": [
                {
                    "id": 124,
                    "snapshotId": 1,
                    "name": "em1",
                    "inet": "192.168.100.153",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "b8:ca:3a:5f:a3:54",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 38,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.153",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.200.255",
                    "ether": "b8:ca:3a:5f:a3:55",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 123,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:24:80:9b",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 11,
                    "snapshotId": 1,
                    "memory": 3145728,
                    "cpus": 2,
                    "cpuModel": "IvyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 78,
                        "snapshotId": 1,
                        "domain": "markup-service02.prod.loveholidays.com",
                        "ipv4": "192.168.201.53",
                        "hostname": "markup-service02.prod.loveholidays.com",
                        "memory": 2916312,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux markup-service02.prod.loveholidays.com 3.10.0-327.22.2.el7.x86_64 #1 SMP Thu Jun 23 17:05:11 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 98,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 9682020,
                                "used": 1940188
                            },
                            {
                                "id": 65,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 144020
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 50,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.53",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:47:27:f3",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 22,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 2,
                    "cpuModel": "IvyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 93,
                        "snapshotId": 1,
                        "domain": "booking-service02.prod.loveholidays.com",
                        "ipv4": "192.168.201.50",
                        "hostname": "booking-service02.prod.loveholidays.com",
                        "memory": 3882444,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux booking-service02.prod.loveholidays.com 3.10.0-327.18.2.el7.x86_64 #1 SMP Thu May 12 11:03:55 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 93,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14842672,
                                "used": 2918140
                            },
                            {
                                "id": 177,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 143914
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 64,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.50",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:0d:b5:9f",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 56,
                    "snapshotId": 1,
                    "memory": 20971520,
                    "cpus": 12,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 35,
                        "snapshotId": 1,
                        "domain": "web06.prod.loveholidays.com",
                        "ipv4": "192.168.200.15",
                        "hostname": "web06.prod.loveholidays.com",
                        "memory": 20395616,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux web06.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 132,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168096
                            },
                            {
                                "id": 217,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 15350728,
                                "used": 4969648
                            },
                            {
                                "id": 144,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 9682020,
                                "used": 6347956
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 1,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.15",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:5b:04:e9",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 72,
                    "snapshotId": 1,
                    "memory": 20971520,
                    "cpus": 12,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 18,
                        "snapshotId": 1,
                        "domain": "web08.prod.loveholidays.com",
                        "ipv4": "192.168.200.17",
                        "hostname": "web08.prod.loveholidays.com",
                        "memory": 20395616,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux web08.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 136,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168096
                            },
                            {
                                "id": 201,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 15350728,
                                "used": 5038988
                            },
                            {
                                "id": 147,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 9682020,
                                "used": 6378212
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 97,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.17",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:27:6a:de",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 65,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 2,
                    "cpuModel": "IvyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 91,
                        "snapshotId": 1,
                        "domain": "payment-service02.prod.loveholidays.com",
                        "ipv4": "192.168.201.49",
                        "hostname": "payment-service02.prod.loveholidays.com",
                        "memory": 3882444,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux payment-service02.prod.loveholidays.com 3.10.0-327.18.2.el7.x86_64 #1 SMP Thu May 12 11:03:55 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 97,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14842672,
                                "used": 3484324
                            },
                            {
                                "id": 34,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 143970
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 45,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.49",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:22:41:e1",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 6,
                    "snapshotId": 1,
                    "memory": 20971520,
                    "cpus": 12,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 31,
                        "snapshotId": 1,
                        "domain": "web03.prod.loveholidays.com",
                        "ipv4": "192.168.200.12",
                        "hostname": "web03.prod.loveholidays.com",
                        "memory": 20395616,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux web03.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 140,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168096
                            },
                            {
                                "id": 171,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 9682020,
                                "used": 6270404
                            },
                            {
                                "id": 53,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 15350728,
                                "used": 4973480
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 3,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.12",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:85:9c:db",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 31,
                    "snapshotId": 1,
                    "memory": 6291456,
                    "cpus": 8,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 42,
                        "snapshotId": 1,
                        "domain": "web01.prod.travelmatch.co.uk",
                        "ipv4": "192.168.200.20",
                        "hostname": "web01.prod.travelmatch.co.uk",
                        "memory": 5947200,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux web01.prod.travelmatch.co.uk 3.10.0-123.9.2.el7.x86_64 #1 SMP Tue Oct 28 18:05:26 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 205,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14987616,
                                "used": 5835432
                            },
                            {
                                "id": 91,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 25526508,
                                "used": 893160
                            },
                            {
                                "id": 155,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 118318
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 51,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.20",
                                "netmask": "255.255.255.0",
                                "broadcast": "192.168.200.255",
                                "ether": "52:54:00:cf:05:ab",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 42,
                    "snapshotId": 1,
                    "memory": 20971520,
                    "cpus": 12,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 54,
                        "snapshotId": 1,
                        "domain": "web10.prod.loveholidays.com",
                        "ipv4": "192.168.200.19",
                        "hostname": "web10.prod.loveholidays.com",
                        "memory": 20395616,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux web10.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 55,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 9682020,
                                "used": 5256116
                            },
                            {
                                "id": 73,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168096
                            },
                            {
                                "id": 213,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 15350728,
                                "used": 4893580
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 99,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.19",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:64:12:aa",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 70,
                    "snapshotId": 1,
                    "memory": 20971520,
                    "cpus": 12,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 83,
                        "snapshotId": 1,
                        "domain": "web04.prod.loveholidays.com",
                        "ipv4": "192.168.200.13",
                        "hostname": "web04.prod.loveholidays.com",
                        "memory": 20395616,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux web04.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 8,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168096
                            },
                            {
                                "id": 59,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 9682020,
                                "used": 6343768
                            },
                            {
                                "id": 79,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 15350728,
                                "used": 5042804
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 29,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.13",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:62:d2:db",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 7,
            "snapshotId": 1,
            "domain": "itl2.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.227",
            "hostname": "itl2.kvm.prod.loveholidays.com",
            "memory": 131737280,
            "swap": 16383996,
            "cpus": null,
            "timezone": null,
            "uname": "Linux itl2.kvm.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 70,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal00-root",
                    "mount": "/",
                    "size": 49257116,
                    "used": 2600884
                },
                {
                    "id": 24,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal01-var_lib_libvirt_imagesSSDRAID0",
                    "mount": "/var/lib/libvirt/imagesSSDRAID0",
                    "size": 750835768,
                    "used": 577306820
                },
                {
                    "id": 31,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vglocal00-var_lib_libvirt_images",
                    "mount": "/var/lib/libvirt/images",
                    "size": 496070232,
                    "used": 48247488
                },
                {
                    "id": 237,
                    "snapshotId": 1,
                    "name": "/dev/sdc1",
                    "mount": "/var/data",
                    "size": 576696392,
                    "used": 223622904
                },
                {
                    "id": 1,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 487634,
                    "used": 125244
                }
            ],
            "networkInterfaces": [
                {
                    "id": 109,
                    "snapshotId": 1,
                    "name": "eno3",
                    "inet": "192.168.210.227",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.210.255",
                    "ether": "3c:a8:2a:1f:18:42",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 100,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:bd:71:d1",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                },
                {
                    "id": 40,
                    "snapshotId": 1,
                    "name": "repl0",
                    "inet": "10.231.145.65",
                    "netmask": "255.255.255.192",
                    "broadcast": "10.231.145.127",
                    "ether": "3c:a8:2a:1f:18:43",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 133,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.227",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.200.255",
                    "ether": "3c:a8:2a:1f:18:41",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 23,
                    "snapshotId": 1,
                    "name": "eno1",
                    "inet": "192.168.100.227",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "3c:a8:2a:1f:18:40",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 29,
                    "snapshotId": 1,
                    "memory": 6291456,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 27,
                        "snapshotId": 1,
                        "domain": "solr01.prod.travelmatch.co.uk",
                        "ipv4": "192.168.201.15",
                        "hostname": "solr01.prod.travelmatch.co.uk",
                        "memory": 5946916,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux solr01.prod.travelmatch.co.uk 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 125,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14842672,
                                "used": 3104292
                            },
                            {
                                "id": 43,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168056
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 24,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.15",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:de:68:31",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 37,
                    "snapshotId": 1,
                    "memory": 1048576,
                    "cpus": 2,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 85,
                        "snapshotId": 1,
                        "domain": "load-balancer01.prod.loveholidays.com",
                        "ipv4": "192.168.201.34",
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": false
                    },
                    "state": "shut off",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 73,
                    "snapshotId": 1,
                    "memory": 25165824,
                    "cpus": 4,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 32,
                        "snapshotId": 1,
                        "domain": "hotelbeds-orchestrator01.prod.loveholidays.com",
                        "ipv4": "192.168.201.39",
                        "hostname": "hotelbeds-orchestrator01.prod.loveholidays.com",
                        "memory": 24524932,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux hotelbeds-orchestrator01.prod.loveholidays.com 3.10.0-327.13.1.el7.x86_64 #1 SMP Thu Mar 31 16:04:38 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 5,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 143988
                            },
                            {
                                "id": 92,
                                "snapshotId": 1,
                                "name": "/dev/mapper/home--hotelbeds-home--hotelbeds",
                                "mount": "/home/hotelbeds",
                                "size": 15346632,
                                "used": 5378504
                            },
                            {
                                "id": 176,
                                "snapshotId": 1,
                                "name": "/dev/mapper/db--hotelbeds-db--root",
                                "mount": "/var/lib/mysql",
                                "size": 103076792,
                                "used": 36772916
                            },
                            {
                                "id": 185,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 9682020,
                                "used": 3454980
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 95,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.39",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:15:b2:40",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 19,
                    "snapshotId": 1,
                    "memory": 6291456,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 19,
                        "snapshotId": 1,
                        "domain": "assisted-booking02.prod.loveholidays.com",
                        "ipv4": "192.168.201.32",
                        "hostname": "assisted-booking02.prod.loveholidays.com",
                        "memory": 5946916,
                        "swap": 1572860,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux assisted-booking02.prod.loveholidays.com 3.10.0-229.14.1.el7.x86_64 #1 SMP Tue Sep 15 15:05:51 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 51,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 13588480,
                                "used": 8497016
                            },
                            {
                                "id": 178,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 165276
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 9,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.32",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:fc:eb:dd",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 24,
                    "snapshotId": 1,
                    "memory": 6291456,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 94,
                        "snapshotId": 1,
                        "domain": "solr-auxiliary-master01.prod.loveholidays.com",
                        "ipv4": null,
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": true
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 20,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 4,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 96,
                        "snapshotId": 1,
                        "domain": "rabbitmq-hotelbeds01.prod.loveholidays.com",
                        "ipv4": "192.168.201.36",
                        "hostname": "rabbitmq-hotelbeds01.prod.loveholidays.com",
                        "memory": 3882196,
                        "swap": 20971516,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux rabbitmq-hotelbeds01.prod.loveholidays.com 3.10.0-327.13.1.el7.x86_64 #1 SMP Thu Mar 31 16:04:38 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 174,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 143908
                            },
                            {
                                "id": 206,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 50966572,
                                "used": 22786012
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 53,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.36",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:1b:ba:6a",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 8,
                    "snapshotId": 1,
                    "memory": 16777216,
                    "cpus": 8,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 61,
                        "snapshotId": 1,
                        "domain": "hotelbeds-offers-generator01.prod.loveholidays.com",
                        "ipv4": "192.168.201.38",
                        "hostname": "hotelbeds-offers-generator01.prod.loveholidays.com",
                        "memory": 16267956,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux hotelbeds-offers-generator01.prod.loveholidays.com 3.10.0-327.13.1.el7.x86_64 #1 SMP Thu Mar 31 16:04:38 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 220,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 143918
                            },
                            {
                                "id": 203,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 9682020,
                                "used": 3203340
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 88,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.38",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:24:ed:ba",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 14,
                    "snapshotId": 1,
                    "memory": 8388608,
                    "cpus": 8,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 47,
                        "snapshotId": 1,
                        "domain": "booking-processor01.prod.loveholidays.com",
                        "ipv4": "192.168.201.30",
                        "hostname": "booking-processor01.prod.loveholidays.com",
                        "memory": 8010840,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux booking-processor01.prod.loveholidays.com 3.10.0-229.14.1.el7.x86_64 #1 SMP Tue Sep 15 15:05:51 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 105,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 168128
                            },
                            {
                                "id": 162,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 10190100,
                                "used": 2077616
                            },
                            {
                                "id": 44,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 9682020,
                                "used": 999124
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 90,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.30",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:22:d7:8f",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 47,
                    "snapshotId": 1,
                    "memory": 25165824,
                    "cpus": 12,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 20,
                        "snapshotId": 1,
                        "domain": "solr-master01.prod.loveholidays.com",
                        "ipv4": "192.168.201.10",
                        "hostname": "solr-master01.prod.loveholidays.com",
                        "memory": 24524368,
                        "swap": 4194300,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux solr-master01.prod.loveholidays.com 3.10.0-229.11.1.el7.x86_64 #1 SMP Thu Aug 6 01:06:18 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 48,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 140345
                            },
                            {
                                "id": 120,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 14286280,
                                "used": 6733092
                            },
                            {
                                "id": 126,
                                "snapshotId": 1,
                                "name": "/dev/mapper/solr-srv_solr",
                                "mount": "/var/solr",
                                "size": 361102476,
                                "used": 145745196
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 20,
                                "snapshotId": 1,
                                "name": "eth1",
                                "inet": "10.231.145.80",
                                "netmask": "255.255.255.192",
                                "broadcast": "10.231.145.127",
                                "ether": "52:54:00:8e:13:a1",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            },
                            {
                                "id": 13,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.10",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:bf:3c:ed",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 11,
            "snapshotId": 1,
            "domain": "log1.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.154",
            "hostname": "log1.kvm.prod.loveholidays.com",
            "memory": 115302072,
            "swap": 4194300,
            "cpus": null,
            "timezone": null,
            "uname": "Linux log1.kvm.prod.loveholidays.com 3.10.0-229.4.2.el7.x86_64 #1 SMP Wed May 13 10:06:09 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [
                {
                    "id": 58,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vgdata00-lvdata00",
                    "mount": "/var/lib/libvirt/imagesSSDRAID0",
                    "size": 767761296,
                    "used": 722540612
                },
                {
                    "id": 17,
                    "snapshotId": 1,
                    "name": "/dev/mapper/vgdata01-lvdata01",
                    "mount": "/var/lib/libvirt/imagesSSDRAID1",
                    "size": 383813184,
                    "used": 375732404
                },
                {
                    "id": 223,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-root",
                    "mount": "/",
                    "size": 52403200,
                    "used": 4717500
                },
                {
                    "id": 195,
                    "snapshotId": 1,
                    "name": "/dev/mapper/centos-home",
                    "mount": "/var/lib/libvirt/images",
                    "size": 235167548,
                    "used": 160952764
                },
                {
                    "id": 233,
                    "snapshotId": 1,
                    "name": "/dev/sda1",
                    "mount": "/boot",
                    "size": 508588,
                    "used": 209508
                }
            ],
            "networkInterfaces": [
                {
                    "id": 71,
                    "snapshotId": 1,
                    "name": "em1",
                    "inet": "192.168.100.154",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "ec:f4:bb:bf:62:90",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 62,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:48:e5:b8",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                },
                {
                    "id": 126,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.154",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.200.255",
                    "ether": "ec:f4:bb:bf:62:91",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                }
            ],
            "error": false,
            "kvmDomains": [
                {
                    "id": 13,
                    "snapshotId": 1,
                    "memory": 25165824,
                    "cpus": 8,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 23,
                        "snapshotId": 1,
                        "domain": "logfaces01.prod.loveholidays.com",
                        "ipv4": "192.168.200.60",
                        "hostname": "logfaces01.prod.loveholidays.com",
                        "memory": 24525552,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux logfaces01.prod.loveholidays.com 3.10.0-123.9.2.el7.x86_64 #1 SMP Tue Oct 28 18:05:26 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 175,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 30324516,
                                "used": 19880456
                            },
                            {
                                "id": 80,
                                "snapshotId": 1,
                                "name": "/dev/mapper/mongo-var_lib_mongo",
                                "mount": "/var/lib/mongo",
                                "size": 371423688,
                                "used": 182170236
                            },
                            {
                                "id": 76,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 146024
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 114,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.60",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:b0:0d:b0",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 80,
                    "snapshotId": 1,
                    "memory": 3145728,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 41,
                        "snapshotId": 1,
                        "domain": "es02.prod.loveholidays.com",
                        "ipv4": "192.168.200.41",
                        "hostname": "es02.prod.loveholidays.com",
                        "memory": 2917152,
                        "swap": 1048572,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux es02.prod.loveholidays.com 3.10.0-123.9.3.el7.x86_64 #1 SMP Thu Nov 6 15:06:03 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 149,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-var_lib_elasticsearch",
                                "mount": "/var/lib/elasticsearch",
                                "size": 4908544,
                                "used": 85324
                            },
                            {
                                "id": 81,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 9803052,
                                "used": 4744056
                            },
                            {
                                "id": 143,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 118268
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 52,
                                "snapshotId": 1,
                                "name": "ens3",
                                "inet": "192.168.200.41",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:eb:5c:cb",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 1,
                    "snapshotId": 1,
                    "memory": 31457280,
                    "cpus": 12,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 52,
                        "snapshotId": 1,
                        "domain": "elk01.prod.loveholidays.com",
                        "ipv4": "192.168.200.62",
                        "hostname": "elk01.prod.loveholidays.com",
                        "memory": 30718216,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux elk01.prod.loveholidays.com 3.10.0-123.9.3.el7.x86_64 #1 SMP Thu Nov 6 15:06:03 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 118,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 30324516,
                                "used": 4889952
                            },
                            {
                                "id": 96,
                                "snapshotId": 1,
                                "name": "/dev/mapper/elasticsearch-var_lib_elasticsearch",
                                "mount": "/var/lib/elasticsearch",
                                "size": 309496640,
                                "used": 159812096
                            },
                            {
                                "id": 11,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 118326
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 81,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.62",
                                "netmask": "255.255.255.0",
                                "broadcast": "192.168.200.255",
                                "ether": "52:54:00:22:1e:d9",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 12,
                    "snapshotId": 1,
                    "memory": 2097152,
                    "cpus": 4,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 30,
                        "snapshotId": 1,
                        "domain": "sensu01.prod.loveholidays.com",
                        "ipv4": "192.168.200.63",
                        "hostname": "sensu01.prod.loveholidays.com",
                        "memory": 1883872,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux sensu01.prod.loveholidays.com 3.10.0-327.10.1.el7.x86_64 #1 SMP Tue Feb 16 17:03:50 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 236,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 166582
                            },
                            {
                                "id": 115,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 30324516,
                                "used": 4200204
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 122,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.63",
                                "netmask": "255.255.255.0",
                                "broadcast": "192.168.200.255",
                                "ether": "52:54:00:33:7f:33",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 40,
                    "snapshotId": 1,
                    "memory": 2097152,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 48,
                        "snapshotId": 1,
                        "domain": "pim01.prod.loveholidays.com",
                        "ipv4": "192.168.200.68",
                        "hostname": "pim01.prod.loveholidays.com",
                        "memory": 1884976,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux pim01.prod.loveholidays.com 3.10.0-123.13.2.el7.x86_64 #1 SMP Thu Dec 18 14:09:13 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 231,
                                "snapshotId": 1,
                                "name": "/dev/mapper/data-var_pim",
                                "mount": "/var/pim",
                                "size": 20507216,
                                "used": 45080
                            },
                            {
                                "id": 42,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 118408
                            },
                            {
                                "id": 194,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos_root-srv",
                                "mount": "/srv",
                                "size": 9947976,
                                "used": 1581116
                            },
                            {
                                "id": 3,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos_root-root",
                                "mount": "/",
                                "size": 15084504,
                                "used": 1506580
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 70,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.68",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:85:30:49",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 46,
                    "snapshotId": 1,
                    "memory": 14680064,
                    "cpus": 6,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 79,
                        "snapshotId": 1,
                        "domain": "web01.stage.loveholidays.com",
                        "ipv4": "192.168.200.30",
                        "hostname": "web01.stage.loveholidays.com",
                        "memory": 14204940,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux web01.stage.loveholidays.com 3.10.0-123.9.3.el7.x86_64 #1 SMP Thu Nov 6 15:06:03 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 84,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 14842672,
                                "used": 10408244
                            },
                            {
                                "id": 18,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 146116
                            },
                            {
                                "id": 142,
                                "snapshotId": 1,
                                "name": "/dev/mapper/mysql-var_lib_mysql",
                                "mount": "/var/lib/mysql",
                                "size": 29803204,
                                "used": 15090140
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 44,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.30",
                                "netmask": "255.255.255.0",
                                "broadcast": "192.168.200.255",
                                "ether": "52:54:00:5d:5d:7c",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 26,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 21,
                        "snapshotId": 1,
                        "domain": "hotelbeds-mongo01.prod.loveholidays.com",
                        "ipv4": "192.168.201.43",
                        "hostname": "hotelbeds-mongo01.prod.loveholidays.com",
                        "memory": 3882196,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux hotelbeds-mongo01.prod.loveholidays.com 3.10.0-327.13.1.el7.x86_64 #1 SMP Thu Mar 31 16:04:38 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 62,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 20003268,
                                "used": 5221304
                            },
                            {
                                "id": 135,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 143970
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 82,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.43",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:4d:88:9a",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 75,
                    "snapshotId": 1,
                    "memory": 25165824,
                    "cpus": 12,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 84,
                        "snapshotId": 1,
                        "domain": "grafana01.prod.loveholidays.com",
                        "ipv4": "192.168.200.61",
                        "hostname": "grafana01.prod.loveholidays.com",
                        "memory": 24525088,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux grafana01.prod.loveholidays.com 3.10.0-123.9.3.el7.x86_64 #1 SMP Thu Nov 6 15:06:03 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 35,
                                "snapshotId": 1,
                                "name": "/dev/mapper/influxdb-opt_influxdb",
                                "mount": "/opt/influxdb",
                                "size": 237248376,
                                "used": 125404504
                            },
                            {
                                "id": 168,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 118327
                            },
                            {
                                "id": 151,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 30324516,
                                "used": 5592212
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 12,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.61",
                                "netmask": "255.255.255.0",
                                "broadcast": "192.168.200.255",
                                "ether": "52:54:00:99:0b:31",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 32,
                    "snapshotId": 1,
                    "memory": 4194304,
                    "cpus": 4,
                    "cpuModel": "SandyBridge",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 37,
                        "snapshotId": 1,
                        "domain": "sentry01.prod.loveholidays.com",
                        "ipv4": "192.168.200.67",
                        "hostname": "sentry01.prod.loveholidays.com",
                        "memory": 3882524,
                        "swap": 1048572,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux sentry01.prod.loveholidays.com 3.10.0-229.1.2.el7.x86_64 #1 SMP Fri Mar 27 03:04:26 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 165,
                                "snapshotId": 1,
                                "name": "/dev/mapper/mysql-var_lib_mysql",
                                "mount": "/var/lib/pgsql",
                                "size": 72105080,
                                "used": 30353580
                            },
                            {
                                "id": 19,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 14842672,
                                "used": 4963884
                            },
                            {
                                "id": 67,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 163025
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 111,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.67",
                                "netmask": "255.255.255.0",
                                "broadcast": "192.168.200.255",
                                "ether": "52:54:00:de:5a:98",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 66,
                    "snapshotId": 1,
                    "memory": 2097152,
                    "cpus": 2,
                    "cpuModel": null,
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 87,
                        "snapshotId": 1,
                        "domain": "rabbitmq01.prod.loveholidays.com",
                        "ipv4": "192.168.200.64",
                        "hostname": "rabbitmq01.prod.loveholidays.com",
                        "memory": 1885192,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux rabbitmq01.prod.loveholidays.com 3.10.0-123.9.2.el7.x86_64 #1 SMP Tue Oct 28 18:05:26 UTC 2014 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 150,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 487634,
                                "used": 118284
                            },
                            {
                                "id": 196,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos00-root",
                                "mount": "/",
                                "size": 30324516,
                                "used": 3779920
                            },
                            {
                                "id": 188,
                                "snapshotId": 1,
                                "name": "/dev/mapper/rabbitmq-var_lib_rabbitmq",
                                "mount": "/var/lib/rabbitmq",
                                "size": 20507216,
                                "used": 57344
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 76,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.200.64",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:a2:20:3e",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                }
            ]
        },
        {
            "id": 9,
            "snapshotId": 1,
            "domain": "bo01.kvm.prod.loveholidays.com",
            "ipv4": "192.168.100.87",
            "hostname": "bo01.kvm.prod.loveholidays.com",
            "memory": 65681020,
            "swap": 2097148,
            "cpus": null,
            "timezone": null,
            "uname": "Linux bo01.kvm.prod.loveholidays.com 3.10.0-327.36.1.el7.x86_64 #1 SMP Sun Sep 18 13:04:29 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
            "fileSystems": [],
            "networkInterfaces": [
                {
                    "id": 8,
                    "snapshotId": 1,
                    "name": "em3",
                    "inet": "192.168.210.87",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.210.255",
                    "ether": "94:57:a5:6c:69:1e",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 47,
                    "snapshotId": 1,
                    "name": "virbr0",
                    "inet": "192.168.122.1",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.122.255",
                    "ether": "52:54:00:2a:00:d4",
                    "flags": "|UP|BROADCAST|MULTICAST|"
                },
                {
                    "id": 129,
                    "snapshotId": 1,
                    "name": "bond0.777",
                    "inet": "192.168.100.87",
                    "netmask": "255.255.255.0",
                    "broadcast": "192.168.100.255",
                    "ether": "94:57:a5:6c:69:1c",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                },
                {
                    "id": 30,
                    "snapshotId": 1,
                    "name": "bridge0",
                    "inet": "192.168.200.87",
                    "netmask": "255.255.252.0",
                    "broadcast": "192.168.203.255",
                    "ether": "94:57:a5:6c:69:1c",
                    "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                }
            ],
            "error": true,
            "kvmDomains": [
                {
                    "id": 76,
                    "snapshotId": 1,
                    "memory": 1048576,
                    "cpus": 2,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 77,
                        "snapshotId": 1,
                        "domain": "lb01.prod.loveholidays.com",
                        "ipv4": "192.168.201.178",
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": true
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 78,
                    "snapshotId": 1,
                    "memory": 16777216,
                    "cpus": 4,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 67,
                        "snapshotId": 1,
                        "domain": "backoffice01.prod.loveholidays.com",
                        "ipv4": "192.168.201.44",
                        "hostname": "backoffice01.prod.loveholidays.com",
                        "memory": 16268420,
                        "swap": 2097148,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux backoffice01.prod.loveholidays.com 3.10.0-327.28.3.el7.x86_64 #1 SMP Thu Aug 18 19:05:49 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [
                            {
                                "id": 226,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-srv",
                                "mount": "/srv",
                                "size": 7617660,
                                "used": 326864
                            },
                            {
                                "id": 20,
                                "snapshotId": 1,
                                "name": "/dev/vda1",
                                "mount": "/boot",
                                "size": 508588,
                                "used": 216320
                            },
                            {
                                "id": 191,
                                "snapshotId": 1,
                                "name": "/dev/mapper/centos-root",
                                "mount": "/",
                                "size": 10190100,
                                "used": 2010100
                            }
                        ],
                        "networkInterfaces": [
                            {
                                "id": 35,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.44",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:48:d8:38",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": false
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 81,
                    "snapshotId": 1,
                    "memory": 8290304,
                    "cpus": 4,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 86,
                        "snapshotId": 1,
                        "domain": "nextcloud.prod.loveholidays.com",
                        "ipv4": "192.168.201.58",
                        "hostname": "nextcloud.prod.loveholidays.com",
                        "memory": 7912652,
                        "swap": 0,
                        "cpus": null,
                        "timezone": null,
                        "uname": "Linux nextcloud.prod.loveholidays.com 3.10.0-327.el7.x86_64 #1 SMP Thu Nov 19 22:10:57 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux",
                        "fileSystems": [],
                        "networkInterfaces": [
                            {
                                "id": 131,
                                "snapshotId": 1,
                                "name": "docker0",
                                "inet": "172.17.0.1",
                                "netmask": "255.255.0.0",
                                "broadcast": "0.0.0.0",
                                "ether": "02:42:e3:39:98:c2",
                                "flags": "|UP|BROADCAST|MULTICAST|"
                            },
                            {
                                "id": 7,
                                "snapshotId": 1,
                                "name": "eth0",
                                "inet": "192.168.201.58",
                                "netmask": "255.255.252.0",
                                "broadcast": "192.168.203.255",
                                "ether": "52:54:00:13:f1:da",
                                "flags": "|UP|BROADCAST|RUNNING|MULTICAST|"
                            }
                        ],
                        "error": true
                    },
                    "state": "running",
                    "kvmDiskFileDevices": [],
                    "error": false
                },
                {
                    "id": 59,
                    "snapshotId": 1,
                    "memory": 1048576,
                    "cpus": 2,
                    "cpuModel": "Haswell-noTSX",
                    "osArch": "x86_64",
                    "osMachine": "pc-i440fx-rhel7.0.0",
                    "osType": "hvm",
                    "virtualMachine": {
                        "id": 57,
                        "snapshotId": 1,
                        "domain": "lowcost.prod.loveholidays.com",
                        "ipv4": "192.168.201.55",
                        "hostname": null,
                        "memory": null,
                        "swap": null,
                        "cpus": null,
                        "timezone": null,
                        "uname": null,
                        "fileSystems": [],
                        "networkInterfaces": [],
                        "error": false
                    },
                    "state": "shut off",
                    "kvmDiskFileDevices": [],
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
