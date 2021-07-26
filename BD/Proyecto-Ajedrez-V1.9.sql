-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: ajedrez
-- ------------------------------------------------------
-- Server version	8.0.23

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
  `idAdmin` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  PRIMARY KEY (`idAdmin`),
  KEY `usuario_idx` (`idUsuario`),
  CONSTRAINT `fkusuarioadminsis` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminsistema`
--

LOCK TABLES `adminsistema` WRITE;
/*!40000 ALTER TABLE `adminsistema` DISABLE KEYS */;
/*!40000 ALTER TABLE `adminsistema` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadisticas`
--

DROP TABLE IF EXISTS `estadisticas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadisticas` (
  `idestadisticas` int NOT NULL AUTO_INCREMENT,
  `adversario` varchar(45) NOT NULL,
  `resultadoPartido` varchar(45) NOT NULL,
  `idpartidos` int NOT NULL,
  PRIMARY KEY (`idestadisticas`),
  KEY `fkpartidosEstadisticas_idx` (`idpartidos`),
  CONSTRAINT `fkpartidosEstadisticas` FOREIGN KEY (`idpartidos`) REFERENCES `partidos` (`id_jug_torneo_manga2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadisticas`
--

LOCK TABLES `estadisticas` WRITE;
/*!40000 ALTER TABLE `estadisticas` DISABLE KEYS */;
/*!40000 ALTER TABLE `estadisticas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fichas`
--

DROP TABLE IF EXISTS `fichas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fichas` (
  `idFichas` int NOT NULL AUTO_INCREMENT,
  `imagen` varchar(45) NOT NULL,
  `color` varchar(45) NOT NULL,
  `idpartidas` int NOT NULL,
  PRIMARY KEY (`idFichas`),
  KEY `fkfichaspartidas_idx` (`idpartidas`),
  CONSTRAINT `fkfichaspartidas` FOREIGN KEY (`idpartidas`) REFERENCES `partidas` (`idpartidas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `idfichas_comidas` int NOT NULL AUTO_INCREMENT,
  `id_partidas` int NOT NULL,
  `id_fichas` int NOT NULL,
  `id_movimientos` int NOT NULL,
  PRIMARY KEY (`idfichas_comidas`),
  KEY `fichas_idx` (`id_fichas`),
  KEY `fkfichascomidasmovimientos_idx` (`id_movimientos`),
  KEY `fkfichascomidaspartidaas_idx` (`id_partidas`),
  CONSTRAINT `fkfichascomidasmovimientos` FOREIGN KEY (`id_movimientos`) REFERENCES `movimientos` (`idMovimientos`),
  CONSTRAINT `fkfichascomidaspartidaas` FOREIGN KEY (`id_partidas`) REFERENCES `partidas` (`idpartidas`),
  CONSTRAINT `fkfichasfichas_comidas` FOREIGN KEY (`id_fichas`) REFERENCES `fichas` (`idFichas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `idJugador` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `rankingJugador` int NOT NULL,
  `institucion` varchar(45) NOT NULL,
  `añoCurso` int NOT NULL,
  `contactoLiceo` int NOT NULL,
  `nombreDirector` varchar(45) NOT NULL,
  `mailDirector` varchar(45) NOT NULL,
  `logros` varchar(45) NOT NULL,
  PRIMARY KEY (`idJugador`),
  KEY `fkusuariojugador_idx` (`idUsuario`),
  CONSTRAINT `fkusuariojugador` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jugador`
--

LOCK TABLES `jugador` WRITE;
/*!40000 ALTER TABLE `jugador` DISABLE KEYS */;
INSERT INTO `jugador` VALUES (1,4,1,'IEP',3,123456789,'Nombre director1','maildir1@gmail.com','0'),(2,5,2,'IEP',4,123456789,'Nombre director2','maildir2@gmail.com','0'),(3,7,3,'IEP',2,123456789,'Nombre director3','maildir3@gmail.com','0'),(4,9,4,'IEP',4,123456789,'Nombre director4','maildir4@gmail.com','1');
/*!40000 ALTER TABLE `jugador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jugadortorneo`
--

DROP TABLE IF EXISTS `jugadortorneo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jugadortorneo` (
  `idJugadorTorneo` int NOT NULL AUTO_INCREMENT,
  `idJugador` int NOT NULL,
  `idTorneo` int NOT NULL,
  PRIMARY KEY (`idJugadorTorneo`),
  KEY `jugador_idx` (`idJugador`),
  KEY `torneo_idx` (`idTorneo`),
  CONSTRAINT `fkjugador` FOREIGN KEY (`idJugador`) REFERENCES `jugador` (`idJugador`),
  CONSTRAINT `fkjugadortorn torneo` FOREIGN KEY (`idTorneo`) REFERENCES `torneo` (`idTorneo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `idJugadorTorneoMangas` int NOT NULL AUTO_INCREMENT,
  `idJugadorTorneo` int NOT NULL,
  `id_manga` int NOT NULL,
  PRIMARY KEY (`idJugadorTorneoMangas`),
  KEY `jug torneo_idx` (`idJugadorTorneo`),
  KEY `mangas_idx` (`id_manga`),
  CONSTRAINT `DFAFDASDASDASD` FOREIGN KEY (`id_manga`) REFERENCES `mangas` (`id_manga`),
  CONSTRAINT `DSASADADSADA` FOREIGN KEY (`idJugadorTorneo`) REFERENCES `jugadortorneo` (`idJugadorTorneo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `nombreManga` varchar(45) NOT NULL,
  `id_torneo` int NOT NULL,
  `fase` varchar(45) NOT NULL,
  PRIMARY KEY (`id_manga`),
  KEY `2torneo_idx` (`id_torneo`),
  CONSTRAINT `2torneo` FOREIGN KEY (`id_torneo`) REFERENCES `torneo` (`idTorneo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `lugarAnterior` varchar(45) NOT NULL,
  `lugarActual` varchar(45) NOT NULL,
  `lugarComer` varchar(45) NOT NULL,
  `tiempo_movida` int NOT NULL,
  `idpartidas` int NOT NULL,
  PRIMARY KEY (`idMovimientos`),
  KEY `Fkpartidasmovimientos_idx` (`idpartidas`),
  CONSTRAINT `Fkpartidasmovimientos` FOREIGN KEY (`idpartidas`) REFERENCES `partidas` (`idpartidas`),
  CONSTRAINT `partidas22` FOREIGN KEY (`idpartidas`) REFERENCES `mydb`.`partidas` (`idpartidas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `idNoticia` int NOT NULL,
  `idPeriodista` int NOT NULL,
  `nombreUsuario` varchar(45) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `contenido` varchar(45) NOT NULL,
  PRIMARY KEY (`idNoticia`),
  KEY `fkperiodistanoticia_idx` (`idPeriodista`),
  CONSTRAINT `fkperiodistanoticia` FOREIGN KEY (`idPeriodista`) REFERENCES `periodistas` (`idPeriodista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noticia`
--

LOCK TABLES `noticia` WRITE;
/*!40000 ALTER TABLE `noticia` DISABLE KEYS */;
/*!40000 ALTER TABLE `noticia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partidas`
--

DROP TABLE IF EXISTS `partidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partidas` (
  `idpartidas` int NOT NULL AUTO_INCREMENT,
  `fechayhora_inicio` varchar(45) NOT NULL,
  `fechayhora_fin` varchar(45) NOT NULL,
  `idPartidos` int NOT NULL,
  PRIMARY KEY (`idpartidas`),
  KEY `partidas_idx` (`idPartidos`),
  CONSTRAINT `fkpartidospartidas` FOREIGN KEY (`idPartidos`) REFERENCES `partidos` (`idPartidos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `colorJug1` varchar(45) NOT NULL,
  `colorJug2` varchar(45) NOT NULL,
  `Partidoscol` varchar(45) NOT NULL,
  `fecha_hora_inicio` time NOT NULL,
  `fecha_hora_fin` time NOT NULL,
  `id_manga` int NOT NULL,
  `id_jug_torneo_manga1` int NOT NULL,
  `id_jug_torneo_manga2` int NOT NULL,
  PRIMARY KEY (`idPartidos`),
  KEY `jug torn manga_idx` (`id_jug_torneo_manga1`),
  KEY `jug torn manga 2_idx` (`id_jug_torneo_manga2`),
  KEY `fkmangapartidos_idx` (`id_manga`),
  CONSTRAINT `fkjugadortorneomanga1partidos` FOREIGN KEY (`id_jug_torneo_manga1`) REFERENCES `jugadortorneomangas` (`idJugadorTorneoMangas`),
  CONSTRAINT `fkjugadortorneomanga2partidos` FOREIGN KEY (`id_jug_torneo_manga2`) REFERENCES `jugadortorneomangas` (`idJugadorTorneoMangas`),
  CONSTRAINT `fkmangapartidos` FOREIGN KEY (`id_manga`) REFERENCES `mangas` (`id_manga`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `idPeriodista` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `Aprobado` int DEFAULT NULL,
  PRIMARY KEY (`idPeriodista`),
  KEY `usuario_idx` (`idUsuario`),
  CONSTRAINT `fkusuarioperiodista` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodistas`
--

LOCK TABLES `periodistas` WRITE;
/*!40000 ALTER TABLE `periodistas` DISABLE KEYS */;
INSERT INTO `periodistas` VALUES (1,6,1),(2,3,1),(3,8,0);
/*!40000 ALTER TABLE `periodistas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitudescontra`
--

DROP TABLE IF EXISTS `solicitudescontra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitudescontra` (
  `idSolicitudesContra` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  PRIMARY KEY (`idSolicitudesContra`),
  KEY `FKidusuariosolicitudescontra_idx` (`idUsuario`),
  CONSTRAINT `FKidusuariosolicitudescontra` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitudescontra`
--

LOCK TABLES `solicitudescontra` WRITE;
/*!40000 ALTER TABLE `solicitudescontra` DISABLE KEYS */;
/*!40000 ALTER TABLE `solicitudescontra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `torneo`
--

DROP TABLE IF EXISTS `torneo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `torneo` (
  `idTorneo` int NOT NULL AUTO_INCREMENT,
  `codIngreso` int NOT NULL,
  `puntuacion` int NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `tiempoPartida` time NOT NULL,
  `inicioInscrip` date NOT NULL,
  `finInscrip` date NOT NULL,
  `cantPartidas` int NOT NULL,
  `horarios` int NOT NULL,
  `nombreTorneo` varchar(45) NOT NULL,
  `maxParticipantes` int NOT NULL,
  `tiempoMaxPartida` time NOT NULL,
  `tiempoMovida` time NOT NULL,
  `nombreTrofeo` varchar(45) NOT NULL,
  `partidasJuego` int NOT NULL,
  PRIMARY KEY (`idTorneo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nombreUsuario` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `mail` varchar(45) NOT NULL,
  `ci` int NOT NULL,
  `celular` int NOT NULL,
  `nacimiento` varchar(45) NOT NULL,
  `contra` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `iconoUsuario` varchar(45) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Firpo','Nombre1','medicenfirpito@gmail.com',12345678,123456789,'2003-05-10','root','Apellido1 Apellido2',''),(2,'Larry','Nombre2','mail2@gmail.com',12345678,123456789,'2003-05-10','root','Apellido1 Apellido2',''),(3,'santy','Nombre3','mail3@gmail.com',12345678,123456789,'2003-05-10','root','Apellido1 Apellido2',''),(4,'Usuario4','Nombre4','mail4@gmail.com',12345678,123456789,'2003-05-10','C0ntr4s3ña4','Apellido1 Apellido2',''),(5,'Usuario5','Nombre5','mail5@gmail.com',12345678,123456789,'2003-05-10','C0ntr4s3ña5','Apellido1 Apellido2',''),(6,'Usuario6','Nombre6','mail6@gmail.com',12345678,123456789,'2003-05-10','C0ntr4s3ña6','Apellido1 Apellido2',''),(7,'Usuario7','Nombre7','mail7@gmail.com',12345678,123456789,'2003-05-10','C0ntr4s3ña7','Apellido1 Apellido2',''),(8,'Usuario8','Nombre8','mail8@gmail.com',12345678,123456789,'2003-05-10','C0ntr4s3ña8','Apellido1 Apellido2',''),(9,'Usuario9','Nombre9','mail9@gmail.com',12345678,123456789,'2003-05-10','C0ntr4s3ña9','Apellido1 Apellido2','');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ajedrez'
--
/*!50003 DROP PROCEDURE IF EXISTS `Aprobar` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Aprobar`(idPer varchar(45))
BEGIN
update periodistas set aprobado = 1 where idPeriodista = idPer;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `cambiarContra` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `cambiarContra`(contraActual varchar(45), contraNueva varchar(45))
BEGIN
update usuario set contraActual = contraNueva where contraNueva = contraActual;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `cambiarUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `cambiarUsuario`(nombreActual varchar(45), nuevoNombre varchar(45))
BEGIN
update usuario set nombreUsuario = nuevoNombre where nombreUsuario = nombreActual;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `crearTorneo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `crearTorneo`(nomTorneo varchar(45), inicioIns date, finIns date, fechaIni date, fechaF date, maxPart int, tiempoMaxPart time, tiempoMov time, nomTrofeo varchar(45), partJuego int)
BEGIN
insert into torneo (nombreTorneo , inicioInscrip , finInscrip , fechaInicio , fechaFin , maxParticipantes , tiempoMaxPartida , tiempoMovida , nombreTrofeo, partidasJuego)
values (nomTorneo , inicioIns , finIns , fechaIni , fechaF , maxPart , tiempoMaxPart , tiempoMov , nomTrofeo, partJuego);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `datosJugador` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `datosJugador`()
BEGIN
select idJugador,institucion,añoCurso,nombreUsuario,nombre,ci,rankingJugador,logros from Usuario,jugador where Usuario.idUsuario = jugador.idUsuario;
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
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
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
/*!50003 DROP PROCEDURE IF EXISTS `datosTorneo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `datosTorneo`()
BEGIN
select nombreTorneo, finTorneo, maxParticipantes, maxPartidas,partidasJuego,tiempoMaxPartida,tiempoMovida,nombreTrofeo from torneo;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `EliminarJugador` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `EliminarJugador`(idJ varchar(45))
BEGIN
DELETE FROM jugador WHERE idJugador = idJ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `EliminarPeriodistas` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `EliminarPeriodistas`(idP varchar(45))
BEGIN
DELETE FROM periodistas WHERE idperiodista = idP;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `login` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `login`(nombre_usuario varchar(45) , contraseña varchar(45))
BEGIN
select `NombreUsuario` from `Usuario` where `NombreUsuario`=`nombre_usuario`;
select `Password` from `Usuario` where `Password`=`contraseña`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Passwd` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Passwd`()
BEGIN
select contraseña,nombreUsuario from usuario;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `register` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `register`(nombre_usuario varchar(45), email varchar(45), Telefono int, contraseña varchar(45),Apellidos varchar(45), Ci int, tipousuario int)
BEGIN
declare s varchar(22);
if (exists(select idUsuario from usuario where nombreUsuario=nombre_usuario))
 then select null;
else
    insert into Usuarios(`nombre_usuario` , `email` , `Telefono` , `contraseña` ,`Apellidos` , `Ci`, `tipousuario`)
    values(NombreUsuario,email,telefono,contraseña,apellidos,ci,Tipousuario);
   select nombre_usuario;
    end if ;
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

-- Dump completed on 2021-07-26 19:37:03
