-- Data Definition Language for database.

CREATE DATABASE IF NOT EXISTS devicelytics;

USE devicelytics;

CREATE TABLE opvar (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	column_name VARCHAR(64) NOT NULL,
	column_label VARCHAR(64) NOT NULL
) CHARSET=UTF8;

CREATE TABLE oplog (
    id BIGINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    program VARCHAR(128) NOT NULL,
    position VARCHAR(16) NOT NULL,
    weld_speed FLOAT NOT NULL DEFAULT 0.0,
    command_current FLOAT NOT NULL DEFAULT 0.0,
    current_output FLOAT NOT NULL DEFAULT 0.0,
    command_voltage FLOAT NOT NULL DEFAULT 0.0,
    voltage_output FLOAT NOT NULL DEFAULT 0.0,
    short_count FLOAT NOT NULL DEFAULT 0.0,
	pulse_frequency FLOAT NOT NULL DEFAULT 0.0,
    motor_current FLOAT NOT NULL DEFAULT 0.0,
    wire_speed FLOAT NOT NULL DEFAULT 0.0,
    instant_arclack_time FLOAT NOT NULL DEFAULT 0.0
) CHARSET=UTF8;