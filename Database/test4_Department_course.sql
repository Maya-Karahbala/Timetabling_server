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
-- Table structure for table `Department_course`
--

DROP TABLE IF EXISTS `Department_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Department_course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL,
  `Department_id` int(11) NOT NULL,
  `lab_duration` int(11) NOT NULL,
  `teori_duration` int(11) NOT NULL,
  `semester_no` int(11) NOT NULL,
  `classroom_type` varchar(45) DEFAULT NULL,
  `event_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Department_course_Course_idx` (`course_id`),
  KEY `fk_Department_course_Department1_idx` (`Department_id`),
  CONSTRAINT `fk_Department_course_Course` FOREIGN KEY (`course_id`) REFERENCES `Course` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Department_course_Department1` FOREIGN KEY (`Department_id`) REFERENCES `Department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Department_course`
--

LOCK TABLES `Department_course` WRITE;
/*!40000 ALTER TABLE `Department_course` DISABLE KEYS */;
INSERT INTO `Department_course` VALUES (1,1,1,120,180,2,'computer lab','Lab'),(2,2,1,120,180,4,NULL,NULL),(3,3,1,120,180,4,NULL,NULL),(4,3,2,120,180,4,NULL,NULL),(5,4,1,120,180,1,'computer lab','All'),(6,5,1,120,180,8,NULL,NULL),(7,6,1,120,180,8,NULL,NULL),(8,2,2,120,180,4,NULL,NULL);
/*!40000 ALTER TABLE `Department_course` ENABLE KEYS */;
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
