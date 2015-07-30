-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 30, 2015 at 09:20 AM
-- Server version: 5.6.25
-- PHP Version: 5.6.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `formData`
--

-- --------------------------------------------------------

--
-- Table structure for table `interest`
--

CREATE TABLE IF NOT EXISTS `interest` (
  `id` varchar(3) NOT NULL,
  `email` varchar(30) NOT NULL,
  `interest` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `interest`
--

INSERT INTO `interest` (`id`, `email`, `interest`) VALUES
('0', 'kingshuk@fusioncharts.com', 'movie'),
('1', 'kingshuk@fusioncharts.com', 'reading'),
('2', 'kingshuk@fusioncharts.com', 'hockey'),
('0', 'sayan@fc.com', 'sports'),
('1', 'sayan@fc.com', 'movie'),
('2', 'sayan@fc.com', 'reading');

-- --------------------------------------------------------

--
-- Table structure for table `primaryTable`
--

CREATE TABLE IF NOT EXISTS `primaryTable` (
  `name` text NOT NULL,
  `email` varchar(30) NOT NULL,
  `phnum` varchar(10) NOT NULL,
  `sex` text NOT NULL,
  `country` text NOT NULL,
  `state` text NOT NULL,
  `address` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `primaryTable`
--

INSERT INTO `primaryTable` (`name`, `email`, `phnum`, `sex`, `country`, `state`, `address`) VALUES
('kingshuk', 'kingshuk@fusioncharts.com', '1212121212', 'female', 'india', 'Delhi', 'kestopur'),
('sayan', 'sayan@fc.com', '1212121', 'female', 'usa', 'Florida', 'garia');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `interest`
--
ALTER TABLE `interest`
  ADD KEY `email` (`email`);

--
-- Indexes for table `primaryTable`
--
ALTER TABLE `primaryTable`
  ADD PRIMARY KEY (`email`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `interest`
--
ALTER TABLE `interest`
  ADD CONSTRAINT `interest_ibfk_1` FOREIGN KEY (`email`) REFERENCES `primaryTable` (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
