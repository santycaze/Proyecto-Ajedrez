-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: ajedrez
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adminsistema`
--

DROP TABLE IF EXISTS `adminsistema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adminsistema` (
  `idAdmin` varchar(45) NOT NULL,
  `idUsuario` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idAdmin`),
  KEY `usuario_idx` (`idUsuario`),
  CONSTRAINT `usuario2` FOREIGN KEY (`idUsuario`) REFERENCES `mydb`.`usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminsistema`
--

LOCK TABLES `adminsistema` WRITE;
/*!40000 ALTER TABLE `adminsistema` DISABLE KEYS */;
/*!40000 ALTER TABLE `adminsistema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fichas`
--

DROP TABLE IF EXISTS `fichas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fichas` (
  `idFichas` int NOT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `idpartidas` int DEFAULT NULL,
  PRIMARY KEY (`idFichas`),
  KEY `partidas_idx` (`idpartidas`),
  CONSTRAINT `partidass` FOREIGN KEY (`idpartidas`) REFERENCES `mydb`.`partidas` (`idpartidas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fichas`
--

LOCK TABLES `fichas` WRITE;
/*!40000 ALTER TABLE `fichas` DISABLE KEYS */;
/*!40000 ALTER TABLE `fichas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fichas_comidas`
--

DROP TABLE IF EXISTS `fichas_comidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fichas_comidas` (
  `idfichas_comidas` int NOT NULL,
  `id_partidas` int DEFAULT NULL,
  `id_fichas` int DEFAULT NULL,
  `id_movimientos` int DEFAULT NULL,
  PRIMARY KEY (`idfichas_comidas`),
  KEY `fichas_idx` (`id_fichas`),
  KEY `partidas_idx` (`id_partidas`),
  KEY `movimientos_idx` (`id_movimientos`),
  CONSTRAINT `fichas` FOREIGN KEY (`id_fichas`) REFERENCES `mydb`.`fichas` (`idFichas`),
  CONSTRAINT `movimientos` FOREIGN KEY (`id_movimientos`) REFERENCES `mydb`.`movimientos` (`idMovimientos`),
  CONSTRAINT `partidaas` FOREIGN KEY (`id_partidas`) REFERENCES `mydb`.`partidas` (`idpartidas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fichas_comidas`
--

LOCK TABLES `fichas_comidas` WRITE;
/*!40000 ALTER TABLE `fichas_comidas` DISABLE KEYS */;
/*!40000 ALTER TABLE `fichas_comidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jugador`
--

DROP TABLE IF EXISTS `jugador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jugador` (
  `idJugador` varchar(45) NOT NULL,
  `idUsuario` varchar(45) DEFAULT NULL,
  `rankingJugador` int DEFAULT NULL,
  `institucion` varchar(45) DEFAULT NULL,
  `añoCurso` int DEFAULT NULL,
  `contactoLiceo` int DEFAULT NULL,
  `nombreDirector` varchar(45) DEFAULT NULL,
  `mailDirector` varchar(45) DEFAULT NULL,
  `logros` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idJugador`),
  KEY `usuario_idx` (`idUsuario`),
  CONSTRAINT `usuario` FOREIGN KEY (`idUsuario`) REFERENCES `mydb`.`usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jugador`
--

LOCK TABLES `jugador` WRITE;
/*!40000 ALTER TABLE `jugador` DISABLE KEYS */;
INSERT INTO `jugador` VALUES ('1','3',6,'IEP',6,123456879,'SDFGSDF','SDFGSDF@gmail.com','logro generico'),('2','4',5,'IEP',6,123456789,'XVCBXVB','XVCBXVB@gmail.com','logro generico');
/*!40000 ALTER TABLE `jugador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jugadortorneo`
--

DROP TABLE IF EXISTS `jugadortorneo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jugadortorneo` (
  `idJugadorTorneo` varchar(45) NOT NULL,
  `idJugador` varchar(45) DEFAULT NULL,
  `idTorneo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idJugadorTorneo`),
  KEY `jugador_idx` (`idJugador`),
  KEY `torneo_idx` (`idTorneo`),
  CONSTRAINT `jugador` FOREIGN KEY (`idJugador`) REFERENCES `mydb`.`jugador` (`idJugador`),
  CONSTRAINT `torneo1` FOREIGN KEY (`idTorneo`) REFERENCES `mydb`.`torneo` (`idTorneo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jugadortorneo`
--

LOCK TABLES `jugadortorneo` WRITE;
/*!40000 ALTER TABLE `jugadortorneo` DISABLE KEYS */;
/*!40000 ALTER TABLE `jugadortorneo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jugadortorneomangas`
--

DROP TABLE IF EXISTS `jugadortorneomangas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jugadortorneomangas` (
  `idJugadorTorneoMangas` varchar(45) NOT NULL,
  `idJugadorTorneo` varchar(45) DEFAULT NULL,
  `id_manga` int DEFAULT NULL,
  PRIMARY KEY (`idJugadorTorneoMangas`),
  KEY `jug torneo_idx` (`idJugadorTorneo`),
  KEY `mangas_idx` (`id_manga`),
  CONSTRAINT `jug torneo` FOREIGN KEY (`idJugadorTorneo`) REFERENCES `mydb`.`jugadortorneo` (`idJugadorTorneo`),
  CONSTRAINT `mangass` FOREIGN KEY (`id_manga`) REFERENCES `mydb`.`mangas` (`id_manga`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jugadortorneomangas`
--

LOCK TABLES `jugadortorneomangas` WRITE;
/*!40000 ALTER TABLE `jugadortorneomangas` DISABLE KEYS */;
/*!40000 ALTER TABLE `jugadortorneomangas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mangas`
--

DROP TABLE IF EXISTS `mangas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mangas` (
  `id_manga` int NOT NULL,
  `nombreManga` varchar(45) DEFAULT NULL,
  `id_torneo` varchar(45) DEFAULT NULL,
  `fase` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_manga`),
  KEY `torneo_idx` (`id_torneo`),
  CONSTRAINT `2torneo` FOREIGN KEY (`id_torneo`) REFERENCES `mydb`.`torneo` (`idTorneo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mangas`
--

LOCK TABLES `mangas` WRITE;
/*!40000 ALTER TABLE `mangas` DISABLE KEYS */;
/*!40000 ALTER TABLE `mangas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimientos`
--

DROP TABLE IF EXISTS `movimientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movimientos` (
  `idMovimientos` int NOT NULL,
  `lugarAnterior` varchar(45) DEFAULT NULL,
  `lugarActual` varchar(45) DEFAULT NULL,
  `lugarComer` varchar(45) DEFAULT NULL,
  `tiempo_movida` int DEFAULT NULL,
  `idpartidas` int DEFAULT NULL,
  PRIMARY KEY (`idMovimientos`),
  KEY `partidas_idx` (`idpartidas`),
  CONSTRAINT `partidas22` FOREIGN KEY (`idpartidas`) REFERENCES `mydb`.`partidas` (`idpartidas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimientos`
--

LOCK TABLES `movimientos` WRITE;
/*!40000 ALTER TABLE `movimientos` DISABLE KEYS */;
/*!40000 ALTER TABLE `movimientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noticia`
--

DROP TABLE IF EXISTS `noticia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `noticia` (
  `idNoticia` varchar(45) NOT NULL,
  `idPeriodista` varchar(45) DEFAULT NULL,
  `nombreUsuario` varchar(45) DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `contenido` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idNoticia`),
  KEY `periodista_idx` (`idPeriodista`),
  CONSTRAINT `periodista` FOREIGN KEY (`idPeriodista`) REFERENCES `mydb`.`periodistas` (`idPeriodista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticia`
--

LOCK TABLES `noticia` WRITE;
/*!40000 ALTER TABLE `noticia` DISABLE KEYS */;
INSERT INTO `noticia` VALUES ('1','1','Usuario1','titulo generico 1',NULL),('2','1','Usuario1','titulo generico 2','Lorem ipsum dolor sit amet.'),('3','2','Usuario2','titulo generico 3','Lorem ipsum dolor sit amet.'),('4','2','Usuario2','titulo generico 4','Lorem ipsum dolor sit amet.'),('5','2','Usuario2','titulo generico 5','Lorem ipsum dolor sit amet.'),('6','2','Usuario2','titulo generico 5','Lorem ipsum dolor sit amet.');
/*!40000 ALTER TABLE `noticia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partidas`
--

DROP TABLE IF EXISTS `partidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partidas` (
  `idpartidas` int NOT NULL,
  `fechayhora_inicio` varchar(45) DEFAULT NULL,
  `fechayhora_fin` varchar(45) DEFAULT NULL,
  `idPartidos` int DEFAULT NULL,
  PRIMARY KEY (`idpartidas`),
  KEY `partidas_idx` (`idPartidos`),
  CONSTRAINT `partidas` FOREIGN KEY (`idPartidos`) REFERENCES `mydb`.`partidos` (`idPartidos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partidas`
--

LOCK TABLES `partidas` WRITE;
/*!40000 ALTER TABLE `partidas` DISABLE KEYS */;
/*!40000 ALTER TABLE `partidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partidos`
--

DROP TABLE IF EXISTS `partidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partidos` (
  `idPartidos` int NOT NULL,
  `colorJug1` varchar(45) DEFAULT NULL,
  `colorJug2` varchar(45) DEFAULT NULL,
  `Partidoscol` varchar(45) DEFAULT NULL,
  `fecha_hora_inicio` time DEFAULT NULL,
  `fecha_hora_fin` time DEFAULT NULL,
  `id_manga` int DEFAULT NULL,
  `id_jug_torneo_manga1` varchar(45) DEFAULT NULL,
  `id_jug_torneo_manga2` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPartidos`),
  KEY `jug torn manga_idx` (`colorJug1`),
  KEY `jug torn manga 2_idx` (`colorJug2`),
  KEY `manga_idx` (`id_manga`),
  CONSTRAINT `jug torn manga` FOREIGN KEY (`colorJug1`) REFERENCES `mydb`.`jugadortorneomangas` (`idJugadorTorneoMangas`),
  CONSTRAINT `jug torn manga 2` FOREIGN KEY (`colorJug2`) REFERENCES `mydb`.`jugadortorneomangas` (`idJugadorTorneoMangas`),
  CONSTRAINT `manga` FOREIGN KEY (`id_manga`) REFERENCES `mydb`.`mangas` (`id_manga`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partidos`
--

LOCK TABLES `partidos` WRITE;
/*!40000 ALTER TABLE `partidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `partidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `periodistas`
--

DROP TABLE IF EXISTS `periodistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `periodistas` (
  `idPeriodista` varchar(45) NOT NULL,
  `idUsuario` varchar(45) DEFAULT NULL,
  `Aprobado` int NOT NULL,
  PRIMARY KEY (`idPeriodista`),
  KEY `usuario_idx` (`idUsuario`),
  CONSTRAINT `usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `mydb`.`usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodistas`
--

LOCK TABLES `periodistas` WRITE;
/*!40000 ALTER TABLE `periodistas` DISABLE KEYS */;
INSERT INTO `periodistas` VALUES ('1','1',0),('2','2',1);
/*!40000 ALTER TABLE `periodistas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `torneo`
--

DROP TABLE IF EXISTS `torneo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `torneo` (
  `idTorneo` varchar(45) NOT NULL,
  `codIngreso` int DEFAULT NULL,
  `puntuacion` int DEFAULT NULL,
  `fechaInicio` date DEFAULT NULL,
  `fechaFin` date DEFAULT NULL,
  `tiempoPartida` int DEFAULT NULL,
  `inicioInscrip` date DEFAULT NULL,
  `finInscrip` date DEFAULT NULL,
  `cantPartidas` int DEFAULT NULL,
  `horarios` int DEFAULT NULL,
  PRIMARY KEY (`idTorneo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `torneo`
--

LOCK TABLES `torneo` WRITE;
/*!40000 ALTER TABLE `torneo` DISABLE KEYS */;
/*!40000 ALTER TABLE `torneo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` varchar(45) NOT NULL,
  `nombreUsuario` varchar(45) DEFAULT NULL,
  `nombreCompleto` varchar(45) DEFAULT NULL,
  `mail` varchar(45) DEFAULT NULL,
  `ci` int NOT NULL,
  `celular` int DEFAULT NULL,
  `nacimiento` date DEFAULT NULL,
  `contraseña` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('1','Usuario 1','Nombre 1','asdf@gmail.com',1234567,123456789,'2000-12-25','contraseña1'),('2','Usuario 2','Nombre 2','zxcv@gmail.com',7654231,978765321,'2000-12-12','contraseña2'),('3','Usuario 3','Nombre 3','poiu@gmail.com',9674432,456423136,'2000-12-10','contraseña3'),('4','Usuario 4','Nombre 4','ghjk@gmail.com',735762465,745234123,'2000-12-23','contraseña4');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ajedrez'
--
/*!50003 DROP PROCEDURE IF EXISTS `datosJugador` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `datosJugador`()
BEGIN
select institucion,añoCurso,nombreUsuario,nombreCompleto,ci,rankingJugador,logros from Usuario,jugador where Usuario.idUsuario = jugador.idUsuario;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `datosNoticias` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `datosNoticias`()
BEGIN
	select idNoticia,titulo,nombreUsuario,contenido from noticia,periodistas where noticia.idPeriodista = periodistas.idPeriodista;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `datosPriodistas` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `datosPriodistas`()
BEGIN
	select idPeriodista,ci,nombreUsuario,mail,celular,Aprobado from Usuario,periodistas where Usuario.idUsuario = periodistas.idUsuario;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-24 14:18:59
