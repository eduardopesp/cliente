-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-02-2016 a las 19:57:41
-- Versión del servidor: 10.1.9-MariaDB
-- Versión de PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `daw2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id_alumno` int(11) NOT NULL,
  `matricula` varchar(10) NOT NULL,
  `apellido1` varchar(30) NOT NULL,
  `apellido2` varchar(30) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `nota_cliente` int(11) NOT NULL,
  `nota_x` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id_alumno`, `matricula`, `apellido1`, `apellido2`, `nombre`, `nota_cliente`, `nota_x`) VALUES
(1, '1', 'ARRACO', 'MARTIN', 'ALBERTO', 0, 8),
(2, '2', 'BASARTE', 'BAHÓN', 'ALVARO', 0, 6),
(3, '3', 'CASANOVA', 'ZARAGOZA', 'SAUL', 0, 7),
(4, '4', 'CASTRO', 'BERDALA', 'MANUEL', 0, 5),
(5, '5', 'CODINA', 'LAHOZ', 'ALVARO', 0, 8),
(6, '6', 'FALCON', 'SABATE', 'BORJA', 0, 6),
(7, '7', 'HERAS', 'MONREAL', 'ALVARO', 0, 8),
(8, '8', 'HUERTA', 'LEGIDO', 'ARKAITZ', 0, 8),
(9, '9', 'HUETE', 'LOPEZ', 'JORGE', 0, 6),
(10, '10', 'LABORDA', 'SANCHEZ', 'JONATAN', 0, 7),
(11, '11', 'LAILLA', 'ESTRADA', 'JESUS', 0, 8),
(12, '12', 'LAPUENTE', 'BERMEJO', 'FRANCISCO', 0, 9),
(13, '13', 'LOPEZ', 'CRUZ', 'MARCOS', 0, 8),
(14, '14', 'MARTINEZ', 'LABRADOR', 'ALBA', 0, 7),
(15, '15', 'MARTINEZ', 'TUTOR', 'IVAN', 0, 9),
(16, '16', 'MENDEZ', 'ROMANCE', 'VICTOR', 0, 7),
(17, '17', 'PEÑA', 'FLORENTIN', 'ALEJANDRO', 0, 6),
(18, '18', 'PEREZ', 'ESPAÑOL', 'EDUARDO', 0, 8),
(19, '19', 'PEREZ', 'MARIN', 'CARLOS', 0, 9),
(20, '20', 'PORTA', 'AGUILERA', 'FERNANDO', 0, 7),
(21, '21', 'RUS', 'BARBA', 'ALBERTO', 0, 7);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
