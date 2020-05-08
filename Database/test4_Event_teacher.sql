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
-- Table structure for table `Event_teacher`
--

DROP TABLE IF EXISTS `Event_teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Event_teacher` (
  `Event_id` int(11) NOT NULL,
  `Dapartment_Teacher_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `fk_Event_teacher_Event1_idx` (`Event_id`),
  KEY `fk_Event_teacher_Dapartment_Teacher1_idx` (`Dapartment_Teacher_id`),
  CONSTRAINT `fk_Event_teacher_Dapartment_Teacher1` FOREIGN KEY (`Dapartment_Teacher_id`) REFERENCES `Department_Teacher` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Event_teacher_Event1` FOREIGN KEY (`Event_id`) REFERENCES `Opened_course_event` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=814 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Event_teacher`
--

LOCK TABLES `Event_teacher` WRITE;
/*!40000 ALTER TABLE `Event_teacher` DISABLE KEYS */;
INSERT INTO `Event_teacher` VALUES (551,1,784),(552,1,785),(553,2,786),(553,10,787),(554,10,788),(555,3,789),(555,10,790),(556,6,791),(556,8,792),(557,6,793),(557,8,794),(558,2,795),(559,2,796),(560,3,797),(561,6,798),(561,8,799),(562,3,800),(563,1,801),(564,2,802),(565,2,803),(566,1,804),(567,1,805),(567,8,806),(568,3,807),(569,2,808),(570,1,809),(571,8,810),(571,6,811),(572,8,812),(570,8,813);
/*!40000 ALTER TABLE `Event_teacher` ENABLE KEYS */;
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
