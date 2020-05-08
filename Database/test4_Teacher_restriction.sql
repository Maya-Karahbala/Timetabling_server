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
-- Table structure for table `Teacher_restriction`
--

DROP TABLE IF EXISTS `Teacher_restriction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Teacher_restriction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `starting_hour` datetime DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `Teacher_id` int(11) NOT NULL,
  `Semester_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Teacher_restriction_Teacher1_idx` (`Teacher_id`),
  KEY `fk_Teacher_restriction_Semester1_idx` (`Semester_id`),
  CONSTRAINT `fk_Teacher_restriction_Semester1` FOREIGN KEY (`Semester_id`) REFERENCES `Semester` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Teacher_restriction_Teacher1` FOREIGN KEY (`Teacher_id`) REFERENCES `Teacher` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teacher_restriction`
--

LOCK TABLES `Teacher_restriction` WRITE;
/*!40000 ALTER TABLE `Teacher_restriction` DISABLE KEYS */;
INSERT INTO `Teacher_restriction` VALUES (130,'2020-01-13 06:00:00',600,1,34),(131,'2020-01-14 06:00:00',600,2,34),(132,'2020-01-15 06:00:00',600,3,34),(133,'2020-01-13 06:00:00',600,4,34),(134,'2020-01-16 06:00:00',600,4,34),(135,'2020-01-17 06:00:00',600,5,34),(136,'2020-01-17 06:00:00',600,6,34);
/*!40000 ALTER TABLE `Teacher_restriction` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-08 16:51:13
