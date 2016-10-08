CREATE TABLE domain_entry (
  domain  VARCHAR(128) PRIMARY KEY,
  enabled BOOLEAN NOT NULL
);

CREATE TABLE host_entry (
  domain  VARCHAR(128) PRIMARY KEY,
  host    VARCHAR(128) UNIQUE NOT NULL,
  ipv4    VARCHAR(16) UNIQUE,
  enabled BOOLEAN NOT NULL
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
  host        VARCHAR(128) NOT NULL,
  ipv4        VARCHAR(16),
  hostname    VARCHAR(128),
  memory      INT,
  swap        INT,
  cpus        INT,
  timezone    VARCHAR(64),
  uname       VARCHAR(256),
  error       BOOLEAN      NOT NULL
);

CREATE TABLE kvm_domain (
  id                  BIGINT PRIMARY KEY AUTO_INCREMENT,
  snapshot_id         BIGINT      NOT NULL,
  physical_machine_id BIGINT,
  virtual_machine_id  BIGINT,
  state               VARCHAR(16) NOT NULL,
  memory              INT,
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
  dev           VARCHAR(16)  NOT NULL,
  source        VARCHAR(256) NOT NULL
);

CREATE TABLE file_system (
  id          BIGINT PRIMARY KEY AUTO_INCREMENT,
  snapshot_id BIGINT       NOT NULL,
  machine_id  BIGINT,
  name        VARCHAR(128) NOT NULL,
  mount       VARCHAR(128) NOT NULL,
  size        INT          NOT NULL,
  used        INT          NOT NULL
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
