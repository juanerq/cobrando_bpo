drop database if exists cobrando_dpo;

create schema cobrando_dpo;
use cobrando_dpo;


create table departamento(
	codigo int auto_increment primary key,
    nombre varchar(100),
	presupuesto double
);

create table empleado(
	codigo int auto_increment primary key,
    nit varchar(9),
    nombre varchar(100),
	apellido1 varchar(100),
    apellido2 varchar(100),
	codigo_departamento int,
    KEY empleado_departamento_FK (codigo_departamento),
	CONSTRAINT empleado_departamento_FK FOREIGN KEY (codigo_departamento) REFERENCES departamento(codigo)
);

insert into departamento(codigo, nombre, presupuesto)
values(1, 'depatamento1', 230000),
(2, 'depatamento2', 2880000),
(3, 'depatamento3', 2220000),
(4, 'depatamento4', 770000);

insert into empleado(nit, nombre, apellido1, apellido2, codigo_departamento)
values('nit1', 'Juan', 'Reyes', 'Quintero', 1),
('nit2', 'Fer', 'Velazques', 'Medina', 1),
('nit3', 'Maria', 'Reyes', 'Quintero', 1),
('nit4', 'Gloria', 'Amaparo', 'Quintero', 1);

select * from empleado;
