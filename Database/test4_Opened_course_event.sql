CREATE DATABASE  IF NOT EXISTS `test4` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `test4`;
-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: test4
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Opened_course_event`
--

DROP TABLE IF EXISTS `Opened_course_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Opened_course_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event_type` varchar(45) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `starting_hour` datetime DEFAULT NULL,
  `event_date` date DEFAULT NULL,
  `student_number` int(11) DEFAULT NULL,
  `Opened_course_id` int(11) DEFAULT NULL,
  `timetable_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Event_Opened_course1_idx` (`Opened_course_id`),
  KEY `fk_Opened_course_event_1_idx` (`timetable_id`),
  CONSTRAINT `fk_Event_Opened_course1` FOREIGN KEY (`Opened_course_id`) REFERENCES `Opened_course` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Opened_course_event_1` FOREIGN KEY (`timetable_id`) REFERENCES `Timetable` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=404 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Opened_course_event`
--

LOCK TABLES `Opened_course_event` WRITE;
/*!40000 ALTER TABLE `Opened_course_event` DISABLE KEYS */;
INSERT INTO `Opened_course_event` VALUES (393,'Teorik',180,'2001-02-01 07:00:00','2020-01-09',30,238,113),(394,'Lab',120,'2001-02-01 13:00:00','2020-01-09',30,238,113),(395,'Lab',120,'2001-02-01 13:00:00','2020-01-10',30,238,113),(396,'Lab',120,'2001-02-01 10:00:00','2020-01-10',36,239,113),(397,'Teorik',180,'2001-02-01 07:00:00','2020-01-06',30,239,113),(398,'Teorik',180,'2001-02-01 10:00:00','2020-01-08',30,240,113),(399,'Teorik',180,'2001-02-01 13:00:00','2020-01-06',30,241,113),(400,NULL,120,'2001-02-01 08:00:00','2020-03-03',70,239,114),(401,NULL,120,'2001-02-01 10:00:00','2020-03-01',60,238,114),(402,NULL,120,'2001-02-01 07:00:00','2020-03-04',40,240,114),(403,NULL,120,'2001-02-01 13:00:00','2020-03-01',90,241,114);
/*!40000 ALTER TABLE `Opened_course_event` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-19 19:56:54
