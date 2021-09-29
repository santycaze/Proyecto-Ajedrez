-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 179.27.156.47    Database: ajedrez
-- ------------------------------------------------------
-- Server version	8.0.26

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminsistema`
--

LOCK TABLES `adminsistema` WRITE;
/*!40000 ALTER TABLE `adminsistema` DISABLE KEYS */;
INSERT INTO `adminsistema` VALUES (1,1);
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
  PRIMARY KEY (`idestadisticas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
  `idJugador` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `rankingJugador` int DEFAULT NULL,
  `institucion` varchar(45) NOT NULL,
  `añoCurso` int NOT NULL,
  `contactoLiceo` int NOT NULL,
  `nombreDirector` varchar(45) NOT NULL,
  `mailDirector` varchar(45) NOT NULL,
  `logros` varchar(45) DEFAULT NULL,
  `nivelExperiencia` int DEFAULT NULL,
  `partidasJugadas` int DEFAULT NULL,
  PRIMARY KEY (`idJugador`),
  KEY `fkusuariojugador_idx` (`idUsuario`),
  CONSTRAINT `fkusuariojugador` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jugador`
--

LOCK TABLES `jugador` WRITE;
/*!40000 ALTER TABLE `jugador` DISABLE KEYS */;
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
  KEY `torneo_idx` (`idTorneo`),
  KEY `fknombreUsuario_idx` (`idJugador`),
  CONSTRAINT `fkjugadorJugadortorneo` FOREIGN KEY (`idJugador`) REFERENCES `jugador` (`idJugador`),
  CONSTRAINT `fkjugadortorn torneo` FOREIGN KEY (`idTorneo`) REFERENCES `torneo` (`idTorneo`)
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
  `idJugadorTorneoMangas` int NOT NULL AUTO_INCREMENT,
  `idJugadorTorneo` int NOT NULL,
  `id_manga` int NOT NULL,
  `id_jug_torneo_1` int NOT NULL,
  `id_jug_torneo_2` int NOT NULL,
  PRIMARY KEY (`idJugadorTorneoMangas`),
  KEY `jug torneo_idx` (`idJugadorTorneo`),
  KEY `mangas_idx` (`id_manga`),
  CONSTRAINT `DFAFDASDASDASD` FOREIGN KEY (`id_manga`) REFERENCES `mangas` (`id_manga`),
  CONSTRAINT `DSASADADSADA` FOREIGN KEY (`idJugadorTorneo`) REFERENCES `jugadortorneo` (`idJugadorTorneo`)
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
  `nombreManga` varchar(45) NOT NULL,
  `id_torneo` int NOT NULL,
  `fase` varchar(45) NOT NULL,
  PRIMARY KEY (`id_manga`),
  KEY `2torneo_idx` (`id_torneo`),
  CONSTRAINT `2torneo` FOREIGN KEY (`id_torneo`) REFERENCES `torneo` (`idTorneo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mangas`
--

LOCK TABLES `mangas` WRITE;
/*!40000 ALTER TABLE `mangas` DISABLE KEYS */;
INSERT INTO `mangas` VALUES (1,'grupo 1',1,'1');
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
  `idNoticia` int NOT NULL,
  `idPeriodista` int NOT NULL,
  `nombreUsuario` varchar(45) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `contenido` varchar(45) NOT NULL,
  PRIMARY KEY (`idNoticia`),
  KEY `fkperiodistanoticia_idx` (`idPeriodista`),
  CONSTRAINT `fkperiodistanoticia` FOREIGN KEY (`idPeriodista`) REFERENCES `periodistas` (`idPeriodista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
  KEY `fkpartidospartidas_idx` (`idPartidos`),
  CONSTRAINT `fkpartidospartidas` FOREIGN KEY (`idPartidos`) REFERENCES `partidos` (`idPartidos`)
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
  `idPartidos` int NOT NULL AUTO_INCREMENT,
  `colorJug1` int NOT NULL,
  `colorJug2` int NOT NULL,
  `fecha_hora_inicio` time DEFAULT NULL,
  `fecha_hora_fin` time DEFAULT NULL,
  `id_manga` int DEFAULT NULL,
  `jugador1` varchar(45) NOT NULL,
  `jugador2` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idPartidos`),
  KEY `fkmangapartidos_idx` (`id_manga`),
  KEY `fkjugadortorneomanga1partidos_idx` (`jugador1`),
  KEY `fkjugadortorneomanga2partidos_idx` (`jugador2`),
  CONSTRAINT `fkmangapartidos` FOREIGN KEY (`id_manga`) REFERENCES `mangas` (`id_manga`)
) ENGINE=InnoDB AUTO_INCREMENT=237 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partidos`
--

LOCK TABLES `partidos` WRITE;
/*!40000 ALTER TABLE `partidos` DISABLE KEYS */;
INSERT INTO `partidos` VALUES (204,0,1,NULL,NULL,NULL,'Firpo','pulga'),(205,0,1,NULL,NULL,NULL,'Firpo','pulga'),(206,0,1,NULL,NULL,NULL,'root','Firpo'),(207,0,1,NULL,NULL,NULL,'root','Firpo'),(208,0,1,NULL,NULL,NULL,'root','Firpo'),(209,0,1,NULL,NULL,NULL,'root','Firpo'),(210,0,1,NULL,NULL,NULL,'root','Firpo'),(211,0,1,NULL,NULL,NULL,'root','Firpo'),(212,0,1,NULL,NULL,NULL,'root','Firpo'),(213,0,1,NULL,NULL,NULL,'root','Firpo'),(214,0,1,NULL,NULL,NULL,'root','Firpo'),(215,0,1,NULL,NULL,NULL,'root','Firpo'),(216,0,1,NULL,NULL,NULL,'Firpo','root'),(217,0,1,NULL,NULL,NULL,'Firpo','root'),(218,0,1,NULL,NULL,NULL,'root','Firpo'),(219,0,1,NULL,NULL,NULL,'root','Firpo'),(220,0,1,NULL,NULL,NULL,'root','Firpo'),(221,0,1,NULL,NULL,NULL,'Firpo','root'),(222,0,1,NULL,NULL,NULL,'root','Firpo'),(223,0,1,NULL,NULL,NULL,'root','Firpo'),(224,0,1,NULL,NULL,NULL,'Firpo','root'),(225,0,1,NULL,NULL,NULL,'root','Firpo'),(226,0,1,NULL,NULL,NULL,'root','Firpo'),(227,0,1,NULL,NULL,NULL,'root','Firpo'),(228,0,1,NULL,NULL,NULL,'Firpo','root'),(229,0,1,NULL,NULL,NULL,'Firpo','root'),(230,0,1,NULL,NULL,NULL,'root','Firpo'),(231,0,1,NULL,NULL,NULL,'root','Firpo'),(232,0,1,NULL,NULL,NULL,'root','Firpo'),(233,0,1,NULL,NULL,NULL,'root','Firpo'),(234,0,1,NULL,NULL,NULL,'MateDePure','Firpo'),(235,0,1,NULL,NULL,NULL,'MateDePure','Firpo'),(236,0,1,NULL,NULL,NULL,'MateDePure','Firpo');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodistas`
--

LOCK TABLES `periodistas` WRITE;
/*!40000 ALTER TABLE `periodistas` DISABLE KEYS */;
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
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `tiempoPartida` time NOT NULL,
  `inicioInscrip` date NOT NULL,
  `finInscrip` date NOT NULL,
  `cantPartidas` int NOT NULL,
  `horarios` time NOT NULL,
  `nombreTorneo` varchar(45) NOT NULL,
  `maxParticipantes` int NOT NULL,
  `tiempoMaxPartida` time NOT NULL,
  `tiempoMovida` time NOT NULL,
  `nombreTrofeo` varchar(45) NOT NULL,
  `partidasJuego` int NOT NULL,
  PRIMARY KEY (`idTorneo`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `torneo`
--

LOCK TABLES `torneo` WRITE;
/*!40000 ALTER TABLE `torneo` DISABLE KEYS */;
INSERT INTO `torneo` VALUES (1,1122,'2021-08-21','2021-08-30','00:10:00','2021-08-15','2021-08-19',10,'00:00:00','joan gamper',10,'00:10:00','00:02:00','joan gamper',2),(12,1234,'2021-09-25','2021-09-30','00:10:36','2021-09-02','2021-09-23',12,'00:02:34','sdf',12,'00:01:34','00:02:34','dsfjlh',12),(13,1234,'2021-09-14','2021-09-17','00:00:35','2021-09-01','2021-09-03',4,'00:01:36','Manuel',12,'00:10:37','00:10:40','Manuel',5);
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
  `iconoUsuario` varchar(45) DEFAULT NULL,
  `tipoUsuario` int NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Firpo','Nombre1','medicenfirpito@gmail.com',12345678,123456789,'2003-05-10','dc76e9f0c0006e8f919e0c515c66dbba3982f785','Apellido1 Apellido2','../Proyecto-Ajedrez/IMG/Icono13.png',1),(2,'Prueba-Demo','Nombre2','mail2@gmail.com',12345678,123456789,'2003-05-10','dc76e9f0c0006e8f919e0c515c66dbba3982f785','Apellido1 Apellido2','../Proyecto-Ajedrez/IMG/Icono16.png',1),(3,'pulga','Nombre3','mail3@gmail.com',12345678,123456789,'2003-05-10','dc76e9f0c0006e8f919e0c515c66dbba3982f785','Apellido1 Apellido2','../Proyecto-Ajedrez/IMG/iconoPulga.png',1),(4,'root','Nombre4','mail4@gmail.com',12345678,123456789,'2003-05-10','dc76e9f0c0006e8f919e0c515c66dbba3982f785','Apellido1 Apellido2','../Proyecto-Ajedrez/IMG/Icono3.png',3),(5,'Usuario5','Nombre5','mail5@gmail.com',12345678,123456789,'2003-05-10','7c4a8d09ca3762af61e59520943dc26494f8941b','Apellido1 Apellido2','../Proyecto-Ajedrez/IMG/Icono5.png',1),(6,'Usuario6','Nombre6','mail6@gmail.com',12345678,123456789,'2003-05-10','7c4a8d09ca3762af61e59520943dc26494f8941b','Apellido1 Apellido2','../Proyecto-Ajedrez/IMG/Icono5.png',1),(7,'Usuario7','Nombre7','mail7@gmail.com',12345678,123456789,'2003-05-10','7c4a8d09ca3762af61e59520943dc26494f8941b','Apellido1 Apellido2','../Proyecto-Ajedrez/IMG/Icono5.png',1),(8,'Usuario8','Nombre8','mail8@gmail.com',12345678,123456789,'2003-05-10','7c4a8d09ca3762af61e59520943dc26494f8941b','Apellido1 Apellido2','../Proyecto-Ajedrez/IMG/Icono5.png',1),(9,'Usuario9','Nombre9','mail9@gmail.com',12345678,123456789,'2003-05-10','7c4a8d09ca3762af61e59520943dc26494f8941b','Apellido1 Apellido2','../Proyecto-Ajedrez/IMG/Icono5.png',1),(62,'jugador','Manuel','eakike94@gmail.com',56132732,92614110,'2002-12-12','f7cf8db28a2ef77218575dd70589cc169d38b406','Alonso','../Proyecto-Ajedrez/IMG/Icono17.png',1);
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `cambiarContra`(usr varchar(45), contraNueva varchar(45))
BEGIN
update usuario set contra = contraNueva where nombreUsuario = usr;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `cambiarIcono` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`8bittech`@`%` PROCEDURE `cambiarIcono`(nombreusr varchar(45), iconoNuevo varchar(45))
BEGIN
update usuario set  iconoUsuario= iconoNuevo where nombreUsuario = nombreusr;
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
/*!50003 DROP PROCEDURE IF EXISTS `crearPartido` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`8bittech`@`%` PROCEDURE `crearPartido`( colorJug1 int , colorJug2 int , fecha_hora_inicio time , fecha_hora_fin time , id_manga int , Jug1 varchar(45) , Jug2 varchar(45))
BEGIN
insert into partidos (colorJug1  , colorJug2  , fecha_hora_inicio  , fecha_hora_fin  , id_manga  , jugador1  , jugador2 )
values ( colorJug1  , colorJug2  , fecha_hora_inicio  , fecha_hora_fin  , id_manga  , Jug1  , Jug2 );
select nombreUsuario,iconoUsuario,colorJug1,colorJug2 from usuario,partidos where nombreUsuario = Jug1 or nombreUsuario = Jug2;
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `crearTorneo`(nomTorneo varchar(45), codingreso int, inicioIns date, finIns date, fechaIni date, fechaF date, tiempopartida time, maxPart int, tiempoMaxPart time, cantPartidas int, horarios time, tiempoMov time, nomTrofeo varchar(45), partJuego int)
BEGIN
insert into torneo (nombreTorneo, codingreso ,  inicioInscrip , finInscrip , fechaInicio , fechaFin ,tiempopartida, maxParticipantes , tiempoMaxPartida , cantPartidas, horarios,tiempoMovida , nombreTrofeo, partidasJuego)
values (nomTorneo , codingreso , inicioIns , finIns , fechaIni , fechaF , tiempopartida, maxPart , tiempoMaxPart ,cantPartidas, horarios, tiempoMov , nomTrofeo, partJuego);
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
select nombreUsuario,nombre,mail,ci,apellidos,celular,nacimiento,tipoUsuario,iconoUsuario,institucion,añoCurso,contactoLiceo,nombreDirector,mailDirector from Usuario,jugador where Usuario.idUsuario = jugador.idUsuario;
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
/*!50003 DROP PROCEDURE IF EXISTS `datosPartidos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`8bittech`@`%` PROCEDURE `datosPartidos`()
BEGIN
select idPartidos, colorJug1, colorJug2, jugador1, jugador2 from partidos;
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
select nombreTorneo, fechafin, maxParticipantes, tiempoPartida,partidasJuego,tiempoMaxPartida,tiempoMovida,nombreTrofeo from torneo;
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `EliminarJugador`(usr varchar(45))
BEGIN
DELETE FROM usuario WHERE nombreUsuario = usr;
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
/*!50003 DROP PROCEDURE IF EXISTS `guardaMovimientos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`8bittech`@`%` PROCEDURE `guardaMovimientos`(idMovimientos int , lugarAnterior varchar (45), lugarActual varchar (45), lugarComer varchar(45), tiempo_movida int)
BEGIN
insert into movimientos (idMovimientos, lugarAnterior, lugarActual,lugarComer, tiempo_movida)
values (idMovimientos, lugarAnterior, lugarActual,lugarComer, tiempo_movida);
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
select NombreUsuario,contra,iconoUsuario,tipoUsuario from Usuario where NombreUsuario=nombre_usuario and contra=contraseña;
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
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `register`(nombre_usuario varchar(45), email varchar(45), Telefono int, contraseña varchar(45),Apellidos varchar(45), Ci int, tipousuario int, nombre varchar(45), fnac varchar(45) ,institucion varchar (45) ,añoCurso int ,in conctactoLiceo2 int , nombreDirector varchar (45), mailDirector varchar (45),icono varchar(45))
BEGIN
declare s varchar(22);
declare idUsuarioGuardar int;
if (exists(select idUsuario from usuario where nombreUsuario=nombre_usuario))
 then select null;
else
    insert into usuario(`nombreUsuario` , `mail` , `celular` , `contra` ,`apellidos`, `ci`,`nombre`,`nacimiento`,`tipoUsuario`,`iconoUsuario` )
    values(nombre_usuario,email,telefono,contraseña,apellidos,ci,nombre,fnac,tipousuario,icono);
	set @idUsuarioGuardar :=(select idUsuario from usuario where nombreUsuario = nombre_usuario);
    
    insert into jugador(`idUsuario`, `institucion` ,`añoCurso` ,`contactoLiceo`, `nombreDirector`,`mailDirector`)
    values(@idUsuarioGuardar ,institucion ,añoCurso ,conctactoLiceo2, nombreDirector, mailDirector);
   select nombre_usuario;
    end if ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `unirseTorneo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`8bittech`@`%` PROCEDURE `unirseTorneo`()
BEGIN
insert into jugadortorneo (idJugadorTorneo, idJugador, idTorneo )
values (idJugadorTorneo, idJugador, idTorneo );
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

-- Dump completed on 2021-09-29 11:28:42
