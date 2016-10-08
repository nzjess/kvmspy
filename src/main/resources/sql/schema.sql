CREATE TABLE host_entry (
  hostname VARCHAR(128) PRIMARY KEY,
  enabled  BOOLEAN NOT NULL
);

CREATE TABLE snapshot (
  id          BIGINT PRIMARY KEY AUTO_INCREMENT,
  started_at  DATETIME NOT NULL,
  finished_at DATETIME,
  archived    BOOLEAN  NOT NULL
);

CREATE TABLE machine (
  id          BIGINT PRIMARY KEY AUTO_INCREMENT,
  snapshot_id BIGINT       NOT NULL,
  type        VARCHAR(16)  NOT NULL,
  domain      VARCHAR(128) NOT NULL,
  ipv4        VARCHAR(16),
  hostname    VARCHAR(128),
  uname       VARCHAR(256),
  memory_kib  INT,
  cpus        INT,
  error       BOOLEAN      NOT NULL
);

CREATE TABLE kvm_domain (
  id                  BIGINT PRIMARY KEY AUTO_INCREMENT,
  snapshot_id         BIGINT      NOT NULL,
  physical_machine_id BIGINT,
  virtual_machine_id  BIGINT,
  state               VARCHAR(16) NOT NULL,
  cpus                INT,
  cpu_model           VARCHAR(32),
  os_arch             VARCHAR(16),
  os_machine          VARCHAR(64),
  os_type             VARCHAR(16),
  error               BOOLEAN     NOT NULL
);

CREATE TABLE kvm_disk_file_device (
  id            BIGINT PRIMARY KEY AUTO_INCREMENT,
  snapshot_id   BIGINT       NOT NULL,
  kvm_domain_id BIGINT,
  source        VARCHAR(256) NOT NULL,
  driver_name   VARCHAR(16)  NOT NULL,
  driver_type   VARCHAR(16)  NOT NULL,
  dev           VARCHAR(16)  NOT NULL,
  bus           VARCHAR(16)  NOT NULL
);

CREATE TABLE file_system (
  id          BIGINT PRIMARY KEY AUTO_INCREMENT,
  snapshot_id BIGINT       NOT NULL,
  machine_id  BIGINT,
  name        VARCHAR(128) NOT NULL,
  mount       VARCHAR(128) NOT NULL,
  size_kib    INT          NOT NULL,
  used_kib    INT          NOT NULL
);

CREATE TABLE network_interface (
  id          BIGINT PRIMARY KEY AUTO_INCREMENT,
  snapshot_id BIGINT       NOT NULL,
  machine_id  BIGINT,
  name        VARCHAR(16)  NOT NULL,
  inet        VARCHAR(16)  NOT NULL,
  netmask     VARCHAR(16)  NOT NULL,
  broadcast   VARCHAR(16)  NOT NULL,
  ether       VARCHAR(18)  NOT NULL,
  flags       VARCHAR(128) NOT NULL
);
