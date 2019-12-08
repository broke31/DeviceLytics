-- Data Definition Language for database.

CREATE DATABASE IF NOT EXISTS devicelytics;

USE devicelytics;

CREATE TABLE `opvar` (
  `id` int(10) UNSIGNED NOT NULL,
  `column_name` varchar(64) NOT NULL,
  `column_label` varchar(64) NOT NULL,
  `csv_label` varchar(64) NOT NULL,
  `show_for_chart` tinyint(3) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `oplog` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `program` varchar(128) NOT NULL,
  `position` varchar(16) NOT NULL,
  `weld_speed` float NOT NULL DEFAULT '0',
  `command_current` float NOT NULL DEFAULT '0',
  `current_output` float NOT NULL DEFAULT '0',
  `command_voltage` float NOT NULL DEFAULT '0',
  `voltage_output` float NOT NULL DEFAULT '0',
  `short_count` float NOT NULL DEFAULT '0',
  `pulse_frequency` float NOT NULL DEFAULT '0',
  `motor_current` float NOT NULL DEFAULT '0',
  `wire_speed` float NOT NULL DEFAULT '0',
  `instant_arclack_time` float NOT NULL DEFAULT '0',
  `error` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;